/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-await-in-loop */
import React, { useContext, useEffect, useRef } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import ellipse from '../../../Assets/svg/ellipse.svg';
import Context from '../../../context';
import s from './yMap.module.scss';

const placemark = {
  iconLayout: 'default#image',
  iconImageHref: ellipse,
  iconImageSize: [16, 16],
};
const modules = ['geocode', 'Placemark'];

export default function YMapContainer() {
  const {
    pointList,
    orderInfo,
    setOrderInfo,
    defaultStateCity,
    setDefaultStateCity,
    coordsOfAllPoints,
    setCoordsOfAllPoints,
  } = useContext(Context);

  const ymaps = useRef(null);

  function setCity(city) {
    ymaps.current.geocode(city, { result: 1 }).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);
      const coordsCity = firstGeoObject.geometry.getCoordinates();
      setDefaultStateCity((prev) => ({
        ...prev,
        center: coordsCity,
        zoom: 11,
      }));

      ymaps.current.setBounds(coordsCity, {
        checkZoomRange: true,
      });
    });
  }

  useEffect(() => {
    if (orderInfo.location.city && ymaps.current) {
      setCity(orderInfo.location.city);
    }
  }, [orderInfo.location.city]);

  async function getGeo(points) {
    const temp = [];
    for (const point of points) {
      await ymaps.current
        .geocode(`${point.cityId.name}, ${point.address}`, {
          result: 1,
        })
        .then(async (res) => {
          const firstGeoObject = await res.geoObjects.get(0);
          const coordsPoint = await firstGeoObject.geometry.getCoordinates();

          temp.push({
            point: point.name,
            lat: coordsPoint[0],
            long: coordsPoint[1],
          });
        })

        .catch((error) => console.log('getGeo', error));
    }
    setCoordsOfAllPoints([...temp]);
  }

  useEffect(async () => {
    if (ymaps.current) {
      getGeo(pointList);
    }
  }, [pointList]);

  useEffect(() => {
    if (orderInfo.location.point && coordsOfAllPoints.length > 0) {
      const pointNow = coordsOfAllPoints.find(
        (item) => item.point === orderInfo.location.point,
      );

      setDefaultStateCity((prev) => ({
        ...prev,
        center: [pointNow.lat, pointNow.long],
        zoom: 15,
      }));
    }
  }, [orderInfo.location.point]);

  const onClickHandler = async (point) => {
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
      <Map
        className={s.size}
        defaultState={defaultStateCity}
        state={defaultStateCity}
        modules={modules}
        onLoad={(api) => {
          ymaps.current = api;
        }}
      >
        {coordsOfAllPoints?.map((item) => (
          <Placemark
            className={s.placemark}
            key={item.point}
            geometry={[item.lat, item.long]}
            options={placemark}
            onClick={() => onClickHandler(item.point)}
          />
        ))}
      </Map>
    </YMaps>
  );
}
