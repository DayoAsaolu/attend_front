import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import People from './components/People';
import './index.css';



const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
 
  <Provider store={store}>
    <People />
  </Provider>,
    document.getElementById('root'),
);
