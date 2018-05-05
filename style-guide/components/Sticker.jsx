import React from 'react';
import Sticker from 'style-guide/src/components/stickers/Sticker';
import {TYPE} from 'style-guide/src/components/icons/Icon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const StickersPage = () => {
  const variations = [];

  getValues(TYPE, false).forEach(type => {
    const name =
        `Sticker/${type}`;

    variations.push(<div title={name} className='inline-item'>
      <Sticker type={type} />
    </div>);
  });
  return <section>
    {variations}
  </section>;
};

export default StickersPage;
