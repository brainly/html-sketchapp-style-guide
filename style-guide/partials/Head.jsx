import React from 'react';

const Head = props =>
  <head>
    <meta charSet="utf-8" />
    <title>Brainly Style Guide - {props.version}</title>
    <meta name="description" content="Brainly Style Guide - Sketch export file" />

    <link href="https://styleguide.brainly.com/174.2.0/style-guide.css" rel="stylesheet" />
    <script src="https://styleguide.brainly.com/images/icons-c6f28c9266.js" defer></script>
    <script src="https://styleguide.brainly.com/images/mobile-icons-48435e07e8.js" defer></script>
    <script src="https://styleguide.brainly.com/images/subjects-icons-a01adb2d40.js" defer></script>
    <script src="https://styleguide.brainly.com/images/subjects-mono-icons-341dc27120.js" defer></script>
    <script src="https://styleguide.brainly.com/images/math-symbols-icons-7c9d6883f2.js" defer></script>
    <script src="../utils/pseudo-elements-bubbles-hack.js" defer></script>
    <link href="../partials/head.css" rel="stylesheet" />
  </head>;

export default Head;
