"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const skillsData = {
    languagesFrameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "Redux",
    ],
    toolsSoftware: [
      "Git & GitHub",
      "Webpack",
      "Visual Studio Code",
      "Postman",
      "Figma",
      "Node.js",
      "jQuery",
    ],
    softSkills: [
      "Problem-Solving",
      "Communication",
      "Team Collaboration",
      "Adaptability",
      "Time Management",
      "Critical Thinking",
    ],
  };

  return (
    <section className="text-left mx-auto w-[58.5%] max-w-[1140px] pt-[57px]">
      {/* Header */}
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

      {/* Skill Categories */}
      {[
        { title: "Languages & Frameworks", id: "languagesFrameworks" },
        { title: "Tools & Software", id: "toolsSoftware" },
        { title: "Soft Skills", id: "softSkills" },
      ].map((category, index) => (
        <div key={category.id} className="mb-6">
          {/* Category Header */}
          <div className="flex justify-between items-center w-full">
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 * (index + 1), duration: 0.8 }}
            >
              {index + 1}. {category.title}
            </motion.p>
            <motion.button
              onClick={() => toggleSection(category.id)}
              className="rounded-3xl border-2 border-gray-400 px-4 py-2 text-lg text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 * (index + 1), duration: 0.8 }}
            >
              {activeSection === category.id ? "-" : "+"}
            </motion.button>
          </div>

          {/* Skill List */}
          <AnimatePresence>
            {activeSection === category.id && (
              <motion.ul
                className="mt-4 ml-4 text-gray-400 grid grid-cols-2 gap-2"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {skillsData[category.id as keyof typeof skillsData].map(
                  (skill, idx) => (
                    <motion.li
                      key={idx}
                      className="text-lg bg-gray-800 px-4 py-2 rounded-md shadow-md transform hover:scale-105 transition duration-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {skill}
                    </motion.li>
                  )
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default Skills;
