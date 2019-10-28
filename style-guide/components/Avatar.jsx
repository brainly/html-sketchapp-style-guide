import React from 'react';
import Avatar, {SIZE} from 'style-guide/src/components/avatar/Avatar';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// small 24
// medium 32
// large 56
// xlarge 80
// xxlarge 84
const AvatarsPage = () => {
  const avatarVariations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true].forEach(border => {
      [null, 'https://source.unsplash.com/240x240/?cat'].forEach(src => {
        let avatarSize;

        if (size === 'small') {
          avatarSize = '24';
        } else if (size === 'normal') {
          avatarSize = '32';
        } else if (size === 'large') {
          avatarSize = '56';
        } else if (size === 'xlarge') {
          avatarSize = '80';
        } else {
          avatarSize = '104';
        }

        const name =
        `Avatar/${avatarSize}/${border ? 'border' : 'no-border'}/${src ? 'with image' : 'without image'}`;

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
