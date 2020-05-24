/* Third Party */
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

/* Components */
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AuthenticationButton from '../Components/AuthenticationButton';
import CalendarPage from '../Pages/CalendarPage';
import {MemoryRouter} from 'react-router';
import EditModal from '../Pages/CalendarPage/EditModal';
import EventModal from '../Pages/CalendarPage/EventModal';
import MemberModal from '../Pages/CalendarPage/MemberModal';
import ErrorPage from '../Pages/ErrorPage';
import LandingPage from '../Pages/LandingPage';
import DetailSection from '../Pages/MarketingPage/DetailSection';
import FeatureSection from '../Pages/MarketingPage/FeatureSection';
import HeaderSection from '../Pages/MarketingPage/HeaderSection';

const mockStore = configureStore([]);

it('testing the AuthButton no Auth', () => {
  const store = mockStore({
    authentication: {authenticated: false},
  });
  const tree = renderer.create(<Provider store={store}><AuthenticationButton/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing the AuthButton Auth', () => {
  const store = mockStore({
    authentication: {authenticated: true},
  });
  const tree = renderer.create(<Provider store={store}><AuthenticationButton/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});


it('testing the Header no auth', () => {
  const store = mockStore({
    authentication: {authenticated: false},
  });
  const tree = renderer.create(<Provider store={store}><Header/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing the Header auth', () => {
  const store = mockStore({
    authentication: {authenticated: true},
  });
  const tree = renderer.create(<Provider store={store}><Header/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing the footer', () => {
  const tree = renderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing the CalendarPage', ()=>{
  const store = mockStore({
    eventModal: {startDate: ''},
  });
  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <CalendarPage match={{params: {googleId: ''}}}/>
        </Provider>
      </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing the EditModalPage', ()=>{
  const store = mockStore({
    eventModal: {startDate: ''},
  });
  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <EditModal/>
        </Provider>
      </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
it('testing the EventModalPage', ()=>{
  const store = mockStore({
    eventModal: {startDate: ''},
  });
  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <EventModal/>
        </Provider>
      </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
it('testing the MemberModalPage', ()=>{
  const tree = renderer.create(
      <MemoryRouter>
        <MemberModal/>
      </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
it('testing the ErrorPage', ()=>{
  const tree = renderer.create(
      <MemoryRouter>
        <ErrorPage/>
      </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
it('testing the LandingPage', ()=>{
  const tree = renderer.create(
      <MemoryRouter>
        <LandingPage/>
      </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// Marketing Page is skipped as it only contains the sub sections.
it('testing the HeaderSection', () => {
  const store = mockStore({
    authentication: {authenticated: false},
  });
  const tree = renderer.create(<Provider store={store}><HeaderSection/></Provider>).toJSON();
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
