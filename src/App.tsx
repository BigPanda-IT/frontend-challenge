import MainPage from './components/pages/MainPage';
import { LikedCatsProvider } from './context/LikedCatsContext';

const App = () => {
  return (
    <LikedCatsProvider>
      <MainPage />
    </LikedCatsProvider>
  );
};

export default App;