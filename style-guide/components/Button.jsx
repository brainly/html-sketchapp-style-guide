import React from 'react';
import Button, {
  BUTTON_TYPE,
  BUTTON_SIZE,
} from 'brainly-style-guide/src/components/buttons/Button';
import Icon from 'brainly-style-guide/src/components/icons/Icon';
import {getValues} from '../utils/getValues';

const noToggleTypes = [
  'solid',
  'solid-inverted',
  'solid-blue',
  'solid-mint',
  'transparent-inverted',
  'facebook',
];

const ButtonsPage = () => {
  const buttonsVariations = [];

  getValues(BUTTON_TYPE, false).forEach(type => {
    getValues(BUTTON_SIZE, false).forEach(size => {
      [null, 'peach', 'mustard', 'blue', 'default'].forEach(toggle => {
        [false, true].forEach(disabled => {
          [false, true, 'reversed-order', 'icon-only'].forEach(icon => {
            if (
              (toggle &&
                noToggleTypes.includes(type)) ||
              (toggle === 'peach' && type === 'transparent-mustard') ||
              (toggle === 'blue' && type === 'transparent-mustard') ||
              (toggle === 'default' && type === 'transparent-mustard') ||
              (toggle === 'mustard' && type === 'transparent-peach') ||
              (toggle === 'blue' && type === 'transparent-peach') ||
              (toggle === 'default' && type === 'transparent-peach') ||
              (toggle === 'mustard' && type === 'transparent-blue') ||
              (toggle === 'peach' && type === 'transparent-blue') ||
              (toggle === 'default' && type === 'transparent-blue') ||
              (toggle === 'default' && !icon)
            ) {
              return;
            }

            if (icon === 'iconOnly' && !icon) {
              return;
            }

            let iconSize;

            if (size === 'l') {
              iconSize = 32;
            } else if (size === 's') {
              iconSize = 16;
            } else {
              iconSize = 24;
            }

            let togglableName;

            if (noToggleTypes.includes(type) && !toggle) {
              togglableName = '';
            } else {
              togglableName = `${toggle ? `toggle-${toggle}` : '_default'}/`;
            }

            let iconVariant;

            if (icon === 'reversed-order') {
              iconVariant = 'icon right';
            } else if (icon === 'icon-only') {
              iconVariant = 'icon only';
            } else if (icon) {
              iconVariant = 'icon left';
            } else {
              iconVariant = '_default';
            }

            const name = `Button/${type}/${size}/${iconVariant}/${togglableName}${disabled ? 'disabled' : '_default'}`;

            buttonsVariations.push(
              <div title={name} className='inline-item'>
                <Button
                  icon={
                    icon ?
                      <Icon type={toggle ? 'heart' : 'heart_outlined'} color='adaptive' size={iconSize} /> :
                      null
                  }
                  toggle={toggle}
                  type={type}
                  size={size}
                  disabled={disabled}
                  iconOnly={icon === 'icon-only'}
                  reversedOrder={icon === 'reversed-order'}
                >
                  Button
                </Button>
              </div>
            );
          });

          buttonsVariations.push(<br />);
        });
      });
    });
  });

  return <section>{buttonsVariations}</section>;
};

export default ButtonsPage;
