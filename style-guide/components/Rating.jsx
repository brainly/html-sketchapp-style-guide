import React from 'react';
import Rating, {RATING_SIZE} from 'style-guide/src/components/rating/Rating';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO check if padding is needed
const RatingPage = () => {
  const variations = [];

  getValues(RATING_SIZE, false).forEach(size => {
    const name =
    `Rating/${size}`;

    variations.push(<div title={name} className='inline-item'>
      <Rating size={size} counter={34} active counterText="Hover to rate" />
    </div>);
  });

  return <section>
    {variations}
  </section>;
};

export default RatingPage;
