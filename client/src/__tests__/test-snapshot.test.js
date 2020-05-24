/* Third Party */
import React from 'react';
import renderer from 'react-test-renderer';

/* Components */
import Footer from '../Components/Footer';
import DetailSection from '../Pages/MarketingPage/DetailSection';
import FeatureSection from '../Pages/MarketingPage/FeatureSection';

it('testing the footer', () => {
  const tree = renderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing the DetailSection', () => {
  const tree = renderer.create(<DetailSection/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing the FeatureSection', () => {
  const tree = renderer.create(<FeatureSection/>).toJSON();
  expect(tree).toMatchSnapshot();
});
