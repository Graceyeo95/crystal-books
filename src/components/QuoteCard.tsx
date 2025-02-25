import { truncateText } from '../utils/helpers';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { toast } from 'react-toastify';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

export interface QuoteCardProps {
  id: string;
  imageUrl: string;
  quoteText: string;
}

const QuoteCard = (props: QuoteCardProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const handleFavoriteToggle = () => {
    if (isFavorite(props.quoteText, 'quote')) {
      removeFavorite(props.quoteText, 'quote');
      toast.success('Removed from favourites');
    } else {
      addFavorite(
        {
          id: props.quoteText,
          imageUrl: props.imageUrl,
          quoteText: props.quoteText,
        },
        'quote'
      );
      toast.success('Added to favourites');
    }
  };

  return (
    <>
      <div className='px-4 py-8 bg-[#fff] flex flex-col h-auto md:h-[500px]'>
        <button
          onClick={handleFavoriteToggle}
          className='text-base flex items-center gap-x-2 justify-end text-orange'
        >
          {isFavorite(props.quoteText, 'quote') ? (
            <MdFavorite size={24} />
          ) : (
            <MdFavoriteBorder size={24} />
          )}
        </button>

        <div className=''>
          <div className='rounded-full size-20 overflow-hidden mx-auto mb-6 flex-shrink-0'>
            <img
              src={props.imageUrl}
              alt={'image'}
              className='w-full h-full object-cover'
            />
          </div>
          <p className='text-base text-center'>
            {truncateText(props?.quoteText || '', 300)}
          </p>
        </div>
      </div>
    </>
  );
};

export default QuoteCard;
