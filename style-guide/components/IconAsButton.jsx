import React from 'react';
import Icon, {TYPE, ICON_COLOR} from 'style-guide/src/components/icons/Icon';
import IconAsButton, {SIZE} from 'style-guide/src/components/icon-as-button/IconAsButton';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const IconsAsButtonPage = () => {
  const variations = [];

  getValues(SIZE, false).forEach(size => {
    [false, true].forEach(border => {
      [false, true].forEach(action => {
        [false, true].forEach(active => {
          [false, true].forEach(transparent => {

            if (border && active ||
                  !border && !active ||
                  action && active && transparent ||
                  border && !active && transparent ||
                  action && !active) {
              return;
            }

            const name = `IconAsButton/${size}/${border ? 'border' : 'no-border'}/${active ? 'active' : 'not-active'}/${transparent ? 'transparent' : 'not-transparent'}`;

            variations.push(<div title={name} className='inline-item'>
              <IconAsButton type={TYPE.COMMENT} size={size} border={border} action={action} active={active} transparent={transparent} />
            </div>);
          });
        });
      });
    });
    variations.push(<br />);
  });

  return <section>
    {variations}
  </section>;
};

export default IconsAsButtonPage;
