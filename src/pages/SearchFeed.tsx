import withTransition from '@/HOC/withTransition';
import { Link, useParams } from 'react-router-dom';
import { useSearchBooks } from '@/hooks/useFetch';
import { FallingLines } from 'react-loader-spinner';
import BookCard, { type BookCardProps } from '@/components/BookCard';
import Button from '../components/Button';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const { data, isLoading, isError } = useSearchBooks(searchTerm || '');

  if (isLoading)
    return (
      <div className='w-screen h-screen flex items-center justify-center'>
        <FallingLines color='#fff' width='100' visible={true} />
      </div>
    );

  if (isError)
    return (
      <div className='w-screen h-screen max-w-[80vw] mx-auto flex flex-col items-center justify-center gap-y-8 text-center text-white text-xl lg:text-2xl'>
        Sorry, there was a problem while fetching books
        <Link to='/'>
          <Button variant='solid' size='small' className='border-whiteborder-2'>
            Home
          </Button>
        </Link>
      </div>
    );

  return (
    <div className='bg-navy h-full text-white text-4xl text-center pt-12'>
      <div className='h-[100px]' />
      <h1 className='mb-24 largeBodyText lg:headingText'>
        Search results for "{searchTerm}"
      </h1>
      <div className='mt-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-y-24 max-w-[80vw] mx-auto'>
        {data?.map((book: BookCardProps) => (
          <Link to={`/book/${book.bookId}`} key={book.bookId}>
            <BookCard
              title={book.title}
              imageUrl={book.imageUrl}
              author={book.author}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default withTransition(SearchFeed);
