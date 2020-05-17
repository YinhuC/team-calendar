import {SET_DATES, SET_TIMES, RESET_EVENT_MODAL} from '../action-types';

export default function eventModal(state = {startDate: '', startTime: '', endDate: '', endTime: ''}, action) {
  switch (action.type) {
    case SET_DATES: {
      return Object.assign({}, state, {
        startDate: action.startDate,
        endDate: action.endDate,
      });
    }
    case SET_TIMES: {
      return Object.assign({}, state, {
        startTime: action.startTime,
        endTime: action.endTime,
      });
    }
    case RESET_EVENT_MODAL: {
      return {startDate: '', startTime: '', endDate: '', endTime: ''};
    }
    default:
      return state;
  }
}
