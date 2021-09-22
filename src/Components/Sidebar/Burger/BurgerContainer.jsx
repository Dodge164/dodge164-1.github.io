import React, { useContext } from 'react';
import Burger from './Burger';
import Context from '../../../context';

export default function BurgerContainer() {
  const { isBurgerClicked, setIsBurgerClicked } = useContext(Context);
  const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <Burger onBurgerClicked={isBurgerClicked} onSidebarClicked={showSidebar} />
  );
}
