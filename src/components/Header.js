import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../static/images/dog.jpg';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <div>
      <h1 className="h1 inline-block mr2">🍽 My Recipes</h1>
      <span className="mr2">by</span>
      <img src={Logo} style={{ width: 30 }} alt="A dog dressed like a man" />
    </div>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
