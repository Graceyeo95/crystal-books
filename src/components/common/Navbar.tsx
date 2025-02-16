import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='absolute left-0 top-0 w-full justify-between flex p-6'>
      <Link to='/'>
        <div className='md:text-3xl text-2xl text-white'>책장</div>
      </Link>
      <Searchbar />
    </div>
  );
};

export default Navbar;
