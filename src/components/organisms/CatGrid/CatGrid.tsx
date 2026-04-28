import React from 'react';
import styles from './CatGrid.module.css';
import { CatCard } from '../../molecules/CatCard';

const CatGrid: React.FC = () => {
  return (
    <div className={styles.catGrid}>
      {Array.from({ length: 50 }, (_, index) => (
        <CatCard key={index} index={index} />
      ))}
    </div>
  );
};

export default CatGrid;
