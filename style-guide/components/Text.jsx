import React from 'react';
import Text, {TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT} from 'style-guide/src/components/text/Text';
import Headline, {HEADLINE_SIZE, HEADLINE_COLOR} from 'style-guide/src/components/text/Headline';
import Link, {LINK_SIZE, LINK_COLOR, LINK_WEIGHT} from 'style-guide/src/components/text/Link';
import TextBit, {TEXT_BIT_SIZE, TEXT_BIT_COLOR} from 'style-guide/src/components/text/TextBit';

// setup for texts will be removed as soon as we cleanup SG
const textWeight = {
  bold: "bold",
  regular: 'regular'
};

const linkWeight = {
  REGULAR: 'regular',
  BOLD: 'bold'
};

const textSizes = {
  XSMALL: 'xsmall',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
}

const textColorSet = {
  DEFAULT: 'black',
  WHITE: TEXT_COLOR.WHITE,
  BLUE_DARK: TEXT_COLOR.BLUE_DARK,
  MINT_DARK: TEXT_COLOR.MINT_DARK,
  LAVENDER_DARK: TEXT_COLOR.LAVENDER_DARK,
  MUSTARD_DARK: TEXT_COLOR.MUSTARD_DARK,
  PEACH_DARK: TEXT_COLOR.PEACH_DARK,
  GRAY: TEXT_COLOR.GRAY,
  GRAY_SECONDARY: TEXT_COLOR.GRAY_SECONDARY,
  GRAY_SECONDARY_LIGHT: TEXT_COLOR.GRAY_SECONDARY_LIGHT,
}

const headineColorSet = {
  DEFAULT: 'black',
  WHITE: HEADLINE_COLOR.WHITE,
  BLUE_DARK: HEADLINE_COLOR.BLUE_DARK,
  MINT_DARK: HEADLINE_COLOR.MINT_DARK,
  LAVENDER_DARK: HEADLINE_COLOR.LAVENDER_DARK,
  MUSTARD_DARK: HEADLINE_COLOR.MUSTARD_DARK,
  PEACH_DARK: HEADLINE_COLOR.PEACH_DARK,
  GRAY: HEADLINE_COLOR.GRAY,
  GRAY_SECONDARY: HEADLINE_COLOR.GRAY_SECONDARY,
  GRAY_SECONDARY_LIGHT: HEADLINE_COLOR.GRAY_SECONDARY_LIGHT,
}

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextPage = () => {
  

  const linkVariations = [];

  getValues(textSizes, false).forEach(size => {
    getValues(LINK_COLOR, false).forEach(color => {
      // [true, false].forEach(underlined => {
      getValues(linkWeight, false).forEach(weight => {
        linkVariations.push(<div title={`Link/${size || 'normal'}/${color || 'normal'}/${weight || 'normal'}`}>
          <Link color={color} size={size} underlined weight={weight}>Link: {size} {color}</Link>
        </div>);
      });
      // });
    });
  });

  const textVariations = [];

  getValues(textSizes, false).forEach(size => {
    getValues(textColorSet, false).forEach(color => {
      getValues(textWeight, false).forEach(weight => {
        textVariations.push(<div title={`Text/${size || 'normal'}/${color || 'normal'}/${weight || 'normal'}`}>
          <Text color={color} size={size} weight={weight}>Text: {size} {color} </Text>
        </div>);
      });
    });
  });

  const headlineVariations = [];

  getValues(HEADLINE_SIZE, false).forEach(size => {
    getValues(headineColorSet).forEach(color => {
      if(color === undefined) {
        return
      }
      [true, false].forEach(extraBold => {
        headlineVariations.push(<div title={`Headline/${size || 'normal'}/${color}/${extraBold ? 'black' : 'bold'}`}>
          <Headline color={color} size={size} extraBold={extraBold}>Headline: {size} {color}</Headline>
        </div>);
      });
    });
  });

  const textBitVariations = [];

  getValues(TEXT_BIT_SIZE).forEach(size => {
    getValues(TEXT_BIT_COLOR).forEach(color => {
      if(size === TEXT_BIT_SIZE.NORMAL || color === undefined) {
        return
      }
      textBitVariations.push(<div title={`TextBit/${size || 'normal'}/${color || 'normal'}`}>
        <TextBit color={color} size={size}>TextBit: {size} {color}</TextBit>
      </div>);
    });
  });

  return <div className="text-styles">
    {textVariations}
    {headlineVariations}
    {linkVariations}
    {textBitVariations}
  </div>;
};

export default TextPage;
