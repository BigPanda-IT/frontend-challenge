import React from 'react';
import PageHeader from '../../organisms/PageHeader';
import styles from './BaseTemplate.module.css';

interface BaseTemplateProps {
  children: React.ReactNode; 
  activeTab: 'all' | 'favorites';
  onTabChange: (tab: 'all' | 'favorites') => void;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <div className={styles.page}>
      <PageHeader activeTab={activeTab} onTabChange={onTabChange}/>
      <main>{children}</main>
    </div>
  );
};

export default BaseTemplate;
