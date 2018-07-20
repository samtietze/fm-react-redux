// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import './App.css';

const PathNotFound = () => (
  <div>
    <h1>
      404
    </h1>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={PathNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
