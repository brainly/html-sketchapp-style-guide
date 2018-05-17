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

  page.on('console', msg => {
    for (let i = 0; i < msg.args.length; ++i) {
      console.log(msg.args[i]);
    }
  });

  await page.addScriptTag({
    path: './build/styleguide2asketch.bundle.js'
  });

  const asketchDocumentJSONString = await page.evaluate('styleguide2asketch.getASketchDocument()');
  const asketchPageJSONString = await page.evaluate('styleguide2asketch.getASketchPage()');

  fs.writeFileSync(path.resolve(__dirname, outputDocumentFile), JSON.stringify(asketchDocumentJSONString));
  fs.writeFileSync(path.resolve(__dirname, outputPageFile), JSON.stringify(asketchPageJSONString));

  browser.close();
});
