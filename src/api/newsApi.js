const API_KEY = '4be2cca6e258406f96a6ac223ec374f9';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};
