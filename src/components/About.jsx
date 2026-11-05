import React from "react";
import profilePic from "../assets/pic.jpeg";

// React Icons
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiCode } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full max-w-6xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden mt-24 md:mt-0 mx-4 md:mx-auto transition-all duration-300">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 p-6 md:p-8 bg-gray-800/50 flex flex-col items-center text-center">
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-green-500 transition-all duration-300">
          <img
            src={profilePic}
            className="w-28 h-28 md:w-44 md:h-44 rounded-full object-cover transition-all duration-300"
            alt="Kaushiki Tripathi"
          />
        </div>

        {/* Name and Designation */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mt-6">
          Kaushiki Tripathi
        </h1>

        <p className="text-lg md:text-xl text-green-400 mt-2">
          Software Developer
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/kaushikitripathi2005/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/kaushiki-tripathi"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://leetcode.com/u/Kaushiki-Tripathi/"
            title="Leetcode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            <SiLeetcode size={24} />
          </a>
        </div>

        {/* Download CV */}
        {/* View CV */}
<a
  href="/CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
>
  <FaDownload className="w-5 h-5" />
  View CV
</a>

        <div className="w-full mt-9 pt-6 border-t border-gray-700/70 flex flex-col gap-5 text-sm md:text-base">
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400 font-semibold">Residence:</span>
            <span className="text-gray-200">India</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400 font-semibold">Address:</span>
            <span className="text-gray-200">Kanpur, UP</span>
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-green-400 font-semibold">Email:</span>
            <a
              href="mailto:kaushikitripathi07@gmail.com"
              className="text-gray-200 hover:text-green-400 transition-colors"
            >
              kaushikitripathi07@gmail.com
            </a>
          </div>
          {/* Copyright */}
        
        </div>
        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-10 md:mt-auto pt-8">
          © 2026 Kaushiki Tripathi. All rights reserved.
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-6 md:p-10 lg:p-12">
        {/* About Me */}
        <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>

        <p className="text-sm md:text-base text-gray-300 mt-5 leading-8">
          I'm a Software Engineering graduate with hands-on experience in
          full-stack development and AI-powered applications. My work includes
          building responsive web applications using React.js, Node.js,
          Express.js, and MongoDB, along with developing RAG-based systems using
          LLM APIs and vector databases. I enjoy exploring new technologies,
          strengthening my problem-solving skills, and building practical
          solutions through software development.
        </p>

        {/* My Expertise */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12">
          My Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-8">
          {/* Full Stack Development */}
          <div className="flex items-start gap-4">
            <FiCode className="w-9 h-9 text-green-400 shrink-0 mt-1" />

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Full-Stack Development
              </h3>

              <p className="text-sm md:text-base text-gray-400 mt-3 leading-7">
                Building responsive web applications using React.js, Node.js,
                Express.js, and MongoDB with a focus on functionality and user
                experience.
              </p>
            </div>
          </div>

          {/* AI & Generative AI */}
          <div className="flex items-start gap-4">
            <FaBrain className="w-9 h-9 text-green-400 shrink-0 mt-1" />

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                AI & Generative AI
              </h3>

              <p className="text-sm md:text-base text-gray-400 mt-3 leading-7">
                Developing RAG-based applications using LLM APIs, text
                embeddings, semantic search, and vector databases.
              </p>
            </div>
          </div>

          {/* Problem Solving */}
          <div className="flex items-start gap-4">
            <FaBrain className="w-9 h-9 text-green-400 shrink-0 mt-1" />

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Problem Solving
              </h3>

              <p className="text-sm md:text-base text-gray-400 mt-3 leading-7">
                Applying Data Structures and Algorithms to solve coding
                challenges, with a 5-Star HackerRank rating and 230+ LeetCode
                problems solved.
              </p>
            </div>
          </div>

          {/* Backend & Database */}
          <div className="flex items-start gap-4">
            <FaDatabase className="w-9 h-9 text-green-400 shrink-0 mt-1" />

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Backend & Database Development
              </h3>

              <p className="text-sm md:text-base text-gray-400 mt-3 leading-7">
                Developing REST APIs, implementing authentication, and managing
                application data using MongoDB and SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
