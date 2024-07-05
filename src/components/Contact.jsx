import React from "react";
import { motion } from "framer-motion";


const Contact = () => {
  const varient ={
    hidden:{
      opacity:0,
      x:-50
    },
    visible:{
      opacity:1,
      x:0,
    }
  }
  const varient2 ={
    hidden:{
      opacity:0,
      x:50
    },
    visible:{
      opacity:1,
      x:0,
    }
  }
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 sm:pt-0 pt-60">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <motion.div
         variants={varient}
         initial="hidden"
         whileInView="visible"
         transition={{
           type:'spring', 
           stiffness:30,
         delay:0.3,duration:1}}
        className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/qaQYDYan"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 required rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 required rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <motion.button 
             variants={varient2}
             initial="hidden"
             whileInView="visible"
             transition={{
               type:'spring', 
               stiffness:30,
             delay:0.3,duration:1}}
            className="font-bold text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;