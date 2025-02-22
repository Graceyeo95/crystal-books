import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home, BookDetail, SearchFeed, Navbar } from '@/components';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<BookDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
