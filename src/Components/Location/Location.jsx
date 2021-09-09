/* eslint-disable no-unneeded-ternary */
import React from 'react';
import mapPng from '../../Assets/map.png';
import s from './Location.module.scss';

export default function Location({
  valueCity,
  valuePoint,
  onChangeCityValue,
  onChangePointValue,
  cityList,
  pointList,
}) {
  return (
    <div>
      <div className={s.locationWrapper}>
        <div className={s.address}>
          <div className={s.locValue}>Город</div>
          <input
            type="search"
            list="cityList"
            className={s.input}
            placeholder="Введите город"
            value={valueCity ? valueCity : ''}
            // value={valueCity && valueCity}
            onChange={onChangeCityValue}
          />

          <datalist className={s.datalist} id="cityList">
            {cityList.map((item) => (
              <option key={item.id} aria-label="text" value={item.name} />
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
            // value={valuePoint && valuePoint}
            value={valuePoint ? valuePoint : ''}
            onChange={onChangePointValue}
          />
          <datalist id="pointList">
            {pointList.map((item) => (
              <option key={item.id} aria-label="text" value={item.name} />
            ))}
          </datalist>
        </div>
        <div className={s.mapContainer}>
          <div>Выбрать на карте:</div>
          <img className={s.map} src={mapPng} alt="map" />
        </div>
      </div>
    </div>
  );
}
