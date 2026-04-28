import React, { useState } from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import CatGrid from '../../organisms/CatGrid/CatGrid';
import FavoritePage from '../FavoritePage'; 

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all'); 

  return (
    <BaseTemplate activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'all' && <CatGrid />}
      {activeTab === 'favorites' && <FavoritePage />}
    </BaseTemplate>
  );
};

export default MainPage;