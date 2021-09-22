/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import s from './Car.module.scss';

export default function Car({ onChangeChosenCar, car, baseUrl }) {
  return (
    <div
      key={car.id}
      className={s.carsPhotoCard}
      onClick={() => onChangeChosenCar(car)}
      role="button"
      tabIndex="0"
      onKeyPress={() => onChangeChosenCar(car)}
    >
      <div className={s.carsPhotoName}>{car?.name}</div>
      <div className={s.carsPhotoPrice}>
        {car?.priceMin.toLocaleString('ru')}&nbsp;-&nbsp;
        {car?.priceMax.toLocaleString('ru')}₽
      </div>
      <div className={s.photoContainer}>
        <img
          className={s.photo}
          alt="car"
          src={
            car?.thumbnail?.path.includes('base64')
              ? car?.thumbnail?.path
              : baseUrl + car?.thumbnail?.path
          }
        />
      </div>
    </div>
  );
}
