import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ categories }) => (
  <div className="header">
    <nav className="navigation">
      <ul className="nav-list">
        {categories.map((category) => (
          <NavLink
            key={category.label}
            className="nav-items"
            to={category.route}
            activeClassName="nav-items--selected"
            exact
          >
            {category.label}
          </NavLink>
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
