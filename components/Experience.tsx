import React, { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "LeopardRuns Innovation & Technology",
    duration: "March 2024 - Present",
    location: "Remote",
    description:
      "Contributed to building scalable web applications, optimized performance, and collaborated on UI/UX improvements.",
    responsibilities: [
      "Developed dynamic, responsive UI components using React.js and Tailwind CSS.",
      "Collaborated with backend teams to integrate RESTful APIs.",
      "Enhanced website performance, reducing load times by 30%.",
    ],
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Jan 2023 - Feb 2024",
    location: "Remote",
    description:
      "Designed and delivered responsive websites for small businesses, ensuring cross-browser compatibility and seamless user experiences.",
    responsibilities: [
      "Built and deployed 10+ custom websites using Next.js and Bootstrap.",
      "Provided SEO optimization and site analytics for better visibility.",
      "Maintained client relationships and provided post-launch support.",
    ],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section className="text-left mx-auto w-[68.5%] max-w-[1140px] pt-[57px]">
      <motion.h1
        className="text-4xl md:text-5xl font-bold py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl pt-5 pb-10 mt-4 text-gray-400 w-4/6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Here's an overview of my professional journey, showcasing the roles I've
        embraced and the contributions I've made.
      </motion.p>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="bg-gray-800 p-6 rounded-3xl shadow-md border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {exp.role}
                </h2>
                <h3 className="text-lg text-gray-400">{exp.company}</h3>
                <p className="text-gray-500">{exp.duration}</p>
                <p className="text-gray-500">{exp.location}</p>
              </div>
              <button
                onClick={() => toggleExpand(exp.id)}
                className="text-sm md:text-base px-4 py-2 rounded-3xl border-2 border-gray-400 text-gray-400 hover:bg-gray-700 hover:text-white transition"
              >
                {expanded === exp.id ? "Show Less" : "More Details"}
              </button>
            </div>
            {expanded === exp.id && (
              <motion.div
                className="mt-4 text-gray-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="text-gray-300">{exp.description}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
