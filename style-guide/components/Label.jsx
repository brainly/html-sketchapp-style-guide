import React from 'react';
import {ICON_COLOR, TYPE} from 'style-guide/src/components/icons/Icon';
import Label, {SIZE} from 'style-guide/src/components/labels/Label';
import LabelIcon from 'style-guide/src/components/labels/subcomponents/LabelIcon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO check if unstyled, elementsToTop is needed
// Sketch crash when all icon are exported
const LabelsPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(ICON_COLOR, false).forEach(color => {
      [false, true].forEach(emphasised => {
        [false, true].forEach(elementsToTop => {
          [false, true].forEach(secondary => {
            if (color === ICON_COLOR.ADAPTIVE) {
              return;
            }

            if (emphasised && elementsToTop) {
              return;
            }

            const name =
          `Label/${size.CLASS_NAME}/${TYPE.ANSWER}/${color}/${secondary ? 'secondary' : 'primary'}/${emphasised ? 'emphasised' : 'standard'}/${elementsToTop ? 'elementsToTop' : 'middle'}`;

            variations.push(<div title={name} className='inline-item'>
              <Label text='label' size={size} iconType={TYPE.ANSWER} iconColor={color} emphasised={emphasised} elementsToTop={elementsToTop} secondary={secondary} />
            </div>);

          });

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
