import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="text-left mx-auto w-[58.5%] max-w-[1140px] pt-[57px]">
      <motion.h1
        className="text-4xl md:text-5xl font-bold py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl pt-5 pb-10 mt-4 text-gray-400 w-4/6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Front-end development demands a combination of technical expertise and
        an eye for design to create seamless, responsive, and accessible user
        experiences.
      </motion.p>
      <div className="flex flex-row justify-between items-center w-4/6">
      <motion.p
        className="text-xl md:text-2xl pt-5 pb-5 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        1.  Languages & Frameworks
        </motion.p>
        <motion.button
        className="rounded-3xl border-2 border-gray-400 px-4 py-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        +
      </motion.button>
      </div>
      <div className="flex flex-row justify-between items-center w-4/6">
      <motion.p
        className="text-xl md:text-2xl pt-5 pb-5 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        2.  Tools & Software
        </motion.p>
        <motion.button
        className="rounded-3xl border-2 border-gray-400 px-4 py-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        +
      </motion.button>
      </div>
      <div className="flex flex-row justify-between items-center w-4/6">
      <motion.p
        className="text-xl md:text-2xl pt-5 pb-5 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        3.  Soft Skills
        </motion.p>
        <motion.button
        className="rounded-3xl border-2 border-gray-400 px-4 py-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        +
      </motion.button>
      </div>
    </section>
  );
};

export default Skills;
