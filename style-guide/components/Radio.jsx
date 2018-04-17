import React from 'react';
import Radio from 'style-guide/src/components/form-elements/Radio';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const RadioPage = () => <section>
  <div title='checkbox' className='inline-item'><Radio /></div>
</section>;

export default RadioPage;
