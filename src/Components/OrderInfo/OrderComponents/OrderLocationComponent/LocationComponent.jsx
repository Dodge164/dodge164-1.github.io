import React from 'react';
import s from './LocationComponent.module.scss';

export default function LocationComponent({ city, point }) {
  return (
    <div className={s.step}>
      <div className={s.ttl}>Пункт выдачи</div>
      <div className={s.dottedBottom}>{}</div>
      <div className={s.spots}>
        <div>{city}</div>
        <div>{point}</div>
      </div>
    </div>
  );
}
