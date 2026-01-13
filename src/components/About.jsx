import React from "react";
import profilePic from "../assets/pic.jpg";
// Importing React Icons
import { FaLinkedin, FaGithub, FaDownload, FaBrain } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiCode } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full max-w-6xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden mt-24 md:mt-0 mx-4 md:mx-auto transition-all duration-300">
      
      {/* Left Panel (Personal Info) */}
      <div className="w-full md:w-1/3 p-6 md:p-8 bg-gray-800/50 flex flex-col items-center text-center">
        {/* Profile Pic: Smaller on mobile (w-32/h-32), original on desktop (md:w-48/h-48) */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-green-500 transition-all duration-300">
          <img src={profilePic} className="w-28 h-28 md:w-44 md:h-44 rounded-full object-cover transition-all duration-300" alt="Kaushiki Tripathi
          " />
        </div>
        
        {/* Text sizes reduced for mobile, kept large for desktop */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mt-6 transition-all duration-300">Kaushiki Tripathi</h1>
        <p className="text-lg md:text-xl text-green-400 mt-1 transition-all duration-300">IT Undergraduate</p>
        
        <div className="flex gap-5 mt-6">
          <a href="https://www.linkedin.com/in/kaushikitripathi2005/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/kaushiki-tripathi" title="Github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://leetcode.com/u/Kaushiki-Tripathi/" title="Leetcode" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
            <SiLeetcode size={24} />
          </a>
        </div>
        <a 
          href="/CV.pdf"
          download="Kaushiki_Tripathi_CV.pdf"
          className="mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
        >
          <FaDownload className="w-5 h-5" />
          Download CV
        </a>
        <p className="text-xs text-gray-500 mt-auto pt-8">© 2025 Kaushiki Tripathi. All rights reserved.</p>
      </div>

      {/* Right Panel (Details) */}
      <div className="w-full md:w-2/3 p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white transition-all duration-300">About Me</h2>
        
        {/* Body text: text-sm on mobile, text-base on desktop */}
        <p className="text-sm md:text-base text-gray-300 mt-4 leading-relaxed transition-all duration-300">
          I am a passionate and driven Information Technology undergraduate from PSIT, Kanpur. 
          With a strong foundation in Data Structures, Algorithms, and DBMS, I specialize in 
          building scalable, real-time web applications using the MERN stack. I thrive on 
          solving complex problems and turning ideas into efficient, reliable code.
        </p>
        
        {/* Grid text scaled down for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm md:text-base transition-all duration-300">
          <div><span className="text-green-400 font-semibold">Residence:</span> <span className="text-gray-200">India</span></div>
          <div><span className="text-green-400 font-semibold">Address:</span> <span className="text-gray-200">Kanpur, UP</span></div>
          <div><span className="text-green-400 font-semibold">Email:</span> <a href="mailto:kaushikitripathi07@gmail.com" className="text-gray-200 hover:text-green-400">kaushikitripathi07@gmail.com</a></div>
          
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 transition-all duration-300">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="flex gap-4">
            {/* Icons slightly smaller on mobile */}
            <FiCode className="w-8 h-8 md:w-10 md:h-10 text-green-400 shrink-0 mt-1 transition-all duration-300" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white transition-all duration-300">Full-Stack Development</h3>
              <p className="text-sm md:text-base text-gray-400 mt-2 transition-all duration-300">
                Building responsive, real-time applications with the MERN stack (React.js, Node.js, Express.js, MongoDB).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <FaBrain className="w-8 h-8 md:w-10 md:h-10 text-green-400 shrink-0 mt-1 transition-all duration-300" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white transition-all duration-300">Problem Solving</h3>
              <p className="text-sm md:text-base text-gray-400 mt-2 transition-all duration-300">
                Applying a strong background in DSA. (5-Star HackerRank, 200+ LeetCode problems).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;