import React, { useContext } from 'react';
import Context from '../../../../context';
import s from './ExtendComponent.module.scss';

export default function ChairComponent() {
  const { orderInfo } = useContext(Context);

  const {
    // eslint-disable-next-line object-curly-newline
    extends: { chair },
  } = orderInfo;
  return (
    chair && (
      <>
        <div className={s.ttl}>Детское кресло</div>
        <div className={s.dottedBottom}>{}</div>
        <div className={s.spots}>
          <div>{chair}</div>
        </div>
      </>
    )
  );
}
