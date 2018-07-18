import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import './App.css';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

export default App;
