/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import ellipse from '../../../Assets/svg/ellipse.svg';
import Context from '../../../context';
import s from './yMap.module.scss';

const placemark = {
  iconLayout: 'default#image',
  iconImageHref: ellipse,
  iconImageSize: [16, 16],
};
const modules = [
  // 'layout.ImageWithContent',
  // 'GeoObjectCollection',
  'geocode',
  'Placemark',
];

export default function YMapContainer() {
  const {
    cityList,
    setCityList,
    pointList,
    setPointList,
    orderInfo,
    setOrderInfo,
  } = useContext(Context);
  const [coordsOfAllPoints, setCoordsOfAllPoints] = useState([]);
  const [defaultState, setDefaultState] = useState({
    center: [55.752121, 37.617664],
    zoom: 3,
  });

  const ymaps = useRef(null);

  function setCity(city) {
    ymaps.current.geocode(city, { result: 1 }).then((res) => {
      // Выбираем первый результат геокодирования.
      const firstGeoObject = res.geoObjects.get(0);
      // const coords = firstGeoObject.geometry.getCoordinates();
      // Область видимости геообъекта.
      const area = firstGeoObject.properties.get('boundedBy');
      setDefaultState((prev) => ({ ...prev, center: [...area[0]] }));
      console.log('bounds city', area);
      // Масштабируем карту на область видимости геообъекта.
      ymaps.current.setBounds(area, {
        // Проверяем наличие тайлов на данном масштабе.
        checkZoomRange: true,
      });
    });
  }

  // откладываем фокус карты пока не выбран город. отображает по умолчанию кремль
  useEffect(() => {
    if (orderInfo.location.city) {
      setCity(orderInfo.location.city);
    }
  }, [orderInfo.location.city]);

  // console.log('defSt', defaultState);
  async function getGeo(points) {
    const temp = [];
    for (const point of points) {
      console.log('point', point);
      await ymaps.current
        .geocode(`${point.cityId.name}, ${point.address}, ${point.name}`, {
          result: 1,
        })
        .then(async (res) => {
          const firstGeoObject = await res.geoObjects.get(0);
          const coords = await firstGeoObject.geometry.getCoordinates();
          // temp.push(coords);
          temp.push({ point: point.name, lat: coords[0], long: coords[1] });
        })

        .catch((error) => console.log('getGeo', error));
    }
    setCoordsOfAllPoints([...temp]);
    console.log('temp', temp);
  }

  useEffect(async () => {
    getGeo(pointList);
  }, [pointList]);

  const onClickHandler = async (point) => {
    // (point)
    console.log('point', point);
    setOrderInfo((prev) => ({
      ...prev,
      location: { ...prev.location, point },
    }));
  };

  return (
    <YMaps
      query={{
        apikey: process.env.REACT_APP_YANDEX_KEY,
      }}
    >
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
        {console.log('coordPoint', coordsOfAllPoints)}
        {coordsOfAllPoints?.map((item) => {
          console.log('item', item);
          return (
            <Placemark
              className={s.placemark}
              key={item}
              // geometry={item}
              geometry={[item.lat, item.long]}
              options={placemark}
              // onClick={onClickHandler}
              onClick={() => onClickHandler(item.point)}
            />
          );
        })}
      </Map>
      {/* </div> */}
    </YMaps>
  );
}
