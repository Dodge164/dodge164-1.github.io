import React /* { useState } */ from 'react';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import s from './MainPage.module.scss';
//import cn from 'classnames';
import { ReactComponent as Logo } from '../../images/svg/Logo.svg';
import { ReactComponent as Map } from '../../images/svg/map.svg';

function MainPage() {
  return (
    <section className={s.container}>
      <header className={s.header}>
        <Logo className={s.logo} />
        <Map className={s.map} />
        Ульяновск
      </header>
      <div className={s.heroBlock}>
        <h1 className={s.title}>Каршеринг</h1>
        <h2 className={s.subTitle}>Need for drive</h2>
        <p className={s.text}>Поминутная аренда авто твоего города</p>

        <button className={s.btn}>Забронировать</button>
      </div>
      <footer className={s.footer}>
        <p className={s.footerInfo}>© 2016-2019 «Need for drive»</p>
        <p className={s.footerContact}>8 (495) 234-22-44</p>
      </footer>
    </section>
  );
}
export default MainPage;
