import { signOut } from 'firebase/auth';
import { auth } from '..';
import { NavigateFunction } from 'react-router-dom';
import { useFavoritesStore } from '@/store/useFavoritesStore';

export const signOutUser = async (navigate: NavigateFunction) => {
  const clearFavorites = useFavoritesStore.getState().clearFavorites;

  try {
    await signOut(auth);
    clearFavorites();
    alert('you have been signed out');
    navigate('/');
  } catch (error) {
    console.error(error);
  }
};
