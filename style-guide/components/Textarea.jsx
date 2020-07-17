import React from 'react';

import {SIZE, TEXTAREA_COLOR} from 'brainly-style-guide/src/components/form-elements/Textarea.jsx';
import {getValues} from '../utils/getValues';

const TextareasPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(TEXTAREA_COLOR, false).forEach(color => {
      [false, true, null].forEach(valid => {

        let name = `Textarea/${color}/${size}/`;
        let validationClassNameSet;

        if (valid === true) {
          name += 'valid';
          validationClassNameSet = 'sg-textarea--valid';
        } else if (valid === false) {
          name += 'invalid';
          validationClassNameSet = 'sg-textarea--invalid';
        } else {
          name += '_default_';
          validationClassNameSet = '';
        }

        const textareaClassName = `sg-textarea sg-textarea--${size} sg-textarea--${color} ${validationClassNameSet}`;
        const placeholderColor = 'gray-secondary';

        variations.push(<div title={name} className='inline-item'>
          <div className={textareaClassName}>
            <div
              className={`sg-text  sg-text--${placeholderColor}`}
              style={{fontSize: '16px'}}
            >
              textarea example
            </div>
          </div>
        </div>);
      });
    });
  });

  variations.push(<br />);

  return <section>
    {variations}
  </section>;
};

export default TextareasPage;
