import withTransition from '@/HOC/withTransition';
import { useParams } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { useBookDetail } from '@/hooks/useFetch';
import { truncateText } from '@/utils/helpers';
import { useState } from 'react';

type GenreType = {
  name: string;
};

const BookDetail = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useBookDetail(id!);

  if (isLoading) {
    return (
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <FallingLines color='#fff' width='100' visible={true} />
      </div>
    );
  }

  if (isError) return <div>Error: {error?.message}</div>;

  const truncatedDescription = (text: string) => {
    return isShowMore ? text : truncateText(text, 500);
  };

  return (
    <div className='text-white text-3xl text-center bg-orange'>
      <div className='h-[160px] lg:h-[200px]' />
      <div className='max-w-[80vw] gap-y-8 lg:gap-y-12 flex flex-col lg:flex-row mx-auto justify-center gap-x-20 mb-20'>
        <div className='w-full lg:w-1/2 max-w-[240px] md:max-w-[300px] lg:max-w-[400px] mx-auto lg:mx-0'>
          <img
            src={data.imageUrl}
            alt={data.title}
            className='w-full aspect-[3/4]'
          />
        </div>

        <div className='my-auto space-y-3 text-center lg:text-left w-full lg:w-1/2'>
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
            <div>
              {truncatedDescription(data.description)}{' '}
              <button
                onClick={() => setIsShowMore((prev) => !prev)}
                className='underline'
              >
                Read {isShowMore ? 'Less' : 'More'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-cream h-[500px]'>testing</div>
    </div>
  );
};

export default withTransition(BookDetail);
