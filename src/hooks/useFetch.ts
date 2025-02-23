import { useQuery } from '@tanstack/react-query';
import { searchBooks, getBookById, getAuthorsBooks } from '../services/api';

export const useSearchBooks = (query: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['searchBooks', query],
    queryFn: () => searchBooks(query),
    enabled: !!query,
    staleTime: 600000,
  });

  return { data, isLoading, isError, error };
};

export const useBookDetail = (bookId: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['bookDetail', bookId],
    queryFn: () => getBookById(bookId),
    enabled: !!bookId,
    staleTime: Infinity,
  });

  return { data, isLoading, isError, error };
};

export const useAuthorsBooks = (authorId: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['bookDetail', authorId],
    queryFn: () => getAuthorsBooks(authorId),
    enabled: !!authorId,
    staleTime: Infinity,
  });

  return { data, isLoading, isError, error };
};
