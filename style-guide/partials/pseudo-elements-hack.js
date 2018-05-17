const css = '.before-reset::before, .after-reset::after { content: none !important; }';
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);

const allElements = document.getElementsByTagName('*');

for (let i = 0; i < allElements.length; i++) {
  const elementBeforeStyles = window.getComputedStyle(allElements[i], ':before');
  const elementAfterStyles = window.getComputedStyle(allElements[i], ':after');
  const elementBeforeContent = elementBeforeStyles.content;
  const elementAfterContent = elementAfterStyles.content;

  if (elementBeforeContent) {
    const virtualBefore = document.createElement('span');

    virtualBefore.setAttribute('style', elementBeforeStyles.cssText);
    virtualBefore.innerHTML = elementBeforeStyles.content.split('"').join('');
    allElements[i].className += ' before-reset';
    allElements[i].prepend(virtualBefore);
  }

  if (elementAfterContent) {
    const virtualAfter = document.createElement('span');

    virtualAfter.setAttribute('style', elementAfterStyles.cssText);
    virtualAfter.innerHTML = elementAfterStyles.content.split('"').join('');
    allElements[i].className += ' after-reset';
    allElements[i].appendChild(virtualAfter);
  }
}
