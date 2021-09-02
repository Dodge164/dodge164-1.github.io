/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ExtendsContainer from '../Extends/ExtendsContainer';
import Location from '../Location';
import Context from '../../context';

export default function OrderStepsContainer() {
  const { step } = useContext(Context);

  return (
    <>
      {step === 0 && <Location />}
      {step === 1 && <ExtendsContainer />}
      {/* {step === 2 && <Summary />}
      {step === 3 && <SummaryModal />}
      {step === 4 && <Finally />} */}
    </>
  );
}
