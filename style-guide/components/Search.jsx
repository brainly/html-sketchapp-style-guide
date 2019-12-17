import React from 'react';
import {getValues} from '../utils/getValues';

import Search, {SIZE, COLOR} from 'style-guide/src/components/search/Search';
import Icon, {ICON_COLOR, TYPE} from 'style-guide/src/components/icons/Icon';
import RoundButton from 'style-guide/src/components/round-buttons/RoundButton';

const SearchPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true].forEach(withRoundButton => {
        const name =
        `Search/${size}/${color}/${withRoundButton ? 'round button' : '_default_'}`;

        const searchSizeClass = size === 'large' ? `sg-search sg-search--${size}` : 'sg-search';
        const searchInputColorClass = color === 'white' ? `sg-input--${color}` : '';
        const searchInputClass =
          `sg-input sg-input--${size} ${searchInputColorClass} sg-input--with-icon sg-search__input`;

        variations.push(<div title={name} className='inline-item'>
          <div className={searchSizeClass}>
            <div className={searchInputClass}>
              {withRoundButton ?
                <div className="sg-search__icon">
                  <RoundButton filled iconType="search" size={size === 'large' ? 'medium' : 'small'} color="black" />
                </div> :
                <button className="sg-search__icon">

                  <Icon type="search" color="gray-secondary" size={size === 'large' ? 24 : 18} />

                </button>
              }
              <div className="custom__placeholder sg-text sg-text--gray">Find all the answers...</div>
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
