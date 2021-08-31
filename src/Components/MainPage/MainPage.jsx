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
        <h2 className={s.title}>Каршеринг</h2>
        <h3 className={s.subTitle}>Need for drive</h3>
        <p className={s.text}>Поминутная аренда авто твоего города</p>
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
