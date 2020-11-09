import React from 'react';
import colors from 'brainly-style-guide/src/components/colors/colors';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ColorsPage = () => {
  const colorComponents = [];

  Object.keys(colors).forEach(category => {
    colors[category].forEach(color => {
      const name = `${capitalize(category)}/${color.name}`;

      colorComponents.push(
        <div className='color-box inline-item' style={{backgroundColor: `#${color.hex}`}} title={name}></div>
      );
    });
    colorComponents.push(<br/>);
  });

  return <div className='colors-list'>
    {colorComponents}
  </div>;
};

export default ColorsPage;
