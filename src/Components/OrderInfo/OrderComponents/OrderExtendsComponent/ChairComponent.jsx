import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function ChairComponent() {
  const { orderInfo } = useContext(Context);

  const {
    extends: { chair },
  } = orderInfo;
  return (
    chair && (
      <div className={s.step}>
        <div className={s.ttl}>Детское кресло</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>Да</div>
        </div>
      </div>
    )
  );
}
