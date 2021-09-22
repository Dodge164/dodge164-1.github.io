/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import cn from 'classnames';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import s from './Extends.module.scss';
import './datepicker.scss';
import Context from '../../context';

registerLocale('ru', ru);
setDefaultLocale('ru', ru);
export default function ExtendsContainer() {
  const { orderInfo, setOrderInfo } = useContext(Context);
  const { car } = orderInfo;
  const [checkedColor, setCheckedColor] = useState('Любой');
  const [checkedTax, setCheckedTax] = useState('Поминутно');

  function handleColor(color) {
    setCheckedColor(color);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        color,
      },
    }));
  }
  function handleChosenTax(tax) {
    setCheckedTax(tax);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        tax,
      },
    }));
  }
  //
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allTime, setAllTime] = useState('');

  function handleStartTime(timeFrom) {
    setSelectedStartDate(timeFrom);
    setOrderInfo((prev) => ({
      ...prev,
      time: {
        ...prev.time,
        timeFrom,
      },
    }));
  }

  function handleEndTime() {
    setOrderInfo((prev) => ({
      ...prev,
      time: { ...prev.time, timeTo },
    }));
  }

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate < selectedDate.getTime();
  };

  const filterEndTime = (time) => {
    const selectedEndDate = new Date(time);
    return selectedStartDate < selectedEndDate.getTime();
  };

  return (
    <>
      <div className={s.extendsContainer}>
        <div className={s.extendsTtl}>Цвет</div>
        <div className={s.radioGroupColor}>
          <label
            htmlFor="any"
            className={cn(s.radioLabel, {
              [s.active]: checkedColor === 'Любой',
            })}
          >
            <input
              checked={checkedColor === 'Любой'}
              className={s.radioBtn}
              name="color"
              onChange={() => handleColor('Любой')}
              type="radio"
              id="any"
            />
            <div
              className={cn(s.radioText, {
                [s.active]: checkedColor === 'Любой',
              })}
            >
              Любой
            </div>
            <div className={s.customIndicator} />
          </label>
          {car?.colors?.map((color) => (
            <label
              key={color}
              htmlFor={color}
              className={cn(s.radioLabel, {
                [s.active]: color === checkedColor,
              })}
            >
              <input
                checked={checkedColor === color}
                id={color}
                onChange={() => handleColor(color)}
                className={s.radioBtn}
                type="radio"
                name="color"
              />

              <span
                className={cn(s.radioLabel, {
                  [s.active]: color === checkedColor,
                })}
                onClick={() => handleColor(color)}
                onKeyPress={() => handleColor(color)}
                role="button"
                tabIndex="0"
              >
                {color}
              </span>
              <div className={s.customIndicator} />
            </label>
          ))}
        </div>

        <div className={s.extendsTtl}>Дата аренды</div>
        <div className={s.test}>
          <div className={s.pickerWrapper}>
            <div>C</div>
            <div>
              <DatePicker
                locale="ru"
                className={s.datePicker}
                placeholderText="Ведите дату и время"
                selected={selectedStartDate}
                showTimeSelect
                filterTime={filterPassedTime}
                onChange={(date) => setSelectedStartDate(date)}
                onClick={(timeFrom) => handleStartTime(timeFrom)}
                // onSetStartTime={(date) => handleSetStartTime(date)}
                // value={orderInfo.extends.timeFrom}
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd.MM.yyyy HH:mm"
                timeCaption="time"
                minDate={new Date()}
                isClearable
                checked={setSelectedStartDate === new Date()}
              />

              {/* {console.log('date', timeFrom)} */}
            </div>
          </div>
          <div className={s.pickerWrapper}>
            <div>По</div>
            <div>
              <DatePicker
                locale="ru"
                className={s.datePicker}
                selected={endDate}
                showTimeSelect
                filterTime={filterEndTime}
                onChange={(date) => setEndDate(date)}
                onSetEndTime={(date) => handleEndTime(date)}
                value={orderInfo.extends.timeTo}
                onClick={(timeTo) => handleStartTime(timeTo)}
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd.MM.yyyy HH:mm"
                timeCaption="time"
                minDate={new Date(selectedStartDate)}
                placeholderText="Ведите дату и время"
                isClearable
              />
            </div>
          </div>
        </div>
        <div>
          <div className={s.extendsTtlT}>Тариф</div>
          <div className={s.radioGroupRate}>
            <label
              htmlFor="radio-2.1"
              className={cn(s.radioLabel, {
                [s.active]: checkedTax === 'Поминутно',
              })}
            >
              <span
                className={cn(s.radioText, {
                  [s.active]: checkedTax === 'Поминутно',
                })}
              >
                Поминутно, 7 ₽/мин
              </span>
              <input
                checked={checkedTax === 'Поминутно'}
                className={s.radioBtn}
                name="rate"
                onChange={() => handleChosenTax('Поминутно')}
                type="radio"
                id="radio-2.1"
              />
              <div className={s.customIndicator} />
            </label>
            <label
              className={cn(s.radioLabel, {
                [s.active]: checkedTax === 'На сутки',
              })}
              htmlFor="radio-2.2"
            >
              <span>На сутки, 1999 ₽/сутки</span>
              <input
                checked={checkedTax === 'На сутки'}
                type="radio"
                name="rate"
                id="radio-2.2"
                className={s.radioBtn}
                onChange={() => handleChosenTax('На сутки')}
              />
              <div className={s.customIndicator} />
            </label>
          </div>
        </div>
        <div>
          <div className={s.extendsTtl}>Доп услуги</div>
          <label className={s.checkboxGroup}>
            <input
              type="checkbox"
              name="extra"
              className={s.checkBtn}
              defaultChecked
            />
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
