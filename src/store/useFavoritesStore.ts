import { create } from 'zustand';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

type Book = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
};

type Quote = {
  id: string | number;
  imageUrl: string;
  quoteText: string;
};

type FavoriteItem = Book | Quote;
type CategoryType = 'book' | 'quote';

type FavoritesState = {
  books: Book[];
  quotes: Quote[];
  addFavorite: (item: FavoriteItem, category: CategoryType) => void;
  removeFavorite: (id: number | string, category: CategoryType) => void;
  isFavorite: (id: number | string, category: CategoryType) => boolean;
  loadFavorites: () => void;
  clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  books: [],
  quotes: [],

  addFavorite: async (item, category) => {
    const user = auth.currentUser;
    if (!user) return;

    const docRef = doc(db, 'users', user.uid);
    try {
      if (category === 'book') {
        await updateDoc(docRef, {
          books: arrayUnion(item as Book),
        });
        set((state) => ({ books: [...state.books, item as Book] }));
      } else {
        await updateDoc(docRef, {
          quotes: arrayUnion(item as Quote),
        });
        set((state) => ({ quotes: [...state.quotes, item as Quote] }));
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  },

  removeFavorite: async (id, category) => {
    const user = auth.currentUser;
    if (!user) return;

    const docRef = doc(db, 'users', user.uid);
    const state = get();

    try {
      if (category === 'book') {
        const bookToRemove = state.books.find((item) => item.id === id);
        await updateDoc(docRef, {
          books: arrayRemove(bookToRemove),
        });
        set({ books: state.books.filter((item) => item.id !== id) });
      } else {
        const quoteToRemove = state.quotes.find((item) => item.id === id);
        await updateDoc(docRef, {
          quotes: arrayRemove(quoteToRemove),
        });
        set({ quotes: state.quotes.filter((item) => item.id !== id) });
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  },

  isFavorite: (id, category) => {
    const state = get();
    if (category === 'book') {
      return state.books.some((item) => item.id === id);
    } else {
      return state.quotes.some((item) => item.id === id);
    }
  },

  loadFavorites: async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            set({
              books: data.books || [],
              quotes: data.quotes || [],
            });
          } else {
            // If no document exists, create an empty one
            await setDoc(docRef, { books: [], quotes: [] });
          }
        } catch (error) {
          console.error('Error loading favorites:', error);
        }
      }
    });
  },
  clearFavorites: () => set({ books: [], quotes: [] }),
}));
