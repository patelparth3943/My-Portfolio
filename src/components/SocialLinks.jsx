import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/parth-patel-033a581b7/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub<FaGithub size={30} />
        </>
      ),
      href: "https://github.com/patelparth3943",
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:patelparth3943@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
         Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/parthpatel_2025/",

    },
    {
      id: 5,
      child: (
        <>
          Facebook<FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/parthpatel3943",
      style: "rounded-br-md",
    },

  ];

  return (
    <div className="hidden lg:flex flex-col  top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-br-md hover:rounded-tr-md hover:bg-slate-700 hover:ml-[-10px]  duration-500 bg-gray-500" +
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