import React from 'react';
import MainPage from '../../Components/MainPage';
import Sidebar from '../../Components/Sidebar';
import Slider from '../../Components/Slider';
import s from './StartScreen.module.scss';

function StartScreen() {
  return (
    <>
      {/* <div className={s.absolute}> */}
      <Sidebar />
      {/* </div> */}

      <div className={s.mainContainer}>
        <MainPage />
        <Slider />
      </div>
    </>
  );
}

export default StartScreen;
