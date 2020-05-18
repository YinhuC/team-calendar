import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import store from './redux/store';
import {Provider} from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));
