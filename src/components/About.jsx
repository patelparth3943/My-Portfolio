import { MdOutlineArrowDownward } from "react-icons/md";
import React from 'react';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Parth_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 sm:pt-0 pt-60">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl text-justify mt-20">
            Hello, I'm Parth Patel, a passionate web developer dedicated to crafting exceptional online experiences.
            With expertise in HTML, CSS, JavaScript, and React.js, my journey in web development has been marked by a commitment to
            transforming ideas into visually appealing and highly functional websites. I bring a blend of creativity and technical
            expertise to every project. As a diligent problem solver, I enjoy tackling challenges head-on and finding elegant solutions
            that enhance the overall user experience. Let's collaborate and turn your digital visions into reality – where every line of
            code tells a story of innovation and excellence. Welcome to the world of Parth Patel, where coding meets creativity!
          </p>
        </div>
        <div className="flex mt-3">
          <button 
            onClick={handleDownload}
            className="group font-bold text-xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Resume
            <span className="group-hover:animate-bounce bold duration-300">
              <MdOutlineArrowDownward size={25} className="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
