import React from 'react';
import Input, {COLOR, SIZE} from 'style-guide/src/components/form-elements/Input';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const InputsPage = () => {
  const InputVariations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true].forEach(noBorder => {
        const name =
        `Input/${color}/${size}/${noBorder ? 'no-border' : 'border'}`;

        InputVariations.push(<div title={name} className='inline-item'>
          <Input size={size} color={color} value="input" noBorder={noBorder}/>
        </div>);

      });
    });
    InputVariations.push(<br/>);
  });

  return <section>
    {InputVariations}
  </section>;
};

export default InputsPage;
