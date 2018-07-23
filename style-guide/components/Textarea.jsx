import React from 'react';
import Textarea, {SIZE} from 'style-guide/src/components/form-elements/Textarea.jsx';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextareasPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true, null].forEach(valid => {

      let name = `Textarea/${size}/`;
      let classNameSet;
    
      if (valid === true) {
        name += 'valid';
        classNameSet = 'custom__placeholder sg-text sg-text--mint';
      } else if (valid === false) {
        name += 'invalid';
        classNameSet = 'custom__placeholder sg-text sg-text--peach';
      } else {
        name += '_default_';
        classNameSet = 'custom__placeholder sg-text sg-text--gray-secondary';
      }

      const textareaClassName = `sg-textarea sg-textarea--${size}`;

      variations.push(<div title={name} className='inline-item'>
        <div className={textareaClassName}>
          <div className={classNameSet}>textarea example</div>
        </div>
      </div>);
    });
  });

  variations.push(<br />);

  return <section>
    {variations}
  </section>;
};


export default TextareasPage;
