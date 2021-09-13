/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import cn from 'classnames';
import s from './BreadCrumbs.module.scss';
import { ReactComponent as CrumbSvg } from '../../Assets/svg/crumb.svg';
import Context from '../../context';

export default function BreadCrumb({ crumb, step, onClickBread, length }) {
  const { orderInfo } = useContext(Context);
  // const {
  //   location: { city, point },
  // } = orderInfo;
  // function onCheckStep(id) {
  //   if (id < step + 1) {
  //     // if ((step < 1 && id === 1) || step >= id) {
  //     return !city || !point;
  //     // 0 || 0 => 1 || 1 true disabled
  //     // 1 || 0 => 0 || 1 true disabled
  //     // 1 || 1 => 0 || 0 false active
  //   }

  //   return true;
  // }
  return (
    <button
      // disabled={onCheckStep(crumb.id)}
      className={s.btn}
      onClick={() => onClickBread(crumb.id)}
      to={crumb.path}
      type="button"
    >
      <span
        className={cn(s.crumbName, {
          [s.active]: step === crumb.id,
          [s.done]: step > crumb.id,
        })}
      >
        {crumb.title}
      </span>
      {crumb.id < length - 1 && (
        <span className={s.crumbIcon}>
          <CrumbSvg />
        </span>
      )}
    </button>
  );
}
