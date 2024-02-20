// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/patelparth3943",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:patelarjun3943@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/parthpatel_2025/",

    },
    {
      id: 5,
      child: (
        <>
          <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/parthpatel3943",
    },

  ];
  return (
    <footer className="  bg-gradient-to-t from-gray-900 to-gray-800 text-white py-10  text-center">
      <div className="container sm:pt-0 pt-60 mx-auto">
        <h1 className="text-3xl font-bold mb-4">
        Together, let's shape ideas into impactful designs.
        </h1>
        <div className="footer-logo">
        <h1 className="text-5xl font-signature ml-2">Parth<span  className="text-blue-500">.</span></h1>
       
        <div className="sm:hidden  my-7 flex justify-center gap-6 ">
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex  hover:scale-150 duration-200" 
            }
          >
            <a
              href={href}
              className=" text-white"
          
              
            >
              {child}
            </a>
          </li>
        ))}

        </div>
        
        </div>
        <p className="text-gray-500">© 2024 Parth Patel. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
