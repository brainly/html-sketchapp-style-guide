import React from 'react';
import FlashMessage, {TYPE} from 'style-guide/src/components/flash-messages/FlashMessage';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const FlashMessagesPage = () => {
  const variations = [];

  getValues(TYPE, false).forEach(type => {

    const name =
    `FlashMessage/${type}`;
    const text = 'Example flash message text';

    variations.push(<div title={name} className='inline-item'>
      <FlashMessage text={text} type={type} /><br/>
    </div>);
    variations.push(<br/>);
  });

  return <section>
    {variations}
  </section>;
};

export default FlashMessagesPage;
