import React from 'react';

require('../../css/components/TitleBar.css');

function Logo() {
  return (
    <nav className="navbar navbar-default">
      <div className="Logo" />
      <span className="logo-text">LATISANT</span>
      <hr />
      <div className="logo-subtitle">What is your quest?</div>
    </nav>);
}

export default Logo;
