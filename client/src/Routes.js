import React from 'react';
import { Switch, Route } from 'react-router';
import Homepage from './components/Homepage';
import HospitalProfile from './components/HospitalProfile/index';
import EditProfile from './components/profiles/EditProfileForm';
import Hospitals from './components/Hospitals';

export default () => (
  <Switch>
    <Route path="/hospitals" component={Hospitals} />
    <Route path="/hospital/:id" component={HospitalProfile} />
    <Route path="/editProfile" component={EditProfile} />
    <Route path="/" component={Homepage} />
  </Switch>
);
