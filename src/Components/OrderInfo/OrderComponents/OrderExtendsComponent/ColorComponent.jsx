import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function ColorComponent() {
  const { orderInfo } = useContext(Context);

  const {
    car: { model },
  } = orderInfo;

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { color },
  } = orderInfo;
  return (
    model && (
      <>
        <div className={s.ttl}>Цвет</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>{color || 'Любой'}</div>
      </>
    )
  );
}