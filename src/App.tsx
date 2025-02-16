import { BrowserRouter, Routes, Route } from 'react-router';
import { Home, BookDetail, SearchFeed } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<BookDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
