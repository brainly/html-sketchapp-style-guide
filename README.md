# html-sketchapp-style-guide

Script that uses [brainly/html-sketchapp](https://github.com/brainly/html-sketchapp) to import [brainly/style-guide](https://github.com/brainly/style-guide) into Sketch.

This script produces a `page.asketch.json` and `document.asketch.json` files that can be loaded to Sketch via [brainly/html-sketchapp](https://github.com/brainly/html-sketchapp) plugin.

<img src="http://i.imgur.com/9UvPu1u.gif" width="100%" />

# How do I run it?

```sh
npm i # installs dependencies
npm run build # builds script that gets injected into a page and the page itself with all style gudie elements
npm run inject # produces document.asketch.json and page.asketch.json files
```

Created `*.asketch.json` files can then be loaded into Sketch using the [brainly/html-sketchapp](https://github.com/brainly/html-sketchapp) plugin.

# Updating Style Guide

- `package.json` - jsx components
- `Head.jsx` - styles and icons
