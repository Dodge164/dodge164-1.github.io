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
  // const lang = [['eng'], ['rus']];
  // const [isLangClicked, setIsLangClicked] = useState([]);

  // handleLClick = (i) => {
  //   this.setState({
  //     clickedLang: lang[i],
  //   });
  // };
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <div className={s.container}>
      <div className={`d-flex flex-column flex-shrink-0 ${cn(s.sidebar)}`}>
        <Link href="/" className="d-block p-3 link-main text-decoration-none">
          {isBurgerClicked ? (
            <Close className={s.faBars} onClick={showSidebar} />
          ) : (
            <Burger className={s.faBars} onClick={showSidebar} />
          )}
        </Link>

        <div>
          <button>
            <strong>eng</strong>
          </button>
        </div>
      </div>
      {isBurgerClicked && (
        <>
          <div className={s.navContainer}>
            <ul className={s.navText}>
              {isBurgerClicked &&
                SidebarData.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path}>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              <div className={s.navIcon}>
                {isBurgerClicked && (
                  <>
                    <TelegramSvg className={s.icon} />

                    <FacebookSvg className={s.icon} />

                    <InstagramSvg />
                  </>
                )}
              </div>
            </ul>
          </div>
          <div className={s.shadow}></div>
        </>
      )}
    </div>
  );
}
export default Sidebar;
