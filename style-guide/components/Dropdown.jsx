import React from 'react';
import {ICON_COLOR, TYPE} from 'style-guide/src/components/icons/Icon';
import DropdownContainer from 'style-guide/src/components/dropdowns/DropdownContainer';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const DropdownsPage = () => {
  const variations = [];

  [false, true].forEach(opened => {

    const name =
      ` Dropdown/${opened ? 'opened' : 'closed'}`;

    variations.push(<div title={name} className='inline-item'>
      <DropdownContainer items={[{'id': 'dd-item-1', 'text': '1st item'}, {'id': 'dd-item-2', 'text': '2nd item'}, {'id': 'dd-item-3', 'text': '3rd item'}]} label="Pick one…" isOpened={opened}/>
    </div>);
    variations.push(<br/>);
  });

  return <section>
    {variations}
  </section>;
};

export default DropdownsPage;
