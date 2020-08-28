import {
  Document,
  Page,
  Text,
  SVG,
  SymbolMaster,
  nodeToSketchLayers,
} from '@brainly/html-sketchapp';
import {
  RESIZING_CONSTRAINTS,
  SMART_LAYOUT,
} from '@brainly/html-sketchapp/html2asketch/helpers/utils';

function bemClassToText(bemClass) {
  return bemClass.replace('sg-', '').replace('-', ' ');
}

function buildLayerNameFromBEM(classes) {
  const mainClass = classes[0];

  if (mainClass) {
    // if node is an element (bEm)
    if (mainClass.indexOf('__') > -1) {
      return mainClass.replace(/^[a-z-]+__/, '');
    } else {
      // if node is a block (Bem)
      return bemClassToText(mainClass);
    }
  }

  return 'text';
}

export function getASketchPage() {
  const stylesheet = document.querySelector('head > link');
  let styleGuideVersion = '';

  if (stylesheet) {
    styleGuideVersion = stylesheet.href.match(
      /\/([0-9]+\.[0-9]+\.[0-9]+)\//
    )[1];
  }

  const page = new Page({
    width: document.body.offsetWidth,
    // eslint-disable-next-line comma-dangle
    height: document.body.offsetHeight,
  });

  page.setName(`Brainly Pencil - Style Guide ${styleGuideVersion}`);

  const icons = [];
  const maskColors = [];

  // SYMBOLS
  Array.from(
    document.querySelectorAll('section > .item, section > .inline-item')
  )
    .map((metaNode) => {
      const symbolNode = metaNode.firstChild;
      const name = metaNode.title;

      const {
        left: x,
        top: y,
        width,
        height,
      } = symbolNode.getBoundingClientRect();
      const symbol = new SymbolMaster({ x, y, width, height });

      symbol.setId(name);
      symbol.setName(name);

      //symbol.setUserInfo('code', node.innerHTML);

      const parentAndChildren = [
        symbolNode,
        ...symbolNode.querySelectorAll('*'),
      ];

      Array.from(parentAndChildren)
        .map((node) => {
          const layers = nodeToSketchLayers(node);

          return layers.map((layer) => {
            // fix font name so the name matches locally installed font
            if (
              layer instanceof Text &&
              layer._style._fontFamily === 'ProximaNova'
            ) {
              layer._style._fontFamily = 'Proxima Nova';
            }

            if (
              layer instanceof SVG &&
              node.classList.contains('sg-icon__svg') &&
              symbol._name.startsWith('Icon/')
            ) {
              layer.setHasClippingMask(true);
            }

            // eslint-disable-next-line max-len
            if (
              layer instanceof SVG &&
              node.classList.contains('sg-mobile-icon') &&
              symbol._name.startsWith('Icon/')
            ) {
              layer.setHasClippingMask(true);
            }

            if (symbol._name.startsWith('Label/')) {
              symbol.setGroupLayout(SMART_LAYOUT.HORIZONTALLY_CENTER);
            }

            // eslint-disable-next-line max-len
            if (symbol._name.startsWith('Label/') && layer instanceof SVG) {
              const type = node.children[0].id;
              const size = node.clientHeight;
              const icon = icons.find((icon) => icon.type === type);

              layer = icon.symbol.getSymbolInstance({
                x: layer._x - 2.5,
                y: layer._y - 2.5,
                width: size,
                // eslint-disable-next-line comma-dangle
                height: size,
              });

              // eslint-disable-next-line max-len
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.HEIGHT,
                RESIZING_CONSTRAINTS.WIDTH,
                RESIZING_CONSTRAINTS.LEFT
              );
            }

            // eslint-disable-next-line max-len
            if (
              (symbol._name.startsWith('Button/') ||
                symbol._name.startsWith('IconButton/')) &&
              layer instanceof SVG
            ) {
              const type = node.children[0].id;
              const size = node.clientHeight;
              const icon = icons.find((icon) => icon.type === type);

              layer = icon.symbol.getSymbolInstance({
                x: layer._x,
                y: layer._y,
                width: size,
                // eslint-disable-next-line comma-dangle
                height: size,
              });

              if (symbol._name.includes('icon right')) {
                // eslint-disable-next-line max-len
                layer.setResizingConstraint(
                  RESIZING_CONSTRAINTS.HEIGHT,
                  RESIZING_CONSTRAINTS.WIDTH,
                  RESIZING_CONSTRAINTS.RIGHT
                );
              } else {
                // eslint-disable-next-line max-len
                layer.setResizingConstraint(
                  RESIZING_CONSTRAINTS.HEIGHT,
                  RESIZING_CONSTRAINTS.WIDTH,
                  RESIZING_CONSTRAINTS.LEFT
                );
              }
            }

            if (
              layer instanceof SVG &&
              node.classList.contains('sg-icon') &&
              !symbol._name.startsWith('Icon/')
            ) {
              const type = node.children[0].id;
              const color = getComputedStyle(node).fill;
              const size = node.clientHeight;
              const icon = icons.find(
                (icon) => icon.type === type && icon.size === size
              );

              if (icon) {
                layer = icon.symbol.getSymbolInstance({
                  x: layer._x,
                  y: layer._y,
                  width: size,
                  height: size,
                });

                // CONSTRAINTS FOR ICON IN LIST
                if (node.parentElement.classList.contains('sg-list__icon')) {
                  layer.setResizingConstraint(
                    RESIZING_CONSTRAINTS.WIDTH,
                    RESIZING_CONSTRAINTS.HEIGHT,
                    RESIZING_CONSTRAINTS.LEFT
                  );
                }

                /* eslint-disable no-console */
              } else {
                console.log(`no no no ${type}/${color}/${size}`);
              }
              /* eslint-enable no-console */
            }

            // CONSTRAINTS FOR TEXT IN BUBBLE
            if (
              layer instanceof Text &&
              node.parentElement.classList.contains('sg-bubble')
            ) {
              layer.setResizingConstraint(RESIZING_CONSTRAINTS.LEFT);
            }

            // CONSTRAINTS FOR SVG
            if (
              node.parentElement.classList.contains('sg-search__icon') ||
              (layer instanceof SVG &&
                node.parentElement.classList.contains('sg-dropdown__icon')) ||
              (layer instanceof SVG &&
                node.parentElement.parentElement.classList.contains(
                  'sg-button__icon'
                )) ||
              (layer instanceof SVG &&
                node.parentElement.parentElement.classList.contains(
                  'sg-search__icon'
                )) ||
              (layer instanceof SVG &&
                node.parentElement.parentElement.classList.contains(
                  'sg-select__icon'
                ))
            ) {
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.RIGHT,
                RESIZING_CONSTRAINTS.WIDTH,
                RESIZING_CONSTRAINTS.HEIGHT
              );
            }

            // CONSTRAINTS FOR SVG IN SELECT AND COUNTER
            if (node.parentElement.classList.contains('sg-counter')) {
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.WIDTH,
                RESIZING_CONSTRAINTS.HEIGHT
              );
            }

            // CONSTRAINTS FOR TEXT IN INPUT
            if (
              layer instanceof Text &&
              node.parentElement.classList.contains('sg-input')
            ) {
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.LEFT,
                RESIZING_CONSTRAINTS.TOP,
                RESIZING_CONSTRAINTS.BOTTOM
              );
            }

            // CONSTRAINTS FOR TEXT IN TEXTAREA
            if (
              layer instanceof Text &&
              node.parentElement.classList.contains('sg-textarea')
            ) {
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.LEFT,
                RESIZING_CONSTRAINTS.TOP,
                RESIZING_CONSTRAINTS.BOTTOM
              );
            }

            // CONSTRAINTS FOR TEXT IN SELECTS
            if (
              layer instanceof Text &&
              node.parentElement.parentElement.classList.contains('sg-select')
            ) {
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.LEFT,
                RESIZING_CONSTRAINTS.TOP,
                RESIZING_CONSTRAINTS.BOTTOM
              );
            }

            // CONSTRAINTS FOR TEXT IN DROPDOWNS
            if (
              layer instanceof Text &&
              (node.parentElement.parentElement.classList.contains(
                'sg-dropdown'
              ) ||
                node.parentElement.classList.contains('sg-dropdown'))
            ) {
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.LEFT,
                RESIZING_CONSTRAINTS.TOP,
                RESIZING_CONSTRAINTS.BOTTOM
              );
            }

            // CONSTRAINTS FOR TEXT IN LABEL
            if (
              layer instanceof Text &&
              node.classList.contains('sg-label__text')
            ) {
              layer.setResizingConstraint(RESIZING_CONSTRAINTS.LEFT);
            }

            // CONSTRAINTS FOR TEXT IN LIST
            if (
              layer instanceof Text &&
              node.parentElement.classList.contains('sg-list__element')
            ) {
              layer.setResizingConstraint(
                RESIZING_CONSTRAINTS.HEIGHT,
                RESIZING_CONSTRAINTS.LEFT
              );
            }

            // generate better layer name from node classes
            layer.setName(buildLayerNameFromBEM(node.classList));
            return layer;
          });
        })
        .reduce((prev, current) => prev.concat(current), [])
        .filter((layer) => layer !== null)
        .forEach((layer) => symbol.addLayer(layer));

      if (symbol._name.startsWith('ColorMask/')) {
        maskColors.push(symbol);
      }

      if (symbol._name.startsWith('Button/')) {
        symbol.setGroupLayout(SMART_LAYOUT.HORIZONTALLY_CENTER);
      }

      if (symbol._name.startsWith('Counter/')) {
        symbol.setGroupLayout(SMART_LAYOUT.HORIZONTALLY_CENTER);
      }

      if (symbol._name.startsWith('Rating/')) {
        symbol.setGroupLayout(SMART_LAYOUT.LEFT_TO_RIGHT);
      }

      if (symbol._name.startsWith('Icon/')) {
        /* eslint-disable no-unused-vars */
        const [, type, size] = symbol._name.split('/');
        /* eslint-enable no-unused-vars */
        const layerSize = parseInt(size, 10);

        const mask = maskColors[0];
        const maskSymbolInstance = mask.getSymbolInstance({
          x: symbol._x,
          y: symbol._y,
          width: layerSize,
          height: layerSize,
        });

        symbol.addLayer(maskSymbolInstance);

        icons.push({
          type: `icon-${type}`,
          color: getComputedStyle(symbolNode).fill,
          size: parseInt(size, 10),
          // eslint-disable-next-line comma-dangle
          symbol,
        });
      }

      return symbol;
    })
    .forEach((obj) => page.addLayer(obj));

  return page.toJSON();
}

export function getASketchDocument() {
  const doc = new Document();

  doc.setName('BrainlyPencilTextSystem}');

  // DOCUMENT COLORS
  Array.from(document.querySelectorAll('.colors-list > .color-box')).forEach(
    (box) => {
      const color = getComputedStyle(box).backgroundColor;

      doc.addColor(color);
    }
  );

  // TEXT STYLES
  Array.from(document.querySelectorAll('.text-styles > *')).forEach((node) => {
    const styleName = node.title;
    const layers = nodeToSketchLayers(node.firstChild);

    layers
      .filter((layer) => layer instanceof Text)
      .forEach((layer) => {
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
