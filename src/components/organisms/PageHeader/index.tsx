import React from 'react';
import NavBar from '../../molecules/NavBar';
import styles from './PageHeader.module.css'; 

interface PageHeaderProps {
  activeTab: 'all' | 'favorites';
  onTabChange: (tab: 'all' | 'favorites') => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className={styles.header}>
      <NavBar activeTab={activeTab} onTabChange={onTabChange}/>
    </header>
  );
};

export default PageHeader;
