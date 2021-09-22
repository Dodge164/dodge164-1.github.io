import React, { useContext } from 'react';
import Context from '../../context';
import s from './Summary.module.scss';

export default function SummaryContainer() {
  const { step, setStep } = useContext(Context);
  function handlePrevStep() {
    setStep((prev) => prev - 1);
  }
  function handleNextStep() {
    setStep((prev) => prev + 1);
  }
  return (
    <div>
      {step === 3 && (
        <div className={s.modal}>
          <button
            className={s.btn}
            type="button"
            onClick={handlePrevStep}
            key={step}
          >
            setStep-1
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={handleNextStep}
            key={step}
          >
            setStep+1
          </button>
        </div>
      )}
    </div>
  );
}
