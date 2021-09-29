/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import ellipse from '../../../Assets/svg/ellipse.svg';
import { getCityList } from '../../../Api/http';
// import s from './yMap.module.scss';

const center = [55.752121, 37.617664];
const defaultState = { center: [center], zoom: 13 };
const placemark = {
  iconLayout: 'default#image',
  iconImageHref: ellipse,
  iconImageSize: [16, 16],
};
const modules = [
  'layout.ImageWithContent',
  'GeoObjectCollection',
  'geocode',
  'Placemark',
];

export default function YMapContainer() {
  const [cityList, setCityList] = useState([]);
  const [coordsOfAllCities, setCoordsOfAllCities] = useState([]);

  // useEffect(async () => {
  //   const listOfCities = await getCityList();
  //   setCityList(listOfCities);
  // }, []);

  const ymaps = useRef(null);

  async function getGeo() {
    const temp = [];
    for (const city of cityList) {
      await ymaps.current
        .geocode(city, { result: 1 })
        .then(async (res) => {
          const firstGeoObject = await res.geoObjects.get(0);
          const coords = await firstGeoObject.geometry.getCoordinates();
          console.log('coords', coords);
          temp.push(coords);
          const bounds = firstGeoObject.properties.get('boundedBy');
          console.log('bounds', bounds);
        })
        .catch((error) => console.log(error()));
    }
    setCoordsOfAllCities([...temp]);
    console.log('temp', temp);
  }

  const onClickHandler = async () => {
    getGeo();
    //   setCoord([...temp]);
  };
  useEffect(() => {
    console.log('coord', coordsOfAllCities);
  }, [coordsOfAllCities]);

  return (
    <YMaps>
      {/* query={{
       apikey: process.env.REACT_APP_YANDEX_KEY,
     }} */}

      <button type="button" onClick={onClickHandler}>
        button
      </button>
      {/* <div className={s.container}> */}
      <Map
        width={640}
        height={480}
        defaultState={defaultState}
        modules={modules}
        onLoad={(api) => {
          ymaps.current = api;
        }}
      >
        {/* {coordsOfAllCities?.map((item) => (
          <Placemark
            geometry={item}
            options={placemark}
            onClick={(event) => console.log('event', event)}
          />
        ))} */}
      </Map>
      {/* </div> */}
    </YMaps>
  );
}
