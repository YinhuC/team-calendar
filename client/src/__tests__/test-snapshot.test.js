/* Third Party */
import React from 'react';

import renderer from 'react-test-renderer';
import Footer from '../Components/Footer';

it('testing the footer', () => {
  const tree = renderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});
