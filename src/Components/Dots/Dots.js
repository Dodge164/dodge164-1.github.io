import React from 'react';
import s from './Dots.module.scss';

export default function Dots({ currentSlide, onClick, sliderData }) {
  return (
    <div className={s.allDots}>
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={currentSlide === index ? `${s.dot} ${s.active} ` : s.dot}
          onClick={() => onClick(index)}
        ></div>
        //   <span ---- более предпочтительная форма записи
        //   key={index}
        //   className={cn(s.dot, { [s.active] : currentSlide === index })} -- слева классы перманентные, в скобках {[s.class] : условие}
        // только те, что при определенном условии
        //   onClick={() => onClick(index)}
        // ></span>
      ))}
    </div>
  );
}
