"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-left mx-auto w-[58.5%] max-w-[1140px] pt-[57px]">
      <motion.h1
        className="text-4xl md:text-5xl font-bold py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi!
      </motion.h1>
      <motion.h2
        className="text-4xl md:text-5xl py-2 font-bold mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I’m <span className="text-gray-400">Poorva</span>
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl pt-5 pb-10 mt-4 text-gray-400 w-4/6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I’m a front-end developer dedicated to designing seamless, accessible,
        and engaging digital experiences that prioritize simplicity and
        usability.
      </motion.p>
      <motion.button
        className="rounded-3xl border-2 border-gray-400 px-4 py-2 mt-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Try the fun side {"-> "}
      </motion.button>
    </section>
  );
};

export default Hero;
