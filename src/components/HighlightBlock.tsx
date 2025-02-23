import book2 from '@/assets/book2.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animation';

const HighlightBlock = () => {
  const recommendedBooks = ['Death of', 'A Salesman'];

  return (
    <div className='bg-orange text-white py-24 flex flex-col'>
      {/* Header */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='text-center space-y-2 lg:space-y-4'
      >
        <p>금주의 추천 도서를 확인해 보세요</p>
        <p className='subHeadingText font-bold'>추천 책장</p>
      </motion.div>

      {/* Content Wrapper */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row justify-center md:gap-x-12 lg:gap-x-32 mt-10 lg:mt-16 max-w-[80%] mx-auto w-full'
      >
        {/* Left Section */}
        <div className='w-full lg:w-1/2'>
          <div className='space-y-2 lg:space-y-3'>
            {recommendedBooks.map((title) => (
              <p
                key={title}
                className='largeBodyText w-fit h-fit mx-auto lg:mx-0 bg-white text-orange px-6 py-1 flex flex-col'
              >
                {title}
              </p>
            ))}
          </div>

          <div className='mt-12 space-y-6 text-center lg:text-left'>
            <p className='mediumBodyText'>
              세일맨의 죽음
              <br />
              w. Arthur Miller
            </p>
            <p className='columns-1 lg:columns-2 text-balance'>
              30여 년간 세일즈맨으로 일한 윌리 로먼은 주변에서 아무리 자신을
              무시해도 그 나름대로 자부심을 갖고 두 아들 비프와 해피의
              뒷바라지를 하며 살아 왔다. 하지만 나이가 들수록 점점 보수는
              낮아지고 궁핍한 생활을 지속하다 결국 회사로부터 해고 당하게 된다.
              윌리는 방탕한 낙오자로 전락하면서...
            </p>
          </div>
        </div>

        {/* Right Section (Book Cover) */}
        <div className='flex w-[200px] md:w-[240px] mx-auto lg:mx-0'>
          <img src={book2} alt='book' className='w-full h-full object-cover' />
        </div>
      </motion.div>
    </div>
  );
};

export default HighlightBlock;
