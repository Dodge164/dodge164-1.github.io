import React from 'react';
import './app.scss';

// import { Container } from 'reactstrap';
import Sidebar from '../Sidebar';
// import MainPage from '../Pages/MainPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
      <Switch>
        <Route path="/" />
      </Switch>
      {/* <Container>
        <MainPage />
      </Container> */}
    </>
  );
}

export default App;
