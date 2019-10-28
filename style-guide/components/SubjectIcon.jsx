import React from 'react';
import SubjectIcon, {TYPE, SIZE, ICON_COLOR} from 'style-guide/src/components/subject-icons/SubjectIcon';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const SubjectIconsPage = () => {
  const variations = [];

  getValues(TYPE, false).forEach(type => {
    getValues(SIZE, false).forEach(size => {
      [true, false].forEach(mono => {
        let subjectIconSize;

        if (size === 'small') {
          subjectIconSize = '24';
        } else if (size === 'medium') {
          subjectIconSize = '32';
        } else {
          subjectIconSize = '64';
        }

        const name = `SubjectIcon/${type}/${subjectIconSize}/${mono ? 'mono' : 'color'}`;

        variations.push(<div title={name} className='inline-item'>
          <SubjectIcon type={type} size={size} monoColor={mono ? ICON_COLOR.LIGHT : undefined} />
        </div>);
      });
    });
    variations.push(<br />);
  });

  return <section>
    {variations}
  </section>;
};

export default SubjectIconsPage;
