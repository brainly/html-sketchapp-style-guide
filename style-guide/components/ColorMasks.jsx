import React from 'react';
import colors from 'brainly-style-guide/src/components/colors/colors';

const ColorMasksPage = () => {
  const colorMasksComponents = [];
  const outOfStyleGuideColors = [
    {
      name: 'Gray Dark 1100 DM',
      hex: '1C2126',
    },
    {
      name: 'Gray Dark 1000 DM',
      hex: '252C33',
    },
    {
      name: 'Gray Dark 800 DM',
      hex: '46535F',
    },
  ];
  const enhancedColors = {
    ...colors,
    neutrals: [
      ...colors.neutrals,
      ...outOfStyleGuideColors,
    ],
  };

  Object.keys(enhancedColors).forEach(category => {
    enhancedColors[category].forEach(color => {
      const name = `ColorMask/${category}/${color.name}`;

      colorMasksComponents.push(
        <div title={name} className='inline-item'>
          <div className='color-mask-box' style={{backgroundColor: `#${color.hex}`}} title={name}></div>
        </div>
      );
    });
    colorMasksComponents.push(<br/>);
  });

  return <section>
    {colorMasksComponents}
  </section>;
};

export default ColorMasksPage;
