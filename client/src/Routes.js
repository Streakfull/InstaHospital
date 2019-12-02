import React from 'react';
import { Switch, Route } from 'react-router';
import Homepage from './components/Homepage';
import HospitalProfile from './components/HospitalProfile/index';

export default () => (
  <Switch>
    <Route path="/hospital/:id" component={HospitalProfile} />
    <Route path="/" component={Homepage} />
  </Switch>
);
