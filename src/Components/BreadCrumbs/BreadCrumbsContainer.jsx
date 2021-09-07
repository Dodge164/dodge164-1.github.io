import React, { useContext } from 'react';
import BreadCrumbs from './BreadCrumbs';
import breadCrumbsData from './BreadCrumbsData';
import Context from '../../context';

export default function BreadCrumbsContainer() {
  const { step, setStep } = useContext(Context);
  const handleClickBread = (itemId) => {
    setStep(itemId);
    localStorage.setItem('currentStep', itemId);
  };

  return (
    <BreadCrumbs
      crumbs={breadCrumbsData}
      step={step}
      onClickBread={handleClickBread}
    />
  );
}
