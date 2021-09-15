import React from 'react';
import s from './CarComponent.module.scss';

export default function CarComponent({ model }) {
  return (
    <>
      <div className={s.ttl}>Модель</div>
      <div className={s.dottedBottom}>{}</div>
      <div className={s.spots}>
        <div>{model}</div>
      </div>
    </>
  );
}
