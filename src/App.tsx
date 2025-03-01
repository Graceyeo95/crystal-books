import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '@/components';
import { AnimatePresence } from 'framer-motion';
import {
  Home,
  BookDetail,
  SearchFeed,
  Quotes,
  Favourites,
  NotFound,
} from '@/pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer
          style={{ fontSize: '16px', color: 'black' }}
          autoClose={3000}
          pauseOnFocusLoss={false}
        />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/quote' element={<Quotes />} />
        <Route path='/favourite' element={<Favourites />} />
        <Route path='/book/:id' element={<BookDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
