import React from 'react';
import Badge, {SIZE, COLOR} from 'style-guide/src/components/badges/Badge';
import Text from 'style-guide/src/components/text/Text.jsx';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const BadgesPage = () => {
  const badgesVariations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true].forEach(rounded => {
        const name =
        `Badge/${size}/${rounded ? 'rounded' : 'normal'}`;

        badgesVariations.push(<div title={name} className='inline-item'>
          <Badge size={size} color={color} rounded={rounded}>3 / 5</Badge>
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
