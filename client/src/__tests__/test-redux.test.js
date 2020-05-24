import rootReducer from '../redux/reducers';
import {createStore} from 'redux';
import {setDates, setTimes, setTitle, setID, resetEventModal, authenticate} from '../redux/actions';


let store;

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
  expect(eventModalState.title).toBe('');
  expect(eventModalState.id).toBe('');
  // Authentication state setup test
  expect(authenticationState.authenticated).toBe(false);
  expect(authenticationState.loadingAuth).toBe(true);
});
