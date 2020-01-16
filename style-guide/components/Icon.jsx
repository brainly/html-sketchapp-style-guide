import React from 'react';
import Icon, {TYPE, ICON_COLOR} from 'brainly-style-guide/src/components/icons/Icon';
import {getValues} from '../utils/getValues';

const LIMITED_SIZE = [16, 24, 32, 56, 80, 104]; // This is the final (or no) set of size for icons
const IconsPage = () => {
  const variations = [];

  getValues(TYPE, false).forEach(type => {
    getValues(LIMITED_SIZE, false).forEach(size => {
      const name = `Icon/${type}/${size}`;

      variations.push(<div title={name} className='inline-item'>
        <Icon type={type} size={size} color={ICON_COLOR.DARK} />
      </div>);
      variations.push(<br />);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default IconsPage;
