import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Form from './components/form';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { connect, Provider } from 'react-redux';

import store, { history } from './store';

const router = (
  <Provider store = {store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Form}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'));
