import React from 'react';
import Avatar, {SIZE} from 'brainly-style-guide/src/components/avatar/Avatar';
import {getValues} from '../utils/getValues';

const AvatarsPage = () => {
  const avatarVariations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true].forEach(border => {
      [null, 'https://source.unsplash.com/240x240/?cat'].forEach(src => {
        let avatarSize;

        if (size === 'xxs') {
          avatarSize = '16';
        } else if (size === 'xs') {
          avatarSize = '24';
        } else if (size === 's') {
          avatarSize = '32';
        } else if (size === 'm') {
          avatarSize = '40';
        } else if (size === 'l') {
          avatarSize = '56';
        } else if (size === 'xl') {
          avatarSize = '80';
        } else if (size === 'xxl') {
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
