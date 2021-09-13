/* eslint-disable spaced-comment */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
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
  const { loading, setLoading } = useContext(Context);

  useEffect(async () => {
    const listOfCars = await getCarList();
    setCarList(listOfCars);
    const listOfCategory = await getCarCategory();
    setCategoryList(listOfCategory);
    // console.log('CCAT', listOfCategory);
    setLoading(false);
  }, []);

  async function handleCarByCategoryId(id) {
    setLoading(true);
    const categoryById = await getCarListByCategory(id);
    setCarList(categoryById);
    setCheckedId(id);
    setLoading(false);
  }

  async function handleAllCategories() {
    setLoading(true);
    const carListAll = await getCarList();
    setCarList(carListAll);
    setCheckedId('all');
    setLoading(false);
  }

  /////////
  // function handleChosenCar(car)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <div className={s.radioGroup}>
              <label className={s.labelInput}>
                <input
                  checked={checkedId === 'all'}
                  className={s.input}
                  name="class"
                  value="category?.id"
                  onChange={() => handleAllCategories()}
                  type="radio"
                  id="all"
                />
                Все модели
              </label>

              {categoryList.map((category) => (
                <label key={category?.id} className={s.labelInput}>
                  <input
                    checked={checkedId === category.id}
                    className={s.input}
                    name="class"
                    value="category?.id"
                    onChange={() => handleCarByCategoryId(category?.id)}
                    id={category?.id}
                    type="radio"
                  />

                  <span>{category?.name}</span>
                </label>
              ))}
            </div>
          </div>
          <Cars carList={carList} baseUrl={BASE_URL} />
        </>
      )}
    </>
  );
}
