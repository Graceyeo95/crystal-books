import { HeroBanner } from '@/components';
import library from '@/assets/library.avif';
import withTransition from '@/HOC/withTransition';
import QuoteCard from '@/components/QuoteCard';
import { useState } from 'react';
import { useSearchQuotes } from '@/hooks/useFetch';
import { FallingLines } from 'react-loader-spinner';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import type { QuoteCardProps } from '@/components/QuoteCard';

interface UseSearchQuotesResult {
  data: QuoteCardProps[];
  isLoading: boolean;
  isError: boolean;
}

const Quotes = () => {
  const [activeQuoteKeyword, setActiveQuoteKeyword] = useState('love');
  const { data, isLoading, isError }: UseSearchQuotesResult = useSearchQuotes(
    activeQuoteKeyword || ''
  );

  const keywords = [
    'Love',
    'Life',
    'Humour',
    'Philosophy',
    'Poetry',
    'happiness',
    'Motivational',
    'Success',
    'Spirituality',
  ];

  return (
    <div className='bg-white w-full h-fit'>
      <HeroBanner
        image={{
          src: library,
          alt: 'Library Background',
        }}
        heading='마음에 드는 명언을 찾고 모아보세요'
        subHeading='키워드로 나만의 명언을 찾아보세요'
      />
      <div className='max-w-[80vw] mx-auto container-wrapper text-orange largeBodyText'>
        <p className='border-b-[1px] border-orange py-6'>Quotes by keyword</p>
        <div className='gap-2 flex flex-wrap mt-8'>
          {keywords.map((keyword) => (
            <span
              key={keyword}
              onClick={() => setActiveQuoteKeyword(keyword)}
              className={`filterTag ${
                activeQuoteKeyword.toLowerCase() === keyword.toLowerCase()
                  ? 'bg-orange text-white'
                  : 'bg-white text-orange'
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>

        {isLoading && (
          <div className='flex items-center justify-center h-[50vh] w-full'>
            <FallingLines color='#f04f23' width='100' visible={true} />
          </div>
        )}

        {isError && (
          <div className='w-screen h-screen max-w-[80vw] mx-auto flex flex-col items-center justify-center gap-y-8 text-center text-white text-xl lg:text-2xl'>
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
        )}

        {/* Quote Cards */}
        {!isLoading && !isError && (
          <div className='grid grid-cols-12 mt-12 gap-4 smallBodyText'>
            {data.map((quote, index) => (
              <div key={index} className='col-span-12 lg:col-span-4'>
                <QuoteCard
                  quoteText={quote.quoteText}
                  imageUrl={quote.imageUrl}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default withTransition(Quotes);
