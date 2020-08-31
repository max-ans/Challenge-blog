import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ categories }) => (
  <div className="header">
    <nav className="navigation">
      <ul className="nav-list">
        {categories.map((category) => (
          <a key={category.label} className="nav-items" href={category.route}>
            {category.label}
          </a>
        ))}
      </ul>
    </nav>
    <h1 className="header-title">dev of thrones</h1>
  </div>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
