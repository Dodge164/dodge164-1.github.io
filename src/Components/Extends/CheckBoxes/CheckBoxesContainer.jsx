import React, { useContext, useState } from 'react';
import cn from 'classnames';
import Context from '../../../context';
import s from './CheckBoxes.module.scss';

export default function CheckBoxesContainer() {
  const { setOrderInfo } = useContext(Context);
  const [checkedFuelTank, setCheckedFuelTank] = useState('');
  const [checkedChair, setCheckedChair] = useState('');
  const [checkedWheel, setCheckedWheel] = useState('');

  function handleChosenFuelTank(fuelTank) {
    setCheckedFuelTank(fuelTank);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        fuelTank,
      },
    }));
  }
  function handleChosenChair(chair) {
    setCheckedChair(chair);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        chair,
      },
    }));
  }
  function handleChosenWheel(wheel) {
    setCheckedWheel(wheel);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        wheel,
      },
    }));
  }

  return (
    <>
      <div className={s.extendsTtl}>Доп услуги</div>
      <label
        className={cn(s.checkboxGroup, {
          [s.active]: checkedFuelTank === 'Полный бак, 500р.',
        })}
      >
        <input
          type="checkbox"
          name="extra"
          className={s.checkBtn}
          onChange={() => handleChosenFuelTank('Полный бак, 500р.')}
        />
        <div className={s.customCheckbox} />
        <span
          className={cn(s.span, {
            [s.active]: checkedFuelTank === 'Полный бак, 500р.',
          })}
        >
          Полный бак, 500р
        </span>
      </label>
      <label
        className={cn(s.checkboxGroup, {
          [s.active]: checkedChair === 'Детское кресло, 200р.',
        })}
      >
        <input
          type="checkbox"
          name="extra"
          className={s.checkBtn}
          onChange={() => handleChosenChair('Детское кресло, 200р.')}
        />
        <div className={s.customCheckbox} />
        <span
          className={cn(s.span, {
            [s.active]: checkedChair === 'Детское кресло, 200р.',
          })}
        >
          Детское кресло, 200р
        </span>
      </label>
      <label
        className={cn(s.checkboxGroup, {
          [s.active]: checkedWheel === 'Правый руль, 1600р.',
        })}
      >
        <input
          type="checkbox"
          name="extra"
          className={s.checkBtn}
          onChange={() => handleChosenWheel('Правый руль, 1600р.')}
        />
        <div className={s.customCheckbox} />
        <span
          className={cn(s.span, {
            [s.active]: checkedWheel === 'Правый руль, 1600р.',
          })}
        >
          Правый руль, 1600р
        </span>
      </label>
    </>
  );
}
