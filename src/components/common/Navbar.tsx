import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import { useState, useLayoutEffect, useRef, useCallback } from 'react';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(false);

  const handleScroll = useCallback(() => {
    setTimeout(() => {
      setIsAtTop(window.scrollY > 0);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={navbarRef}
      className={`fixed p-4 left-0 top-0 w-full z-50 justify-between flex transition-colors duration-300 ${
        isAtTop ? 'bg-black/30' : 'bg-transparent'
      }`}
    >
      <Link to='/'>
        <div className='md:text-3xl text-2xl text-white'>책장</div>
      </Link>
      <Searchbar isAtTop={isAtTop} />
    </div>
  );
};

export default Navbar;
