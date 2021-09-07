/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import cn from 'classnames';
import s from './BreadCrumbs.module.scss';
import { ReactComponent as CrumbSvg } from '../../Assets/svg/crumb.svg';
import Context from '../../context';

export default function BreadCrumbs({ crumbs, step, onClickBread }) {
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
    <div className={s.breadCrumbs}>
      {crumbs.map((crumb, id) => (
        <>
          <button
            // disabled={onCheckStep(crumb.id)}
            key={crumb.id}
            className={s.btn}
            onClick={() => onClickBread(crumb.id)}
            to={crumb.path}
          >
            <span
              className={cn(s.crumbName, {
                [s.active]: step === crumb.id,
                [s.done]: step > crumb.id,
              })}
            >
              {crumb.title}
            </span>
            {id < crumbs.length - 1 && (
              <span className={s.crumbIcon}>
                <CrumbSvg />
              </span>
            )}
          </button>
        </>
      ))}
    </div>
  );
}
