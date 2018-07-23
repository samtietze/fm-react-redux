import React from 'react';
import { shallow } from 'enzyme';
import preload from '../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

// This will also inadvertently test children. Is not ideal.
// import renderer from 'react-test-renderer';
// test('Search renders correctly', () => {
//   const component = renderer.create(<Search />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
it('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

it('Search should render correct amount of shows', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

it('Search should render correct amount of shows based on search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search shows={preload.shows} />);
  component.find('input').simulate('change', { currentTarget: { value: searchWord } });
  // including logic like this is usually bad practice, because it doesn't effectively test it!
  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`
    .toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
