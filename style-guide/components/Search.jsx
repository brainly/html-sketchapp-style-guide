import React from 'react';
import Search, {SIZE, COLOR} from 'style-guide/src/components/search/Search';
import Icon, {ICON_COLOR, TYPE} from 'style-guide/src/components/icons/Icon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const SearchPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true].forEach(noBorder => {
      const name =
      `Search/${size}/${noBorder ? 'no border' : '_default_'}`;

      const noBorderClass = noBorder ? 'sg-input--no-border' : '';
      const searchInputClass = 
        `sg-input sg-input--${size} sg-input--with-icon sg-search__input ${noBorderClass}`;

      variations.push(<div title={name} className='inline-item'>
        <div className="sg-search">
          <div className={searchInputClass}>
            <div className="sg-search__icon">
              <Icon type={TYPE.SEARCH} color={ICON_COLOR.GRAY_SECONDARY} size={18}/>
            </div>
            <div className="custom__placeholder sg-text sg-text--gray">Find all the answers...</div>
          </div>
        </div>
      </div>);

      variations.push(<br/>);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default SearchPage;
