import React from 'react';
import CarComponentContainer from './OrderComponents/OrderCarComponent/CarComponentContainer';
import LocationComponentContainer from './OrderComponents/OrderLocationComponent/LocationComponentContainer';
import OrderStepBtnContainer from './OrderStepBtn';
import s from './OrderInfo.module.scss';
import TimeComponent from './OrderComponents/OrderExtendsComponent/TimeComponent';
import ColorComponent from './OrderComponents/OrderExtendsComponent/ColorComponent';
import TaxComponent from './OrderComponents/OrderExtendsComponent/TaxComponent';
import FuelComponent from './OrderComponents/OrderExtendsComponent/FuelComponent';
import ChairComponent from './OrderComponents/OrderExtendsComponent/ChairComponent';
import WheelComponent from './OrderComponents/OrderExtendsComponent/WheelComponent';
import PriceComponent from './OrderComponents/OrderPriceComponent/PriceComponent';

export default function OrderInfo() {
  return (
    <>
      <form className={s.orderContainer}>
        <h3 className={s.orderTitle}>Ваш заказ: </h3>
        <div className={s.step}>
          <LocationComponentContainer />
        </div>
        <div className={s.step}>
          <CarComponentContainer />
        </div>
        <div className={s.step}>
          <ColorComponent />
        </div>
        <div className={s.step}>
          <TimeComponent />
        </div>
        <div className={s.step}>
          <TaxComponent />
        </div>
        <div className={s.step}>
          <FuelComponent />
        </div>
        <div className={s.step}>
          <ChairComponent />
        </div>
        <div className={s.step}>
          <WheelComponent />
        </div>
        <PriceComponent />
      </form>
      <div className={s.btn}>
        <OrderStepBtnContainer />
      </div>
    </>
  );
}
