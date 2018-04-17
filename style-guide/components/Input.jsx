import React from 'react';
import Input, {TYPE, COLOR, SIZE} from 'style-guide/src/components/form-elements/Input';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const InputsPage = () => {
  const InputVariations = [];

  getValues(TYPE, false).forEach(type => {
    getValues(COLOR, false).forEach(color => {
      getValues(SIZE, false).forEach(size => {
        [false, true].forEach(noBorder => {
          const name =
          `Input/${type}/${color}/${size}/${noBorder ? 'noBorder' : 'border'}`;

          InputVariations.push(<div title={name} className='inline-item'>
            <Input type={type} size={size} color={color} value="input" noBorder={noBorder}/>
          </div>);

        });
      });
    });
    InputVariations.push(<br/>);
  });

  return <section>
    {InputVariations}
  </section>;
};

export default InputsPage;
