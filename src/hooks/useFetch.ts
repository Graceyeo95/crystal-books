import { useQuery } from '@tanstack/react-query';
import {
  searchBooks,
  searchQuotes,
  getBookById,
  getAuthorsBooks,
} from '../services/api';

const useFetchData = <T>(
  queryKey: (string | number)[],
  fetchFn: () => Promise<T>,
  enabled: boolean
) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn: fetchFn,
    enabled,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error };
};

export const useSearchBooks = (query: string) =>
  useFetchData(['searchBooks', query], () => searchBooks(query), !!query);

export const useSearchQuotes = (query: string) =>
  useFetchData(['searchQuotes', query], () => searchQuotes(query), !!query);

export const useBookDetail = (bookId: string) =>
  useFetchData(['bookDetail', bookId], () => getBookById(bookId), !!bookId);

export const useAuthorsBooks = (authorId: string) =>
  useFetchData(
    ['authorsBooks', authorId],
    () => getAuthorsBooks(authorId),
    !!authorId
  );
