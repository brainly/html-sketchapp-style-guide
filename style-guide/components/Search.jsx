import React from 'react';
import Search, {SIZE, COLOR} from 'style-guide/src/components/search/Search';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const SearchPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true].forEach(noBorder => {
      const name =
      `Search/${size}/${noBorder ? 'no border' : '_default_'}`;

      variations.push(<div title={name} className='inline-item'>
        <Search size={size} placeholder="Find all the answers..." noBorder={noBorder} />
      </div>);

      variations.push(<br/>);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default SearchPage;
