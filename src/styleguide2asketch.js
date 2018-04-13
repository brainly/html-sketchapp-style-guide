import Document from '@brainly/html-sketchapp/html2asketch/document.js';
import Page from '@brainly/html-sketchapp/html2asketch/page.js';
import Text from '@brainly/html-sketchapp/html2asketch/text.js';
import SymbolMaster from '@brainly/html-sketchapp/html2asketch/symbolMaster.js';
import nodeToSketchLayers from '@brainly/html-sketchapp/html2asketch/nodeToSketchLayers.js';

function bemClassToText(bemClass) {
  return bemClass.replace('sg-', '').replace('-', ' ');
}

function buildLayerNameFromBEM(classes) {
  const mainClass = classes[0];

  if (mainClass) {
    // if node is an element (bEm)
    if (mainClass.indexOf('__') > -1) {
      return mainClass.replace(/^[a-z-]+__/, '');
    } else { // if node is a block (Bem)
      return bemClassToText(mainClass);
    }
  }

  return 'text';
}

export async function getASketchPage() {
  const stylesheet = document.querySelector('head > link');
  let styleGuideVersion = '';

  if (stylesheet) {
    styleGuideVersion = stylesheet.href.match(/\/([0-9]+\.[0-9]+\.[0-9]+)\//)[1];
  }

  const page = new Page({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight
  });

  page.setName(`Brainly Style Guide ${styleGuideVersion}`);

  // SYMBOLS
  const symbolPromises = Array.from(document.querySelectorAll('section > .item, section > .inline-item'))
    .map(async metaNode => {
      const node = metaNode.firstChild;
      const name = metaNode.title;

      const {left: x, top: y} = node.getBoundingClientRect();
      const symbol = new SymbolMaster({x, y});

      symbol.setName(name);

      const parentAndChildren = [node, ...node.querySelectorAll('*')];

      const layerPromises = Array.from(parentAndChildren)
        .map(async node => {
          const layers = await nodeToSketchLayers(node);

          return layers.map(layer => {
            // fix font name so the name matches locally installed font
            if (layer instanceof Text && layer._style._fontFamily === 'ProximaNova') {
              layer._style._fontFamily = 'Proxima Nova';
            }
            // generate better layer name from node classes
            layer.setName(buildLayerNameFromBEM(node.classList));
            return layer;
          });
        });

      const layers = await Promise.all(layerPromises);

      layers.reduce((prev, current) => prev.concat(current), [])
        .filter(layer => layer !== null)
        .forEach(layer => symbol.addLayer(layer));

      return symbol;
    });

  const symbols = await Promise.all(symbolPromises);

  symbols.forEach(obj => page.addLayer(obj));

  return page.toJSON();
}

export async function getASketchDocument() {
  const doc = new Document();

  // DOCUMENT COLORS
  Array.from(document.querySelectorAll('.colors-list > .color-box'))
    .forEach(box => {
      const color = getComputedStyle(box).backgroundColor;

      doc.addColor(color);
    });

  // TEXT STYLES
  await Array.from(document.querySelectorAll('.text-styles > *'))
    .forEach(async node => {
      const styleName = node.title;
      const layers = await nodeToSketchLayers(node.firstChild);

      layers
        .filter(layer => layer instanceof Text)
        .forEach(layer => {
          // fix font name so the name matches localy installed font
          if (layer._style._fontFamily === 'ProximaNova') {
            layer._style._fontFamily = 'Proxima Nova';
          }

          layer.setName(styleName);
          doc.addTextStyle(layer);
        });
    });

  return doc.toJSON();
}
