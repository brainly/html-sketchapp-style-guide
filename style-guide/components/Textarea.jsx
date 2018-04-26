import React from 'react';
import Textarea, {SIZE} from 'style-guide/src/components/form-elements/Textarea.jsx';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextareasPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    const name = `Textarea/${size}`;

    variations.push(<div title={name} className='inline-item'>
      <Textarea size={size} placeholder="textarea example" />
    </div>);
  });

  variations.push(<br />);

  return <section>
    {variations}
  </section>;
};


export default TextareasPage;
