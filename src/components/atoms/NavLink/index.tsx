import React from 'react';
import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a href={href} className={styles.navLink}>
      {label}
    </a>
  );
};

export default NavLink;
