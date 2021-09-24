import React, { useContext } from 'react';
import Context from '../../../context';
import s from '../Summary.module.scss';

export default function SummaryModal() {
  const { step, setStep } = useContext(Context);
  function handlePrevStep() {
    setStep((prev) => prev - 1);
  }
  function handleNextStep() {
    setStep((prev) => prev + 1);
  }
  return (
    <div>
      {step === 4 && (
        <div className={s.modal}>
          <button className={s.btn} type="button" onClick={handlePrevStep}>
            setStep-1
          </button>
          <button className={s.btn} type="button" onClick={handleNextStep}>
            setStep+1
          </button>
        </div>
      )}
    </div>
  );
}

// добавить к картинке lazyloading
