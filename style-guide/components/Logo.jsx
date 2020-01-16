import React from 'react';
import Logo, {TYPE} from 'brainly-style-guide/src/components/logo/Logo';

const LogoPage = () => {
  const variations = [];

  Object.values(TYPE).forEach(type => {
    const name =
    `Logo/${type}`;

    variations.push(<div title={name} className='inline-item'>
      <Logo type={type} />
    </div>);
  });

  return <section>
    {variations}
  </section>;
};

export default LogoPage;
