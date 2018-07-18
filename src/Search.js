import React from 'react';
import preload from './data';
import ShowCard from './ShowCard';

// Easy way to dump a bunch of data to the dom to test
// const Search = () => (
//   <div className="search">
//     <pre>
//       <code>
//         {JSON.stringify(preload, null, 4)}
//       </code>
//     </pre>
//   </div>
// );

// Transform payload (array) to array of React components
const Search = () => (
  <div className="search">
    {preload.shows.map(show => <ShowCard key={show.title} show={show} />)}
  </div>
);

export default Search;
