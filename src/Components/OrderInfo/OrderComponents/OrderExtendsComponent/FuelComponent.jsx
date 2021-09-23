/* eslint-disable operator-linebreak */
import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function FuelComponent() {
  const { orderInfo, step } = useContext(Context);

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { fuelTank },
  } = orderInfo;
  return (
    fuelTank &&
    step >= 2 && (
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
