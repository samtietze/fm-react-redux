// @flow

import moxios from 'moxios';
import { setSearchTerm, addAPIData, getAPIDetails } from '../actionCreators';

const blackMirror = {
  title: 'Black Mirror',
  year: '2011–',
  description: 'A television anthology series that shows the dark side of life and technology.',
  poster: 'bm.jpg',
  imdbID: 'tt2085059',
  trailer: 'jDiYGjp5iFg',
  rating: '8.6',
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

// This test must be run before the getAPIdetails since
// add API Data gets used in its test scenario
test('addAPIData', () => {
  expect(addAPIData(blackMirror)).toMatchSnapshot();
});

test('getAPIDetails', (done: Function) => {
  const dispatchMock = jest.fn(); // this is a spy function!
  moxios.withMock(() => {
    getAPIDetails(blackMirror.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: blackMirror,
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${blackMirror.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addAPIData(blackMirror));
          done();
        });
    });
  });
});
