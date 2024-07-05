import React from 'react';
import { HashLoader } from 'react-spinners';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black via-black to-gray-800 z-50">
      <HashLoader
        color="#559ade"

  className='border-white'
  size={100}
  speedMultiplier={1}
/>
    </div>
  );
};

export default Preloader;
