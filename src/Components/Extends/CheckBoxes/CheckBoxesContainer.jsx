import React, { useContext, useEffect } from 'react';
import cn from 'classnames';
import Context from '../../../context';
import s from './CheckBoxes.module.scss';

export default function CheckBoxesContainer() {
  const { orderInfo, setOrderInfo } = useContext(Context);

  useEffect(() => {
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        fuelTank: true,
      },
    }));
  }, []);
  function handleChosenFuelTank(fuelTank) {
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        fuelTank,
      },
    }));
  }
  function handleChosenChair(chair) {
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        chair,
      },
    }));
  }
  function handleChosenWheel(wheel) {
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
          [s.active]: orderInfo.extends.fuelTank === true,
        })}
      >
        <input
          type="checkbox"
          name="extra"
          checked={orderInfo.extends.fuelTank}
          className={s.checkBtn}
          onChange={(event) => handleChosenFuelTank(event.target.checked)}
        />
        <div className={s.customCheckbox} />
        <span className={s.span}>Полный бак, 500р</span>
      </label>

      <label
        className={cn(s.checkboxGroup, {
          [s.active]: orderInfo.extends.chair === true,
        })}
      >
        <input
          type="checkbox"
          name="extra"
          checked={orderInfo.extends.chair}
          className={s.checkBtn}
          onChange={(event) => handleChosenChair(event.target.checked)}
        />
        <div className={s.customCheckbox} />
        <span className={s.span}>Детское кресло, 200р</span>
      </label>
      <label
        className={cn(s.checkboxGroup, {
          [s.active]: orderInfo.extends.wheel === true,
        })}
      >
        <input
          type="checkbox"
          name="extra"
          checked={orderInfo.extends.wheel}
          className={s.checkBtn}
          onChange={(event) => handleChosenWheel(event.target.checked)}
        />
        <div className={s.customCheckbox} />
        <span className={s.span}>Правый руль, 1600р</span>
      </label>
    </>
  );
}
