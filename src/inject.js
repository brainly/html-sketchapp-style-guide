const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outputPageFile = '../page.asketch.json';
const outputDocumentFile = '../document.asketch.json';
const styleGuidePath = './style-guide/build/index.html';

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();

  await page.setViewport({width: 1024, height: 600});
  await page.goto('file://' + path.resolve(styleGuidePath), {
    waitUntil: 'networkidle0'
  });

  await page.addScriptTag({
    path: './build/styleguide2asketch.bundle.js'
  });

  // JSON.parse + JSON.stringify hack is only needed until
  // https://github.com/GoogleChrome/puppeteer/issues/1510 is fixed
  const asketchDocumentJSONString = await page.evaluate(`
    styleguide2asketch
      .getASketchDocument()
      .then(result => JSON.stringify(result))
  `);
  const asketchPageJSONString = await page.evaluate(`
    styleguide2asketch
      .getASketchPage()
      .then(result => JSON.stringify(result))
  `);

  fs.writeFileSync(path.resolve(__dirname, outputDocumentFile), asketchDocumentJSONString);
  fs.writeFileSync(path.resolve(__dirname, outputPageFile), asketchPageJSONString);

  browser.close();
});
