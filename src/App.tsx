import { BrowserRouter, Routes, Route } from 'react-router';
import { Home, BookDetail, SearchFeed, Navbar } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<BookDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
