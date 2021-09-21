/* eslint-disable spaced-comment */
import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function TimeComponent() {
  const { orderInfo } = useContext(Context);

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { color, totalTime },
  } = orderInfo;
  return (
    color && (
      <>
        <div className={s.ttl}>Длительность аренды</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>{totalTime}</div>
        </div>
      </>
    )
  );
}
