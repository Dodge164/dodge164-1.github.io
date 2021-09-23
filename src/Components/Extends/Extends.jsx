/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
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
  const { orderInfo, setOrderInfo } = useContext(Context);
  const [rate, setRate] = useState([]);
  const [rateType, setRateType] = useState([]);

  function calculate(rateArr, tax) {
    if (orderInfo.extends.timeTo && orderInfo.extends.timeFrom) {
      const filter = rateArr.filter((elem) => elem.rateTypeId.name === tax);
      const time =
        (orderInfo.extends.timeTo - orderInfo.extends.timeFrom) / 1000;
      let startPrice = 0;
      switch (tax) {
        case 'Поминутно': {
          startPrice = Math.ceil((filter[0]?.price * time) / 60);

          break;
        }
        case 'Суточный': {
          startPrice = Math.ceil(
            Math.ceil(time / (60 * 60 * 24)) * filter[0]?.price,
          );
          break;
        }
        case '7 дней': {
          startPrice = Math.ceil(
            Math.ceil(time / (60 * 60 * 24 * 7)) * filter[0]?.price,
          );
          break;
        }
        case 'Недельный (Акция!)': {
          startPrice = Math.ceil(
            Math.ceil(time / (60 * 60 * 24 * 7)) * filter[0]?.price,
          );
          break;
        }
        case 'Месячный': {
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
    }
  }

  useEffect(async () => {
    setRateType(await getRateType());
    setRate(await getRate());
  }, []);

  useEffect(() => {
    calculate(rate, orderInfo.extends.tax);
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
