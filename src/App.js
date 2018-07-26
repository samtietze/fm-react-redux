// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from './data.json';
import './App.css';

// Perf doesn't work with React 16 yet. It provides a shouldComponentUpdate method that will prevent
// a component that you know doesn't need to re-render from inadvertently re-rendering. Using it
// will help identify where the performance wasting is occurring. Do not prematurely optimize.
// import Perf from 'react-addons-perf';
// window.Perf = Perf;
// Perf.start();

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
        {/* No need to type these props because they aren't being read from, just passed in. */}
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={PathNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
