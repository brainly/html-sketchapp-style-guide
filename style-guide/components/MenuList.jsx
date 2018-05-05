import React from 'react';
import MenuList, {SIZE} from 'style-guide/src/components/list/MenuList';

const firstString = 'One two three';
const secondString = 'Two three four';
const thirdString = 'Three four five';
const menuItem1 = {text: firstString, href: '#'};
const menuItem2 = {text: secondString, href: '#'};
const menuItem3 = {text: thirdString, href: '#'};
const menuItems = [menuItem1, menuItem2, menuItem3];

const MenuPage = () => {
  const variant = [];
  const name = 'MenuList';

  variant.push(<div title={name} className='inline-item'>
    <MenuList items={menuItems} />
  </div>);
  return <section>
    {variant}
  </section>;
};

export default MenuPage;
