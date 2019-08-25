import React from 'react';
import Box from 'style-guide/src/components/box/Box';

// TODO in SG - cleanup colors, remove shadow and border for default box.
const COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  DARK: 'dark',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-lightest',
  GRAY_SECONDARY_ULTRA_LIGHT: 'gray-secondary-ultra-light',
  MUSTARD_PRIMARY: 'mustard-primary',
  PEACH: 'peach',
  PEACH_SECONDARY: 'peach-secondary',
};

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO check if padding is needed
const BoxesPage = () => {
  const variations = [];

  getValues(COLOR, false).forEach(color => {
    const name =
    `Box/${color}`;

    variations.push(<div title={name} className='inline-item'>
      <Box color={color} border='no-border' shadow='no-shadow' />
    </div>);

    variations.push(<br/>);  
  });

  return <section>
    {variations}
  </section>;
};

export default BoxesPage;
