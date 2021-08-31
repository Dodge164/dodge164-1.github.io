import React from 'react';
import { Link } from 'react-router-dom';
import s from './BreadCrumbs.module.scss';
import { ReactComponent as CrumbSvg } from '../../Assets/svg/crumb.svg';

export default function BreadCrumbs({ data }) {
  return (
    <div className={s.breadCrumbs}>
      {data.map((item, id) => (
        <>
          <div className={s.crumbName} key={item.id}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </div>
          {id < data.length - 1 && (
            <div className={s.crumbIcon}>
              <CrumbSvg />
            </div>
          )}
        </>
      ))}
    </div>
  );
}

// className={cn(s.dot, { [s.active]: currentSlide === index })}
