import React from 'react';
import {ICON_COLOR} from 'brainly-style-guide/src/components/icons/Icon';
import MathSymbol, {MATH_SYMBOL_TYPE, SIZE} from 'brainly-style-guide/src/components/math-symbols/MathSymbol';
import {getValues} from '../utils/getValues';

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
