import React, { useContext } from 'react';
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

  function handleEndTime(timeTo) {
    setOrderInfo((prev) => ({
      ...prev,
      extends: { ...prev.extends, timeTo },
    }));
  }
  function handleStartTime(timeFrom) {
    setOrderInfo((prev) => ({
      ...prev,
      extends: {
        ...prev.extends,
        timeFrom,
        timeTo: timeFrom >= prev.extends.timeTo ? null : prev.extends.timeTo,
      },
    }));
    if (!timeFrom) {
      handleEndTime(null);
    }
  }

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate < selectedDate.getTime();
  };

  const filterEndTime = (time) => {
    const selectedEndDate = new Date(time);
    return orderInfo.extends.timeFrom < selectedEndDate.getTime();
  };

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
              selected={orderInfo.extends.timeFrom}
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
              disabled={orderInfo.extends.timeFrom === null}
              locale="ru"
              className={s.datePicker}
              placeholderText="Ведите дату и время"
              selected={orderInfo.extends.timeTo}
              showTimeSelect
              filterTime={filterEndTime}
              onChange={(timeTo) => handleEndTime(timeTo)}
              value={orderInfo.extends.timeTo}
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd.MM.yyyy HH:mm"
              timeCaption="time"
              minDate={new Date(orderInfo.extends.timeFrom)}
              isClearable
            />
          </div>
        </div>
      </div>
    </>
  );
}
