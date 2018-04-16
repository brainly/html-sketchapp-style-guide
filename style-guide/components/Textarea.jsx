import React from 'react';
import Textarea from 'style-guide/src/components/form-elements/Textarea.jsx';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextareasPage = () => <section>
  <div title="textarea" className='inline-item'>
    <Textarea placeholder="textarea example"/>
  </div>
</section>;

export default TextareasPage;
