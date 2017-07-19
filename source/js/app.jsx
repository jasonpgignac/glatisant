import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Logo from './components/Logo';
import VisibleIssuesTable from './components/issues/VisibleIssuesTable';
import GlatisantApp from './model/reducers';

require('../css/app.css');

const store = createStore(GlatisantApp);

ReactDOM.render(
  <h1>
    <Logo />Welcome to Glatisant
    <Provider store={store}>
      <VisibleIssuesTable />
    </Provider>
  </h1>,
  document.getElementById('app'));
