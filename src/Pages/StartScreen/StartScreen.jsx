import React from 'react';
import MainPage from '../../Components/MainPage';
import Slider from '../../Components/Slider';
import SliderData from '../../Components/Slider/SliderData';

import s from './StartScreen.module.scss';

export default function StartScreen() {
  return (
    <div className={s.startScreenContainer}>
      <div className={s.mainPageContainer}>
        <MainPage />
      </div>

      <div className={s.sliderContainer}>
        <Slider slides={SliderData} />
      </div>
    </div>
  );
}
