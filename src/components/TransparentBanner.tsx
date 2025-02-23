import bookCover from '@/assets/orange-book.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animation';
import Button from './Button';

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
        <p className='headingText mb-3'>
          <span>
            <strong>함께</strong> 읽고 나누는
          </span>
          <br />
          <span>
            <strong>독후</strong> 활동
          </span>
        </p>

        <p className='smallBodyText'>
          <span>독서 커뮤니티 책장에서 다독러들과 함께 책에 관해</span>
          <br />
          <span>이야기하며 독후 활동을 해보세요</span>
        </p>

        <Button variant='solid' size='small' className='w-fit mt-8 mx-auto'>
          독후감 쓰기
        </Button>
      </motion.div>
    </div>
  );
};

export default TransparentBanner;
