import React, { useContext } from 'react';
import BreadCrumb from './BreadCrumb';
import breadCrumbsData from './BreadCrumbsData';
import Context from '../../context';
import s from './BreadCrumbs.module.scss';

export default function BreadCrumbsContainer() {
  const { step, setStep } = useContext(Context);
  const handleClickBread = (itemId) => {
    setStep(itemId);
    // localStorage.setItem('currentStep', itemId);
  };

  return (
    <div className={s.breadCrumbs}>
      {breadCrumbsData.map((crumb) => (
        <BreadCrumb
          length={breadCrumbsData.length}
          key={crumb.id.toString()}
          crumb={crumb}
          step={step}
          onClickBread={handleClickBread}
        />
      ))}
    </div>
  );
}
