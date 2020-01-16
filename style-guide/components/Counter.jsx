import React from 'react';

import Counter, {COUNTER_SIZE} from 'brainly-style-guide/src/components/counters/Counter';
import Text from 'brainly-style-guide/src/components/text/Text';
import {getValues} from '../utils/getValues';

const CountersPage = () => {
  const variations = [];

  getValues(COUNTER_SIZE, false).forEach(size => {
    [false, true].forEach(icon => {
      const name =
              `Counter/${size}/${icon ? 'with icon' : '_default'}`;

      const textWithIcon = (
        <>
          <Text type="span" weight="bold" size={size === 'small' ? 'xsmall' : 'small'}>+15</Text>{' '}
          <Text weight="bold" color="gray-secondary" type="span" size={size === 'small' ? 'xsmall' : 'small'}>pts</Text>
        </>
      );

      const componentText = icon ?  textWithIcon : '2';

      variations.push(<div title={name} className='inline-item'>
        <Counter icon={icon ? 'points' : undefined} size={size}>{componentText}</Counter>
      </div>);

      variations.push(<br/>);
    });

  });

  return <section>
    {variations}
  </section>;
};

export default CountersPage;
