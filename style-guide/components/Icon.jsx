import React from 'react';
import Icon, {STD_TYPE, ICON_COLOR, SIZE} from 'style-guide/src/components/icons/Icon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const LIMITED_ICON_COLOR = {
  BLUE: 'blue',
  DARK: 'dark',
  GRAY: 'gray',
  MINT: 'mint',
  MUSTARD: 'mustard',
  PEACH: 'peach'
};

const LIMITED_SIZE = [10, 14, 16, 18, 24, 26];
const IconsPage = () => {
  const variations = [];

  getValues(STD_TYPE, false).forEach(type => {
    getValues(LIMITED_SIZE, false).forEach(size => {
      const name = `Icon/${type}/${LIMITED_ICON_COLOR.BLUE}/${size}`;

      variations.push(<div title={name} className='inline-item'>
        <Icon type={type} size={size} color={LIMITED_ICON_COLOR.BLUE} />
      </div>);
      variations.push(<br />);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default IconsPage;
