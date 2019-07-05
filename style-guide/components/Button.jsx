import React from 'react';
import Button, {BUTTON_TYPE, BUTTON_SIZE} from 'style-guide/src/components/buttons/Button';
import Icon, {TYPE, ICON_COLOR, SIZE} from 'style-guide/src/components/icons/Icon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const getIconColor = type => {
  if (
    type === 'primary-inverted' ||
    type === 'secondary' ||
    type === 'destructive' ||
    type === 'link-button' ||
    type === 'warning'
  ) {
    return 'dark';
  } else if (type === 'link-button-peach') {
    return 'peach';
  } else if (type === 'link-button-mustard') {
    return 'mustard';
  } else {
    return 'light';
  }
};

const ButtonsPage = () => {
  const buttonsVariations = [];
  // const buttonsWithIcon = [];

  getValues(BUTTON_TYPE, false).forEach(buttonType => {
    getValues(BUTTON_SIZE, false).forEach(size => {
      [false, true].forEach(disabled => {
        // [false, true].forEach(icon => {
          const iconColor = getIconColor(buttonType);
          
          const name =
          `Button/${buttonType}/${size}/${disabled ? 'disabled' : '_default_'}`;
          
          buttonsVariations.push(<div title={name} className='inline-item'>
            <Button
              type={buttonType}
              size={size}
              disabled={disabled}
            >
              Button
            </Button>
          </div>);
        });
        buttonsVariations.push(<br/>);
      // });
    });
  });

  return <section>
    {buttonsVariations}
  </section>;
};

export default ButtonsPage;
