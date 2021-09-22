import React, { useState, useContext } from 'react';
import cn from 'classnames';
import SidebarData from './SidebarData';
// import { ReactComponent as Close } from '../../Assets/svg/x.svg';
// import { ReactComponent as Burger } from '../../Assets/svg/menu_btn.svg';
import Nav from '../Nav';
import Burger from './Burger';
import Context from '../../context';
import s from './Sidebar.module.scss';

function Sidebar() {
  // const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const { isBurgerClicked } = useContext(Context);
  const [lang, setLang] = useState('Eng');
  const changeLang = () => setLang((prev) => (prev === 'Рус' ? 'Eng' : 'Рус'));

  // const showSidebar = () => setIsBurgerClicked((prev) => !prev);
  return (
    <>
      <Burger />
      <section className={cn(s.container, { [s.active]: isBurgerClicked })}>
        <div className={cn(s.sidebar, { [s.active]: isBurgerClicked })}>
          {/* <div className={s.burger}>
          {isBurgerClicked ? (
            <Close className={s.close} onClick={showSidebar} />
          ) : (
            <Burger
              className={cn(s.line, { [s.active]: isBurgerClicked })}
              onClick={showSidebar}
            />
          )}
        </div> */}
          <button
            type="button"
            onClick={changeLang}
            className={cn(s.lang, { [s.hidden]: isBurgerClicked })}
          >
            <div>{lang}</div>
          </button>
        </div>
        {isBurgerClicked && <Nav data={SidebarData} />}
      </section>
    </>
  );
}
export default Sidebar;
