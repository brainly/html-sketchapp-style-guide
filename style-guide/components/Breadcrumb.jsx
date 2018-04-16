import React from 'react';
import Breadcrumb from 'style-guide/src/components/breadcrumbs/Breadcrumb';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const BreadcrumbsPage = () => {
  const breadcrumbVariations = [];

  [false, true].forEach(adaptive => {
    [false, true].forEach(short => {
      const name =
        `Breadcrumb/${adaptive ? 'adaptive' : 'normal'}/${short ? 'short' : 'normal'}`;
      const elements = ['Comments (9)', 'Report', 'Follow'];

      breadcrumbVariations.push(<div title={name} className='inline-item'>
        <Breadcrumb adaptive={adaptive} short={short} elements={elements}></Breadcrumb>
      </div>);
    });
    breadcrumbVariations.push(<br/>);
  });

  return <section>
    {breadcrumbVariations}
  </section>;
};

export default BreadcrumbsPage;
