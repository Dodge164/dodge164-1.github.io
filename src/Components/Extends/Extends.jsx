/* eslint-disable operator-linebreak */

import React, { useContext, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Extends.module.scss';
import './datepicker.scss';
import DatepickerContainer from './Datepicker';
import RadioColorsContainer from './RadioColors/RadioColorsContainer';
import CheckBoxesContainer from './CheckBoxes/CheckBoxesContainer';
import TaxContainer from './Tax/TaxContainer';
import Context from '../../context';
import { getRate, getRateType } from '../../Api/http';

export default function ExtendsContainer() {
  const { orderInfo, setOrderInfo, setLoading } = useContext(Context);
  const [rate, setRate] = useState([]);
  const [rateType, setRateType] = useState([]);

  function calculate(rateArr, rateId) {
    if (orderInfo.extends.timeTo && orderInfo.extends.timeFrom) {
      const filter = rateArr.filter((elem) => elem.rateTypeId.id === rateId);
      const time =
        (orderInfo.extends.timeTo - orderInfo.extends.timeFrom) / 1000;
      let startPrice = 0;
      switch (rateId) {
        case '5e26a07f099b810b946c5d82': {
          startPrice = Math.ceil((filter[0]?.price * time) / 60);

          break;
        }
        case '5e26a082099b810b946c5d83': {
          startPrice = Math.ceil(
            Math.ceil(time / (60 * 60 * 24)) * filter[0]?.price,
          );
          break;
        }
        case '5f622f029d3a610b850fd820': {
          startPrice = Math.ceil(
            Math.ceil(time / (60 * 60 * 24 * 7)) * filter[0]?.price,
          );
          break;
        }
        case '60b9437e2aed9a0b9b7ed337': {
          startPrice = Math.ceil(
            Math.ceil(time / (60 * 60 * 24 * 7)) * filter[0]?.price,
          );
          break;
        }
        case '6114e4182aed9a0b9b850843': {
          startPrice = Math.ceil(time / (24 * 30 * 60 * 60)) * filter[0]?.price;
          break;
        }
        default:
          break;
      }
      if (orderInfo.extends.fuelTank) {
        startPrice += 500;
      }
      if (orderInfo.extends.chair) {
        startPrice += 200;
      }
      if (orderInfo.extends.wheel) {
        startPrice += 1600;
      }

      setOrderInfo((prev) => ({
        ...prev,
        price: startPrice,
      }));
    } else {
      setOrderInfo((prev) => ({
        ...prev,
        price: 0,
      }));
    }
  }

  useEffect(async () => {
    setLoading(true);
    setRateType(await getRateType());
    setRate(await getRate());
    setLoading(false);
  }, []);

  useEffect(() => {
    calculate(rate, orderInfo.extends.rateId);
  }, [orderInfo.extends]);
  return (
    <>
      <div className={s.extendsContainer}>
        <RadioColorsContainer />
        <DatepickerContainer />
        <TaxContainer rate={rate} rateType={rateType} />
        <CheckBoxesContainer />
      </div>
    </>
  );
}
