import React, { useContext, useEffect, useState } from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import Context from '../../../context';
import 'react-datepicker/dist/react-datepicker.css';

import '../datepicker.scss';
import s from './Datepicker.module.scss';

registerLocale('ru', ru);
setDefaultLocale('ru', ru);
export default function DatepickerContainer() {
  const { orderInfo, setOrderInfo } = useContext(Context);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleStartTime(timeFrom) {
    setStartDate(timeFrom);
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        timeFrom,
      },
    }));
  }

  function handleEndTime(timeTo) {
    setEndDate(timeTo);
    setOrderInfo((prev) => ({
      ...prev,
      extends: { ...prev.extends, timeTo },
    }));
  }

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate < selectedDate.getTime();
  };

  const filterEndTime = (time) => {
    const selectedEndDate = new Date(time);
    return startDate < selectedEndDate.getTime();
  };
  function calcTotalTime() {
    const totalTime = (endDate.getTime() - startDate.getTime()) / 1000;
    const days = Math.floor(totalTime / 86400);
    const hours = Math.floor(totalTime / 3600) - days * 24;
    const minutes = Math.ceil(
      (totalTime - days * 24 * 3600 - hours * 3600) / 60,
    );
    const rentTime = `${days}д.${hours}ч.${minutes}мин.`;

    if (startDate.getTime() < endDate.getTime()) {
      setOrderInfo((prev) => ({
        ...prev,
        extends: {
          ...prev.extends,
          totalTime: rentTime,
        },
      }));
    }
  }
  useEffect(() => {
    if (startDate && endDate) {
      calcTotalTime();
    }
  }, [endDate, startDate]);

  return (
    <>
      <div className={s.extendsTtl}>Дата аренды</div>
      <div className={s.test}>
        <div className={s.pickerWrapper}>
          <div>C</div>
          <div>
            <DatePicker
              locale="ru"
              className={s.datePicker}
              placeholderText="Ведите дату и время"
              selected={startDate}
              showTimeSelect
              filterTime={filterPassedTime}
              onChange={(timeFrom) => handleStartTime(timeFrom)}
              value={orderInfo.extends.timeFrom}
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd.MM.yyyy HH:mm"
              timeCaption="time"
              minDate={new Date()}
              isClearable
            />
          </div>
        </div>
        <div className={s.pickerWrapper}>
          <div>По</div>
          <div>
            <DatePicker
              locale="ru"
              className={s.datePicker}
              placeholderText="Ведите дату и время"
              selected={endDate}
              showTimeSelect
              filterTime={filterEndTime}
              onChange={(timeTo) => handleEndTime(timeTo)}
              value={orderInfo.extends.timeTo}
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd.MM.yyyy HH:mm"
              timeCaption="time"
              minDate={new Date(startDate)}
              isClearable
            />
          </div>
        </div>
      </div>
    </>
  );
}
