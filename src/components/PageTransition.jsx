import { motion } from "framer-motion";

const variants = {
  right:  { x: "100vw", opacity: 0 },
  top:    { y: "-100vh", opacity: 0 },
  bottom: { y: "100vh", opacity: 0 },
  center: { x: 0, y: 0, opacity: 1 }
};

export default function PageTransition({ children, direction }) {
  return (
    <motion.div
      initial={variants[direction]}
      animate={variants.center}
      exit={variants[direction]}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
}