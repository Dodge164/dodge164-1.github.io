/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useEffect, useState } from 'react';
import { getCityList, getPointListByCityId } from '../../Api/http';
import mapPng from '../../Assets/map.png';
import Context from '../../context';

import s from './Location.module.scss';

export default function LocationContainer() {
  const { orderInfo, setOrderInfo } = useContext(Context);
  const [cityList, setCityList] = useState([]);
  const [pointList, setPointList] = useState([]);

  function handleChangeCityValue(event) {
    setOrderInfo((prev) => {
      return {
        ...prev,
        location: { ...prev.location, city: event.target.value },
      };
    });
  }

  function handleChangePointValue(event) {
    console.log('event', event);
    setOrderInfo((prev) => {
      return {
        ...prev,
        location: { ...prev.location, point: event.target.value },
      };
    });
  }

  useEffect(async () => {
    const listOfCities = await getCityList();
    setCityList(listOfCities);
    // console.log('clist', listOfCities); // отвечает за выпадающий список городов
  }, []);

  useEffect(async () => {
    if (orderInfo.location.city !== null) {
      const cityId = cityList.find(
        (item) => item.name === orderInfo.location.city,
      );
      // console.log('cID', cityId);
      const listOfPoints = await getPointListByCityId(cityId?.id);
      setPointList(listOfPoints);
      console.log('plist', listOfPoints);
    }
  }, [orderInfo.location.city]);

  return (
    <>
      <div className={s.locationWrapper}>
        <div className={s.address}>
          <div className={s.locValue}>Город</div>
          <input
            type="search"
            list="cityList"
            className={s.input}
            placeholder="Введите город"
            value={orderInfo.location.city}
            onChange={handleChangeCityValue}
          />

          <datalist className={s.datalist} id="cityList">
            {cityList.map((item) => (
              <option value={item.name} />
            ))}
          </datalist>
        </div>
        <div className={s.address}>
          <div className={s.locValue}>Пункт выдачи</div>

          <input
            type="search"
            list="pointList"
            placeholder="Начните вводить пункт..."
            className={s.input}
            value={orderInfo.location.point}
            onChange={handleChangePointValue}
          />
          <datalist id="pointList">
            {pointList.map((item) => (
              <option value={item.name} />
            ))}
          </datalist>
        </div>
        <div className={s.mapContainer}>
          <div>Выбрать на карте:</div>
          <img className={s.map} src={mapPng} alt="map" />
        </div>
      </div>
    </>
  );
}
