import React from 'react';
import Radio from 'style-guide/src/components/form-elements/Radio';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const RadioPage = () => {

  const RadioVariations = [];

  [false, true].forEach(checked => {
    let name = 'Radio/';

    if (checked === false) {
      name += '_default_';
    } else {
      name += 'checked';
    }

    RadioVariations.push(<div title={name} className='inline-item'>
      <Radio onChange={() => {}} checked={checked} />
    </div>);
    RadioVariations.push(<br/>);
  });

  return <section>
    {RadioVariations}
  </section>;
};

export default RadioPage;
