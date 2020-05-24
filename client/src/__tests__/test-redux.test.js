import rootReducer from '../redux/reducers';
import {createStore} from 'redux';
import {setDates, setTimes, setTitle, setID, resetEventModal, authenticate} from '../redux/actions';
import moment from 'moment';


let store;

/**
 * Re-initialize the store to default before each test.
 */
beforeEach(() => {
  store = createStore(rootReducer);
});

it('check the initial store state', () => {
  const state = store.getState();
  const eventModalState = state.eventModal;
  const authenticationState = state.authentication;
  // Event modal state setup test
  expect(eventModalState.startDate).toBe('');
  expect(eventModalState.startTime).toBe('');
  expect(eventModalState.endDate).toBe('');
  expect(eventModalState.endTime).toBe('');
  expect(eventModalState.title).toBe('');
  expect(eventModalState.id).toBe('');
  // Authentication state setup test
  expect(authenticationState.authenticated).toBe(false);
  expect(authenticationState.loadingAuth).toBe(true);
});

it('setting the date works', () => {
  store.dispatch(setDates(
      '2018-10-28', '2019-11-15',
  ));
  const eventModalState = store.getState().eventModal;
  expect(eventModalState.startDate).toBe('2018-10-28');
  expect(eventModalState.endDate).toBe('2019-11-15');
});

it('setting the time works', () => {
  store.dispatch(setTimes(
      `14:00`, `20:00`,
  ));
  const eventModalState = store.getState().eventModal;
  expect(eventModalState.startTime).toBe('14:00');
  expect(eventModalState.endTime).toBe('20:00');
});

it('setting the title works', () => {
  store.dispatch(setTitle(
      `White Wolf Meeting`,
  ));
  const eventModalState = store.getState().eventModal;
  expect(eventModalState.title).toBe('White Wolf Meeting');
});

it('setting the event ID works', () => {
  store.dispatch(setID(
      `52467`,
  ));
  const eventModalState = store.getState().eventModal;
  expect(eventModalState.id).toBe('52467');
});

it('resetting the event modal works', () => {
  store.dispatch(resetEventModal());
  const eventModalState = store.getState().eventModal;
  expect(eventModalState.startDate).toBe(moment().format('YYYY-MM-DD'));
  expect(eventModalState.startTime).toBe(moment().format('HH:mm'));
  expect(eventModalState.endDate).toBe(moment().format('YYYY-MM-DD'));
  expect(eventModalState.endTime).toBe(moment().add(1, 'hours').format('HH:mm'));
  expect(eventModalState.title).toBe(undefined);
  expect(eventModalState.id).toBe(undefined);
});

it('test authentication (f,t)', () => {
  store.dispatch(resetEventModal( false, true));
  const authenticationState = store.getState().authentication;
  expect(authenticationState.authenticated).toBe(false);
  expect(authenticationState.loadingAuth).toBe(true);
});

it('test authentication (t,f)', () => {
  try {
    store.dispatch(authenticate( true, true));
    const authenticationState = store.getState().authentication;
    expect(authenticationState.authenticated).toBe(true);
    expect(authenticationState.loadingAuth).toBe(true);
    fail('Should not be able to set authenticated');
  } catch (e) {
  }
});

it('test authentication (t,t)', () => {
  try {
    store.dispatch(authenticate( true, true));
    const authenticationState = store.getState().authentication;
    expect(authenticationState.authenticated).toBe(true);
    expect(authenticationState.loadingAuth).toBe(true);
    fail('Should not be able to set authenticated');
  } catch (e) {
  }
});

it('test authentication (f,f)', () => {
  store.dispatch(authenticate(false, false));
  const authenticationState = store.getState().authentication;
  expect(authenticationState.authenticated).toBe(false);
  expect(authenticationState.loadingAuth).toBe(false);
});

it('test invalid input authentication', () => {
  try {
    store.dispatch(authenticate('Hello', 'World'));
    const authenticationState = store.getState().authentication;
    expect(authenticationState.authenticated).toBe('Hello');
    expect(authenticationState.loadingAuth).toBe('World');
    fail('Should not be able to enter invalid inputs');
  } catch (e) {
  }
});


