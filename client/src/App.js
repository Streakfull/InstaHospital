import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
