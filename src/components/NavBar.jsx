import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {  Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = ({ showPreloader }) => {
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
  
  const navvarient = {
    hidden: {
      opacity: 0,
      y: -25
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white z-50 bg-black fixed">
      <div>
        <ScrollLink to="home" smooth duration={500} offset={-20}>
          <motion.h1  
          variants={navvarient}
          initial="hidden"
          animate="visible"
          transition={{
            type:'spring', 
            stiffness:30,
          delay:0.3,duration:1}}
          
          className="cursor-pointer text-5xl font-signature ml-2">
         Parth<span className="text-blue-500">.</span>
          </motion.h1>
        </ScrollLink>
      </div>
      <motion.ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <motion.li
            variants={navvarient}
            initial="hidden"
            animate="visible" 
            key={id}
            transition={{
              type: 'spring', 
              stiffness: 30,
              delay: id * 0.2, duration: 1
            }}
            className="px-4 text-xl font-bold cursor-pointer capitalize text-gray-500 hover:text-blue-400 hover:scale-105 duration-200"
          >
            <ScrollLink to={link} smooth duration={500} offset={-80}>
              {link}
            </ScrollLink>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        <div
          onClick={toggleNav}
          className="cursor-pointer pr-4 z-10 text-white-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <motion.ul  
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col justify-between items-center absolute top-20 rounded-b-2xl right-0 w-80 pb-3 min-h-80 bg-gradient-to-b from-black to-gray-800 text-white"
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                className="cursor-pointer font-bold capitalize text-3xl"
              >
                <ScrollLink
                  onClick={toggleNav}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </ScrollLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
