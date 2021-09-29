import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function FuelComponent() {
  const { orderInfo } = useContext(Context);

  const {
    extends: { fuelTank },
  } = orderInfo;
  return (
    fuelTank && (
      <div className={s.step}>
        <div className={s.ttl}>Полный бак</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>Да</div>
        </div>
      </div>
    )
  );
}
