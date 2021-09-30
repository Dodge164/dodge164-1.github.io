import React, { useState, useContext } from 'react';
import cn from 'classnames';
import SidebarData from './SidebarData';
import Nav from '../Nav';
import Burger from './Burger';
import Context from '../../context';
import s from './Sidebar.module.scss';

function Sidebar() {
  const { isBurgerClicked } = useContext(Context);
  const [lang, setLang] = useState('Eng');
  const changeLang = () => setLang((prev) => (prev === 'Рус' ? 'Eng' : 'Рус'));

  return (
    <>
      <Burger />
      <section className={cn(s.container, { [s.active]: isBurgerClicked })}>
        <div className={cn(s.sidebar, { [s.active]: isBurgerClicked })}>
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
