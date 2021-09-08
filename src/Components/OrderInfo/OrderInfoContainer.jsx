/* eslint-disable operator-linebreak */
import React, { useContext } from 'react';
import Context from '../../context';
import s from './OrderInfo.module.scss';
import btnData from './OrderBtnData';

export default function OrderInfo() {
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
  return (
    <>
      <form className={s.orderContainer}>
        <h3 className={s.orderTitle}>Ваш заказ: </h3>
        <div className={s.locationStep}>
          {city && (
            <>
              <h4 className={s.ttl}>Пункт выдачи</h4>
              <div className={s.spots}>
                <div>{city}</div>
                <div>{point}</div>
              </div>
            </>
          )}
        </div>
        <div className={s.totalPrice}>
          <div className={s.priceLabel}>
            Цена:
            <span className={s.price}> 0 ₽</span>
          </div>
        </div>
      </form>

      {btnData.map(
        (btn) =>
          btn.id === step && (
            <button
              disabled={onCheckStep(btn.id)}
              className={s.btn}
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
            >
              {btn.title}
            </button>
          ),
      )}
    </>
  );
}
