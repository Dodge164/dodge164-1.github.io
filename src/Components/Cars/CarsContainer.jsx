import React, { useEffect, useState, useContext } from 'react';
import cn from 'classnames';
import Context from '../../context';
import Loading from '../../Helpers/Loading/Loading';
import Cars from './Cars';
import s from './Cars.module.scss';
import {
  getCarsCategory,
  getCarList,
  getCarsListByCategory,
} from '../../Api/http';

export default function CarsContainer() {
  const { orderInfo, setOrderInfo, loading, setLoading } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [carList, setCarList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState(
    orderInfo.car.category ? orderInfo.car.category : 'all',
  );

  async function handleAllCategories() {
    setLoading(true);
    setCheckedCategory('all');
    const carListAll = await getCarList();
    setCarList(carListAll);
    setLoading(false);
  }

  async function handleCarsByCategoryId(id) {
    setLoading(true);
    setCheckedCategory(id);
    const categoryById = await getCarsListByCategory(id);
    setCarList(categoryById);
    setLoading(false);
  }

  function handleChosenCar(car) {
    setOrderInfo((prev) => ({
      ...prev,
      car: {
        ...prev.car,
        model: car.name,
        carId: car.id,
        priceMin: car.priceMin,
        priceMax: car.priceMax,
        colors: car.colors,
        number: car.number,
        path: car.thumbnail.path,
        category: car.categoryId.id,
      },
    }));
  }

  useEffect(async () => {
    const listOfCategory = await getCarsCategory();
    setCategoryList(listOfCategory);
    if (orderInfo.car.category) {
      const categoryById = await getCarsListByCategory(orderInfo.car.category);
      setCarList(categoryById);
    } else {
      const listOfCars = await getCarList();
      setCarList(listOfCars);
    }

    setLoading(false);
  }, []);

  return (
    <>
      <div className={s.radioGroup}>
        <label
          className={cn(s.radioLabel, {
            [s.active]: checkedCategory === 'all',
          })}
        >
          <input
            checked={checkedCategory === 'all'}
            className={s.radioBtn}
            name="class"
            value="category?.id"
            onChange={() => handleAllCategories()}
            type="radio"
            id="all"
          />
          <div className={s.customIndicator} />
          <span
            className={cn(s.span, {
              [s.active]: checkedCategory === 'all',
            })}
          >
            Все модели
          </span>
        </label>
        {categoryList.map((category) => (
          <label
            key={category?.id}
            className={cn(s.radioLabel, {
              [s.active]: checkedCategory === category.id,
            })}
          >
            <input
              checked={checkedCategory === category.id}
              className={s.radioBtn}
              name="class"
              value="category?.id"
              onChange={() => handleCarsByCategoryId(category?.id)}
              type="radio"
              id={category?.id}
            />
            <div className={s.customIndicator} />
            <span
              className={cn(s.span, {
                [s.active]: checkedCategory === category.id,
              })}
            >
              {category?.name}
            </span>
          </label>
        ))}
      </div>

      {loading ? (
        <Loading />
      ) : (
        <Cars
          onChangeChosenCar={handleChosenCar}
          carList={carList}
          baseUrl={BASE_URL}
        />
      )}
    </>
  );
}
