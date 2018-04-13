import React from 'react';
import Text, {SIZE, COLOR, WEIGHT} from 'style-guide/src/components/text/Text.jsx';
import HeaderPrimary, {HEADER_SIZE, HEADER_COLOR} from 'style-guide/src/components/text/HeaderPrimary.jsx';
import HeaderSecondary, {HEADER_SIZE as H2SIZE, HEADER_COLOR as H2COLOR} from 'style-guide/src/components/text/HeaderSecondary.jsx';
import Link, {SIZE as LSIZE, COLOR as LCOLOR} from 'style-guide/src/components/text/Link.jsx';
import TextBit, {SIZE as TBSIZE, COLOR as TBCOLOR} from 'style-guide/src/components/text/TextBit.jsx';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextPage = () => {
  const textVariations = [];

  getValues(SIZE).forEach(size => {
    getValues(COLOR).forEach(color => {
      getValues(WEIGHT, false).forEach(weight => {
        textVariations.push(<div title={`Text/${size || 'normal'}/${color || 'normal'}/${weight}`}>
          <Text color={color} weight={weight} size={size}>Text: {size} {color} {weight}</Text>
        </div>);
      });
    });
  });

  const headerVariations = [];

  getValues(HEADER_SIZE, false).forEach(size => {
    getValues(HEADER_COLOR).forEach(color => {
      headerVariations.push(<div title={`HeaderPrimary/${size || 'normal'}/${color || 'normal'}`}>
        <HeaderPrimary color={color} size={size}>HeaderPrimary: {size} {color}</HeaderPrimary>
      </div>);
    });
  });

  const header2Variations = [];

  getValues(H2SIZE, false).forEach(size => {
    getValues(H2COLOR).forEach(color => {
      header2Variations.push(<div title={`HeaderSecondary/${size || 'normal'}/${color || 'normal'}`}>
        <HeaderSecondary color={color} size={size}>HeaderSecondary: {size} {color}</HeaderSecondary>
      </div>);
    });
  });

  const linkVariations = [];

  getValues(LSIZE, false).forEach(size => {
    getValues(LCOLOR).forEach(color => {
      [true, false].forEach(underlined => {
        linkVariations.push(<div title={`Link/${size || 'normal'}/${color || 'normal'}/${underlined ? 'underlined' : 'normal'}`}>
          <Link color={color} size={size} underlined={underlined}>Link: {size} {color} {underlined ? 'underlined' : ''}</Link>
        </div>);
      });
    });
  });

  const textBitVariations = [];

  getValues(TBSIZE).forEach(size => {
    getValues(TBCOLOR).forEach(color => {
      textBitVariations.push(<div title={`TextBit/${size || 'normal'}/${color || 'normal'}`}>
        <TextBit notResponsive color={color} size={size}>TextBit: {size} {color}</TextBit>
      </div>);
    });
  });

  return <div className="text-styles">
    {textVariations}
    {headerVariations}
    {header2Variations}
    {linkVariations}
    {textBitVariations}
  </div>;
};

export default TextPage;
