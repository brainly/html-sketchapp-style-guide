const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');

const ReactPageClass = require('./index.jsx').default;
const htmlPage = ReactDOMServer.renderToStaticMarkup(React.createElement(ReactPageClass));
const doctype = '<!DOCTYPE html>\n';

fs.writeFileSync('build/index.html', doctype + htmlPage);
