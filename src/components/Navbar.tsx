import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import { useState, useLayoutEffect, useRef, useCallback } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { BsChatSquareQuote } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleScroll = useCallback(() => {
    setTimeout(() => {
      setIsAtTop(window.scrollY > 0);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { name: 'Favourites', link: '/', icon: <MdFavoriteBorder size={24} /> },
    { name: 'Quotes', link: '/quote', icon: <BsChatSquareQuote size={24} /> },
  ];

  return (
    <div
      ref={navbarRef}
      className={`fixed py-3 lg:py-4 px-12 left-0 items-center top-0 w-full z-50 justify-between flex flex-col gap-y-3 lg:gap-y-4 md:flex-row transition-colors duration-300 ${
        isAtTop ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div
        className={`text-base flex items-center gap-x-6 w-full justify-between md:justify-start ${
          isAtTop ? 'text-orange' : 'text-white'
        }`}
      >
        <Link to='/' className='text-xl lg:text-3xl md:text-2xl'>
          책장
        </Link>

        <div className='flex gap-x-4'>
          {navItems.map(({ name, link, icon }) => (
            <Link
              key={name}
              to={link}
              className='hover:text-orange flex items-center gap-1'
            >
              {isDesktop ? name : icon}
            </Link>
          ))}
        </div>
      </div>
      <Searchbar isAtTop={isAtTop} />
    </div>
  );
};

export default Navbar;
