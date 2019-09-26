const css = '.before-reset::before, .after-reset::after { content: none !important; }';
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);

const allElements = document.querySelectorAll('.sg-bubble');
/* eslint-disable max-len */
const rect = '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect id="Rectangle" fill="#FFFFFF" fill-rule="nonzero" transform="translate(17.000000, 17.000000) scale(-1, 1) rotate(45.000000) translate(-17.000000, -17.000000) " x="5" y="5" width="14" height="14"></rect></svg>';
/* eslint-enable max-len */

for (let i = 0; i < allElements.length; i++) {

  const elementBeforeStyles = window.getComputedStyle(allElements[i], '::before');
  const values = {
    left: parseInt(elementBeforeStyles.left, 10) / 2,
    right: parseInt(elementBeforeStyles.right, 10) / 2,
    top: parseInt(elementBeforeStyles.top, 10) / 2,
    // eslint-disable-next-line comma-dangle
    bottom: parseInt(elementBeforeStyles.bottom, 10) / 2
  };
  /* eslint-disable max-len */
  const rectPositionStyles = `left: ${values.left}px; top: ${values.top}px; right: ${values.right}px; bottom: ${values.bottom}px; position: absolute`;
  /* eslint-enable max-len */

  const elementAfterStyles = window.getComputedStyle(allElements[i], '::after');

  if (elementBeforeStyles) {
    const virtualBefore = document.createElement('span');

    virtualBefore.style = `${rectPositionStyles}`;
    virtualBefore.innerHTML = rect;
    allElements[i].className += ' before-reset';
    allElements[i].prepend(virtualBefore);
  }

  if (elementAfterStyles) {
    const virtualAfter = document.createElement('span');

    allElements[i].className += ' after-reset';
    allElements[i].appendChild(virtualAfter);
  }
}
