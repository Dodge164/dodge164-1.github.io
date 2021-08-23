import React /* { useState } */ from 'react';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import s from './MainPage.module.scss';
//import cn from 'classnames';
import { ReactComponent as Logo } from '../../images/svg/Logo.svg';
import { ReactComponent as Map } from '../../images/svg/map.svg';

function MainPage() {
  // const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  // const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Logo className={s.logo} />
        <Map className={s.map} />
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

      {/* <div
        className={`d-flex flex-column flex-shrink-0 ${cn(s.sidebar, {
          [s.active]: isBurgerClicked,
        })}`}
      >
        <Link href="/" className="d-block p-3 link-main text-decoration-none">
          {isBurgerClicked ? (
            <Close className={s.faBars} onClick={showSidebar} />
          ) : (
            <Burger className={s.faBars} onClick={showSidebar} />
          )}
        </Link>
        <ul>
          {isBurgerClicked &&
            SidebarData.map((item, index) => {
              return (
                <>
                  <li key={index} className={s.navText}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </>
              );
            })}
        </ul>
        <ul className={s.icon}>
          {isBurgerClicked && (
            <>
              <div className={s.icon}>
                <TelegramSvg />
              </div>
              <div className={s.icon}>
                <FacebookSvg />
              </div>
              <div className={s.icon}>
                <InstagramSvg />
              </div>
              ) 
            </>
          )}
        </ul>

        <div>
          <Link
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>eng</strong>
          </Link>
        </div>
      </div>*/}
    </div>
  );
}
export default MainPage;
