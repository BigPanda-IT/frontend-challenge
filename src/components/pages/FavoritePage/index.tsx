import React from 'react';
import styles from '../../organisms/CatGrid/CatGrid.module.css';
import { CatCard } from '../../molecules/CatCard';
import { useLikedCats } from '../../../context/LikedCatsContext';

export const FavoritePage: React.FC = () => {
  const { likedCats } = useLikedCats();

  if (likedCats.length === 0) {
    return (
      <div className={styles.empty}>
        <p>😿 Нет любимых котиков</p>
        <p>Нажмите на сердечко на карточке котика</p>
      </div>
    );
  }

  return (
    <div className={styles.catGrid}>
      {likedCats.map((catIndex) => (
        <CatCard key={catIndex} index={catIndex} />
      ))}
    </div>
  );
};

export default FavoritePage; 