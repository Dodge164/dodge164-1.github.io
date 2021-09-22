import React, { useContext } from 'react';
import CarComponent from './CarComponent';
import Context from '../../../../context';

export default function CarComponentContainer() {
  const { orderInfo } = useContext(Context);
  const {
    car: { model, priceMax, priceMin },
  } = orderInfo;
  return (
    model && (
      <CarComponent model={model} priceMax={priceMax} priceMin={priceMin} />
    )
  );
}
