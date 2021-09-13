import React from 'react';
import s from './LocationComponent.module.scss';

export default function LocationComponent({ city, point }) {
  return (
    <>
      <h4 className={s.ttl}>Пункт выдачи</h4>
      <div className={s.spots}>
        <div>{city}</div>
        <div>{point}</div>
      </div>
    </>
  );
}
