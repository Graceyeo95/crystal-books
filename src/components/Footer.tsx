import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='bg-orange py-12 text-white px-12'>
      <p>©{year} Crystal Books. All Rights Reserved.</p>
      <p className='text-xs'>Website made by Crystal Yeo.</p>
    </div>
  );
};

export default Footer;
