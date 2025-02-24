import { resizeImageUrl, truncateText } from '@/utils/helpers';

export interface BookCardProps {
  bookId: number;
  title: string;
  imageUrl: string;
  author?: { name: string }[];
}

const BookCard = (props: BookCardProps) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <img
          src={resizeImageUrl(props.imageUrl)}
          alt={props.title}
          className='w-[150px] md:w-[180px] lg:w-[240px] aspect-[3/4]'
        />
        <div className='mt-3'>
          <p className='text-base'>{truncateText(props?.title || '', 30)}</p>
          <p className='text-sm text-neutral-400'>
            {props.author?.map((item) => item.name)}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookCard;
