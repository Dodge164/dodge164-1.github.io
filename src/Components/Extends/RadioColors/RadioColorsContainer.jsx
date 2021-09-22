import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import Context from '../../../context';
import s from './RadioColor.module.scss';

export default function RadioColorsContainer() {
  const { orderInfo, setOrderInfo } = useContext(Context);
  const { car } = orderInfo;
  const [checkedColor, setCheckedColor] = useState('Любой');

  function handleColor(color) {
    setCheckedColor(color);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        color,
      },
    }));
  }
  useEffect(() => {
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        color: checkedColor,
      },
    }));
  }, []);
  return (
    <>
      <div className={s.extendsTtl}>Цвет</div>
      <div className={s.radioGroupColor}>
        <label
          htmlFor="Любой"
          className={cn(s.radioLabel, {
            [s.active]: checkedColor === 'Любой',
          })}
        >
          <input
            checked={checkedColor === 'Любой'}
            className={s.radioBtn}
            name="color"
            onChange={() => handleColor('Любой')}
            type="radio"
            id="Любой"
          />
          <span
            className={cn(s.span, {
              [s.active]: checkedColor === 'Любой',
            })}
          >
            Любой
          </span>
          <div className={s.customIndicator} />
        </label>
        {car?.colors?.map((color) => (
          <label
            key={color}
            htmlFor={color}
            className={cn(s.radioLabel, {
              [s.active]: checkedColor === color,
            })}
          >
            <input
              checked={checkedColor === color}
              className={s.radioBtn}
              name="color"
              onChange={() => handleColor(color)}
              type="radio"
              id={color}
            />

            <span
              className={cn(s.span, {
                [s.active]: color === checkedColor,
              })}
              onClick={() => handleColor(color)}
              onKeyPress={() => handleColor(color)}
              role="button"
              tabIndex="0"
            >
              {color}
            </span>
            <div className={s.customIndicator} />
          </label>
        ))}
      </div>
    </>
  );
}
