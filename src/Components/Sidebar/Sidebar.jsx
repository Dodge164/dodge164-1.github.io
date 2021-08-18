import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import s from './Sidebar.module.scss';
import cn from 'classnames';
import { ReactComponent as TelegramSvg } from '../../images/svg/telegram.svg';
import { ReactComponent as FacebookSvg } from '../../images/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../images/svg/instagram.svg';

function Sidebar() {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <>
      <div
        className={`d-flex flex-column flex-shrink-0 ${cn(s.sidebar, {
          [s.active]: isBurgerClicked,
        })}`}
      >
        <Link href="/" className="d-block p-3 link-main text-decoration-none">
          {isBurgerClicked ? (
            <AiOutlineClose className={s.faBars} onClick={showSidebar} />
          ) : (
            <FaBars className={s.faBars} onClick={showSidebar} />
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
      </div>
    </>
  );
}
export default Sidebar;

//   const [isBurgerClicked, setIsBurgerClicked] = useState(false);

//   const showSidebar = () => setIsBurgerClicked((prev) => !prev);
//   return (
//     <>
//       <div className={s.sidebar}>
//         <Link to="#" className={s.menuBars}>
//           <FaBars onClick={showSidebar} />
//         </Link>
//       </div>
//       <nav
//         className={cn(s.navMenu, s.red, {
//           [s.active]: isBurgerClicked,
//         })}
//       >
//         <ul>
//           <li className={s.sidebarToggle}>
//             <Link to="#" className={s.menuBars}>
//               <AiOutlineClose onClick={showSidebar} />
//             </Link>
//           </li>
//           {SidebarData.map((item, index) => {
//             return (
//               <li key={index} className={s.navText}>
//                 <Link to={item.path}>
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </>
//   );
// }
// export default Sidebar;
