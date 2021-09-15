import React, { useContext } from 'react';
import Context from '../../../context';
import OrderStepBtn from './OrderStepBtn';

export default function OrderStepBtnContainer() {
  const { orderInfo, step, setStep } = useContext(Context);
  const {
    location: { city, point },
  } = orderInfo;
  const {
    car: { model },
  } = orderInfo;

  function onCheckStep() {
    if (step === 0) {
      return !city || !point;
    }
    if (step === 1) {
      return !model;
    }
    if (step === 2) {
      return false;
    }
    if (step === 3) {
      return false;
    }
    return true;
  }
  function handleSetStep() {
    setStep((prev) => prev + 1);
  }
  return (
    <OrderStepBtn
      onDisabled={onCheckStep}
      step={step}
      onSetStep={handleSetStep}
    />
  );
}
