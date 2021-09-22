import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Vector } from '../../Assets/svg/vectors/vectorNext.svg';

import s from './Arrow.module.scss';

export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <>
      <div
        className={s.sliderNavPrev}
        onClick={prevSlide}
        onKeyPress={prevSlide}
        role="button"
        tabIndex="0"
      >
        <Vector className={s.arrowPrev} />
      </div>
      <div
        className={s.sliderNavNext}
        onClick={nextSlide}
        onKeyPress={nextSlide}
        role="button"
        tabIndex="0"
      >
        <Vector className={s.arrowNext} />
      </div>
    </>
  );
}

Arrows.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};
