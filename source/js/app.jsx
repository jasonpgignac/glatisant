import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import TitleBar from './components/TitleBar';
import VisibleIssuesTable from './components/issues/VisibleIssuesTable';
import GlatisantApp from './model/reducers';

require('../css/app.css');

const store = createStore(GlatisantApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <div className="container">
    <TitleBar />
    <div id="main-body">
      <Provider store={store}>
        <VisibleIssuesTable />
      </Provider>
    </div>
  </div>,
  document.getElementById('app'));
