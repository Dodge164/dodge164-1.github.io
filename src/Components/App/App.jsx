import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import StartScreen from '../../Pages/StartScreen/StartScreen';
import OrderPage from '../../Pages/OrderPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/order" component={OrderPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
