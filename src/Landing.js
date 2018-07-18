import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>
      svideo
    </h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">
      browse
    </Link>
  </div>
);

export default Landing;
