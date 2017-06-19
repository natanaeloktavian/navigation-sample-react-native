import 'react-native';
import React from 'react';
import PageCComponent from '../src/components/PageCComponent'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <PageCComponent />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
