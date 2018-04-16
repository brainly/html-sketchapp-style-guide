import React from 'react';
import { ICON_COLOR } from 'style-guide/src/components/icons/Icon';
import MathSymbol, { MATH_SYMBOL_TYPE, SIZE } from 'style-guide/src/components/math-symbols/MathSymbol';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const MathSymbolsPage = () => {
  const variations = [];

  getValues(MATH_SYMBOL_TYPE, false).forEach(type => {
    getValues(SIZE, false).forEach(size => {
      const name = `MathSymbol/${type}/${size}`;

      variations.push(<div title={name} className='inline-item'>
        <MathSymbol type={type} size={size} color={ICON_COLOR.DARK} />
      </div>);
    });
    variations.push(<br />);
  });

  return <section>
    {variations}
  </section>;
};

export default MathSymbolsPage;
