/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import cn from 'classnames';
import s from './BreadCrumbs.module.scss';
import { ReactComponent as CrumbSvg } from '../../Assets/svg/crumb.svg';
import Context from '../../context';

export default function BreadCrumb({ crumb, step, onClickBread, length }) {
  const { orderInfo } = useContext(Context);
  const {
    location: { city, point },
  } = orderInfo;
  const {
    car: { model },
  } = orderInfo;
  const {
    extends: { color, timeTo, timeFrom, tax },
  } = orderInfo;

  function onCheckStep() {
    if (crumb.id === 0) {
      return false;
    }
    if (crumb.id === 1) {
      return !city || !point;
    }
    if (crumb.id === 2) {
      return !model || !city || !point;
    }
    if (crumb.id === 3) {
      return (
        !color || !timeTo || !timeFrom || !tax || !model || !city || !point
      );
    }
    return true;
  }

  return (
    <button
      disabled={onCheckStep()}
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
