/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Extends.module.scss';

export default function ExtendsContainer() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className={s.extendsContainer}>
        <div className={s.radioTtl}>Цвет</div>
        <div className={s.radioGroup}>
          <label className={s.radioLabel} htmlFor="radio-1">
            <input
              id="radio-1"
              className={s.radioBtn}
              type="radio"
              name="color"
              checked="checked"
            />
            <div className={s.radioText}>Любой</div>
            <div className={s.customIndicator} />
          </label>
          <label htmlFor="radio-2" className={s.radioLabel}>
            <input
              id="radio-2"
              className={s.radioBtn}
              type="radio"
              name="color"
            />
            <div className={s.radioText}>Красный</div>
            <div className={s.customIndicator} />
          </label>
          <label htmlFor="radio-3" className={s.radioLabel}>
            <input
              id="radio-3"
              className={s.radioBtn}
              type="radio"
              name="color"
            />
            <div className={s.radioText}>Голубой</div>
            <div className={s.customIndicator} />
          </label>
        </div>
        <div>
          <div>Дата аренды</div>
          <span>C</span>
          <DatePicker
            selected={startDate}
            showTimeSelect
            onChange={(date) => setStartDate(date)}
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd.MM.yyyy HH:mm"
            timeCaption="time"
            minDate={new Date()}
            placeholderText="Ведите дату и время"
          />
          <span>По</span>
          <DatePicker
            selected={startDate}
            showTimeSelect
            onChange={(date) => setStartDate(date)}
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd.MM.yyyy HH:mm"
            timeCaption="time"
            minDate={new Date()}
            placeholderText="Ведите дату и время"
          />
        </div>
        <div>
          <div>Тариф</div>
          <label>
            <input type="radio" name="rate" />
            <span>Поминутно, 7 ₽/мин </span>
            <input type="radio" name="rate" />
            <span>На сутки, 1999 ₽/сутки</span>
          </label>
        </div>
        <div>
          <div>Доп услуги</div>
          <label>
            <input type="checkbox" name="extra" />
            <span>Полный бак, 500р</span>
            <input type="checkbox" name="extra" />
            <span>Детское кресло, 200р</span>
            <input type="checkbox" name="extra" />
            <span>Правый руль, 1600р</span>
          </label>
        </div>
      </div>
    </>
  );
}
