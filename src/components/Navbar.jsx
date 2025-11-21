// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiFolder } from "react-icons/fi";
import { FaEnvelope, FaGraduationCap } from "react-icons/fa";

const navItems = [
  { to: "/home", icon: <FiHome size={24} />, label: "Home" },
  { to: "/about", icon: <FiUser size={24} />, label: "About" },
  { to: "/education", icon: <FaGraduationCap size={24} />, label: "Education" },
  { to: "/projects", icon: <FiFolder size={24} />, label: "Projects" },
  { to: "/contacts", icon: <FaEnvelope size={24} />, label: "Contacts" },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (label) => {
    setClicked(label);
    setTimeout(() => setClicked(null), 500); // reset after animation
  };

  return (
    <div
      className={`
        fixed bg-gray-800/90 backdrop-blur-sm p-2 gap-4 transition-all duration-300 h-auto z-50
        
        /* MOBILE STYLES (Default): Top horizontal bar */
        top-0 left-0 w-full flex flex-row justify-center rounded-b-lg
        
        /* DESKTOP STYLES (md breakpoint): Left vertical bar */
        md:w-17 md:top-1/2 md:-translate-y-1/2 md:left-0 md:flex-col md:rounded-r-lg md:rounded-b-none
      `}
    >
      {navItems.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          onClick={() => handleClick(label)}
          className={({ isActive }) => `
            flex items-center justify-center p-2 rounded-md 
            ${isActive ? "bg-green-500 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white"}
            transition-all duration-200 ${clicked === label ? "animate-click" : "hover:scale-110"}
          `}
          title={label}
          end
        >
          {icon}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;