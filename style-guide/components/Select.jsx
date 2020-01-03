import React from 'react';
import {getValues} from '../utils/getValues';

import Select, {
  SIZE,
  COLOR,
} from 'style-guide/src/components/form-elements/Select';
import Icon from 'style-guide/src/components/icons/Icon';

// TODO export invalid also?
const SelectsPage = () => {
  const SelectVariations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true, null].forEach(valid => {
        let name = `Select/${size}/${color}/`;
        let selectValidationClass;

        const selectSizeClass = size === 'large' ? `sg-select--${size}` : '';
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

        const placeholderSize = size !== 'large' ? 'sg-text--small' : '';

        SelectVariations.push(
          <div title={name} className="inline-item">
            <div
              className={`sg-select ${selectSizeClass} ${selectColorClass} ${selectValidationClass}`}
            >
              {/* <div className="sg-select__element"> */}
              <div className={`sg-text ${placeholderSize}`}>Option 1</div>

              <div className="custom__icon custom-select__icon">
                <Icon
                  type="arrow_down"
                  size={size === 'large' ? 24 : 16}
                  color="gray-secondary"
                />
              </div>
              {/* </div> */}
            </div>
          </div>
        );
        SelectVariations.push(<br />);
      });
    });
  });

  return <section>{SelectVariations}</section>;
};

export default SelectsPage;
