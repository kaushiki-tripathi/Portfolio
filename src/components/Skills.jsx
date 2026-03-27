import React from "react";
import {FaReact,FaNode,FaJsSquare,FaGitAlt,FaDatabase,FaHtml5,FaCss3Alt,FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiPostman, SiCplusplus, SiVercel, } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

const Skills = () => {
  const skills = [
    { name: "Cpp", icon: <SiCplusplus size={40} />,  color: "text-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 size={40} />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt size={40} />,  color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJsSquare size={40} />, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />,  color: "text-cyan-500" },
    { name: "React", icon: <FaReact size={40} />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNode size={40} />, color: "text-green-400" },
    { name: "Express", icon: <SiExpress size={40} />, color: "text-gray-300" },
    { name: "REST APIs", icon: <FiGlobe size={40} />, color: "text-blue-400" },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "text-green-600" },
    { name: "SQL", icon: <FaDatabase size={40} />, color: "text-red-500" },
    { name: "Git", icon: <FaGitAlt size={40} />, color: "text-orange-600" },
    { name: "Github", icon: <FaGithub size={40} />, color: "text-gray-400" },
    { name: "Postman", icon: <SiPostman size={40} />, color: "text-orange-400" },
    { name: "Vercel", icon: <SiVercel size={40} />, color: "text-gray-200" },
  ];


  return (
    <div className="w-full max-w-5xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl flex flex-col overflow-hidden mt-24 md:mt-0 mx-4 md:mx-auto transition-all duration-300 p-8 md:p-12 ">
      {/* Header */}
      <div className="text-center mb-12 w-full">
        <h1 className="text-4xl md:text-3xl text-center font-bold text-white mb-1">
      <span className="border-b-2 border-green-500/50 pb-1">
                  Skills
                </span>
        </h1>
        
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors duration-200 border border-gray-700 hover:border-green-500/30"
          >
            {/* Icon */}
            <div className={`${skill.color} mb-3 flex justify-center transition-transform group-hover:scale-110 duration-200`}>
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h3 className="text-xs md:text-sm font-semibold text-white mb-2 truncate">
              {skill.name}
            </h3>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
