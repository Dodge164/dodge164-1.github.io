/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import s from './BreadCrumbs.module.scss';
import { ReactComponent as CrumbSvg } from '../../Assets/svg/crumb.svg';

export default function BreadCrumbs({ data, step, onClickBread }) {
  return (
    <div className={s.breadCrumbs}>
      {data.map((item, id) => (
        <>
          <button
            key={item.id}
            className={s.btn}
            onClick={() => onClickBread(item.id)}
            to={item.path}
          >
            <span className={cn(s.crumbName, { [s.active]: step === item.id })}>
              {item.title}
            </span>
            {id < data.length - 1 && (
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
