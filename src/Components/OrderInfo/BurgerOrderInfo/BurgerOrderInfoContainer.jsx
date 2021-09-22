import React, { useContext } from 'react';
import Burger from './BurgerOrderInfo';
import Context from '../../../context';

export default function BurgerContainer() {
  const { isOrderBurgerClicked, setIsOrderBurgerClicked } = useContext(Context);
  const handleBurgerClicked = () => setIsOrderBurgerClicked((prev) => !prev);
  return (
    <Burger
      isBurgerClicked={isOrderBurgerClicked}
      onBurgerClicked={handleBurgerClicked}
    />
  );
}
