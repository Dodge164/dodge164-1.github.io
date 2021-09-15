/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import cn from 'classnames';
import Context from '../../context';
import Loading from '../../Helpers/Loading/Loading';
import Cars from './Cars';
import s from './Cars.module.scss';
import {
  getCarCategory,
  getCarList,
  getCarListByCategory,
} from '../../Api/http';

export default function CarsContainer() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [carList, setCarList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [checkedId, setCheckedId] = useState('all');
  const { orderInfo, setOrderInfo } = useContext(Context);
  const { loading, setLoading } = useContext(Context);

  useEffect(async () => {
    const listOfCategory = await getCarCategory();
    setCategoryList(listOfCategory);
    // ToDo 31-32 строку раскомментить !загрузка машин
    // const listOfCars = await getCarList();
    // setCarList(listOfCars);
    // console.log('CCAT', listOfCategory);
    setLoading(false);
  }, []);
  async function handleCarByCategoryId(id) {
    setLoading(true);
    setCheckedId(id);
    const categoryById = await getCarListByCategory(id);
    setCarList(categoryById);
    setLoading(false);
  }

  async function handleAllCategories() {
    setLoading(true);
    setCheckedId('all');
    const carListAll = await getCarList();
    setCarList(carListAll);
    setLoading(false);
  }

  ///////////
  function handleChosenCar(model) {
    setOrderInfo((prev) => ({
      ...prev,
      car: { ...prev.car, model },
    }));
  }
  useEffect(async () => {
    if (orderInfo.car.model !== null) {
      const carName = carList.find((item) => item.name === orderInfo.car.model);
    }
  }, [orderInfo.car.model]);
  return (
    <>
      <div className={s.radioGroup}>
        <label className={s.radioLabel}>
          <input
            checked={checkedId === 'all'}
            className={s.radioBtn}
            name="class"
            value="category?.id"
            onChange={() => handleAllCategories()}
            type="radio"
            id="all"
          />
          <div className={s.customIndicator} />
          <span>Все модели</span>
        </label>

        {categoryList.map((category) => (
          <>
            <label
              key={category?.id}
              className={cn(s.radioLabel, {
                [s.active]: category === checkedId,
              })}
            >
              <input
                checked={checkedId === category.id}
                className={s.radioBtn}
                name="class"
                value="category?.id"
                onChange={() => handleCarByCategoryId(category?.id)}
                id={category?.id}
                type="radio"
              />
              <div className={s.customIndicator} />
              <span>{category?.name}</span>
            </label>
          </>
        ))}
      </div>

      {loading ? (
        <Loading />
      ) : (
        <Cars
          valueModel={orderInfo.car.model}
          onChangeChosenCar={handleChosenCar}
          carList={carList}
          baseUrl={BASE_URL}
        />
      )}
    </>
  );
}
