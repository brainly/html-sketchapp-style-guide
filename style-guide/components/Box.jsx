import React from 'react';
import Box, {COLOR} from 'style-guide/src/components/box/Box';

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
      <Box color={color} border={false} />
    </div>);

    variations.push(<br/>);
  });

  return <section>
    {variations}
  </section>;
};

export default BoxesPage;
