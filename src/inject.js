const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outputPageFile = '../page.asketch.json';
const outputDocumentFile = '../document.asketch.json';
const styleGuidePath = './style-guide/index.html';

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();

  await page.setViewport({width: 800, height: 600});
  await page.goto('file://' + path.resolve(styleGuidePath), {
    waitUntil: 'networkidle',
    networkIdleInflight: 5
  });

  await page.injectFile('./build/styleguide2asketch.bundle.js');
  const asketchDocumentJSON = await page.evaluate('styleguide2asketch.getASketchDocument()');
  const asketchPageJSON = await page.evaluate('styleguide2asketch.getASketchPage()');

  fs.writeFileSync(path.resolve(__dirname, outputDocumentFile), JSON.stringify(asketchDocumentJSON));
  fs.writeFileSync(path.resolve(__dirname, outputPageFile), JSON.stringify(asketchPageJSON));

  browser.close();
});
