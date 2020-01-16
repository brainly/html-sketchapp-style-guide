import React from 'react';
import RoundButton, {
  ROUND_BUTTON_SIZE,
  ROUND_BUTTON_COLOR,
  ROUND_BUTTON_ICON_TYPE,
} from 'brainly-style-guide/src/components/round-buttons/RoundButton';
import {getValues} from '../utils/getValues';

const RoundButtonsPage = () => {
  const variations = [];

  getValues(ROUND_BUTTON_SIZE, false).forEach(size => {
    getValues(ROUND_BUTTON_ICON_TYPE, false).forEach(type => {
      getValues(ROUND_BUTTON_COLOR, false).forEach(color => {
        [false, true].forEach(filled => {
          const name =
            `RoundButton/${type}/${size}/${color}/${filled ? 'filled' : '_default'}`;

          variations.push(<div title={name} className='inline-item'>
            <RoundButton size={size} iconType={type} color={color} filled={filled} />
          </div>);

          variations.push(<br/>);
        });
      });
    });
  });

  return <section>
    {variations}
  </section>;
};

export default RoundButtonsPage;
