/* eslint-disable spaced-comment */
import React from 'react';
import s from './ExtendComponent.module.scss';

export default function ExtendComponent({
  color,
  totalTime,
  tax,
  fuelTank,
  chair,
  wheel,
}) {
  return (
    <>
      <div className={s.ttl}>Цвет</div>
      <div className={s.dottedBottom}>{}</div>
      <div className={s.spots}>
        <div>{color}</div>
      </div>
      <div className={s.ttl}>Длительность аренды</div>
      <div className={s.dottedBottom}>{}</div>
      <div className={s.spots}>
        <div>{totalTime}</div>
      </div>
      <div className={s.ttl}>Тариф</div>
      <div className={s.dottedBottom}>{}</div>
      <div className={s.spots}>
        <div>{tax}</div>
      </div>
      <div className={s.ttl}>Полный бак</div>
      <div className={s.dottedBottom}>{}</div>
      <div className={s.spots}>
        <div>{fuelTank}</div>
        <div className={s.ttl}>Детское кресло</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>{chair}</div>
        </div>
        <div className={s.ttl}>Правый руль</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>{wheel}</div>
        </div>
      </div>
    </>
  );
}
