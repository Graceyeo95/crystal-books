import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '@/components';
import { AnimatePresence } from 'framer-motion';
import { BookDetail, SearchFeed, Quotes, Favourites, NotFound } from '@/pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import { AuthProvider } from '@/lib/context/AuthProvider';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Account = lazy(() => import('./pages/Account'));
const RequireUser = lazy(
  () => import('./lib/firebase/authentication/requireUser')
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
      </AuthProvider>
    </QueryClientProvider>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/quote' element={<Quotes />} />
        <Route path='/favourite' element={<Favourites />} />
        <Route path='/book/:id' element={<BookDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route
          path='/account'
          element={
            <RequireUser>
              <Account />
            </RequireUser>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
