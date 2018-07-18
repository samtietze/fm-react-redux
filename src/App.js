import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import './App.css';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>
);

export default App;
