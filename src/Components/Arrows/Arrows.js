import React from 'react';
import s from './Arrows.module.scss';
import { ReactComponent as VectorNext } from '../../images/svg/vectors/vectorNext.svg';
import { ReactComponent as VectorPrev } from '../../images/svg/vectors/vectorPrev.svg';

export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <>
      <div className={s.sliderNavPrev} onClick={prevSlide}>
        <VectorPrev className={s.arrowPrev} />
      </div>
      <div className={s.sliderNavNext} onClick={nextSlide}>
        <VectorNext className={s.arrowNext} />
      </div>
    </>
  );
}
