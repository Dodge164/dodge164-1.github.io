/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { getCityList, getPointListByCityId } from '../../Api/http';
import mapPng from '../../Assets/map.png';

import s from './Location.module.scss';

export default function LocationContainer() {
  const [cityValue, setCityValue] = useState('');
  const [cityList, setCityList] = useState([]);
  const [addressValue, setAddressValue] = useState('');
  const [pointList, setPointList] = useState([]);

  function handleChangeCityValue(event) {
    setCityValue(event.target.value);
  }
  function handleChangeAddressValue(event) {
    setAddressValue(event.target.value);
  }

  useEffect(async () => {
    const listOfCities = await getCityList();
    setCityList(listOfCities);
    // console.log('clist', listOfCities);
  }, []);
  // console.log('cv', cityValue);

  useEffect(async () => {
    if (cityValue !== '') {
      const cityId = cityList.find((item) => item.name === cityValue);
      // console.log('cID', cityId);
      const listOfPoints = await getPointListByCityId(cityId.id);
      setPointList(listOfPoints);
      console.log('plist', listOfPoints);
    }
  }, [cityValue]);

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
            value={cityValue}
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
            value={addressValue}
            onChange={handleChangeAddressValue}
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
