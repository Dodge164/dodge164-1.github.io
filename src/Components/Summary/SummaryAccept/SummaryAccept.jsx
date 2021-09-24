/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
import React, { useContext } from 'react';
import Context from '../../../context';

import s from '../Summary.module.scss';

export default function SummaryConfirm() {
  const { orderInfo } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  function fixCarNumber(carNumber) {
    if (carNumber) {
      const number = carNumber.toUpperCase();

      const reg = number.match(
        /^[АВЕКМНОРСТУХA-Z]\d{3}(?<!000)[АВЕКМНОРСТУХA-Z]{2}\d{2,3}$/iu,
      );
      if (reg) {
        const pattern = new RegExp(
          '(^[АВЕКМНОРСТУХA-Z])(\\d{3})([АВЕКМНОРСТУХA-Z]{2})(\\d{2,3})',
        );
        const str = reg[0];
        const rep = str.replace(pattern, '$1 $2 $3 $4');
        return rep;
      }
    }
    return carNumber;
  }

  return (
    <>
      <div className={s.summaryTtl}>Ваш заказ подтвержден</div>
      <div className={s.summaryWrapper}>
        <div className={s.summaryWrapperOrder}>
          <div className={s.summaryOrderName}>{orderInfo.car.model}</div>
          <div className={s.summaryOrderNumber}>
            {fixCarNumber(orderInfo.car.number)}
          </div>
          {orderInfo.extends.fuelTank && (
            <div className={s.summaryOrderFuel}>
              <span>Топливо </span>
              100%
            </div>
          )}
          <div className={s.summaryOrderTimeFrom}>
            <span>Доступна с </span>
            {orderInfo.extends.timeFrom
              .toLocaleString()
              .slice(0, -3)
              .replace(/,/, ' ')}
          </div>
        </div>
        <div className={s.summaryWrapperPhoto}>
          <img
            className={s.photo}
            alt="car"
            src={
              orderInfo.car.path.includes('base64')
                ? orderInfo.car.path
                : BASE_URL + orderInfo.car.path
            }
          />
        </div>
      </div>
    </>
  );
}
