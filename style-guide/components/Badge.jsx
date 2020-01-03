import React from 'react';

import TextBadge, {
  TEXT_BADGE_COLOR,
  TEXT_BADGE_SIZE,
} from 'style-guide/src/components/badges/TextBadge';
import {getValues} from '../utils/getValues';

const BadgesPage = () => {
  const variations = [];

  getValues(TEXT_BADGE_SIZE, false).forEach(size => {
    getValues(TEXT_BADGE_COLOR, false).forEach(color => {
      const name = `Badge/${size}/${color}`;

      variations.push(
        <div title={name} className="inline-item">
          <TextBadge color={color} size={size}>
            {size} / {color}
          </TextBadge>
        </div>
      );
    });

    variations.push(<br />);
  });

  return <section>{variations}</section>;
};

export default BadgesPage;
