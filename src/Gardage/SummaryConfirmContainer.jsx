import React, { useContext } from 'react';
import Context from '../context';
import s from '../Summary.module.scss';

export default function SummaryConfirm() {
  const { orderInfo } = useContext(Context);
  return (
    <div className={s.summaryWrapper}>
      <div className={s.summaryWrapperOrder}>
        <div className={s.summaryOrderName}>{orderInfo.car.name}</div>
        <div className={s.summaryOrderNumber}>{orderInfo.car.number}</div>
        <div className={s.summaryOrderFuel}>{orderInfo.extends.fuelTank}</div>
        <div className={s.summaryOrderTimeFrom}>
          {orderInfo.extends.timeFrom}
        </div>
      </div>
      <div className={s.summaryWrapperPhoto}>{orderInfo.car.path}</div>
    </div>
  );
}

// src={
//   car?.thumbnail?.path.includes('base64')
//     ? car?.thumbnail?.path
//     : baseUrl + car?.thumbnail?.path
// }
// добавить к картинке lazyloading
