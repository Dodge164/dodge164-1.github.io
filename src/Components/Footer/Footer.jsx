import React from 'react';
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.footerInfo}>© 2016-2019 «Need for drive»</p>
      <a className={s.footerContact} href="tel:+74951234567">
        8 (495) 234-22-44
      </a>
    </footer>
  );
}
