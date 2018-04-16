import React from 'react';
import Select from 'style-guide/src/components/form-elements/Select';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO export invalid also?
const SelectsPage = () => {
  const SelectVariations = [];

  [false, true].forEach(valid => {
    const name =
    `Select/${valid ? 'valid' : 'default'}`;

    SelectVariations.push(<div title={name} className='inline-item'>
      <Select valid={valid} options={[{'value': 'option1', 'text': 'Option 1'}, {'value': 'option2', 'text': 'Option 2'}]} />
    </div>);
    SelectVariations.push(<br/>);
  });

  return <section>
    {SelectVariations}
  </section>;
};

export default SelectsPage;
