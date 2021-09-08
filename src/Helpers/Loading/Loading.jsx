import React from 'react';
import s from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={s.laodingCenter}>
      <div className={s.bouncer}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
