import React, { useContext } from 'react';
import LocationComponent from './LocationComponent';
import Context from '../../../../context';

export default function LocationComponentContainer() {
  const { orderInfo } = useContext(Context);
  const {
    location: { city, point },
  } = orderInfo;
  return city && <LocationComponent city={city} point={point} />;
}
