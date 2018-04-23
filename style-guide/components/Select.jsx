import React from 'react';
import Select from 'style-guide/src/components/form-elements/Select';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO export invalid also?
const SelectsPage = () => {
  const SelectVariations = [];

  [false, true, null].forEach(valid => {
    let name = 'Select/';

    if (valid === true) {
      name += 'valid';
    } else if (valid === false) {
      name += 'invalid';
    } else {
      name += '_default_';
    }

    SelectVariations.push(<div title={name} className='inline-item'>
      <Select valid={valid === true} invalid={valid === false} options={[{'value': 'option1', 'text': 'Option 1'}, {'value': 'option2', 'text': 'Option 2'}]} />
    </div>);
    SelectVariations.push(<br/>);
  });

  return <section>
    {SelectVariations}
  </section>;
};

export default SelectsPage;
