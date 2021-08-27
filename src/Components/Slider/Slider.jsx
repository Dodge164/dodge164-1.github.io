import React, { useState } from 'react';
import { SliderData } from './SliderData';
import s from './Slider.module.scss';
import Dots from '../Dots/Dots';
import Arrows from '../Arrows/Arrows';

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={s.container}>
      <Arrows
        nextSlide={() =>
          setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
        }
        prevSlide={() =>
          setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
        }
      />

      {SliderData.map((slide, index) => {
        return (
          index === currentSlide && (
            <div className={s.slide} key={index}>
              <div className={s.shadowSlide}></div>
              <img alt={index.alt} src={slide.url} className={s.image} />
            </div>
          )
        );
      })}
      <div className={s.slideInfo}>
        <h1>{SliderData[currentSlide].title}</h1>
        <p>{SliderData[currentSlide].text}</p>
        {SliderData.map((slide, index) => {
          return (
            index === currentSlide && (
              <button data-background={index} className={s.btn}>
                Подробнее
              </button>
            )
          );
        })}
      </div>
      <Dots
        currentSlide={currentSlide}
        sliderData={SliderData}
        onClick={(currentSlide) => setCurrentSlide(currentSlide)}
      />
    </section>
  );
}
