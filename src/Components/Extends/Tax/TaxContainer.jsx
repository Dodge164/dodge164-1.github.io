/* eslint-disable function-paren-newline */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { getRateType, getRate } from '../../../Api/http';
import Context from '../../../context';
import s from './Tax.module.scss';

export default function TaxContainer() {
  const { setOrderInfo } = useContext(Context);
  const [checkedTax, setCheckedTax] = useState('');
  const [rate, setRate] = useState([]);
  const [rateType, setRateType] = useState([]);

  function handleChosenTax(tax) {
    setCheckedTax(tax);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        tax,
      },
    }));
  }

  useEffect(async () => {
    setRateType(await getRateType());
    setRate(await getRate());
  }, []);
  return (
    <>
      <div className={s.extendsTtl}>Тариф</div>
      <div className={s.radioGroupRate}>
        {rateType.map((item) =>
          rate.map((elem) => {
            if (elem.rateTypeId.id === item.id) {
              return (
                <label
                  htmlFor={item.id}
                  className={cn(s.radioLabel, {
                    [s.active]: checkedTax === item.name,
                  })}
                >
                  <input
                    checked={checkedTax === item.name}
                    className={s.radioBtn}
                    name="rate"
                    onChange={() => handleChosenTax(item.name)}
                    type="radio"
                    id={item.id}
                  />
                  <div className={s.customIndicator} />
                  <span
                    className={cn(s.span, {
                      [s.active]: checkedTax === item.name,
                    })}
                  >
                    {`${item.name} ${elem.price}₽/${item.unit}`}
                  </span>
                </label>
              );
            }
          }),
        )}
      </div>
    </>
  );
}
