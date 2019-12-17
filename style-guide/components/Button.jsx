import React from 'react';
import Button, {BUTTON_TYPE, BUTTON_SIZE} from 'style-guide/src/components/buttons/Button';
import Icon from 'style-guide/src/components/icons/Icon';
import {getValues} from '../utils/getValues';

const ButtonsPage = () => {
  const buttonsVariations = [];

  getValues(BUTTON_TYPE, false).forEach(type => {
    getValues(BUTTON_SIZE, false).forEach(size => {

      [false, true].forEach(disabled => {
        [false, true].forEach(icon => {
          let iconSize;

          if (size === 'large') {
            iconSize = 32;
          } else if (size === 'small') {
            iconSize = 16;
          } else {
            iconSize = 24;
          }

          const name =
              `Button/${type}/${size}/${icon ? 'with icon' : '_default'}/ ${disabled ? 'disabled' : '_default'}`;

          buttonsVariations.push(<div title={name} className='inline-item'>
            <Button
              icon={icon ? <Icon type="answer" color="peach" size={iconSize} /> : null}
              type={type}
              size={size}
              disabled={disabled}
              className="fix-button"
            >Button</Button>

          </div>);
        });

        buttonsVariations.push(<br/>);
      });
    });
  });

  return <section>
    {buttonsVariations}
  </section>;
};

export default ButtonsPage;
