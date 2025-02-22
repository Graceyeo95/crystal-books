import withTransition from '@/HOC/withTransition';
import { useParams } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { useBookDetail } from '@/hooks/useFetch';
import { resizeImageUrl } from '@/utils/helpers';

const BookDetail = () => {
  const { id } = useParams(); // Get bookId from URL
  const { data, isLoading, isError, error } = useBookDetail(id!);

  // If loading, show the spinner
  if (isLoading) {
    return (
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <FallingLines color='#fff' width='100' visible={true} />
      </div>
    );
  }

  // If there's an error, show error message
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className='text-white text-3xl text-center'>
      <div className='h-[100px]' />
      <div className='border-2 max-w-[80vw] mx-auto flex justify-center gap-x-32'>
        <div>
          <img
            src={resizeImageUrl(data.imageUrl)}
            alt={data.title}
            className='w-[300px] aspect-[3/4]'
          />
        </div>

        <div>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default withTransition(BookDetail);
