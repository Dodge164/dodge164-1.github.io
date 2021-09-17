/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import cn from 'classnames';
import BreadCrumbs from '../../Components/BreadCrumbs';
import Header from '../../Components/Header';
import OrderSteps from '../../Components/OrderSteps';
import OrderInfo from '../../Components/OrderInfo';
import s from './OrderPage.module.scss';
import BurgerOrderInfoContainer from '../../Components/OrderInfo/BurgerOrderInfo';
import Context from '../../context';

import OrderStepBtnContainer from '../../Components/OrderInfo/OrderStepBtn';

export default function OrderPage() {
  const { isOrderBurgerClicked } = useContext(Context);
  return (
    <>
      <div className={s.orderPageContainer}>
        <div className={s.header}>
          <Header />
          <div className={s.breadCrumbsWrapper}>
            <BreadCrumbs />
          </div>
        </div>
        <div className={s.orderWrapper}>
          <div className={s.steps}>
            <OrderSteps />
          </div>
          <div
            className={cn(s.orderInfo, { [s.active]: isOrderBurgerClicked })}
          >
            <OrderInfo />
          </div>
        </div>
        <div className={s.orderBurger}>
          <BurgerOrderInfoContainer />
        </div>
        <div className={s.btn}>
          <OrderStepBtnContainer />
        </div>
      </div>
    </>
  );
}
