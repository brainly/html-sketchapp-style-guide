import React from 'react';
import Bubble, {DIRECTION, ALIGNMENT} from 'style-guide/src/components/bubble/Bubble';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO check if padding is needed
const BubblesPage = () => {
  const variations = [];

  getValues(DIRECTION, false).forEach(direction => {
    getValues(ALIGNMENT, false).forEach(alignment => {
      const name =
      `Bubble/${direction}/${alignment}`;

      variations.push(<div title={name} className='inline-item'>
        <Bubble direction={direction} alignment={alignment}>
          Hi there!
          Just wondering if you have any problems with your school work.
        </Bubble><br/>
      </div>);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default BubblesPage;
