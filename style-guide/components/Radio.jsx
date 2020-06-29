import React from 'react';
import Radio, {RADIO_SIZE} from 'brainly-style-guide/src/components/form-elements/Radio';
import {getValues} from '../utils/getValues';

const RadioPage = () => {

  const RadioVariations = [];
  
  getValues(RADIO_SIZE, false).forEach(size => {
    [false, true].forEach(checked => {
      let name = `Radio/${size}/`;

      if (checked === false) {
        name += '_default_';
      } else {
        name += 'checked';
      }

      RadioVariations.push(<div title={name} className='inline-item'>
        <Radio onChange={() => {}} size={size} checked={checked} />
      </div>);
      RadioVariations.push(<br/>);
    });
  });

  return <section>
    {RadioVariations}
  </section>;
};

export default RadioPage;
