/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable object-curly-newline */
import React, { useContext, useState } from 'react';
import Context from '../../context';
import CarComponentContainer from './OrderComponents/OrderCarComponent/CarComponentContainer';
import LocationComponentContainer from './OrderComponents/OrderLocationComponent/LocationComponentContainer';
import OrderStepBtnContainer from './OrderStepBtn';
import s from './OrderInfo.module.scss';

export default function OrderInfo() {
  const { orderInfo } = useContext(Context);
  const {
    car: { priceMax, priceMin },
  } = orderInfo;

  return (
    <>
      <form className={s.orderContainer}>
        <h3 className={s.orderTitle}>Ваш заказ: </h3>
        <div className={s.locationStep}>
          <LocationComponentContainer />
        </div>
        <div className={s.locationStep}>
          <CarComponentContainer />
        </div>
        <div className={s.totalPrice}>
          <div className={s.priceLabel}>
            Цена:
            <span className={s.price}>
              {priceMin && priceMax ? (
                <>
                  {priceMin?.toLocaleString('ru')}&nbsp;-&nbsp;
                  {priceMax?.toLocaleString('ru')}&nbsp;₽
                </>
              ) : (
                '0 ₽'
              )}
            </span>
          </div>
        </div>
      </form>
      <div className={s.btn}>
        <OrderStepBtnContainer />
      </div>
    </>
  );
}
