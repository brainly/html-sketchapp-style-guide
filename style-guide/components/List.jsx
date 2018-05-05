import React from 'react';
import List from 'style-guide/src/components/list/List';
import ListItem from 'style-guide/src/components/list/ListItem';
import ListItemIcon from 'style-guide/src/components/list/ListItemIcon';
import Icon, {TYPE as ICON_TYPE, ICON_COLOR} from 'style-guide/src/components/icons/Icon';

const firstString = 'One two three';
const secondString = 'Two three four';
const thirdString = 'Three four five';
const items = [firstString, secondString, thirdString];

const ListsPage = () => {
  const variant = [];
  const name = 'List';

  variant.push(<div title={name} className='inline-item'>
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <Icon color={ICON_COLOR.LIGHT} type={ICON_TYPE.ARROW_RIGHT} size={18} />
          </ListItemIcon>
          <p>{item}</p>
        </ListItem>
      ))}
    </List>
  </div>);
  return <section>
    {variant}
  </section>;
};

export default ListsPage;
