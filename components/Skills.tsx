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
      <figure>
        <div className="tile tile--center tile--hover tile--4to3">
          <div className="tile__content">
            <img src="/icon-clock.0dea988d.png" alt="clock" />
          </div>
        </div>
        <figcaption>
          How Apple beat Swiss watchmakers at their own game
        </figcaption>
      </figure>
    </section>
  );
};

export default Skills;
