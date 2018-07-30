// @flow

import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
import preload from '../data.json';
import { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

// This will also inadvertently test children. Is not ideal.
// import renderer from 'react-test-renderer';
// test('Search renders correctly', () => {
//   const component = renderer.create(<Search />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
it('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component).toMatchSnapshot();
});

it('Search should render correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

it('Search should render correct amount of shows based on search term', () => {
  // Redux causes React components to be a bit harder to test. Render method is a bit expensive too.
  const searchWord = 'black';
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
      </MemoryRouter>
    </Provider>,
  );

  // This next line doesn't measure any user interaction, so there are better ways to do this:
  // const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />);

  // This line is no longer necessary since Redux handles the searchWord:
  // component.find('input').simulate('change', { currentTarget: { value: searchWord } });

  // including logic like this is usually bad practice, because it doesn't effectively test it!
  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`
    .toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length;
  expect(component.find('.show-card').length).toEqual(showCount);
});
