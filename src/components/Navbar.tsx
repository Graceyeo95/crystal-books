import Searchbar from './Searchbar';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { useState, useLayoutEffect, useRef, useCallback } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { BsChatSquareQuote } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import SignIn from './SignIn';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseSharp } from 'react-icons/io5';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleScroll = useCallback(() => {
    setTimeout(() => {
      setIsAtTop(window.scrollY === 0);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    {
      name: 'Favourites',
      link: '/favourite',
      icon: <MdFavoriteBorder size={24} />,
    },
    { name: 'Quotes', link: '/quote', icon: <BsChatSquareQuote size={24} /> },
  ];

  return (
    <div
      ref={navbarRef}
      className={`fixed py-3 lg:py-4 px-12 left-0 items-center top-0 w-full z-50 justify-between flex flex-col lg:flex-row gap-y-3 lg:gap-y-4 transition-colors duration-300 ${
        isAtTop ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <div
        className={`text-base flex items-center gap-x-6 w-full justify-between md:justify-start ${
          isAtTop ? 'text-white' : 'text-orange'
        }`}
      >
        <Link to='/' className='text-xl lg:text-3xl md:text-2xl text-nowrap'>
          책장
        </Link>

        <div className='gap-x-6 hidden lg:flex'>
          {navItems.map(({ name, link, icon }) => (
            <Link
              key={name}
              to={link}
              className='hover:underline underline-offset-4 flex items-center gap-1'
            >
              {isDesktop ? name : icon}
            </Link>
          ))}
        </div>

        <div className='lg:hidden flex items-center justify-end w-full'>
          <div
            className={`${
              isAtTop ? 'text-white' : 'text-orange'
            } object-contain cursor-pointer z-50 flex`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <IoCloseSharp className='size-[28px]' />
            ) : (
              <RxHamburgerMenu className='size-[28px]' />
            )}
          </div>

          <MobileNav
            toggle={toggle}
            setToggle={setToggle}
            setActive={setActive}
            navLinks={navItems}
          />
        </div>
      </div>
      <Searchbar isAtTop={isAtTop} />
      <div className='lg:flex hidden'>
        <SignIn isAtTop={isAtTop} />
      </div>
    </div>
  );
};

export default Navbar;
