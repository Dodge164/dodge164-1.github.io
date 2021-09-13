/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import cn from 'classnames';
import s from './Dots.module.scss';

export default function Dots({ currentSlide, onClick, sliderData }) {
  return (
    <div className={s.allDots}>
      {sliderData.map((slide, index) => (
        <div
          role="button"
          onKeyPress={() => onClick(index)}
          tabIndex="0"
          key={slide.url}
          className={cn(s.dot, { [s.active]: currentSlide === index })}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}
