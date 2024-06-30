import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/parth-patel-033a581b7/",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />GitHub
        </>
      ),
      href: "https://github.com/patelparth3943",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />Mail
        </>
      ),
      href: "mailto:patelparth3943@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />Instagram
        </>
      ),
      href: "https://www.instagram.com/parthpatel_2025/",

    },
    {
      id: 5,
      child: (
        <>
          <FaFacebook size={30} />Facebook
        </>
      ),
      href: "https://www.facebook.com/parthpatel3943",
      style: "rounded-bl-md",
    },

  ];

  return (
    <div className="hidden lg:flex flex-col  top-[35%] right-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:bg-slate-700 hover:mr-[-10px]  duration-500 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white font-semibold"
          
              
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;