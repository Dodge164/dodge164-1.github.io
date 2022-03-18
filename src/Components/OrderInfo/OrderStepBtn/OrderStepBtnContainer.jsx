/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getOrderStatus } from '../../../Api/http';
import Context from '../../../context';
import OrderData from '../OrderData';
import OrderStepBtn from './OrderStepBtn';

export default function OrderStepBtnContainer() {
  const { orderInfo, step, setStep, setOrderInfo } = useContext(Context);
  const history = useHistory();
  const {
    location: { city, point },
  } = orderInfo;
  const {
    car: { model },
  } = orderInfo;
  const {
    extends: { color, timeFrom, timeTo, tax },
  } = orderInfo;

  function onCheckStep(btnId) {
    if (btnId === 0) {
      return !city || !point;
    }
    if (btnId === 1) {
      return !model;
    }
    if (btnId === 2) {
      return !color || !timeTo || !timeFrom || !tax;
    }
    if (btnId === 3) {
      return false;
    }
    if (btnId === 4) {
      return false;
    }
    if (btnId === 5) {
      return false;
    }
    return true;
  }
  async function handleSetStep() {
    if (step === 5) {
      const statusList = await getOrderStatus();

      const statusId = statusList.find(
        (item) => item.name.toLowerCase() === 'отмененые',
      ).id;

      axios({
        method: 'PUT',
        url: `https://api-factory.simbirsoft1.com/api/db/order/${orderInfo.orderId}`,

        data: {
          orderStatusId: {
            id: statusId,
          },
        },
        headers: {
          'X-Api-Factory-Application-Id': process.env.REACT_APP_DB_API_KEY,
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
        },
      })
        .then((response) => {
          setOrderInfo(OrderData);
          setStep(0);
          history.push('/order');
        })
        .catch((error) => {
          alert('Ошибка подтверждения заказа', error);
        });
    } else {
      setStep((prev) => prev + 1);
    }
  }
  return (
    <OrderStepBtn
      onDisabled={onCheckStep}
      step={step}
      onSetStep={handleSetStep}
    />
  );
}
