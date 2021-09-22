import React from 'react';
import cn from 'classnames';
import { ReactComponent as Close } from '../../../Assets/svg/x.svg';
import { ReactComponent as Burg } from '../../../Assets/svg/menu_btn.svg';
import s from './Burger.module.scss';

export default function Burger({ onBurgerClicked, onSidebarClicked }) {
  return (
    <div className={s.burger}>
      {onBurgerClicked ? (
        <Close className={s.close} onClick={onSidebarClicked} />
      ) : (
        <Burg
          className={cn(s.line, { [s.active]: onBurgerClicked })}
          onClick={onSidebarClicked}
        />
      )}
    </div>
  );
}
