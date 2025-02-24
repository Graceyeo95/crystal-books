import { create } from 'zustand';

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
};

const LOCAL_STORAGE_KEY_BOOKS = 'favorites_books';
const LOCAL_STORAGE_KEY_QUOTES = 'favorites_quotes';

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  books: [],
  quotes: [],

  // Add a favorite item (book or quote)
  addFavorite: (item, category) => {
    set((state) => {
      if (category === 'book') {
        // Check if the book is already in favorites
        if (state.books.some((b) => b.id === (item as Book).id)) {
          return state;
        }
        const updatedBooks = [...state.books, item as Book];
        localStorage.setItem(
          LOCAL_STORAGE_KEY_BOOKS,
          JSON.stringify(updatedBooks)
        );
        return { books: updatedBooks };
      } else {
        // Check if the quote is already in favorites
        if (state.quotes.some((q) => q.id === (item as Quote).id)) {
          return state;
        }
        const updatedQuotes = [...state.quotes, item as Quote];
        localStorage.setItem(
          LOCAL_STORAGE_KEY_QUOTES,
          JSON.stringify(updatedQuotes)
        );
        return { quotes: updatedQuotes };
      }
    });
  },

  // Remove a favorite item (book or quote) by its ID
  removeFavorite: (id, category) => {
    set((state) => {
      let updatedBooks = [...state.books];
      let updatedQuotes = [...state.quotes];

      if (category === 'book') {
        updatedBooks = state.books.filter((item) => item.id !== id);
        localStorage.setItem(
          LOCAL_STORAGE_KEY_BOOKS,
          JSON.stringify(updatedBooks)
        );
        return { books: updatedBooks };
      } else {
        updatedQuotes = state.quotes.filter((item) => item.id !== id);
        localStorage.setItem(
          LOCAL_STORAGE_KEY_QUOTES,
          JSON.stringify(updatedQuotes)
        );
        return { quotes: updatedQuotes };
      }
    });
  },

  // Check if a specific item is a favorite (by ID and category)
  isFavorite: (id, category) => {
    const state = get();
    if (category === 'book') {
      return state.books.some((item) => item.id === id);
    } else {
      return state.quotes.some((item) => item.id === id);
    }
  },

  // Load favorites from localStorage
  loadFavorites: () => {
    const storedBooks = localStorage.getItem(LOCAL_STORAGE_KEY_BOOKS);
    const storedQuotes = localStorage.getItem(LOCAL_STORAGE_KEY_QUOTES);

    if (storedBooks) {
      set({ books: JSON.parse(storedBooks) });
    }
    if (storedQuotes) {
      set({ quotes: JSON.parse(storedQuotes) });
    }
  },
}));
