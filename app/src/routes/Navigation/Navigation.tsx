import * as React from 'react';
import NavLink from '../../components/NavLink/NavLink';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/teams">Teams</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};

export default Navigation;
