import React from 'react';
import Text, {TEXT_COLOR} from 'brainly-style-guide/src/components/text/Text';
import Headline, {HEADLINE_SIZE, HEADLINE_COLOR} from 'brainly-style-guide/src/components/text/Headline';
import Link, {LINK_COLOR} from 'brainly-style-guide/src/components/text/Link';
import TextBit, {TEXT_BIT_SIZE, TEXT_BIT_COLOR} from 'brainly-style-guide/src/components/text/TextBit';

// setup for texts will be removed as soon as we cleanup SG
const textWeight = {
  bold: 'bold',
  regular: 'regular',
};

const linkWeight = {
  REGULAR: 'regular',
  BOLD: 'bold',
};

const textSizes = {
  XXSMALL: 'xxsmall',
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
};

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextPage = () => {

  const linkVariations = [];

  getValues(textSizes, false).forEach(size => {
    getValues(LINK_COLOR, false).forEach(color => {
      [true, false].forEach(underlined => {
        getValues(linkWeight, false).forEach(weight => {
          linkVariations.push(
            // eslint-disable-next-line max-len
            <div title={`Link/${size || 'medium'}/${color || 'normal'}/${weight || 'normal'}/${underlined ? 'underlined' : 'normal'}`}>
              <Link
                color={color}
                size={size}
                underlined
                weight={weight}>
                  Link: {size} {color} {underlined ? 'underlined' : ''}
              </Link>
            </div>
          );
        });
      });
    });
  });

  const textVariations = [];

  getValues(textSizes, false).forEach(size => {
    getValues(TEXT_COLOR, false).forEach(color => {
      getValues(textWeight, false).forEach(weight => {
        textVariations.push(<div title={`Text/${size || 'medium'}/${color || 'normal'}/${weight || 'normal'}`}>
          <Text color={color} size={size} weight={weight}>Text: {size} {color} </Text>
        </div>);
      });
    });
  });

  const headlineVariations = [];

  getValues(HEADLINE_SIZE, false).forEach(size => {
    getValues(HEADLINE_COLOR).forEach(color => {
      [true, false].forEach(extraBold => {
        headlineVariations.push(
          <div title={`Headline/${size || 'medium'}/${color || 'normal'}/${extraBold ? 'black' : 'bold'}`}>
            <Headline color={color} size={size} extraBold={extraBold}>Headline: {size} {color}</Headline>
          </div>
        );
      });
    });
  });

  const textBitVariations = [];

  getValues(TEXT_BIT_SIZE).forEach(size => {
    getValues(TEXT_BIT_COLOR).forEach(color => {
      if (size === TEXT_BIT_SIZE.MEDIUM) {
        return;
      }
      textBitVariations.push(<div title={`TextBit/${size || 'medium'}/${color || 'normal'}`}>
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
