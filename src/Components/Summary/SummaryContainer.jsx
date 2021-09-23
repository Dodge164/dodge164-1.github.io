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

// src={
//   car?.thumbnail?.path.includes('base64')
//     ? car?.thumbnail?.path
//     : baseUrl + car?.thumbnail?.path
// }
// добавить к картинке lazyloading
