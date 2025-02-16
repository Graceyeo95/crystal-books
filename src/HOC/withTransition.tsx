import React from 'react';
import { motion } from 'framer-motion';

const widthTransition = (Component: React.FC<{}>) => {
  function HOC() {
    return (
      <>
        <Component />
        <motion.div
          className='slide-in'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className='slide-out'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  }

  return HOC;
};

export default widthTransition;
