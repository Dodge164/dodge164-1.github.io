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
  const {
    extends: { color, totalTime, tax },
  } = orderInfo;

  function onCheckStep(btnId) {
    if (btnId === 0) {
      return !city || !point;
    }
    if (btnId === 1) {
      return !model;
    }
    if (btnId === 2) {
      return !color || !totalTime || !tax;
    }
    if (btnId === 3) {
      return false;
    }
    if (btnId === 4) {
      return false;
    }
    if (btnId === 5) {
      return false;
    }
    return true;
  }
  function handleSetStep() {
    if (step === 5) {
      console.log('cancel');
    } else {
      setStep((prev) => prev + 1);
    }
  }
  return (
    <OrderStepBtn
      onDisabled={onCheckStep}
      step={step}
      onSetStep={handleSetStep}
    />
  );
}
