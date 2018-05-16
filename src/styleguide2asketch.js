import {Document, Page, Text, SymbolMaster, nodeToSketchLayers} from '@brainly/html-sketchapp';
import {RESIZING_CONSTRAINTS} from '@brainly/html-sketchapp/html2asketch/helpers/utils';

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

export function getASketchPage() {
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
  Array.from(document.querySelectorAll('section > .item, section > .inline-item'))
    .map(metaNode => {
      const node = metaNode.firstChild;
      const name = metaNode.title;

      const {left: x, top: y, width, height} = node.getBoundingClientRect();
      const symbol = new SymbolMaster({x, y, width, height});

      symbol.setId(name);
      symbol.setName(name);
      //symbol.setUserInfo('code', node.innerHTML);

      const parentAndChildren = [node, ...node.querySelectorAll('*')];

      Array.from(parentAndChildren)
        .map(node => {
          const layers = nodeToSketchLayers(node);

          return layers.map(layer => {
            // fix font name so the name matches locally installed font
            if (layer instanceof Text && layer._style._fontFamily === 'ProximaNova') {
              layer._style._fontFamily = 'Proxima Nova';
            }

            if (node.classList.contains('sg-flash') && layer instanceof Text) {
              layer.setResizingConstraint(RESIZING_CONSTRAINTS.LEFT, RESIZING_CONSTRAINTS.RIGHT);
            }

            // generate better layer name from node classes
            layer.setName(buildLayerNameFromBEM(node.classList));
            return layer;
          });
        })
        .reduce((prev, current) => prev.concat(current), [])
        .filter(layer => layer !== null)
        .forEach(layer => symbol.addLayer(layer));

      return symbol;
    })
    .forEach(obj => page.addLayer(obj));

  return page.toJSON();
}

export function getASketchDocument() {
  const doc = new Document();

  // DOCUMENT COLORS
  Array.from(document.querySelectorAll('.colors-list > .color-box'))
    .forEach(box => {
      const color = getComputedStyle(box).backgroundColor;

      doc.addColor(color);
    });

  // TEXT STYLES
  Array.from(document.querySelectorAll('.text-styles > *'))
    .forEach(node => {
      const styleName = node.title;
      const layers = nodeToSketchLayers(node.firstChild);

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
