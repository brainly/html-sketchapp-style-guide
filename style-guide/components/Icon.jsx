import React from 'react';
import Icon, { TYPE, ICON_COLOR, SIZE } from 'style-guide/src/components/icons/Icon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const IconsPage = () => {
  const variations = [];

  getValues(TYPE, false).forEach(type => {
    getValues(SIZE, false).forEach(size => {
      const name = `Icon/${type}/${size}`;

      variations.push(<div title={name} className='inline-item'>
        <Icon type={type} size={size} color={ICON_COLOR.DARK} />
      </div>);
    });
    variations.push(<br />);
  });

  return <section>
    {variations}
  </section>;
};

export default IconsPage;
