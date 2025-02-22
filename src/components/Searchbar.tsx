import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const onHandleSubmit = (
    e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <form
      onSubmit={onHandleSubmit}
      className='bg-white px-[14px] flex items-center justify-between lg:pl-[20px] pr-[10px] py-2  rounded-[30px]'
    >
      <input
        type='text'
        value={searchTerm}
        placeholder='Search here'
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border-none outline-none text-sm bg-transparent w-[150px] pr-2 lg:focus:w-[300px] transition-all duration-300 ease-in-out'
      />
      <button
        type='submit'
        className='border-none outline-none text-sm lg:text-sm py-[10px] px-[20px] lg:px-[30px] text-white font-semibold cursor-pointer rounded-[40px] bg-orange'
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
