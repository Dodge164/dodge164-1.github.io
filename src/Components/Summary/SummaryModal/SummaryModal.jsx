import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getOrderStatus } from '../../../Api/http';
import Context from '../../../context';
import s from '../Summary.module.scss';

export default function SummaryModal() {
  // eslint-disable-next-line object-curly-newline
  const { step, setStep, orderInfo, setOrderInfo } = useContext(Context);
  const history = useHistory();
  function handlePrevStep() {
    setStep((prev) => prev - 1);
  }
  async function handleNextStep() {
    const statusList = await getOrderStatus();
    const statusId = statusList.find(
      (item) => item.name.toLowerCase() === 'новые',
    ).id;

    axios({
      method: 'POST',
      url: 'https://api-factory.simbirsoft1.com/api/db/order',

      data: {
        orderStatusId: {
          id: statusId,
        },
        cityId: { id: orderInfo.location.cityId },
        pointId: { id: orderInfo.location.pointId },
        carId: { id: orderInfo.car.carId },
        color: orderInfo.extends.color,
        dateFrom: orderInfo.extends.timeFrom.getTime(),
        dateTo: orderInfo.extends.timeTo.getTime(),
        rateId: { id: orderInfo.extends.rateId },
        price: orderInfo.price,
        isFullTank: orderInfo.extends.fuelTank,
        isNeedChildChair: orderInfo.extends.chair,
        isRightWheel: orderInfo.extends.wheel,
      },
      headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_DB_API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setOrderInfo((prev) => ({
          ...prev,
          orderId: response?.data?.data.id,
        }));
        history.push(`/order/${response?.data?.data.id}`);
        setStep((prev) => prev + 1);
      })
      .catch((error) => {
        alert('Ошибка подтверждения заказа', error);
      });
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
