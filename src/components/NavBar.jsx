import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <ScrollLink to="home" smooth duration={500} offset={-20}>
          <h1 className="cursor-pointer text-5xl font-signature ml-2">
            Parth<span className="text-blue-500">.</span>
          </h1>
        </ScrollLink>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-blue-400 hover:scale-105 duration-200"
          >
            <ScrollLink to={link} smooth duration={500} offset={-80}>
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-10 text-white-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-between items-center absolute top-20 rounded-b-2xl right-0 w-80 pb-3 min-h-80 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" cursor-pointer font-bold capitalize  text-3xl"
            >
              <ScrollLink
                onClick={toggleNav}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
