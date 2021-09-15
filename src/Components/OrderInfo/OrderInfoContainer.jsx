import React, { useContext } from 'react';
import Context from '../../context';
import OrderInfo from './OrderInfo';

export default function OrderInfoContainer() {
  const { orderInfo } = useContext(Context);
  const {
    location: { city, point },
  } = orderInfo;
  const {
    car: { model },
  } = orderInfo;

  return <OrderInfo city={city} point={point} model={model} />;
}
