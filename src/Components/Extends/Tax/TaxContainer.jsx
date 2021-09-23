/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext, useState } from 'react';
import cn from 'classnames';

import Context from '../../../context';
import s from './Tax.module.scss';

export default function TaxContainer({ rate, rateType }) {
  const { setOrderInfo } = useContext(Context);
  const [checkedTax, setCheckedTax] = useState('');

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

  return (
    <>
      <div className={s.extendsTtl}>Тариф</div>
      {/* {console.log('rateType', rateType)}
      {console.log('rate', rate)}
      {console.log(
        'ratefilter',
        rate.filter((elem) => elem.rateTypeId.name === orderInfo.extends.tax),
      )} */}
      <div className={s.radioGroupRate}>
        {rateType.map((item) =>
          rate.map((elem) => {
            if (elem.rateTypeId.id === item.id) {
              return (
                <label
                  key={elem.rateTypeId.id}
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
