import React from 'react';

import logo from './logo.svg';
import './HeaderView.css';

const HeaderView = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="logo"/>
    <p>
      Welcome to React CRUD App
    </p>
  </header>
);

export default HeaderView;