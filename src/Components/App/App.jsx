/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import StartScreen from '../../Pages/StartScreen/StartScreen';
import OrderPage from '../../Pages/OrderPage';
import Sidebar from '../Sidebar';
import Context from '../../context';
import OrderData from '../OrderInfo/OrderData';

function App() {
  const [orderInfo, setOrderInfo] = useState(OrderData);
  const [step, setStep] = useState(0);
  const [cityList, setCityList] = useState([]);
  const [pointList, setPointList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const [isOrderBurgerClicked, setIsOrderBurgerClicked] = useState(false);
  useEffect(() => {
    console.log('orderInfo', orderInfo);
  }, [orderInfo, step]);

  function calcTotalTime() {
    if (orderInfo.extends.timeFrom && orderInfo.extends.timeTo) {
      const totalTime =
        (orderInfo.extends.timeTo.getTime() -
          orderInfo.extends.timeFrom.getTime()) /
        1000;
      const days = Math.floor(totalTime / (60 * 60 * 24));
      const hours = Math.floor((totalTime / 3600) % 24);
      const minutes = Math.floor((totalTime / 60) % 60);
      const rentTime = `${days}д.${hours}ч.${minutes}мин.`;
      if (
        orderInfo.extends.timeFrom.getTime() <
        orderInfo.extends.timeTo.getTime()
      ) {
        setOrderInfo((prev) => ({
          ...prev,
          extends: {
            ...prev.extends,
            totalTime: rentTime,
          },
        }));
      }
    }
  }
  useEffect(() => {
    if (orderInfo.extends.timeFrom && orderInfo.extends.timeTo) {
      calcTotalTime();
    } else {
      setOrderInfo((prev) => ({
        ...prev,
        price: 0,
        extends: {
          ...prev.extends,
          totalTime: null,
          timeTo: null,
        },
      }));
    }
  }, [orderInfo.extends.timeTo, orderInfo.extends.timeFrom]);

  return (
    <Context.Provider
      value={{
        step,
        setStep,
        orderInfo,
        setOrderInfo,
        loading,
        setLoading,
        isBurgerClicked,
        setIsBurgerClicked,
        isOrderBurgerClicked,
        setIsOrderBurgerClicked,
        cityList,
        setCityList,
        pointList,
        setPointList,
      }}
    >
      <Sidebar />
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/order" component={OrderPage} />
        <Route exact path="/order/:id" component={OrderPage} />
      </Switch>
    </Context.Provider>
  );
}

export default App;
