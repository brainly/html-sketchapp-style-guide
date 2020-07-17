import React from 'react';
import Dropdown from 'brainly-style-guide/src/components/dropdowns/Dropdown';

const DropdownsPage = () => {
  const variations = [];
  const links = [
    {label: 'brainly.in', url: 'brainly.in'},
    {label: 'brainly.com.br', url: 'brainly.in'},
    {label: 'brainly.pl', url: 'brainly.in'},
  ];

  const siteName = 'brainly.com';

  [false, true].forEach(opened => {
    ['default', 'white'].forEach(color => {

      const name =
        `Dropdown/${color}/${opened ? 'opened' : 'closed'}`;

      const dropdown = <Dropdown links={links} name={siteName} color={color} initiallyOpened={opened} />;

      variations.push(<div title={name} className='inline-item'>{dropdown}</div>);
    });
  });

  return <section>
    {variations}
  </section>;
};

export default DropdownsPage;
