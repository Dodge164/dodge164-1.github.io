import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import StartScreen from '../../Pages/StartScreen/StartScreen';
import OrderPage from '../../Pages/OrderPage';
import Sidebar from '../Sidebar';
import Context from '../../context';

function App() {
  const [step, setStep] = useState(+localStorage.getItem('currentStep') || 0);
  return (
    <Context.Provider value={{ step, setStep }}>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/order" component={OrderPage} />
      </Switch>
    </Context.Provider>
  );
}

export default App;
