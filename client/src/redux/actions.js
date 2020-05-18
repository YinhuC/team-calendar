import {SET_DATES, SET_TIMES, RESET_EVENT_MODAL} from './action-types';

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
