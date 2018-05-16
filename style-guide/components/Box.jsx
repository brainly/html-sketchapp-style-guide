import React from 'react';
import Box, {COLOR} from 'style-guide/src/components/box/Box';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO check if padding is needed
const BoxesPage = () => {
  const variations = [];

  getValues(COLOR, false).forEach(color => {
    [false, true].forEach(border => {
      [false, true].forEach(shadow => {
        const name =
        `Box/${color}/${shadow ? 'shadow' : 'no-shadow'}/${border ? 'border' : 'no-border'}`;

        variations.push(<div title={name} className='inline-item'>
          <Box color={color} border={border} shadow={shadow} />
        </div>);

        variations.push(<br/>);
      });
    });
  });

  return <section>
    {variations}
  </section>;
};

export default BoxesPage;
