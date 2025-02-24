import axios from 'axios';

const BASE_URL = 'https://goodreads12.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'goodreads12.p.rapidapi.com',
  },
});

// search books by keyword
export const searchBooks = async (query: string) => {
  const response = await apiClient.get('/searchBooks', {
    params: {
      keyword: query,
      page: 1,
    },
  });

  return response.data;
};

// Get book by ID
export const getBookById = async (bookId: string) => {
  const response = await apiClient.get(`/getBookByID`, {
    params: {
      bookID: bookId,
    },
  });
  return response.data;
};

// Get author's books by ID
export const getAuthorsBooks = async (authorId: string) => {
  const response = await apiClient.get(`/getAuthorBooks`, {
    params: {
      authorID: authorId,
    },
  });
  return response.data;
};

// search quotes by keyword
export const searchQuotes = async (query: string) => {
  const response = await apiClient.get(`/searchQuotes`, {
    params: {
      keyword: query,
      page: 1,
    },
  });
  return response.data;
};
