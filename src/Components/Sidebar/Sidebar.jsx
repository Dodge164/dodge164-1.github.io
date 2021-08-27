import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import s from './Sidebar.module.scss';
import cn from 'classnames';
import { ReactComponent as TelegramSvg } from '../../images/svg/telegram.svg';
import { ReactComponent as FacebookSvg } from '../../images/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../images/svg/instagram.svg';
import { ReactComponent as Close } from '../../images/svg/x.svg';
import { ReactComponent as Burger } from '../../images/svg/menu_btn.svg';

function Sidebar() {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const [lang, setLang] = useState('eng');
  const changeLang = () => setLang((prev) => (prev === 'Рус' ? 'Eng' : 'Рус'));

  const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <>
      <section className={cn(s.container, { [s.active]: isBurgerClicked })}>
        <div className={cn(s.sidebar, { [s.active]: isBurgerClicked })}>
          <div className={s.burger}>
            {isBurgerClicked ? (
              <Close className={s.close} onClick={showSidebar} />
            ) : (
              <Burger
                className={cn(s.line, { [s.active]: isBurgerClicked })}
                onClick={showSidebar}
              />
            )}
          </div>
          <button
            onClick={changeLang}
            className={cn(s.lang, { [s.hidden]: isBurgerClicked })}
          >
            <div>{lang}</div>
          </button>
        </div>
        {isBurgerClicked && (
          <>
            <section className={s.navContainer}>
              <div className={s.navText}>
                <div>
                  123
                  {SidebarData.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link to={item.path}>
                          <span>{item.title}</span>
                        </Link>
                      </div>
                    );
                  })}
                  <div className={s.navIcon}>
                    <TelegramSvg className={s.icon} />
                    <FacebookSvg className={s.icon} />
                    <InstagramSvg className={s.icon} />
                  </div>
                </div>
              </div>
            </section>
            <div className={s.shadow}></div>
          </>
        )}
      </section>
    </>
  );
}
export default Sidebar;
