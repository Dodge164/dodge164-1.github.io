/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import Context from '../../context';
import CarComponentContainer from './OrderComponents/OrderCarComponent/CarComponentContainer';
import LocationComponentContainer from './OrderComponents/OrderLocationComponent/LocationComponentContainer';
import OrderStepBtnContainer from './OrderStepBtn';
import s from './OrderInfo.module.scss';

export default function OrderInfo() {
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
            <span className={s.price}> 0 ₽</span>
          </div>
        </div>
      </form>
      <div className={s.btn}>
        <OrderStepBtnContainer />
      </div>
    </>
  );
}
