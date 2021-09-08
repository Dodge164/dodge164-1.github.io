import React, { useContext, useEffect, useState } from 'react';
import { getCityList, getPointListByCityId } from '../../Api/http';
import Context from '../../context';
import Location from './Location';

export default function LocationContainer() {
  const { orderInfo, setOrderInfo } = useContext(Context);
  const [cityList, setCityList] = useState([]);
  const [pointList, setPointList] = useState([]);

  function handleChangeCityValue(event) {
    setOrderInfo((prev) => ({
      ...prev,
      location: { ...prev.location, city: event.target.value },
    }));
  }

  function handleChangePointValue(event) {
    setOrderInfo((prev) => ({
      ...prev,
      location: { ...prev.location, point: event.target.value },
    }));
  }

  useEffect(async () => {
    const listOfCities = await getCityList();
    setCityList(listOfCities);
  }, []);

  useEffect(async () => {
    if (orderInfo.location.city !== null) {
      const cityId = cityList.find(
        (item) => item.name === orderInfo.location.city,
      );

      const listOfPoints = await getPointListByCityId(cityId?.id);
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
