// @flow

import { setSearchTerm, addAPIData } from '../actionCreators';

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addAPIData({
      title: 'Black Mirror',
      year: '2011–',
      description: 'A television anthology series that shows the dark side of life and technology.',
      poster: 'bm.jpg',
      imdbID: 'tt2085059',
      trailer: 'jDiYGjp5iFg',
      rating: '8.6',
    }),
  ).toMatchSnapshot();
});
