import React from 'react';
import {getValues} from '../utils/getValues';

import {SIZE, COLOR} from 'brainly-style-guide/src/components/form-elements/Select';
import Icon from 'brainly-style-guide/src/components/icons/Icon';

// TODO export invalid also?
const SelectsPage = () => {
  const SelectVariations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true, null].forEach(valid => {
        let name = `Select/${color}/${size}/`;
        let selectValidationClass;

        const selectSizeClass = size === 'l' ? `sg-select--${size}` : '';
        const selectColorClass = color === 'white' ? `sg-select--${color}` : '';

        if (valid === true) {
          name += 'valid';
          selectValidationClass = 'sg-select--valid';
        } else if (valid === false) {
          name += 'invalid';
          selectValidationClass = 'sg-select--invalid';
        } else {
          name += '_default';
          selectValidationClass = '';
        }

        const placeholderColor = 'gray-secondary';

        SelectVariations.push(<div title={name} className='inline-item'>
          <div className={`sg-select ${selectSizeClass} ${selectColorClass} ${selectValidationClass}`}>
            <div className="sg-select__element">
              <div
                className={`sg-text sg-text--${placeholderColor}`}
                style={size !== 'l' ? {fontSize: '16px'} : undefined}
              >
                Option 1
              </div>
            </div>
            <div className="sg-select__icon">
              <Icon type="arrow_down" size={size === 'l' ? 24 : 16} color="gray-secondary" />
            </div>
          </div>
        </div>);
        SelectVariations.push(<br/>);
      });
    });
  });

  return <section>
    {SelectVariations}
  </section>;
};

export default SelectsPage;
