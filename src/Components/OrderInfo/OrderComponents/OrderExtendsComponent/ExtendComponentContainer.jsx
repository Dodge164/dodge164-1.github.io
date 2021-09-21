import React, { useContext } from 'react';
import ExtendComponent from './ExtendComponent';
import Context from '../../../../context';

export default function ExtendComponentContainer() {
  const { orderInfo } = useContext(Context);

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { color, totalTime, tax, fuelTank, chair, wheel },
  } = orderInfo;

  return (
    totalTime && (
      <ExtendComponent
        color={color}
        totalTime={totalTime}
        tax={tax}
        fuelTank={fuelTank}
        chair={chair}
        wheel={wheel}
      />
    )
  );
}
