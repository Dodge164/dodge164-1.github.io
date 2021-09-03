/* eslint-disable operator-linebreak */
import React, { useContext } from 'react';
import Context from '../../context';
import s from './OrderInfo.module.scss';

export default function OrderInfo() {
  const { orderInfo } = useContext(Context);
  const {
    location: { city, point },
  } = orderInfo;
  return (
    <>
      <div className={s.orderContainer}>
        <div className={s.orderInfo}>Ваш заказ: </div>
        <div className={s.locationStep}>
          {city && (
            <div>
              <span className={s.ttl}>Пункт выдачи</span>
              <div className={s.ch}>
                <span>{city}</span>
                <span>{point}</span>
              </div>
            </div>
          )}
        </div>
        <div className={s.totalPrice}>
          <div className={s.price}>Цена:</div>
          <div>от $calc1$ до $calc2$</div>
        </div>
        <button className={s.btn} type="button">
          $orderStepButton$
        </button>
      </div>
    </>
  );
}
