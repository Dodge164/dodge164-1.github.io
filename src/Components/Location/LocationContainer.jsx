/* eslint-disable operator-linebreak */
import React, { useContext, useEffect } from 'react';
import { getCityList, getPointListByCityId } from '../../Api/http';
import Context from '../../context';
import Location from './Location';

export default function LocationContainer() {
  const {
    orderInfo,
    setOrderInfo,
    cityList,
    setCityList,
    pointList,
    setPointList,
  } = useContext(Context);

  function handleChangePointValue(point) {
    setOrderInfo((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        point,
        pointId: pointList.find((item) => item.name === point)?.id,
      },
    }));
  }
  function handleChangeCityValue(city) {
    if (city === '') {
      setPointList([]);
    }
    setOrderInfo((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        city,
        cityId: cityList.find((item) => item.name === city)?.id,
        point: city === '' ? null : prev.location.point,
      },
    }));
  }

  useEffect(async () => {
    const listOfCities = await getCityList();
    setCityList(listOfCities);
  }, []);

  useEffect(async () => {
    if (orderInfo.location.city !== null) {
      const city = cityList.find(
        (item) => item.name === orderInfo.location.city,
      );
      const listOfPoints = await getPointListByCityId(city?.id);
      setPointList(listOfPoints);
    }
  }, [orderInfo.location.city]);

  return (
    <Location
      valueCity={orderInfo.location.city}
      valuePoint={orderInfo.location.point}
      onChangeCityValue={handleChangeCityValue}
      onChangePointValue={handleChangePointValue}
      cityList={cityList}
      pointList={pointList}
    />
  );
}
