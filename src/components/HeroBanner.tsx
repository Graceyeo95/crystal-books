import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animation';

type HeroBannerProps = {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  subHeading?: string;
  isBigBanner?: boolean;
};

const HeroBanner = (props: HeroBannerProps) => {
  return (
    <div
      className={`${
        props?.isBigBanner ? 'h-[80vh]' : 'h-[60vh]'
      } relative w-full text-white text-center flex flex-col items-center justify-center`}
    >
      <div className='relative h-full w-full'>
        <div className='absolute inset-0 h-full w-full bg-black/30' />
        <img
          src={props.image.src}
          alt='bg-image'
          className='h-full w-full object-cover'
        />
        {/* Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
          className='absolute left-0 top-0 w-full h-full items-center flex flex-col justify-center z-10 px-12'
        >
          <h1
            className={`mb-3 ${
              props?.isBigBanner ? 'headingText' : 'subHeadingText'
            }`}
          >
            {props.heading}
          </h1>
          <h2 className='smallBodyText'>{props?.subHeading}</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
