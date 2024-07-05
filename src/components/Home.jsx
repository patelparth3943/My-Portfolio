import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";



const Home = () => {
    const homevarient = {
        hidden: {
            opacity: 0,
            x: -25
        },
        visible: {
            opacity: 1,
            x: 0,


        }
    }
    const imgvarient = {
        hidden: {
            opacity: 0,
            x: '10vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 10,
                delay: 0.3,
            }

        }
    }
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <motion.div variants={homevarient} initial="hidden" animate="visible"
                    transition={{
                        type: 'spring',
                        stiffness: 20,
                        delay: 0.30,
                        duration: 1
                    }}
                    className="flex flex-col justify-center h-full sm:mt-0 mt-10">
                    <motion.h2 variants={homevarient} initial="hidden" animate="visible"
                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            delay: 0.2,
                            duration: 1
                        }} className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Web Developer
                    </motion.h2>
                    <p className="text-gray-500 py-4 max-w-md text-justify">
                        <span classname="wave-emoji ">{emoji("👋")}</span> Hello, I'm Parth Patel. I love to work on web application using technologies like
                        React, Tailwindcss. My journey in web development has equipped me with expertise in
                        front-end technologies like HTML, CSS, and JavaScript.
                    </p>

                    <motion.div variants={homevarient} initial="hidden" animate="visible"
                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            delay: 0.50,
                            duration: 1
                        }}>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group font-bold text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-800 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div variants={imgvarient} initial="hidden" animate="visible">
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;