import React from 'react';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'style-guide/src/components/buttons/ButtonSecondary';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const ButtonsPrimaryPage = () => {
  const buttonsSecondaryVariations = [];

  getValues(BUTTON_SECONDARY_TYPE, false).forEach(buttonType => {
    [false, true].forEach(disabled => {
      [false, true].forEach(small => {
        const name =
        `ButtonSecondary/${buttonType}/${small ? 'small' : '_default'}/${disabled ? 'disabled' : '_default_'}`;
      
        buttonsSecondaryVariations.push(<div title={name} className='inline-item'>
          <ButtonSecondary buttonType={buttonType} disabled={disabled} small={small}>Secondary button</ButtonSecondary>
        </div>);
      });
    });

    buttonsSecondaryVariations.push(<br/>);
  });

  return <section>
    {buttonsSecondaryVariations}
  </section>;
};

export default ButtonsPrimaryPage;
