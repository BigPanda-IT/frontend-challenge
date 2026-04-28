import React from 'react';
import styles from './NavLink.module.css';

interface NavLinkProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  variant?: 'all' | 'favorites';
}

const NavLink: React.FC<NavLinkProps> = ({ label, isActive, onClick, variant = 'all' }) => {
  const linkClass = variant === 'all' 
    ? styles['link-all-kitties'] 
    : styles['link-favorite-kitties'];

  return (
    <a
      href="#"
      className={`${linkClass} ${isActive ? styles.active : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </a>
  );
};

export default NavLink;