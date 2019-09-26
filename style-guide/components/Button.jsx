import React from 'react';
import Button, {BUTTON_TYPE, BUTTON_SIZE} from 'style-guide/src/components/buttons/Button';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const ButtonsPage = () => {
  const buttonsVariations = [];

  getValues(BUTTON_TYPE, false).forEach(type => {
    getValues(BUTTON_SIZE, false).forEach(size => {

      [false, true].forEach(disabled => {

          const name =
          `Button/${type}/${size}/${disabled ? 'disabled': '_default'}`;
          
          buttonsVariations.push(<div title={name} className='inline-item'>
            <Button type={type} size={size} disabled={disabled}>Button</Button>
          </div>);
      });

      buttonsVariations.push(<br/>);
    });
  });

  return <section>
    {buttonsVariations}
  </section>;
};

export default ButtonsPage;
