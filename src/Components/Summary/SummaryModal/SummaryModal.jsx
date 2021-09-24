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
    <>
      {step === 4 && (
        <div className={s.modal}>
          <div className={s.acceptTtl}> Подтвердить заказ </div>
          <div className={s.btnGroup}>
            <button
              className={s.btnAccept}
              type="button"
              onClick={handleNextStep}
            >
              Подтвердить
            </button>
            <button
              className={s.btnCancel}
              type="button"
              onClick={handlePrevStep}
            >
              Вернуться
            </button>
          </div>
        </div>
      )}
    </>
  );
}
