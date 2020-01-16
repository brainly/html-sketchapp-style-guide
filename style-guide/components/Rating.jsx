import React from 'react';
import Rating, {RATING_SIZE} from 'brainly-style-guide/src/components/rating/Rating';
import {getValues} from '../utils/getValues';

// TODO check if padding is needed
const RatingPage = () => {
  const variations = [];

  getValues(RATING_SIZE, false).forEach(size => {
    const name =
    `Rating/${size}`;

    variations.push(<div title={name} className='inline-item'>
      <Rating size={size} counter={34} rate={3} active counterText="Hover to rate" />
    </div>);
  });

  return <section>
    {variations}
  </section>;
};

export default RatingPage;
