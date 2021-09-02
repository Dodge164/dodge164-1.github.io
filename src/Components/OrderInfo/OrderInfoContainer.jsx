import React from 'react';
import s from './OrderInfo.module.scss';

export default function OrderInfo() {
  return (
    <>
      <div className={s.orderContainer}>
        <div className={s.orderInfo}>Ваш заказ </div>
        <div className={s.price}>Цена:</div>
      </div>
    </>
  );
}
