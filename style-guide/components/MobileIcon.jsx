import React from 'react';

import MobileIcon, {TYPE} from 'brainly-style-guide/src/components/mobile-icons/MobileIcon';
import {ICON_COLOR} from 'brainly-style-guide/src/components/icons/Icon';
import {getValues} from '../utils/getValues';

const LIMITED_SIZE = ['small', 'medium', 'normal'];
const MobileIconsPage = () => {
  const variations = [];

  getValues(TYPE, false).forEach(type => {
    getValues(LIMITED_SIZE, false).forEach(size => {
      const name = `MobileIcon/${type}/${size}`;

      variations.push(<div title={name} className='inline-item'>
        <MobileIcon type={type} size={size} color={ICON_COLOR.DARK} />
      </div>);
      variations.push(<br />);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default MobileIconsPage;
