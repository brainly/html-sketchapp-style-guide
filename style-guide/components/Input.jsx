import React from 'react';
import Input, {
  COLOR,
  SIZE,
} from 'style-guide/src/components/form-elements/Input';
import {getValues} from '../utils/getValues';

const InputsPage = () => {
  const InputVariations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(COLOR, false).forEach(color => {
      [false, true, null].forEach(valid => {
        let name = `Input/${color}/${size}/`;
        let selectValidationClass;

        const inputSizeClass = size === 'large' ? `sg-input--${size}` : '';
        const inputColorClass = color === 'white' ? `sg-input--${color}` : '';

        if (valid === true) {
          name += 'valid';
          selectValidationClass = 'sg-input--valid';
        } else if (valid === false) {
          name += 'invalid';
          selectValidationClass = 'sg-input--invalid';
        } else {
          name += '_default';
          selectValidationClass = '';
        }

        const placeholderSize = size !== 'large' ? 'sg-text--small' : '';

        InputVariations.push(
          <div title={name} className="inline-item">
            <div
              className={`sg-input ${inputSizeClass} ${inputColorClass} ${selectValidationClass}`}
            >
              <div className={`sg-text ${placeholderSize}`}>input text</div>
            </div>
          </div>
        );
      });
    });
    InputVariations.push(<br />);
  });

  return <section>{InputVariations}</section>;
};

export default InputsPage;
