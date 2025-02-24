export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const slideIn = (direction: string, duration: number, delay: number) => {
  return {
    hidden: {
      x: direction === 'left' ? '-60%' : direction === 'right' ? '60%' : 0,
      y: direction === 'up' ? '60%' : direction === 'down' ? '60%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'linear',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};
