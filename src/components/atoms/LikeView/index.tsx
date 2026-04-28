import React, { useState } from 'react';
import styles from './LikeView.module.css';
import heartIcon from './././imageLike.png';
import imageheart from './././imageheart.png';
import clickedheart from './././clickedheart.png';
import { useLikedCats } from '../../../context/LikedCatsContext';


interface LikeViewProps {
  onClick?: () => void;
  isCardHovered: boolean;
  catIndex: number;
}

export const LikeView: React.FC<LikeViewProps> = ({ catIndex, isCardHovered }) => {
  const { likedCats, toggleLike } = useLikedCats();


  const isLiked = likedCats.includes(catIndex);

  const handleClick = () => {
    toggleLike(catIndex);
  };

  const getHeartImage = () => {
    if (isLiked) return clickedheart;           
    if (isHeartHovered) return heartIcon;    
    return imageheart;
  };

  // Показывать сердце только если навели на карточку или уже лайкнули
  const shouldShowHeart = isCardHovered;
  const [isHeartHovered, setIsHeartHovered] = useState(false);


  return (
    <div className={styles.container}>
    {shouldShowHeart && (
      <img
        src={getHeartImage()}
        onClick={handleClick}
        onMouseEnter={() => setIsHeartHovered(true)}
        onMouseLeave={() => setIsHeartHovered(false)}
      />
    )}
    </div>
  );
};