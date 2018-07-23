import React from 'react';
import Select from 'style-guide/src/components/form-elements/Select';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO export invalid also?
const SelectsPage = () => {
  const SelectVariations = [];

  [false, true, null].forEach(valid => {
    let name = 'Select/';
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

    SelectVariations.push(<div title={name} className='inline-item'>
      <div className="sg-select">
        <div className={classNameSet}>Option 1</div>
        
        <div className="custom__icon">
          <svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1">
            <g transform="translate(-82.000000, -12.000000)" fill="#9FA6B5">
              <polygon transform="translate(86.000000, 15.000000) scale(1, -1) translate(-86.000000, -15.000000) " points="86 12 90 18 82 18"></polygon>
            </g> 
          </svg>
        </div>
       
      </div>
    </div>);
    SelectVariations.push(<br/>);
  });

  return <section>
    {SelectVariations}
  </section>;
};

export default SelectsPage;
