/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { ReactComponent as Close } from '../../../Assets/svg/x.svg';

import s from './BurgerOrderInfo.module.scss';

export default function BurgerOrderInfo({ isBurgerClicked, onBurgerClicked }) {
  return (
    <div className={s.burger}>
      {isBurgerClicked ? (
        <button className={s.btn} onClick={onBurgerClicked}>
          <Close className={s.close} />
        </button>
      ) : (
        <button className={s.btn} onClick={onBurgerClicked}>
          O заказе
        </button>
      )}
    </div>
  );
}
