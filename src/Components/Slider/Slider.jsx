import React, { useState } from 'react';
import { SliderData } from './SliderData';
import s from './Slider.module.scss';
// import cn from 'classnames';
import { ReactComponent as VectorNext } from '../../images/svg/vectors/vectorNext.svg';
import { ReactComponent as VectorPrev } from '../../images/svg/vectors/vectorPrev.svg';

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={s.container}>
      <div className={s.sliderNavPrev} onClick={prevSlide}>
        <VectorPrev className={s.arrow} />
      </div>
      <div className={s.sliderNavNext} onClick={nextSlide}>
        <VectorNext className={s.arrow} />
      </div>

      {SliderData.map((slide, index) => {
        return (
          index === currentSlide && (
            <div className={s.slide} key={index}>
              <img alt={index.alt} src={slide.url} className={s.image} />
            </div>
          )
        );
      })}
    </section>
  );
}
