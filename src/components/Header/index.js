import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-items">Acceuil</li>
        <li className="nav-items">Angular</li>
        <li className="nav-items">React</li>
        <li className="nav-items">O'clock</li>
        <li className="nav-items">Autre</li>
      </ul>
    </nav>
  </div>
);

export default Header;
