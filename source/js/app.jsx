import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

require('../css/app.css');

ReactDOM.render(
  <h1>
    <Logo />Welcome to Glatisant
  </h1>,
  document.getElementById('app'),
);
