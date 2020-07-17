import React from 'react';
import {getValues} from '../utils/getValues';

import {SIZE, COLOR} from 'brainly-style-guide/src/components/search/Search';
import Icon from 'brainly-style-guide/src/components/icons/Icon';
import Button from 'brainly-style-guide/src/components/buttons/Button';

const SearchPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true].forEach(withRoundButton => {
        const name =
        `Search/${color}/${size}/${withRoundButton ? 'round button' : '_default_'}`;

        const searchSizeClass = size === 'l' ? `sg-search sg-search--${size}` : 'sg-search';
        const searchInputColorClass = color === 'white' ? `sg-input--${color}` : '';
        const searchInputClass =
          `sg-input sg-input--${size} ${searchInputColorClass} sg-input--with-icon sg-search__input`;
        const placeholderColor = 'gray-secondary';

        variations.push(<div title={name} className='inline-item'>
          <div className={searchSizeClass}>
            <div className={searchInputClass}>
              {withRoundButton ?
                <div className="sg-search__icon">
                  <Button type="solid" icon={<Icon
                    type="search"
                    size={size === 'l' ? 24 : 16}
                    color="adaptive"
                  />} iconOnly size={size === 'l' ? 'm' : 's'} />
                </div> :
                <button className="sg-search__icon">

                  <Icon type="search" color="gray-secondary" size={size === 'l' ? 24 : 18} />

                </button>
              }
              <div
                className={`sg-text sg-text--${placeholderColor}`}
                style={size !== 'l' ? {fontSize: '16px'} : undefined}
              >
                Find all the answers...
              </div>
            </div>
          </div>
        </div>);

        variations.push(<br/>);
      });
    });
  });

  return <section>
    {variations}
  </section>;
};

export default SearchPage;
