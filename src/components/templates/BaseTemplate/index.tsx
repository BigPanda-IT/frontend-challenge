import React from 'react';
import PageHeader from '../../organisms/PageHeader';
import styles from './BaseTemplate.module.css';

interface BaseTemplateProps {
  children: React.ReactNode;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <PageHeader />
      <main>{children}</main>
    </div>
  );
};

export default BaseTemplate;
