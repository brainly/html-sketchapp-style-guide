import React from 'react';
import {ICON_COLOR, TYPE} from 'style-guide/src/components/icons/Icon';
import Label, {SIZE} from 'style-guide/src/components/labels/Label';
import LabelIcon from 'style-guide/src/components/labels/subcomponents/LabelIcon';
import {getValues} from '../utils/getValues';

// TODO check if unstyled, elementsToTop is needed

const LabelsPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true].forEach(emphasised => {
      [false, true].forEach(elementsToTop => {
        [false, true].forEach(secondary => {
          if (emphasised && elementsToTop) {
            return;
          }

          const name =
          `Label/${size}/${TYPE.ANSWER}/${secondary ? 'secondary' : 'primary'}/${emphasised ? 'emphasised' : 'standard'}/${elementsToTop ? 'elementsToTop' : 'middle'}`;

          variations.push(<div title={name} className='inline-item'>
            <Label text='label' size={size} iconType={TYPE.ANSWER} iconColor={ICON_COLOR.BLUE} emphasised={emphasised} elementsToTop={elementsToTop} secondary={secondary} />
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
