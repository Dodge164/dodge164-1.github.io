import React, { useContext } from 'react';
import Context from '../../context';
import OrderInfo from './OrderInfo';

export default function OrderInfoContainer() {
  const { orderInfo, step, setStep } = useContext(Context);
  const {
    location: { city, point },
  } = orderInfo;
  function onCheckStep(id) {
    if (step === id) {
      return !city || !point;
    }
    return true;
  }
  function handleSetStep() {
    setStep((prev) => prev + 1);
  }
  return (
    <OrderInfo
      onDisabled={onCheckStep}
      city={city}
      point={point}
      step={step}
      onSetStep={handleSetStep}
    />
  );
}
