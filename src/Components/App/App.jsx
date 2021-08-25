import React from 'react';
import './app.scss';

// import { Container } from 'reactstrap';

import StartScreen from '../../Pages/StartScreen/StartScreen';
// import MainPage from '../Pages/MainPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <StartScreen />
      </BrowserRouter>
      <Switch>
        <Route path="/" />
      </Switch>
    </>
  );
}

export default App;
