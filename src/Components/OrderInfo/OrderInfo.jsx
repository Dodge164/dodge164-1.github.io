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
    <form className={s.orderContainer}>
      <h3 className={s.orderTitle}>Ваш заказ: </h3>

      <LocationComponentContainer />

      <CarComponentContainer />

      <ColorComponent />

      <TimeComponent />

      <TaxComponent />

      <FuelComponent />

      <ChairComponent />

      <WheelComponent />

      <PriceComponent />

      <OrderStepBtnContainer />
    </form>
  );
}
