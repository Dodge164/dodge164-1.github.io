import React, { useContext } from 'react';
import City from './City';
import Context from '../../../../context';

export default function CityContainer() {
  const { orderInfo } = useContext(Context);
  const {
    location: { city, point },
  } = orderInfo;
  return city && <City city={city} point={point} />;
}
