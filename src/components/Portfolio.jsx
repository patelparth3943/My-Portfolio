/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import industrial  from "../assets/portfolio/industrial.png";
import ml from "../assets/portfolio/ml.png";
import hms from "../assets/portfolio/hms.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: industrial,
    },
    {
      id: 2,
      src: ml,
    },
    {
      id: 3,
      src: hms,
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:pt-0 pt-60">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md object-scale-down  shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="image"
                className="rounded-md h-40 w-full backdrop-blur-sm duration-200 hover:scale-105 hover:"
              />
              <div className="flex justify-center">
                
                <a href="https://github.com/patelparth3943?tab=repositories" className="flex justify-center cursor-pointer hover:bg-slate-700 w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105 rounded-md">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;