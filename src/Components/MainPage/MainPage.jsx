import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import s from './MainPage.module.scss';

function MainPage() {
  const history = useHistory();
  return (
    <section className={s.container}>
      <Header />

      <div className={s.heroBlock}>
        <div className={s.title}>Каршеринг</div>
        <div className={s.subTitle}>Need for drive</div>
        <div className={s.text}>Поминутная аренда авто твоего города</div>
        <button
          onClick={() => history.push('/order')}
          className={s.btn}
          type="button"
        >
          Забронировать
        </button>
      </div>
      <Footer />
    </section>
  );
}
export default MainPage;
