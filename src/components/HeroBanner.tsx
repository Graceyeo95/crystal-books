import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animation';

const HeroBanner = () => {
  return (
    <div
      className={`relative w-full h-[80vh] text-white text-center bg-[url('/images/library.avif')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center`}
    >
      <div className='absolute inset-0 h-full w-full bg-black/30' />
      {/* Heading */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='w-full h-full items-center flex flex-col justify-center z-10'
      >
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
      </motion.div>
    </div>
  );
};

export default HeroBanner;
