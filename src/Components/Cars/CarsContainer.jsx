/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import s from './Cars.module.scss';

import { getCarList } from '../../Api/http';
// import Context from '../../context';

export default function CarsContainer() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [carList, setCarList] = useState([]);
  useEffect(async () => {
    const listOfCars = await getCarList();
    setCarList(listOfCars);
  }, []);

  console.log('carlist', carList);

  return (
    <>
      {console.log('URL', BASE_URL)}
      <div>cars</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Класс</th>
            <th scope="col">Модель</th>
            <th scope="col">Гос. номер</th>
            <th scope="col">Фото</th>
          </tr>
        </thead>
        <tbody>
          {carList.length > 0 &&
            carList?.map((car) => (
              <tr key={car?.id}>
                <td>{car?.categoryId?.name}</td>
                <td>{car?.name}</td>
                <td>{car?.number}</td>
                <td>
                  <img
                    className={s.photo}
                    alt="car"
                    src={
                      car?.thumbnail?.path.includes('base64')
                        ? car?.thumbnail?.path
                        : BASE_URL + car?.thumbnail?.path
                    }
                  />
                  {/* {console.log(
                    'THN',
                    car?.thumbnail?.path.includes('base64')
                      ? ''
                      : `${BASE_URL}${car?.thumbnail?.path}`,
                  )} */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
