/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import BreadCrumb from './BreadCrumb';
import breadCrumbsData from './BreadCrumbsData';
import Context from '../../context';
import s from './BreadCrumbs.module.scss';

export default function BreadCrumbsContainer() {
  const { step, setStep, orderInfo } = useContext(Context);
  const handleClickBread = (itemId) => {
    setStep(itemId);
  };

  return (
    <div className={s.breadCrumbs}>
      {step < 5 ? (
        breadCrumbsData.map((crumb) => (
          <BreadCrumb
            length={breadCrumbsData.length}
            key={crumb.id.toString()}
            crumb={crumb}
            step={step}
            onClickBread={handleClickBread}
          />
        ))
      ) : (
        <span>{`Заказ номер ${orderInfo.orderId}`}</span>
      )}
    </div>
  );
}
