import React, { createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';

interface LikedCatsContextType {
  likedCats: number[];
  toggleLike: (index: number) => void;
}

const LikedCatsContext = createContext<LikedCatsContextType | undefined>(undefined);

export const LikedCatsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedCats, setLikedCats] = useState<number[]>([]);

  const toggleLike = (index: number) => {
    setLikedCats(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <LikedCatsContext.Provider value={{ likedCats, toggleLike }}>
      {children}
    </LikedCatsContext.Provider>
  );
};

export const useLikedCats = () => {
  const context = useContext(LikedCatsContext);
  if (!context) {
    throw new Error('useLikedCats must be used within LikedCatsProvider');
  }
  return context;
};