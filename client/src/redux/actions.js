import {SET_DATES, SET_TIMES, RESET_EVENT_MODAL, AUTHENTICATE} from './action-types';

export function setDates(startDate, endDate) {
  return {
    type: SET_DATES,
    startDate,
    endDate,
  };
}

export function setTimes(startTime, endTime) {
  return {
    type: SET_TIMES,
    startTime,
    endTime,
  };
}

export function resetEventModal() {
  return {
    type: RESET_EVENT_MODAL,
  };
}


export function authenticate(authenticated) {
  return {
    type: AUTHENTICATE,
    authenticated,
  };
}
