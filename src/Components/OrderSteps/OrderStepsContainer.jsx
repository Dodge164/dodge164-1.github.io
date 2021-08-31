/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Direction from '../Direction';

export default function OrderStepsContainer() {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && <Direction />}
      {/* { step === 2 && <Models /> }
           { step === 3 && <Extends /> }
           { step === 4 && <Summary /> }
           { step === 5 && <SummaryModal /> }
           { step === 6 && <Finally /> }  */}
      {/* <OrderInfo /> */}
    </>
  );
}
