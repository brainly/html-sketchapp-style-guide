import React from 'react';
import TextBadge, {TEXT_BADGE_SIZE as SIZE, TEXT_BADGE_COLOR as COLOR} from 'style-guide/src/components/badges/TextBadge';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const BadgesPage = () => {
  const badgesVariations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true].forEach(rounded => {
        const name =
        `Badge/${size}/${color}/${rounded ? 'rounded' : '_default_'}`;

        badgesVariations.push(<div title={name} className='inline-item'>
          <TextBadge size={size} color={color} rounded={rounded}>3 / 5</TextBadge>
        </div>);
      });
    });
    badgesVariations.push(<br/>);
  });

  return <section>
    {badgesVariations}
  </section>;
};

export default BadgesPage;
