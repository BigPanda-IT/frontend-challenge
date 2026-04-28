import React, {useState} from 'react';
import styles from './CatCard.module.css';
import { LikeView } from '../../atoms/LikeView';

interface CatCardProps {
  index: number;
}

export const CatCard: React.FC<CatCardProps> = ({index}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div 
      className={styles.cell}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <LikeView catIndex={index} isCardHovered={isCardHovered}/>
    </div>  
  );
};
