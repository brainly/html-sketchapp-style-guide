import React from 'react';

const Head = props =>
  <head>
    <meta charSet="utf-8" />
    <title>Brainly Style Guide - {props.version}</title>
    <meta name="description" content="Brainly Style Guide - Sketch export file" />

    <link href="https://styleguide.brainly.com/134.2.1/style-guide.css" rel="stylesheet" />
    <script src="https://styleguide.brainly.com/images/icons-d5df026a36.js" defer></script>
    <script src="https://styleguide.brainly.com/images/subjects-icons-05e888a881.js" defer></script>
    <script src="https://styleguide.brainly.com/images/subjects-mono-icons-d5e829baef.js" defer></script>
    <script src="https://styleguide.brainly.com/images/math-symbols-icons-2936684655.js" defer></script>

    <style>
      .color-box {'{'}
        width: 25px;
        height: 25px;
      {'}'}

      section {'{'}
        margin-top: 50px;
      {'}'}

      .inline-item {'{'}
        display: inline-block;
      {'}'}

      /* CSS fixes to overcome html-sketchapp limitations */
      img.sg-avatar__image,
      div.sg-avatar__image {'{'}
        border-radius: 100%;
      {'}'}
    </style>

  </head>
;

export default Head;
