import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import IssuesTable from './components/IssuesTable';

require('../css/app.css');

ReactDOM.render(
  <h1>
    <Logo />Welcome to Glatisant
    <IssuesTable headers={['rat']} />
  </h1>,
  document.getElementById('app'));
