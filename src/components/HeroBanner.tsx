import library from '@/assets/library.jpg';

const HeroBanner = () => {
  return (
    <div className='relative w-full h-[80vh] text-white text-center flex flex-col items-center justify-center'>
      <div className='absolute inset-0 h-full w-full'>
        <div className='absolute left-0 top-0 h-full w-full bg-black/50' />
        <img
          src={library}
          alt='library'
          className='h-full w-full object-cover'
        />
        {/* Heading */}
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
          <h1 className='headingText mb-3'>
            <span>
              <strong>함께</strong> 읽고 나누는
            </span>
            <br />
            <span>
              <strong>독후</strong> 활동
            </span>
          </h1>

          <h2 className='smallBodyText'>
            <span>독서 커뮤니티 책장에서 다독러들과 함께 책에 관해</span>
            <br />
            <span>이야기하며 독후 활동을 해보세요</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
