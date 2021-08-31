import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartScreen from '../../Pages/StartScreen/StartScreen';
import OrderPage from '../../Pages/OrderPage';
import Sidebar from '../Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/order" component={OrderPage} />
      </Switch>
    </>
  );
}

export default App;
