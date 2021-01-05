import React from 'react';
import Icon, {
  TYPE,
  ICON_COLOR,
  SIZE,
} from 'brainly-style-guide/src/components/icons/Icon';
import MobileIcon, {
  TYPE as MOBILE_ICON_TYPE,
} from 'brainly-style-guide/src/components/mobile-icons/MobileIcon';
import {getValues} from '../utils/getValues';
import {getIconGroup} from '../utils/getIconGroup';

const IconsPage = () => {
  const variations = [];

  const iconTypes = getValues(TYPE, false);
  const mobileIconTypes = getValues(MOBILE_ICON_TYPE, false);
  const uniqueMobileIconTypes = mobileIconTypes.filter(
    mobileIconType => !iconTypes.includes(mobileIconType),
  );

  iconTypes.forEach(type => {
    getValues(SIZE, false).forEach(size => {
      const name = `Icon/${getIconGroup(type)}/${type}/${size}`;

      variations.push(
        <div title={name} className="inline-item">
          <Icon type={type} size={size} color={ICON_COLOR.DARK} />
        </div>,
      );
      variations.push(<br />);
    });
  });

  uniqueMobileIconTypes.forEach(type => {
    getValues(SIZE, false).forEach(size => {
      const name = `Icon/${getIconGroup(type)}/${type}/${size}`;

      variations.push(
        <div title={name} className="inline-item">
          <MobileIcon type={type} size={size} color={ICON_COLOR.DARK} />
        </div>,
      );
      variations.push(<br />);
    });
  });

  return <section>{variations}</section>;
};

export default IconsPage;
