/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import s from './Cars.module.scss';

import { getCarList, url } from '../../Api/http';
// import Context from '../../context';

export default function CarsContainer() {
  // const { orderInfo } = useContext(Context);
  const [carList, setCarList] = useState([]);
  useEffect(async () => {
    const listOfCars = await getCarList();
    setCarList(listOfCars);
    // console.log('listOfCars', listOfCars);
    // получаем массив с авто
  }, []);
  console.log('carlist', carList);
  //   useEffect(async () => {
  //     if (orderInfo.name !== null) {
  //       const carId = carList.find((item) => item.name === orderInfo.name);
  //       console.log('model', carId);
  //     }
  //   }, [orderInfo.name]);

  return (
    <>
      <div>cars</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Класс</th>
            <th scope="col">Модель</th>
            <th scope="col">Гос. номер</th>
            {/* <th scope="col">Фото</th> */}
          </tr>
        </thead>
        <tbody>
          {carList?.map((car) => (
            <tr key={car?.id}>
              <td>{car?.categoryId?.name}</td>
              <td>{car?.name}</td>
              <td>{car?.number}</td>
              <td>
                <img className={s.photo} alt="car" src={car?.thumbnail?.path} />
              </td>
              {/* <td>{`${url}${car?.thumbnail?.path}`}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
