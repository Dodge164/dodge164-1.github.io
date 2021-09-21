import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function FuelComponent() {
  const { orderInfo } = useContext(Context);

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { fuelTank },
  } = orderInfo;
  return (
    fuelTank && (
      <>
        <div className={s.ttl}>Полный бак</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>{fuelTank}</div>
        </div>
      </>
    )
  );
}
