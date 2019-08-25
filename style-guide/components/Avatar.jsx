import React from 'react';
import Avatar, {SIZE} from 'style-guide/src/components/avatar/Avatar';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const AvatarsPage = () => {
  const avatarVariations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true].forEach(border => {
      [null, 'https://source.unsplash.com/240x240/?cat'].forEach(src => {
        const name =
        `Avatar/${size}/${border ? 'border' : 'no-border'}/${src ? 'with image' : 'without image'}`;

        avatarVariations.push(<div key={name} title={name} className='inline-item'>
          <Avatar size={size} border={border} imgSrc={src} />
        </div>);
      });
    });
    avatarVariations.push(<br/>);
  });

  return <section>
    {avatarVariations}
  </section>;
};

export default AvatarsPage;
