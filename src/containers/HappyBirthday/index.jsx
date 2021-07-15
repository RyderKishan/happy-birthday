import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FallBack from '../../components/Fallback';
import Snackbar from '../../components/Snackbar';
import Home from '../Home';

const HappyBirthday = () => {
  const [snackData, setSnack] = React.useState({});
  return (
    <React.Fragment>
      <Snackbar snack={snackData} />
      <Switch>
        <Route path="/" exact render={() => <Home setSnack={setSnack} />} />
        <Route component={FallBack} />
      </Switch>
    </React.Fragment>
  );
};
export default HappyBirthday;
