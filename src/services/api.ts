import axios from 'axios';

const BASE_URL = 'https://goodreads12.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'goodreads12.p.rapidapi.com',
  },
});

export const searchBooks = async (query: string) => {
  try {
    const response = await apiClient.get('/searchBooks', {
      params: {
        keyword: query,
        page: 1,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw new Error('Error fetching books');
  }
};
