import React, { useContext } from 'react';
import Burger from './BurgerOrderInfo';
import Context from '../../../context';

export default function BurgerContainer() {
  const { isOrderBurgerClicked, setIsOrderBurgerClicked } = useContext(Context);
  const showSidebar = () => setIsOrderBurgerClicked((prev) => !prev);
  return (
    <Burger
      onBurgerClicked={isOrderBurgerClicked}
      onSidebarClicked={showSidebar}
    />
  );
}
