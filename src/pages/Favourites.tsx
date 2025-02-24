import withTransition from '@/HOC/withTransition';
import { HeroBanner } from '@/components';
import library from '@/assets/library.avif';

const Favourites = () => {
  return (
    <div className='h-full w-full'>
      <HeroBanner
        image={{
          src: library,
          alt: 'Library Background',
        }}
        heading='저장한 모든 책과 명언을 즐겨보세요'
      />
      <div className='container-wrapper bg-white h-screen text-orange mediumBodyText'>
        <div className='flex gap-x-12 justify-center'>
          <button className='border-b-[1px] border-orange cursor-pointer'>
            Books
          </button>
          <button>Quotes</button>
        </div>
      </div>
    </div>
  );
};

export default withTransition(Favourites);
