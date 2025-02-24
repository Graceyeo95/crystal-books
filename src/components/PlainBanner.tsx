import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animation';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const PlainBanner = () => {
  return (
    <div className='bg-white container-wrapper'>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.8 }}
        className='w-full h-full items-center flex flex-col justify-center z-10 text-center'
      >
        <h2 className='largeBodyText mb-3 text-orange'>
          <strong>명언을 통해</strong> 영감을 얻고,
          <br />
          나만의 의미를 발견하기
        </h2>

        <p className='smallBodyText text-neutral-500'>
          원하는 키워드로 명언을 탐색하며, 나만의 영감을 찾아보세요
        </p>

        <Link to='/quote'>
          <Button variant='outline' size='large' className='mt-8'>
            명언 찾아보기
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default PlainBanner;
