import {SET_DATES, SET_TIMES, SET_TITLE, SET_ID, RESET_EVENT_MODAL, AUTHENTICATE} from './action-types';

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

export function setTitle(title) {
  return {
    type: SET_TITLE,
    title,
  };
}
export function setID(id) {
  return {
    type: SET_ID,
    id,
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
