import React from 'react';
import mapPng from '../../Assets/map.png';

export default function DirectionContainer() {
  return (
    <>
      <div>
        <div>Выбор города</div>
        <div>Пункт выдачи</div>
      </div>
      <div>
        <img src={mapPng} alt="map" />
      </div>
    </>
  );
}
