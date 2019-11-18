import React from 'react';
import Head from './partials/Head.jsx';
import packageJSON from 'style-guide/package.json';
import ColorMasksPage from './components/ColorMasks.jsx';
import TextPage from './components/Text.jsx';
import AvatarsPage from './components/Avatar.jsx';
import ButtonsPage from './components/Button.jsx';
import InputsPage from './components/Input.jsx';
import SelectsPage from './components/Select.jsx';
import TextareasPage from './components/Textarea.jsx';
import CheckboxesPage from './components/Checkbox.jsx';
import RadioPage from './components/Radio.jsx';
import ColorsPage from './components/Color.jsx';
import IconsPage from './components/Icon.jsx';
import IconsAsButtonPage from './components/IconAsButton.jsx';
import LabelsPage from './components/Label.jsx';
import StickersPage from './components/Sticker.jsx';
import SubjectIconsPage from './components/SubjectIcon.jsx';
import MathSymbolsPage from './components/MathSymbol.jsx';
import ListsPage from './components/List';
import DropdownsPage from './components/Dropdown';
import FlashMessagesPage from './components/FlashMessage';
import SearchPage from './components/Search';
import BoxesPage from './components/Box';
import BubblesPage from './components/Bubble';
import RatingPage from './components/Rating';
import LogoPage from './components/Logo';
import ColorMasks from './components/ColorMasks.jsx';

const IndexPage = () =>
  <html>
    <Head version={packageJSON.version}/>
    <body>
      <ColorMasksPage />
      <IconsPage />
      <LogoPage />
      <AvatarsPage />
      <BoxesPage />
      <BubblesPage />
      <ButtonsPage />
      <CheckboxesPage />
      <DropdownsPage />
      <FlashMessagesPage />
      <IconsAsButtonPage />
      <InputsPage />
      <ListsPage />
      <MathSymbolsPage />
      <RadioPage />
      <RatingPage />
      <SearchPage />
      <SelectsPage />
      <SubjectIconsPage />
      <TextareasPage />
      <LabelsPage />

      {/* document */}
      <TextPage />
      <ColorsPage />
    </body>
  </html>;

export default IndexPage;
