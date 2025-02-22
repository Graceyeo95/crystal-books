import { useQuery } from '@tanstack/react-query';
import { searchBooks } from '../services/api';

export const useSearchBooks = (query: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['searchBooks', query],
    queryFn: () => searchBooks(query),
    enabled: !!query,
    staleTime: 60000,
  });

  return { data, isLoading, isError, error };
};
