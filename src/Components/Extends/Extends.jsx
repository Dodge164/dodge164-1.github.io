/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Extends.module.scss';
import './datepicker.scss';
import DatepickerContainer from './Datepicker';
import RadioColorsContainer from './RadioColors/RadioColorsContainer';
import CheckBoxesContainer from './CheckBoxes/CheckBoxesContainer';
import TaxContainer from './Tax/TaxContainer';

export default function ExtendsContainer() {
  return (
    <>
      <div className={s.extendsContainer}>
        <RadioColorsContainer />
        <DatepickerContainer />
        <TaxContainer />
        <CheckBoxesContainer />
      </div>
    </>
  );
}
