import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch, Route } from 'react-router';
import Signin from './pages/Signin';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <PrivateRoute path="/ ">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
