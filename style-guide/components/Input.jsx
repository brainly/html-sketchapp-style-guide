import React from 'react';
import Input, {COLOR, SIZE} from 'style-guide/src/components/form-elements/Input';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const InputsPage = () => {
  const InputVariations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true].forEach(noBorder => {
        const name =
        `Input/${color}/${size}/${noBorder ? 'no-border' : 'border'}`;

        const classNamespace = 
          `sg-input sg-input--${size} sg-input--${color} ${noBorder ? 'sg-input--no-border' : ''} `;

        InputVariations.push(<div title={name} className='inline-item'>
          <div className={classNamespace}>
            <div className="custom__placeholder sg-text sg-text--gray-secondary">input text</div>
          </div>
        </div>);

      });
    });
    InputVariations.push(<br/>);
  });

  return <section>
    {InputVariations}
  </section>;
};

export default InputsPage;
