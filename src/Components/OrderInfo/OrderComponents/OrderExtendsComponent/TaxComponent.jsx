import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function TaxComponent() {
  const { orderInfo } = useContext(Context);

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { tax },
  } = orderInfo;
  return (
    tax && (
      <>
        <div className={s.ttl}>Тариф</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>{tax || 'На сутки'}</div>
        </div>
      </>
    )
  );
}
