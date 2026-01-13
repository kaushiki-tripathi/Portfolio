import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── PageTransition ─────────────────────────────────────────────
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

// ── Education Data (left → right order) ────────────────────────
const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology, IT",
    institution: "Pranveer Singh Institute Of Technology, Kanpur",
    dates: "2022 - 2026 (Pursuing)",
    score: "Percentage: 73.56 %",
    position: "top",
  },
  {
    id: 2,
    degree: "Intermediate (ISC)",
    institution: "St. Thomas School, Kanpur",
    dates: "2021 - 2022",
    score: "Percentage: 73.0 %",
    position: "bottom",
  },
  {
    id: 3,
    degree: "High School (ICSE)",
    institution: "St. Thomas School, Kanpur",
    dates: "2019 - 2020",
    score: "Percentage: 77.5 %",
    position: "top",
  },
];

// ── Card Component ─────────────────────────────────────────────
const EducationCard = ({ item }) => (
  <motion.div
    // Mobile: w-full, Desktop: fixed width
    className="bg-gray-800/90 border border-gray-700 p-6 rounded-xl shadow-xl w-full md:w-70 h-auto relative"
    whileHover={{ scale: 1.05, y: -5, borderColor: "#4ade80" }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    {/* Desktop Arrow (Top/Bottom) - Hidden on mobile */}
    <div
      className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 border-r border-b border-gray-700 rotate-45 
      ${
        item.position === "top"
          ? "-bottom-2 border-t-0 border-l-0"
          : "-top-2 border-r-0 border-b-0 border-t border-l"
      }`}
    ></div>

    {/* Mobile Arrow (Left) - Visible only on mobile */}
    <div className="md:hidden absolute -left-2 top-6 w-4 h-4 bg-gray-800 border-l border-b border-gray-700 rotate-45"></div>

    <h3 className="text-lg font-bold text-green-400">{item.degree}</h3>
    <p className="text-white font-medium mt-1">{item.institution}</p>
    <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
      <span>{item.dates}</span>
    </div>
    <p className="text-gray-300 text-sm mt-1 font-mono">{item.score}</p>
  </motion.div>
);

// ── Animation Variants (Desktop) ───────────────────────────────
const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 3.6, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      // Delays match the line progress
      delay: custom === 0 ? 1.2 : custom === 1 ? 1.8 : 2.7,
      duration: 0.4,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: (custom) => ({
    scale: 1,
    transition: {
      delay: custom === 0 ? 1.1 : custom === 1 ? 1.7 : 2.6,
      duration: 0.3,
      type: "spring",
      stiffness: 200,
    },
  }),
};

// ── Main Component ─────────────────────────────────────────────
const Education = () => {
  // Ref for the desktop timeline container
  const desktopRef = useRef(null);
  const isDesktopInView = useInView(desktopRef, { once: true, amount: 0.2 });

  // Ref for the mobile timeline container
  const mobileRef = useRef(null);
  const isMobileInView = useInView(mobileRef, { once: true, amount: 0.1 });

  return (
    <PageTransition direction="right">
      <div className="w-full max-w-5xl bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden h-auto min-h-[600px] md:h-142 flex flex-col mt-24 md:mt-0 mx-4 md:mx-auto transition-all duration-300">
        <div className="p-6 md:p-12 grow flex flex-col justify-center">
          <h1 className="text-3xl md:text-3xl text-center font-bold text-white mb-8 md:mb-12">
            <span className="border-b-2 border-green-500/50 pb-1">
              Academic journey
            </span>
          </h1>

          {/* ─── DESKTOP TIMELINE (Horizontal) ─── */}
          <div
            ref={desktopRef}
            className="hidden md:block relative w-full h-96"
          >
            {/* Horizontal Line */}
            <motion.div
              className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-green-500 to-green-400 rounded-full transform -translate-y-1/2"
              variants={lineVariants}
              initial="hidden"
              animate={isDesktopInView ? "visible" : "hidden"}
              style={{ originX: 0 }}
            />

            {/* Dots & Cards */}
            <div className="relative w-full h-full flex justify-between px-10">
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className="relative flex flex-col items-center justify-center h-full w-1/3"
                >
                  {item.position === "top" ? (
                    <>
                      <motion.div
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate={isDesktopInView ? "visible" : "hidden"}
                        className="mb-2 absolute bottom-1/2 pb-6"
                      >
                        <EducationCard item={item} />
                      </motion.div>
                      <motion.div
                        className="w-4 h-4 bg-green-500 rounded-full z-10 border-4 border-green-950 shadow-[0_0_15px_rgba(34,197,94,0.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        variants={dotVariants}
                        custom={index}
                        initial="hidden"
                        animate={isDesktopInView ? "visible" : "hidden"}
                      />
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="w-4 h-4 bg-green-500 rounded-full z-10 border-4 border-green-950 shadow-[0_0_15px_rgba(34,197,94,0.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        variants={dotVariants}
                        custom={index}
                        initial="hidden"
                        animate={isDesktopInView ? "visible" : "hidden"}
                      />
                      <motion.div
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate={isDesktopInView ? "visible" : "hidden"}
                        className="mt-2 absolute top-1/2 pt-6"
                      >
                        <EducationCard item={item} />
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ─── MOBILE TIMELINE (Vertical) ─── */}
          {/* We use a separate Ref here to trigger the vertical animation */}
          <div ref={mobileRef} className="md:hidden relative pl-4 pb-10">
            {/* 1. Static Gray Line (Background) */}
            <div className="absolute left-4 top-2 bottom-0 w-1 bg-gray-700 rounded-full" />

            {/* 2. Animated Green Line (Foreground) */}
            <motion.div
              className="absolute left-4 top-2 w-1 bg-green-500 rounded-full origin-top"
              initial={{ scaleY: 0 }}
              animate={isMobileInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{ height: "100%" }}
            />

            <div className="flex flex-col gap-10 pt-2">
              {educationData.map((item, index) => (
                <div key={item.id} className="relative pl-12">
                  {/* Dot: aligned to center of line (Line is at left-4 i.e., 1rem/16px. Dot is w-4/16px. So left-2 centers it) */}
                  <motion.div
                    className="absolute left-2 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-green-950 z-10"
                    initial={{ scale: 0 }}
                    animate={isMobileInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.8 + 0.2, // Calculating delay based on line speed
                      duration: 0.3,
                      type: "spring",
                    }}
                  />

                  {/* Card: appears after dot */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isMobileInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: index * 0.8 + 0.4, // Slightly after dot
                      duration: 0.5,
                    }}
                  >
                    <EducationCard item={item} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;
