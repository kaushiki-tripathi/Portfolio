import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx'; 
import Projects from './components/Projects.jsx';
import Contacts from './components/contacts.jsx';
import About from './components/About.jsx';
import Achievements from './components/Achievements.jsx';
import Portfolio from './components/Portfolio.jsx';
import Education from './components/Education.jsx'; 
import MusicButton from './components/MusicButton.jsx';


const pageVariants = {
  initial: (direction) => ({
    x: direction === "right" ? "100vw" : 
       direction === "left"  ? "-100vw" :
       direction === "top"   ? "0vw" : "0vw",
    y: direction === "top"   ? "-100vh" :
       direction === "bottom"? "100vh" : "0vh",
    opacity: 0
  }),
  animate: {
    x: 0,
    y: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction === "right" ? "-100vw" : 
       direction === "left"  ? "100vw" : "0vw",
    y: direction === "top"   ? "100vh" :
       direction === "bottom"? "-100vh" : "0vh",
    opacity: 0
  })
};



const PageTransition = ({ children, direction }) => {
  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

// --- 2. ANIMATED ROUTES WRAPPER ---
function AnimatedRoutes() {
  const location = useLocation();

  // Define which direction the new page should slide IN from
  const getDirection = (path) => {
    if (path === "/about")     return "right";
    if (path === "/projects")  return "right";
    if (path === "/achievements") return "right";
    if (path === "/contacts")  return "right";
    if (path === "/education") return "right";
  };

  const direction = getDirection(location.pathname);

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition direction={direction}><Home /></PageTransition>} />
        <Route path="/home" element={<PageTransition direction={direction}><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition direction={direction}><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition direction={direction}><Projects /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition direction={direction}><Portfolio /></PageTransition>} />
        <Route path="/achievements" element={<PageTransition direction={direction}><Achievements /></PageTransition>} />
        <Route path="/education" element={<PageTransition direction={direction}><Education /></PageTransition>} />
        <Route path="/contacts" element={<PageTransition direction={direction}><Contacts /></PageTransition>} />
        <Route path="*" element={<PageTransition direction="right"><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}
const VideoBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/portfolio-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="relative z-20 min-h-screen w-full flex items-center justify-center p-4 md:p-8 text-white">
        {children}
      </div>
    </div>
  );
};

// --- 4. MAIN APP EXPORT ---
export default function App() {
  return (
    <BrowserRouter>
      <VideoBackground>
        <Navbar />
        <AnimatedRoutes />
        <MusicButton />
      </VideoBackground>
    </BrowserRouter>
  );
}