import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiArrowRight, FiArrowLeft, FiGithub } from "react-icons/fi";

/* -------------------------------------------------------------
   PageTransition component (unchanged)
   ------------------------------------------------------------- */
const pageTransitionVariants = {
  right: { x: "100vw", opacity: 0 },
  top: { y: "-100vh", opacity: 0 },
  bottom: { y: "100vh", opacity: 0 },
  left: { x: "-100vw", opacity: 0 },
  center: { x: 0, y: 0, opacity: 1 },
};

function PageTransition({ children, direction = "right" }) {
  return (
    <motion.div
      initial={direction}
      animate="center"
      exit={direction}
      variants={pageTransitionVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

const projectData = [
  {
    title: "RailShield",
    status: "Ongoing",
    images: "/rail-shield.png",
    solution:
      "RailShield is a real-time emergency response system I am building to enhance passenger safety. The core feature is its ability to function without an internet connection, allowing passengers to send critical alerts in under 5 seconds using SMS. The system is engineered for high reliability and speed, capable of handling over 1,000 concurrent messages, making it 60% faster than manual reporting.",
    tech: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/kaushiki-tripathi/Rail-Shield",
  },
  {
    title: "GreenEarth (E‑Commerce)",
    images: "/greenEarth.png",
    solution:
      "GreenEarth is a full-stack, responsive web platform designed for environmental engagement. It allows users to browse, purchase, and fund the planting of trees at specific locations. The application increases transparency by providing real-time tracking and engages users with a tiered membership system.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://greenearth1.vercel.app/",
  },
  {
    title: "Recipe Generator",
    images: "/recipe-generator.png", // Make sure this file is in public folder
    solution:
      "Recipe Generator is a smart web app that lets you pick ingredients from a categorized pantry, instantly matches them to recipes, ranks results by match score, and filters by dietary needs. It shows detailed recipe cards with serving size, nutrition, ingredient list, and steps, all in a fully responsive Tailwind‑styled UI.",
    tech: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/kaushiki-tripathi/Recipe-Generator",
  },
];

const sliderVariants = {
  enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d < 0 ? "100%" : "-100%", opacity: 0 }),
};

const dotVariants = {
  inactive: { scale: 1, backgroundColor: "#6B7280" },
  active: { scale: 1.5, backgroundColor: "#22C55E" },
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = () => {
    setDirection(1);
    setIndex((p) => (p + 1) % projectData.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setIndex((p) => (p - 1 + projectData.length) % projectData.length);
  };

  return (
    <PageTransition direction="left">
      <div className="flex flex-col items-center w-full">
        {/* Project card */}
        <div className="w-full max-w-6xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mt-16">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-8 md:p-12 cursor-pointer"
            >
              <h1 className="text-4xl md:text-3xl text-center font-bold text-white mb-8">
                <span className="border-b-2 border-green-500/50 pb-1">
                  My Projects
                </span>
              </h1>

              {/* --- CHANGES START HERE --- */}
              {/* We wrap the content in a Flex container to put Image next to Text */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* LEFT SIDE: TEXT CONTENT */}
                <div className="flex-1 w-full">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                      {projectData[index].title}
                      {projectData[index].status && (
                        <span className="text-sm font-medium text-yellow-300 bg-yellow-700/50 px-2 py-0.5 rounded-full">
                          {projectData[index].status}
                        </span>
                      )}
                    </h3>

                    {/* Solution description */}
                    <p className="text-gray-300">
                      {projectData[index].solution}
                    </p>

                    {/* Tech stack */}
                    <h4 className="text-lg font-semibold text-green-400 mt-6 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projectData[index].tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-8">
                      {projectData[index].liveLink && (
                        <motion.a
                          href={projectData[index].liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#16A34A",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Live
                          <FiArrowRight className="w-4 h-4" />
                        </motion.a>
                      )}
                      <motion.a
                        href={projectData[index].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: IMAGE (This is what was missing!) */}
                <div className="flex-1 w-full flex justify-center">
                  <div className="relative group overflow-hidden rounded-xl border border-gray-700 shadow-2xl max-h-[300px]">
                    <img
                      src={projectData[index].images}
                      alt={projectData[index].title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              {/* --- CHANGES END HERE --- */}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <motion.button
            onClick={goPrev}
            className="p-3 bg-black/30 rounded-full text-white hover:bg-black/50 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowLeft />
          </motion.button>

          <div className="flex gap-2">
            {projectData.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => (i === index ? null : setIndex(i))}
                variants={dotVariants}
                animate={i === index ? "active" : "inactive"}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full focus:outline-none"
              />
            ))}
          </div>

          <motion.button
            onClick={goNext}
            className="p-3 bg-black/30 rounded-full text-white hover:bg-black/50 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowRight />
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
