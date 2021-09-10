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

  // console.log('carlist', carList);
  return (
    // <Cars
    //   onChangeCategories={handleAllCategories()}
    //   onChangeCarCategories={() => handleCarByCategoryId(categoryList?.id)}
    //   checkedId={checkedId}
    //   categoryList={categoryList}
    //   carList={carList}
    //   baseUrl={BASE_URL}
    // />
    // );
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <form className={s.radioGroup}>
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
              {console.log('IDD', carList.id)} Все модели
            </label>

            {categoryList.map((category) => (
              <label className={s.labelInput}>
                <input
                  checked={checkedId === category.id}
                  className={s.input}
                  name="class"
                  value="category?.id"
                  onChange={() => handleCarByCategoryId(category?.id)}
                  id={category?.id} // из CCAT
                  type="radio"
                />

                {category?.name}
              </label>
            ))}
          </form>
          <section className={s.carsPhotoContainer}>
            {carList.length > 0 &&
              carList?.map((car) => (
                <div className={s.carsPhotoCard}>
                  <h3 className={s.carsPhotoName}>{car?.name}</h3>
                  <div className={s.carsPhotoPrice}>
                    {car?.priceMin.toLocaleString('ru')} -{' '}
                    {car?.priceMax.toLocaleString('ru')} ₽
                  </div>
                  <img
                    className={s.photo}
                    alt="car"
                    src={
                      car?.thumbnail?.path.includes('base64')
                        ? car?.thumbnail?.path
                        : BASE_URL + car?.thumbnail?.path
                    }
                  />
                </div>
              ))}
          </section>
          {/* <table className="table table-hover">
  //     <thead>
  //       <tr>
  //         <th scope="col">Класс</th>
  //         <th scope="col">Модель</th>
  //         <th scope="col">Гос. номер</th>
  //         <th scope="col">Фото</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {carList.length > 0 &&
  //         carList?.map((car) => (
  //           <tr key={car?.id}>
  //             <td>{car?.categoryId?.name}</td>
  //             <td>{car?.name}</td>
  //             <td>{car?.number}</td>
  //             <td>
  //               <img
  //                 className={s.photo}
  //                 alt="car"
  //                 src={
  //                   car?.thumbnail?.path.includes('base64')
  //                     ? car?.thumbnail?.path
  //                     : BASE_URL + car?.thumbnail?.path
  //                 }
  //               />
  //             </td>
  //           </tr>
  //         ))}
  //     </tbody>
  //   </table> */}
        </>
      )}
    </>
  );
}
