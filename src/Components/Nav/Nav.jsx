import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TelegramSvg } from '../../Assets/svg/telegram.svg';
import { ReactComponent as FacebookSvg } from '../../Assets/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../Assets/svg/instagram.svg';
import s from './Nav.module.scss';

export default function Nav({ data }) {
  return (
    <>
      <section className={s.navContainer}>
        <div className={s.navText}>
          <div>
            {data.map((item) => (
              <div key={item.id}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
            <div className={s.navIcon}>
              <a className={s.icon} href="https://telegram.org">
                <TelegramSvg />
              </a>
              <a href="https://facebook.com">
                <FacebookSvg />
              </a>
              <a className={s.icon} href="https://instagram.com/">
                <InstagramSvg />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className={s.shadow} />
    </>
  );
}
