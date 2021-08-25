import React from 'react';
// import Carousel from '../../Components/Carousel/Carousel';
import MainPage from '../../Components/MainPage';
import Sidebar from '../../Components/Sidebar';
import Slider from '../../Components/Slider';
import { SliderData } from '../../Components/Slider/SliderData';
import s from './StartScreen.module.scss';

export default function StartScreen() {
  return (
    <div className={s.mainContainer}>
      <Sidebar />
      <div className={s.mainPageContainer}>
        <MainPage />
      </div>
      <div className={s.sliderContainer}>
        <Slider slides={SliderData} />
      </div>
    </div>
  );
}
