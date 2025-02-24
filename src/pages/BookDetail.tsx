import withTransition from '@/HOC/withTransition';
import { useParams, Link } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { useBookDetail } from '@/hooks/useFetch';
import { truncateText } from '@/utils/helpers';
import { useState } from 'react';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/animation';

type GenreType = {
  name: string;
};

const BookDetail = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError } = useBookDetail(id!);

  if (isLoading)
    return (
      <div className='w-screen h-screen flex items-center justify-center bg-orange'>
        <FallingLines color='#fff' width='100' visible={true} />
      </div>
    );

  if (isError)
    return (
      <div className='w-screen h-screen bg-orange'>
        <div className='max-w-[80vw] mx-auto flex flex-col items-center justify-center gap-y-8 text-center text-white text-xl lg:text-2xl'>
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

  const truncatedDescription = (text: string) => {
    if (!text) return;
    return isShowMore ? text : truncateText(text, 500);
  };

  return (
    <div className='text-white text-3xl text-center bg-navy'>
      <div className='h-[160px]' />
      <div className='max-w-[80vw] gap-y-8 lg:gap-y-12 container-wrapper flex flex-col lg:flex-row mx-auto justify-center gap-x-20'>
        <motion.div
          variants={slideIn('left', 1, 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.9 }}
          className='w-full lg:w-1/2 max-w-[240px] md:max-w-[300px] lg:max-w-[400px] mx-auto lg:mx-0'
        >
          <img
            src={data.imageUrl}
            alt={data.title}
            className='w-full aspect-[3/4]'
          />
        </motion.div>

        <motion.div
          variants={slideIn('right', 1, 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false }}
          className='my-auto space-y-3 text-center lg:text-left w-full lg:w-1/2'
        >
          <h1 className='largeBodyText font-bold'>{data?.title}</h1>
          <p className='smallBodyText text-neutral-200'>
            By {data?.author.name}
          </p>
          <div className='flex flex-wrap gap-2 justify-center lg:justify-start'>
            {data?.bookGenres.map((genre: GenreType) => (
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
  );
};

export default withTransition(BookDetail);
