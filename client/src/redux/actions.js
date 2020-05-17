import {SET_DATES, SET_TIMES, RESET_EVENT_MODAL} from './action-types';

export function setDates(startDateText, endDateText) {
  return {
    type: SET_DATES,
    startDateText,
    endDateText,
  };
}

export function setStartTimes(startTimeText, endTimeText) {
  return {
    type: SET_TIMES,
    startTimeText,
    endTimeText,
  };
}

export function resetEventModal() {
  return {
    type: RESET_EVENT_MODAL,
  };
}
