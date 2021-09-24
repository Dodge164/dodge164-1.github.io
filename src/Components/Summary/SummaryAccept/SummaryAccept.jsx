/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
import React, { useContext } from 'react';
import Context from '../../../context';

import s from '../Summary.module.scss';

export default function SummaryConfirm() {
  const { orderInfo } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return (
    <>
      <div className={s.summaryWrapper}>
        <div className={s.summaryWrapperOrder}>
          <div className={s.summaryTtl}>Ваш заказ подтвержден</div>
          <div className={s.summaryOrderName}>{orderInfo.car.model}</div>
          <div className={s.summaryOrderNumber}>{orderInfo.car.number}</div>
          <div className={s.summaryOrderFuel}>
            {orderInfo.extends.fuelTank ? 'Топливо 100%' : ''}
          </div>
          <div className={s.summaryOrderTimeFrom}>
            {orderInfo.extends.timeFrom.toString()}
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
