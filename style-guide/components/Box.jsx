import React from 'react';
import Box, {COLOR} from 'brainly-style-guide/src/components/box/Box';
import {getValues} from '../utils/getValues';

// TODO check if padding is needed
const BoxesPage = () => {
  const variations = [];

  getValues(COLOR, false).forEach(color => {
    let colorName;

    if (color === 'navyblue-secondary') {
      colorName = 'white';
    } else {
      colorName = `${color}`;
    }

    const name =
    `Box/${colorName}`;

    variations.push(<div title={name} className='inline-item'>
      <Box color={color} border={false} />
    </div>);

    variations.push(<br/>);
  });

  return <section>
    {variations}
  </section>;
};

export default BoxesPage;
