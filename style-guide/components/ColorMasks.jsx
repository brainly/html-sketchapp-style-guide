import React from 'react';
import colors from 'style-guide/src/components/colors/colors';

const ColorMasksPage = () => {
  const colorMasksComponents = [];

  Object.keys(colors).forEach(category => {
    colors[category].forEach(color => {
      const name = `ColorMask/${category}/${color.name}`;

      colorMasksComponents.push(
        <div title={name} className="inline-item">
          <div
            className="color-mask-box"
            style={{backgroundColor: `#${color.hex}`}}
            title={name}
          ></div>
        </div>
      );
    });
    colorMasksComponents.push(<br />);
  });

  return <section>{colorMasksComponents}</section>;
};

export default ColorMasksPage;
