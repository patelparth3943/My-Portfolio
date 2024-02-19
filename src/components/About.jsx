import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, I'm Parth Patel, a passionate web developer dedicated to crafting exceptional online experiences. With expertise in HTML, CSS,Javascript and React.js My journey in web development has been marked by a commitment to transforming ideas into visually appealing and highly functional websites. I bring a blend of creativity and technical expertise to every project.As a diligent problem solver, I enjoy tackling challenges head-on and finding elegant solutions that enhance the overall user experience. Let's collaborate and turn your digital visions into reality –where every line of code tells a story of innovation and excellence. Welcome to the world of Parth Patel, where coding meets creativity!

        </p>

       
      </div>
    </div>
  );
};

export default About;