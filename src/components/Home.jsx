import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaStar,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiCode } from "react-icons/fi";

/* ----- Typewriter hook (unchanged) ----- */
const useTypewriter = (roles, delay = 150, pause = 2000) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? delay / 2 : delay;

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((p) => (p + 1) % roles.length);
      }
    };
    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles, delay, pause]);

  return text;
};

/* ----- Home component ----- */
const Home = () => {
  const roles = [
    "Aspiring Software Engineer",
    "Full‑Stack Developer",
    "AI/ML Enthusiast",
  ];
  const typedRole = useTypewriter(roles);

  return (
    <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mt-20 sm:mt-8 md:mt-0 mx-4 md:mx-auto transition-all duration-300">
      <div className="p-6 sm:p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-green-400 mt-2 min-h-[50px] sm:min-h-[60px]">
          {typedRole}
          <span className="opacity-50 animate-pulse">|</span>
        </h2>

        <h1 className="text-xl sm:text-2xl text-blue-500 mt-2">Hello I'm</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1">
          Kaushiki Tripathi
        </h1>

        <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl leading-relaxed">
          Welcome to my portfolio. I’m a passionate full‑stack developer specializing in the MERN stack. I love turning ideas into real‑world solutions and creating impactful digital experiences.<br />
          Beyond coding, I’m fascinated by AI and machine learning—technologies that can make web apps smarter and more intuitive.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center justify-center md:justify-start w-full">
          <NavLink
            to="/about"
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300"
          >
            About Me
          </NavLink>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/kaushikitripathi2005/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 text-gray-400 bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/kaushiki-tripathi"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 text-gray-400 bg-gray-800 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://leetcode.com/u/Kaushiki-Tripathi/"
              title="Leetcode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 text-gray-400 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <SiLeetcode size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 px-6 py-4 sm:px-8 sm:py-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center sm:justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <span className="text-white font-semibold text-sm sm:text-base">
              5‑Star Coder
              <span className="text-gray-400 font-normal"> (HackerRank)</span>
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <span className="text-white font-semibold text-sm sm:text-base">
              200+ Problems Solved
              <span className="text-gray-400 font-normal"> (LeetCode)</span>
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl font-bold text-green-400">2</span>
            <span className="text-white font-semibold text-sm sm:text-base">
              Key Projects
              <span className="text-gray-400 font-normal"> (MERN)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;