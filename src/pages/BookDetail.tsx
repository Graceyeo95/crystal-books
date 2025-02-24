import { useParams, Link, useNavigate } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { useBookDetail } from '@/hooks/useFetch';
import { truncateText } from '@/utils/helpers';
import { useState } from 'react';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/animation';
import { MdFavorite, MdFavoriteBorder, MdArrowBackIos } from 'react-icons/md';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import withTransition from '@/HOC/withTransition';
import { toast, ToastContainer } from 'react-toastify';

type GenreType = {
  name: string;
};

const BookDetail = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useBookDetail(id!);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className='w-screen h-screen flex items-center justify-center bg-orange'>
        <FallingLines color='#fff' width='100' visible={true} />
      </div>
    );

  if (isError) {
    console.error('Error fetching book details:', error);
    return (
      <div className='w-screen h-screen bg-orange'>
        <div className='w-full h-full max-w-[80vw] mx-auto flex flex-col items-center justify-center gap-y-8 text-center text-white text-xl lg:text-2xl'>
          Sorry, there was a problem while fetching books
          <Link to='/'>
            <Button
              variant='solid'
              size='small'
              className='border-whiteborder-2'
            >
              Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleFavoriteToggle = () => {
    if (isFavorite(data.id, 'book')) {
      removeFavorite(data.id, 'book');
      toast.success('Removed from favourites');
    } else {
      addFavorite(
        {
          id: data.id,
          imageUrl: data.imageUrl,
          title: data.title,
          description: data.description,
        },
        'book'
      );
      toast.success('Added to favourites');
    }
  };

  const truncatedDescription = (text: string) => {
    if (!text) return '';
    return isShowMore ? text : truncateText(text, 500);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='text-white text-3xl text-center bg-navy'>
      <ToastContainer
        style={{ fontSize: '16px', color: 'black' }}
        autoClose={3000}
        pauseOnFocusLoss={false}
      />
      <div className='h-[160px]' />
      <div className='flex flex-col max-w-[80vw] mx-auto'>
        <button
          onClick={handleBackClick}
          className='text-base mr-auto flex w-[80px]'
        >
          <MdArrowBackIos size={24} /> Back
        </button>
        <div className='gap-y-8 lg:gap-y-12 container-wrapper flex flex-col lg:flex-row mx-auto justify-center gap-x-20'>
          <motion.div
            variants={slideIn('left', 1, 0.2)}
            initial='hidden'
            whileInView='show'
            className='w-full lg:w-1/2 max-w-[240px] md:max-w-[300px] lg:max-w-[400px] mx-auto lg:mx-0'
          >
            {data?.imageUrl && (
              <img
                src={data.imageUrl}
                alt={data.title}
                className='w-full aspect-[3/4]'
              />
            )}
          </motion.div>

          <motion.div
            variants={slideIn('right', 1, 0.2)}
            initial='hidden'
            whileInView='show'
            className='my-auto space-y-3 text-center lg:text-left w-full lg:w-1/2'
          >
            <button
              onClick={handleFavoriteToggle}
              className='text-base flex items-center gap-x-2 mx-auto lg:mx-0 text-orange'
            >
              {isFavorite(data.id, 'book') ? (
                <MdFavorite size={24} />
              ) : (
                <MdFavoriteBorder size={24} />
              )}
            </button>
            <h1 className='largeBodyText font-bold'>{data?.title}</h1>
            <p className='smallBodyText text-neutral-200'>
              By {data?.author?.name}
            </p>
            <div className='flex flex-wrap gap-2 justify-center lg:justify-start'>
              {data?.bookGenres?.map((genre: GenreType) => (
                <span
                  key={genre.name}
                  className='text-xs border-[2px] py-1 px-2 rounded-lg'
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className='smallBodyText'>
              {truncatedDescription(data.description)}{' '}
              <button
                onClick={() => setIsShowMore((prev) => !prev)}
                className='underline'
              >
                Read {isShowMore ? 'Less' : 'More'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default withTransition(BookDetail);
