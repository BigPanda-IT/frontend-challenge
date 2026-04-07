import React from 'react';
import NavBar from '../../molecules/NavBar';
import styles from './PageHeader.module.css';

const PageHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default PageHeader;
