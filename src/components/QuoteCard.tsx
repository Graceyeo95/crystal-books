import { truncateText } from '../utils/helpers';

export interface QuoteCardProps {
  imageUrl: string;
  quoteText: string;
}

const QuoteCard = (props: QuoteCardProps) => {
  return (
    <div className='px-3 py-8 bg-[#fff] flex flex-col h-auto md:h-[500px]'>
      <div className=''>
        <div className='rounded-full size-20 overflow-hidden mx-auto mb-6 flex-shrink-0'>
          <img
            src={props.imageUrl}
            alt={'image'}
            className='w-full h-full object-cover'
          />
        </div>
        <p className='text-base text-center'>
          {truncateText(props.quoteText, 300)}
        </p>
      </div>
    </div>
  );
};

export default QuoteCard;
