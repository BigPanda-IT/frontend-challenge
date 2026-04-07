import React from 'react';
import NavLink from '../../atoms/NavLink';

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <NavLink href="/all-kitties" label="Все котики" />
      <NavLink href="/favorite-kitties" label="Любимые котики" />
    </nav>
  );
};

export default NavBar;
