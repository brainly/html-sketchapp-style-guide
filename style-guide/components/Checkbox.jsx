import React from 'react';
import Checkbox from 'style-guide/src/components/form-elements/Checkbox';
import {getValues} from '../utils/getValues';

const CheckboxesPage = () => {
  const CheckboxVariations = [];

  [false, true].forEach(checked => {
    let name = 'Checkbox/';

    if (checked === false) {
      name += '_default_';
    } else {
      name += 'checked';
    }

    CheckboxVariations.push(<div title={name} className='inline-item'>
      <Checkbox onChange={() => {}} checked={checked} />
    </div>);
    CheckboxVariations.push(<br/>);
  });

  return <section>
    {CheckboxVariations}
  </section>;
};

export default CheckboxesPage;
