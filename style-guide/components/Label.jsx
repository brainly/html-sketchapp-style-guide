import React from 'react';
import {ICON_COLOR, TYPE} from 'style-guide/src/components/icons/Icon';
import Label, {SIZE} from 'style-guide/src/components/labels/Label';
import LabelIcon from 'style-guide/src/components/labels/subcomponents/LabelIcon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO check is unstyled, elementsToTop is needed
const LabelsPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    getValues(TYPE, false).forEach(type => {
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
          `Label/${size.CLASS_NAME}/${type}/${color}/${secondary ? 'secondary' : 'primary'}/${emphasised ? 'emphasised' : 'standard'}/${elementsToTop ? 'elementsToTop' : 'middle'}`;

              variations.push(<div title={name} className='inline-item'>
                <Label text='label' size={size} iconType={type} iconColor={color} emphasised={emphasised} elementsToTop={elementsToTop} secondary={secondary} />
              </div>);

            });
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
