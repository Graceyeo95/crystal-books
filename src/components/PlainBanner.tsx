import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animation';
import Button from '@/components/Button';

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
          Shared Reading and Discussion
        </h2>

        <p className='smallBodyText text-neutral-500'>
          <span>책장에서 함께 읽고 함께 나누는 독후활동,</span>
          <br />
          <span>책장과 함께 독서의 매력과 인사이트를 발견해 보세요</span>
        </p>

        <Button variant='outline' size='large' className='mt-8'>
          커뮤니티 바로가기
        </Button>
      </motion.div>
    </div>
  );
};

export default PlainBanner;
