// Базовый URL вашего API
const API_BASE_URL = 'https://your-api-domain.com/api'; // замените на реальный URL

interface Cat {
  id: number;
  imageUrl: string; // полный URL изображения с сервера
  name: string;
}

// Функция для получения списка котиков с сервера
export const fetchCats = async (): Promise<Cat[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/cats`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при загрузке котиков:', error);
    // Возвращаем заглушку при ошибке
    return [
      {
        id: -1,
        imageUrl: '/images/placeholder-cat.jpg',
        name: 'Котик не загрузился'
      }
    ];
  }
};
