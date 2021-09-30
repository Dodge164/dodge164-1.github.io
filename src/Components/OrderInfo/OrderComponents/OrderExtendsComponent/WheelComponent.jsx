import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function WheelComponent() {
  const { orderInfo } = useContext(Context);

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { wheel },
  } = orderInfo;
  return (
    wheel && (
      <div className={s.step}>
        <div className={s.ttl}>Правый руль</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>Да</div>
        </div>
      </div>
    )
  );
}
