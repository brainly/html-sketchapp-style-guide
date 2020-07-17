import React from 'react';
import Bubble, {DIRECTION, ALIGNMENT} from 'brainly-style-guide/src/components/bubble/Bubble';
import {getValues} from '../utils/getValues';

// TODO check if padding is needed
const BubblesPage = () => {
  const variations = [];

  getValues(DIRECTION, false).forEach(direction => {
    getValues(ALIGNMENT, false).forEach(alignment => {
      let directionSorted;

      if (direction === 'top') {
        directionSorted = `___${direction}`;
      } else if (direction === 'right') {
        directionSorted = `__${direction}`;
      } else if (direction === 'bottom') {
        directionSorted = `_${direction}`;
      } else {
        directionSorted = `${direction}`;
      }
      let alignmentSorted;

      if (alignment === 'start') {
        alignmentSorted = `__${alignment}`;
      } else if (alignment === 'center') {
        alignmentSorted = `_${alignment}`;
      } else {
        alignmentSorted = `${alignment}`;
      }

      const name =
      `Bubble/${directionSorted}/${alignmentSorted}`;

      variations.push(<div title={name} className='inline-item'>
        <Bubble direction={direction} alignment={alignment}>
          Hi there!
          Just wondering if you have any problems with your school work.
        </Bubble>
        <br/>
      </div>);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default BubblesPage;
