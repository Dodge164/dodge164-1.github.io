import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function ColorComponent() {
  const { orderInfo } = useContext(Context);

  const {
    extends: { color },
  } = orderInfo;
  return (
    color && (
      <div className={s.step}>
        <div className={s.ttl}>Цвет</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>{color || 'Любой'}</div>
      </div>
    )
  );
}
