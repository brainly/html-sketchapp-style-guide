import React from 'react';
import Card from 'style-guide/src/components/card/Card';
import CardHole, {CARD_HOLE_COLOR} from 'style-guide/src/components/card/CardHole';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

// TODO check colors for holes
const CardsPage = () => {
  const variations = [];

  getValues(CARD_HOLE_COLOR, false).forEach(color => {
    [false, true].forEach(noBorder => {
      [false, true].forEach(shadow => {
        const name =
        `Card/${color}/${shadow ? 'shadow' : 'no-shadow'}/${noBorder ? 'border' : 'no-border'}`;

        variations.push(<div title={name} className='inline-item'>
          <Card noBorder={noBorder} shadow={shadow}>
            <CardHole>
            </CardHole>
            <CardHole color={color}>
            </CardHole>
          </Card>
        </div>);

        variations.push(<br/>);
      });
    });
  });

  return <section>
    {variations}
  </section>;
};

export default CardsPage;
