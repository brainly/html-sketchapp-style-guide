import React from 'react';
import List from 'brainly-style-guide/src/components/list/List';
import ListItem from 'brainly-style-guide/src/components/list/ListItem';
import ListItemIcon from 'brainly-style-guide/src/components/list/ListItemIcon';
import Icon, {TYPE as ICON_TYPE, ICON_COLOR} from 'brainly-style-guide/src/components/icons/Icon';
import Text from 'brainly-style-guide/src/components/text/Text';

const firstString = 'One two three';
const secondString = 'Two three four';
const thirdString = 'Three four five';
const items = [firstString, secondString, thirdString];

const ListsPage = () => {
  const variant = [];

  [false, true].forEach(spaced => {
    const name = `List/${spaced ? 'spaced' : '_default_'}`;
    const classNamespace = spaced ? 'sg-list--spaced-elements' : null;

    variant.push(<div title={name} className='inline-item'>
      <List className={classNamespace}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Icon color={ICON_COLOR.GRAY} type={ICON_TYPE.ARROW_RIGHT} size={18} />
            </ListItemIcon>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </List>
    </div>);
  });
  return <section>
    {variant}
  </section>;
};

export default ListsPage;
