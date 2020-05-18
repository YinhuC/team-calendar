import {AUTHENTICATE} from '../action-types';

export default function authentication(state = {authenticated: false}, action) {
  switch (action.type) {
    case AUTHENTICATE: {
      return Object.assign({}, state, {
        authenticated: action.authenticated,
      });
    }
    default:
      return state;
  }
}
