/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import s from './Car.module.scss';

export default function Car({ car, baseUrl }) {
  return (
    <div key={car.id} className={s.carsPhotoCard}>
      <h3 className={s.carsPhotoName}>{car?.name}</h3>
      <div className={s.carsPhotoPrice}>
        {car?.priceMin.toLocaleString('ru')}-
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
