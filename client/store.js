import { createStore, compose, applyMiddleware, } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


const reduxMiddleware = applyMiddleware(thunk, createLogger());

//root reducer
import rootReducer from './reducers/index';


const defaultState = {};

const store = createStore(rootReducer, defaultState, compose(
  (reduxMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;