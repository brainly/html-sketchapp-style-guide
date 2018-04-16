import React from 'react';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'style-guide/src/components/buttons/ButtonPrimary';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const ButtonsPrimaryPage = () => {
  const buttonsPrimaryVariations = [];

  getValues(BUTTON_PRIMARY_TYPE, false).forEach(buttonType => {
    [false, true].forEach(disabled => {
      const name =
      `ButtonPrimary/${buttonType}/${disabled ? 'disabled' : 'normal'}`;

      buttonsPrimaryVariations.push(<div title={name} className='inline-item'>
        <ButtonPrimary buttonType={buttonType} disabled={disabled}>Primary button</ButtonPrimary>
      </div>);
    });

    buttonsPrimaryVariations.push(<br/>);
  });

  return <section>
    {buttonsPrimaryVariations}
  </section>;
};

export default ButtonsPrimaryPage;
