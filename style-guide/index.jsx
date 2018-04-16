import React from 'react';
import Head from './partials/Head.jsx';
import packageJSON from 'style-guide/package.json';
import TextPage from './components/Text.jsx';
import AvatarsPage from './components/Avatar.jsx';
import BadgesPage from './components/Badge.jsx';
import BreadcrumbsPage from './components/Breadcrumb.jsx';
import ButtonsPrimaryPage from './components/ButtonPrimary.jsx';
import ButtonsSecondaryPage from './components/ButtonSecondary.jsx';
import InputsPage from './components/Input.jsx';
import ColorsPage from './components/Color.jsx';
import IconsPage from './components/Icon.jsx';
import SubjectIconsPage from './components/SubjectIcon.jsx';
import MathSymbolsPage from './components/MathSymbol.jsx';

const IndexPage = () =>
  <html>
    <Head version={packageJSON.version}/>
    <body>

      {/* symbols */}
      <AvatarsPage />
      <IconsPage />
      <SubjectIconsPage />
      <MathSymbolsPage />

      {/* badges */}
      <BadgesPage />

      {/* breadcrumb */}
      <BreadcrumbsPage />

      {/* button primary */}
      <ButtonsPrimaryPage />

      {/* button secondary */}
      <ButtonsSecondaryPage />

      {/* button secondary */}
      <InputsPage />

      {/* text styles */}
      <TextPage />

      {/* colors */}
      <ColorsPage />

    </body>
  </html>;

export default IndexPage;
