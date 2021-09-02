import React from 'react';
import BreadCrumbs from '../../Components/BreadCrumbs';
import Header from '../../Components/Header';
import OrderSteps from '../../Components/OrderSteps';
import OrderInfo from '../../Components/OrderInfo';

import s from './OrderPage.module.scss';

export default function OrderPage() {
  return (
    <>
      <div className={s.orderPageContainer}>
        <div className={s.header}>
          <Header />
        </div>
        <div className={s.breadCrumbsWrapper}>
          <BreadCrumbs />
        </div>
        <div className={s.orderWrapper}>
          <div className={s.steps}>
            <OrderSteps />
          </div>
          <div className={s.orderInfo}>
            <OrderInfo />
          </div>
        </div>
      </div>
    </>
  );
}
