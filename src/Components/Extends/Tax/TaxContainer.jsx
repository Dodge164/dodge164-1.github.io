/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext, useState } from 'react';
import cn from 'classnames';

import Context from '../../../context';
import s from './Tax.module.scss';
import Loading from '../../../Helpers/Loading/Loading';

export default function TaxContainer({ rate, rateType }) {
  const { orderInfo, setOrderInfo, loading } = useContext(Context);

  const [checkedTax, setCheckedTax] = useState(
    orderInfo.extends.tax ? orderInfo.extends.tax : '',
  );

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

      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}
