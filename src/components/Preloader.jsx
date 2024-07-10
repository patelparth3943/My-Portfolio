import React from 'react';
import { HashLoader } from 'react-spinners';
import '../../src/index.css';
const Preloader = () => {
  
  return (
   

<div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-gray-800 z-50">
<HashLoader
        color="#256abf"

  className=''
  size={100}
  speedMultiplier={1}
/>
      <span className="font-playwrite  text-xl font-extrabold text-gray-400 mt-5 mb-8 block">Parthism..</span>
      <div className="progress-bar flex items-center justify-center w-full">
        <div className="progress-bar_bg h-[3px] w-5/12 bg-[#d3dbdd]">
          <div className="h-[3px] bg-[#256abf] w-0 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
