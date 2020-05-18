import {AUTHENTICATE} from '../action-types';

export default function authentication(state = {authenticated: false, loadingAuth: true}, action) {
  switch (action.type) {
    case AUTHENTICATE: {
      return Object.assign({}, state, {
        authenticated: action.authenticated,
        loadingAuth: false,
      });
    }
    default:
      return state;
  }
}
