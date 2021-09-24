import React, { useContext } from 'react';
import Location from '../Location';
import Context from '../../context';
import CarsContainer from '../Cars/CarsContainer';
import ExtendsContainer from '../Extends';
import SummaryConfirm from '../Summary/SummaryConfirm/SummaryConfirm';
import SummaryAccept from '../Summary/SummaryAccept/SummaryAccept';

export default function OrderStepsContainer() {
  const { step } = useContext(Context);

  return (
    <>
      {step === 0 && <Location />}
      {step === 1 && <CarsContainer />}
      {step === 2 && <ExtendsContainer step={step} />}
      {(step === 3 || step === 4) && <SummaryConfirm step={step} />}
      {step === 5 && <SummaryAccept step={step} />}
    </>
  );
}
