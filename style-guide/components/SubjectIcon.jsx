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
        const name = `SubjectIcon/${type}/${size}/${mono ? 'mono' : 'color'}`;

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
