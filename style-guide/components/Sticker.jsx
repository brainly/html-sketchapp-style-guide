import React from 'react';
import Sticker from 'brainly-style-guide/src/components/stickers/Sticker';
import {TYPE} from 'brainly-style-guide/src/components/icons/Icon';
import {getValues} from '../utils/getValues';

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
