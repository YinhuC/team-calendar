import {combineReducers} from 'redux';
import eventModal from './event-modal';
import authentication from './authentication';

export default combineReducers({
  eventModal,
  authentication,
});
