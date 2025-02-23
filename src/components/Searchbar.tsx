import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchbarProps {
  isAtTop: boolean;
}

const Searchbar = ({ isAtTop }: SearchbarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const onHandleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>
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
      className={`px-[14px] flex items-center justify-between w-full md:w-fit lg:pl-5 pr-[6px] md:pr-2 py-[6px] md:py-2 rounded-[40px] ${
        isAtTop ? 'bg-orange' : 'bg-white'
      }`}
    >
      <input
        type='text'
        value={searchTerm}
        placeholder='Search here'
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className={`border-none outline-none mr-2 py-2 text-xs md:text-sm bg-transparent w-[150px] w-full pr-2 md:focus:w-[300px] transition-all duration-300 ease-in-out ${
          isAtTop ? 'placeholder-white text-white' : 'placeholder-neutral-300'
        }`}
      />
      <button
        type='submit'
        className={`border-none outline-none text-xs md:text-sm py-3 px-5 lg:px-8 font-semibold cursor-pointer rounded-[40px] ${
          isAtTop ? 'bg-white text-orange' : 'bg-orange text-white'
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
