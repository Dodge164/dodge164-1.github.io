import React from 'react';
import { ReactComponent as Logo } from '../../Assets/svg/Logo.svg';
import { ReactComponent as Map } from '../../Assets/svg/map.svg';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <Logo className={s.logo} />
      <div className={s.map}>
        <Map />
        <span className={s.mapText}>Ульяновск</span>
      </div>
    </header>
  );
}
