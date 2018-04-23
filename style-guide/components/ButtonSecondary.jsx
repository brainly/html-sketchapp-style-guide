import React from 'react';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'style-guide/src/components/buttons/ButtonSecondary';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const ButtonsPrimaryPage = () => {
  const buttonsSecondaryVariations = [];

  getValues(BUTTON_SECONDARY_TYPE, false).forEach(buttonType => {
    [false, true].forEach(disabled => {
      const name =
      `ButtonSecondary/${buttonType}/${disabled ? 'disabled' : '_default_'}`;

      buttonsSecondaryVariations.push(<div title={name} className='inline-item'>
        <ButtonSecondary buttonType={buttonType} disabled={disabled}>Secondary button</ButtonSecondary>
      </div>);
    });

    buttonsSecondaryVariations.push(<br/>);
  });

  return <section>
    {buttonsSecondaryVariations}
  </section>;
};

export default ButtonsPrimaryPage;
