/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable function-paren-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Extends.module.scss';
import './datepicker.scss';
import Context from '../../context';
import DatepickerContainer from './Datepicker';
import RadioColorsContainer from './RadioColors/RadioColorsContainer';
import { getRateType, getRate } from '../../Api/http';

export default function ExtendsContainer() {
  const { setOrderInfo } = useContext(Context);
  const [taxes, setTaxes] = useState([]);
  const [checkedTax, setCheckedTax] = useState('Поминутно');

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
    const rateType = await getRateType();
    console.log('getRate', rateType);
    const rate = await getRate();
    console.log('Rate', rate);
    const prices = [];
    rateType.forEach((item) => {
      rate.forEach((elem) => {
        if (elem.rateTypeId.id === item.id) {
          taxes.push(
            '<div>111</div>',
            // <label
            //   htmlFor="radio-2.1"
            //   className={cn(s.radioLabel, {
            //     [s.active]: checkedTax === 'Поминутно',
            //   })}
            // >
            //   <span
            //     className={cn(s.radioText, {
            //       [s.active]: checkedTax === 'Поминутно',
            //     })}
            //   >
            //     {`${item.name} ${elem.price}`}
            //   </span>
            //   <input
            //     checked={checkedTax === 'Поминутно'}
            //     className={s.radioBtn}
            //     name="rate"
            //     onChange={() => handleChosenTax('Поминутно')}
            //     type="radio"
            //     id="radio-2.1"
            //   />
            //   <div className={s.customIndicator} />
            // </label>,
          );
        }
      });
    });
    console.log('taxes', taxes);
    setTaxes(prices);
  }, []);
  return (
    <>
      <div className={s.extendsContainer}>
        <RadioColorsContainer />
        <DatepickerContainer />

        <div>
          <div className={s.extendsTtlT}>Тариф</div>
          <div className={s.radioGroupRate}>{taxes}</div>
        </div>
        <div>
          <div className={s.extendsTtl}>Доп услуги</div>
          <label className={s.checkboxGroup}>
            <input
              type="checkbox"
              name="extra"
              className={s.checkBtn}
              defaultChecked
            />
            <div className={s.customCheckbox} />
            <span>Полный бак, 500р</span>
          </label>
          <label className={s.checkboxGroup}>
            <input type="checkbox" name="extra" className={s.checkBtn} />
            <div className={s.customCheckbox} />
            <span>Детское кресло, 200р</span>
          </label>
          <label className={s.checkboxGroup}>
            <input type="checkbox" name="extra" className={s.checkBtn} />
            <div className={s.customCheckbox} />
            <span>Правый руль, 1600р</span>
          </label>
        </div>
      </div>
    </>
  );
}
