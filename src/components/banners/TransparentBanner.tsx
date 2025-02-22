import bookCover from '@/assets/book-cover.jpg';

const TransparentBanner = () => {
  return (
    <div className='w-full h-[500px] bg-transparent relative'>
      {/* Full-screen background image maintaining aspect ratio */}
      <img
        src={bookCover}
        alt='book'
        className='fixed left-0 bottom-0 min-w-full min-h-full object-cover z-[-1]'
      />
      <div className='relative text-white text-center'>Testing</div>
    </div>
  );
};

export default TransparentBanner;
