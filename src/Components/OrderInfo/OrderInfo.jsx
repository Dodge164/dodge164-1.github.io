/* eslint-disable object-curly-newline */
import React from 'react';
import btnData from './OrderBtnData';
import City from './OrderComponents/OrderCityComponent/CityContainer';
import s from './OrderInfo.module.scss';

export default function OrderInfo({ onDisabled, step, onSetStep }) {
  return (
    <>
      <form className={s.orderContainer}>
        <h3 className={s.orderTitle}>Ваш заказ: </h3>
        <div className={s.locationStep}>
          <City />
        </div>
        <div className={s.totalPrice}>
          <div className={s.priceLabel}>
            Цена:
            <span className={s.price}> 0 ₽</span>
          </div>
        </div>
      </form>
      {btnData.map(
        (btn) =>
          btn.id === step && (
            <button
              disabled={onDisabled(btn.id)}
              className={s.btn}
              type="button"
              onClick={onSetStep}
              key={btn.id}
            >
              {btn.title}
            </button>
          ),
      )}
    </>
  );
}
