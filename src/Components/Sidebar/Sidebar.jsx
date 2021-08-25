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

  const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <>
      <section className={cn(s.container, { [s.active]: isBurgerClicked })}>
        <div className={`d-flex flex-column flex-shrink-0 ${cn(s.sidebar)}`}>
          <Link href="/" className="d-block p-3 link-main text-decoration-none">
            {isBurgerClicked ? (
              <Close onClick={showSidebar} className={s.burger} />
            ) : (
              <Burger onClick={showSidebar} className={s.burger} />
            )}
          </Link>
        </div>
        {isBurgerClicked && (
          <>
            <section className={s.navContainer}>
              <div className={s.navText}>
                <div>
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
                    <InstagramSvg />
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
