import bookCover from '@/assets/orange-book.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animation';
import Button from './Button';
import { Link } from 'react-router-dom';

const TransparentBanner = () => {
  return (
    <div className='w-full py-40 relative text-white max-w-[60vw] mx-auto'>
      <img
        src={bookCover}
        alt='book'
        className='fixed left-0 bottom-0 min-w-full min-h-full object-cover z-[-10]'
      />
      <div className='fixed left-0 bottom-0 min-w-full min-h-full bg-black/40 z-[-9]' />

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='w-full h-full flex flex-col z-10 text-center'
      >
        <p className='subHeadingText mb-3'>
          <span>
            <strong>오늘의 책, 오늘의 명언</strong>
          </span>
          <br />
          <span>나만의 컬렉션 만들기!</span>
        </p>

        <p className='smallBodyText'>마음에 드는 책과 명언을 모아보세요</p>

        <Link to='/favourite'>
          <Button variant='solid' size='small' className='w-fit mt-8 mx-auto'>
            즐겨찾기 보기
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default TransparentBanner;
