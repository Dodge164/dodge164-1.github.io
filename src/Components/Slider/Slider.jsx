import React, { useState } from 'react';
import SliderData from './SliderData';
import Dots from '../Dots';
import Arrows from '../Arrows';
import s from './Slider.module.scss';

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { length } = slides;

  if (!Array.isArray(slides) || length <= 0) {
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

      <div className={s.carouselContainer}>
        <div
          className={s.carouselContent}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SliderData.map((slide) => (
            <div className={s.slide} key={slide.alt}>
              <div className={s.shadowSlide} />
              <img alt={slide.alt} src={slide.url} className={s.image} />
            </div>
          ))}
        </div>
      </div>

      <div className={s.slideInfo}>
        <h2>{SliderData[currentSlide].title}</h2>
        <p>{SliderData[currentSlide].text}</p>
        {SliderData.map(
          (slide, index) =>
            index === currentSlide && (
              <button
                key={slide.alt}
                data-background={index}
                className={s.btn}
                type="button"
              >
                Подробнее
              </button>
            ),
        )}
      </div>
      <Dots
        currentSlide={currentSlide}
        sliderData={SliderData}
        onClick={(current) => setCurrentSlide(current)}
      />
    </section>
  );
}
