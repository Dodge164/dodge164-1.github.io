/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
import React from 'react';
import Car from './Car';
import s from './Cars.module.scss';

export default function Cars({ onChangeChosenCar, carList, baseUrl }) {
  return (
    <>
      <section className={s.carsPhotoContainer}>
        {carList.length > 0 &&
          carList?.map((car) => (
            <Car
              key={car.id}
              onChangeChosenCar={onChangeChosenCar}
              car={car}
              baseUrl={baseUrl}
            />
          ))}
      </section>
    </>
  );
}
