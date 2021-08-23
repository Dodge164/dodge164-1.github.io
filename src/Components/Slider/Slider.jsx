import React from 'react';
import slider from '../../images/sliders/slider01.png';
import s from './Slider.module.scss';

function Slider() {
  return <img className={s.slider} src={slider} alt="slider01"></img>;
  //   return <div className={s.slider}>13131313</div>;
}

export default Slider;
