import React from 'react';
import Label, {LABEL_TYPE, LABEL_COLORS_SET} from 'brainly-style-guide/src/components/labels/Label';

import {getValues} from '../utils/getValues';

// TODO check if unstyled, elementsToTop is needed

const LabelsPage = () => {
  const variations = [];

  getValues(LABEL_TYPE, false).forEach(type => {
    getValues(LABEL_COLORS_SET, false).forEach(color => {
      [false, true].forEach(iconType => {
        [false, true].forEach(onClose => {

          const name =
              `Label/${type}/${color}/${iconType ? 'with icon' : '_default'}/${onClose ? 'with close' : '_default'}`;

          variations.push(<div title={name} className='inline-item'>
            <Label
              color={color}
              type={type}
              iconType={iconType ? 'answer' : null}
              onClose={onClose}
            >
              label
            </Label>
          </div>);

        });

        variations.push(<br/>);
      });
    });
  });

  return <section>
    {variations}
  </section>;
};

export default LabelsPage;
