import React from 'react';
import Breadcrumb from 'style-guide/src/components/breadcrumbs/Breadcrumb';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const BreadcrumbsPage = () => {
  const breadcrumbVariations = [];

  const name = 'Breadcrumb';
  const elements = ['Comments (9)', 'Report', 'Follow'];

  breadcrumbVariations.push(<div title={name} className='inline-item'>
    <Breadcrumb elements={elements}></Breadcrumb>
  </div>);

  return <section>
    {breadcrumbVariations}
  </section>;
};

export default BreadcrumbsPage;
