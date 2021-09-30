/* eslint-disable prefer-template */
/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './PriceComponent.module.scss';

export default function PriceComponent() {
  const { orderInfo } = useContext(Context);
  const {
    car: { priceMax, priceMin },
  } = orderInfo;
  return (
    <>
      <div className={s.totalPrice}>
        <div className={s.priceLabel}>
          Цена:
          <span className={s.price}>
            {orderInfo.price ? (
              `${orderInfo.price?.toLocaleString('ru')} ₽`
            ) : priceMin && priceMax ? (
              <>
                {priceMin?.toLocaleString('ru')}
                &nbsp;-&nbsp;
                {priceMax?.toLocaleString('ru')}
                &nbsp;₽
              </>
            ) : (
              '0 ₽'
            )}
          </span>
        </div>
      </div>
    </>
  );
}
