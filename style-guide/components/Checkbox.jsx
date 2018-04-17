import React from 'react';
import Checkbox from 'style-guide/src/components/form-elements/Checkbox';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const CheckboxesPage = () => <section>
  <div title='checkbox' className='inline-item'><Checkbox /></div>
</section>;

export default CheckboxesPage;
