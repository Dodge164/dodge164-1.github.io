import React, { useContext } from 'react';
import cn from 'classnames';
import { ReactComponent as Close } from '../../../Assets/svg/x.svg';
import { ReactComponent as Burger } from '../../../Assets/svg/menu_btn.svg';
import Context from '../../../context';
import s from './Burger.module.scss';

export default function BurgerContainer() {
  const { isBurgerClicked, setIsBurgerClicked } = useContext(Context);
  const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <div>
      <div className={s.burger}>
        {isBurgerClicked ? (
          <Close className={s.close} onClick={showSidebar} />
        ) : (
          <Burger
            className={cn(s.line, { [s.active]: isBurgerClicked })}
            onClick={showSidebar}
          />
        )}
      </div>
    </div>
  );
}
