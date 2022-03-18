import React, { useContext } from 'react';
import Context from '../../../context';
import fixCarNumber from '../../../utils/utils';
import s from '../Summary.module.scss';
import SummaryModal from '../SummaryModal/SummaryModal';

export default function SummaryConfirm() {
  const { orderInfo } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { step } = useContext(Context);
  return (
    <>
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
      {step === 4 && <SummaryModal />}
    </>
  );
}
