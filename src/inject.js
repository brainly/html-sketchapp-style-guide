const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outputPageFile = '../page.asketch.json';
const outputDocumentFile = '../document.asketch.json';
const styleGuidePath = './style-guide/build/index.html';

puppeteer.launch({headless: false, devtools: true}).then(async browser => {
  const page = await browser.newPage();

  await page.setViewport({width: 1024, height: 600});
  await page.goto(`file://${path.resolve(styleGuidePath)}`, {
    // eslint-disable-next-line comma-dangle
    waitUntil: 'networkidle0',
  });

  // await page.on('console', msg => console.log('PAGE LOG:', msg.args()));

  /* eslint-disable no-console */
  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i) {
      console.log(msg.args()[i]); // TODO print output into console in some better way
    }
  });
  /* eslint-enable no-console */

  await page.addScriptTag({
    // eslint-disable-next-line comma-dangle
    path: './build/styleguide2asketch.bundle.js',
  });

  const asketchDocumentJSONString = await page.evaluate('styleguide2asketch.getASketchDocument()');
  const asketchPageJSONString = await page.evaluate('styleguide2asketch.getASketchPage()');

  fs.writeFileSync(path.resolve(__dirname, outputDocumentFile), JSON.stringify(asketchDocumentJSONString));
  fs.writeFileSync(path.resolve(__dirname, outputPageFile), JSON.stringify(asketchPageJSONString));

  browser.close();
});
