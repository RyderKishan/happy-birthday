import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FallBack from '../../components/Fallback';
import Home from '../Home';

const HappyBirthday = () => (
  <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route component={FallBack} />
  </Switch>
);

export default HappyBirthday;
