import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Search from '../Search';

// This will also inadvertently test children. Is not ideal.
// test('Search renders correctly', () => {
//   const component = renderer.create(<Search />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
