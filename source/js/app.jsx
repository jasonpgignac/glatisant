import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Logo from './components/Logo';
import VisibleIssuesTable from './components/issues/VisibleIssuesTable';
import GlatisantApp from './model/reducers';

require('../css/app.css');

const store = createStore(GlatisantApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <h1>
    <Logo />Welcome to Glatisant
    <Provider store={store}>
      <VisibleIssuesTable />
    </Provider>
  </h1>,
  document.getElementById('app'));
