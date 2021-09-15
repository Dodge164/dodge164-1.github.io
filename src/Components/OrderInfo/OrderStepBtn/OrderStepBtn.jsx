import React from 'react';
import btnData from '../OrderBtnData';
import s from './OrderStepBtn.module.scss';

export default function OrderStepBtn({ onDisabled, step, onSetStep }) {
  return (
    <>
      {btnData.map(
        (btn) =>
          btn.id === step && (
            <button
              disabled={onDisabled(btn.id)}
              className={s.btn}
              type="button"
              onClick={onSetStep}
              key={btn.id}
            >
              {btn.title}
            </button>
          ),
      )}
    </>
  );
}
