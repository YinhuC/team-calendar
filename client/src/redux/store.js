import {createStore} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export default store = createStore(rootReducer, composeWithDevTools());
