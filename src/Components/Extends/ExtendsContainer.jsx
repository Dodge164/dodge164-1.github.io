/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Extends.module.scss';

export default function ExtendsContainer() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div className={s.extendsContainer}>
        <div className={s.extendsTtl}>Цвет</div>
        <div className={s.radioGroupColor}>
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

        <div className={s.extendsTtl}>Дата аренды</div>
        <div className={s.pickerWrapper}>
          <span>C</span>
          <DatePicker
            className={s.datePicker}
            placeholderText="Ведите дату и время"
            selected={startDate}
            showTimeSelect
            onChange={(date) => setStartDate(date)}
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd.MM.yyyy HH:mm"
            timeCaption="time"
            minDate={new Date()}
            isClearable
          />

          <span>По</span>
          <DatePicker
            className={s.datePicker}
            selected={endDate}
            showTimeSelect
            onChange={(date) => setEndDate(date)}
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd.MM.yyyy HH:mm"
            timeCaption="time"
            minDate={new Date()}
            placeholderText="Ведите дату и время"
            isClearable
          />
        </div>

        <div>
          <div className={s.extendsTtl}>Тариф</div>
          <div className={s.radioGroupRate}>
            <label className={s.radioLabel} htmlFor="radio-2.1">
              <span>Поминутно, 7 ₽/мин </span>
              <input
                type="radio"
                name="rate"
                id="radio-2.1"
                className={s.radioBtn}
                checked="checked"
              />
              <div className={s.customIndicator} />
            </label>
            <label className={s.radioLabel} htmlFor="radio-2.1">
              <span>На сутки, 1999 ₽/сутки</span>
              <input
                type="radio"
                name="rate"
                id="radio-2.2"
                className={s.radioBtn}
                checked="checked"
              />
              <div className={s.customIndicator} />
            </label>
          </div>
        </div>
        <div>
          <div className={s.extendsTtl}>Доп услуги</div>
          <label className={s.checkboxGroup}>
            <input type="checkbox" name="extra" className={s.checkBtn} />
            <div className={s.customCheckbox} />
            <span>Полный бак, 500р</span>
          </label>
          <label className={s.checkboxGroup}>
            <input type="checkbox" name="extra" className={s.checkBtn} />
            <div className={s.customCheckbox} />
            <span>Детское кресло, 200р</span>
          </label>
          <label className={s.checkboxGroup}>
            <input type="checkbox" name="extra" className={s.checkBtn} />
            <div className={s.customCheckbox} />
            <span>Правый руль, 1600р</span>
          </label>
        </div>
      </div>
    </>
  );
}
