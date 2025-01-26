import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="text-left mx-auto w-[58.5%] max-w-[1140px] pt-[57px]">
      <motion.h1
        className="text-4xl md:text-5xl font-bold py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl pt-5 pb-10 mt-4 text-gray-400 w-4/6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Projects showcase the ability to apply knowledge and creativity,
        transforming concepts into functional and engaging real-world
        applications.
      </motion.p>
    </section>
  );
};

export default Projects;
