import React from 'react';
import Head from './partials/Head.jsx';
import packageJSON from 'style-guide/package.json';
import TextPage from './components/Text.jsx';
import AvatarsPage from './components/Avatar.jsx';
import ColorsPage from './components/Color.jsx';

const IndexPage = () =>
  <html>
    <Head version={packageJSON.version}/>
    <body>

      {/* symbols */}
      <AvatarsPage />

      {/* text styles */}
      <TextPage />

      {/* colors */}
      <ColorsPage />

    </body>
  </html>
;

export default IndexPage;
