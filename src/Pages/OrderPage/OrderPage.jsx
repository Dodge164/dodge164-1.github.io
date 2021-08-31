import React from 'react';
import BreadCrumbs from '../../Components/BreadCrumbs';
import Header from '../../Components/Header';
import OrderSteps from '../../Components/OrderSteps';

import s from './OrderPage.module.scss';

export default function OrderPage() {
  return (
    <>
      <div className={s.orderPageContainer}>
        <div className={s.header}>
          <Header />
        </div>
        <div className={s.breadCrumbs}>
          <BreadCrumbs />
        </div>
        <OrderSteps />
      </div>
    </>
  );
}
