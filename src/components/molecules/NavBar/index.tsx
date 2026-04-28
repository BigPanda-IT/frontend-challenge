import React from 'react';
import NavLink from '../../atoms/NavLink';
import styles from './NavBar.module.css';

interface NavBarProps {
  activeTab: 'all' | 'favorites';
  onTabChange: (tab: 'all' | 'favorites') => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className={styles.navbar}>
      <NavLink 
        label="Все котики" 
        variant="all"
        isActive={activeTab === 'all'}
        onClick={() => onTabChange('all')}
      />
      <NavLink 
        label="Любимые котики" 
        variant="favorites"
        isActive={activeTab === 'favorites'}
        onClick={() => onTabChange('favorites')}
      />
    </nav>
  );
};

export default NavBar;
