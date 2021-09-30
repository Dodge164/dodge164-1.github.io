/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../Api/http';
import Context from '../../../context';
import fixCarNumber from '../../../utils/utils';
import s from '../Summary.module.scss';

export default function SummaryConfirm() {
  const { orderInfo, setOrderInfo } = useContext(Context);
  const params = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(async () => {
    if (params.id) {
      const order = await getOrderById(params.id);
      setOrderInfo((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          city: order.cityId.name,
          point: order.pointId.name,
        },
        car: {
          ...prev.car,
          model: order.carId.name,
          number: order.carId.number,
          path: order.carId.thumbnail.path,
        },
        extends: {
          ...prev.extends,
          color: order.color,
          timeFrom: new Date(order.dateFrom),
          timeTo: new Date(order.dateTo),
          totalTime: null,
          fuelTank: order.isFullTank,
          chair: order.isNeedChildChair,
          wheel: order.isRightWheel,
        },
        price: order.price,
        orderId: order.id,
      }));
    }
  }, []);

  return (
    <>
      <div className={s.summaryTtl}>Ваш заказ подтвержден</div>
      <div className={s.summaryWrapper}>
        <div className={s.summaryWrapperOrder}>
          <div className={s.summaryOrderName}>{orderInfo?.car?.model}</div>
          <div className={s.summaryOrderNumber}>
            {fixCarNumber(orderInfo.car.number)}
          </div>
          {orderInfo.extends?.fuelTank && (
            <div className={s.summaryOrderFuel}>
              <span>Топливо </span>
              100%
            </div>
          )}
          <div className={s.summaryOrderTimeFrom}>
            <span>Доступна с </span>
            {orderInfo?.extends?.timeFrom
              ?.toLocaleString()
              .slice(0, -3)
              .replace(/,/, ' ')}
          </div>
        </div>
        <div className={s.summaryWrapperPhoto}>
          <img
            className={s.photo}
            alt="car"
            src={
              orderInfo?.car?.path?.includes('base64')
                ? orderInfo?.car?.path
                : BASE_URL + orderInfo?.car?.path
            }
          />
        </div>
      </div>
    </>
  );
}
