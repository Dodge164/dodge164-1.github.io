/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import StartScreen from '../../Pages/StartScreen/StartScreen';
import OrderPage from '../../Pages/OrderPage';
import Sidebar from '../Sidebar';
import Context from '../../context';
import OrderData from '../OrderInfo/OrderData';

function App() {
  const [orderInfo, setOrderInfo] = useState(OrderData);
  const [step, setStep] = useState(+localStorage.getItem('currentStep') || 0);
  const [loading, setLoading] = useState(true);
  return (
    <Context.Provider
      value={{ step, setStep, orderInfo, setOrderInfo, loading, setLoading }}
    >
      <Sidebar />
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/order" component={OrderPage} />
      </Switch>
    </Context.Provider>
  );
}

export default App;
