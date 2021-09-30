import React from 'react';
import { ReactComponent as Close } from '../../../Assets/svg/x.svg';

import s from './BurgerOrderInfo.module.scss';

export default function BurgerOrderInfo({ isBurgerClicked, onBurgerClicked }) {
  return (
    <div className={s.burger}>
      {isBurgerClicked ? (
        <button type="button" className={s.btn} onClick={onBurgerClicked}>
          <Close className={s.close} />
        </button>
      ) : (
        <button type="button" className={s.btn} onClick={onBurgerClicked}>
          O заказе
        </button>
      )}
    </div>
  );
}
