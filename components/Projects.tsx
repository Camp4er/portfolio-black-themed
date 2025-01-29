import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Weather App",
    description:
      "A simple and responsive weather application that provides real-time weather updates for any location.",
    techStack: ["React", "Tailwind CSS", "OpenWeather API"],
    link: "https://example.com/weather-app",
    github: "https://github.com/example/weather-app",
  },
  {
    title: "Shopper",
    description:
      "An e-commerce platform with features like product filtering, a shopping cart, and a secure checkout process.",
    techStack: ["React", "Redux", "Node.js"],
    link: "https://example.com/shopper",
    github: "https://github.com/example/shopper",
  },
  {
    title: "Heat Map",
    description:
      "A data visualization tool that displays heat maps for various metrics, helping users identify patterns easily.",
    techStack: ["D3.js", "JavaScript"],
    link: "https://example.com/heat-map",
    github: "https://github.com/example/heat-map",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and experience with a sleek and modern design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com/portfolio",
    github: "https://github.com/example/portfolio",
  },
  {
    title: "Task Manager",
    description:
      "A productivity app to create, organize, and prioritize tasks with a focus on simplicity and efficiency.",
    techStack: ["React", "Firebase", "Material-UI"],
    link: "https://example.com/task-manager",
    github: "https://github.com/example/task-manager",
  },
  {
    title: "Blog CMS",
    description:
      "A content management system for bloggers with features like post creation, editing, and responsive design.",
    techStack: ["Next.js", "GraphQL", "MongoDB"],
    link: "https://example.com/blog-cms",
    github: "https://github.com/example/blog-cms",
  },
];

const Projects = () => {
  return (
    <section className="text-left mx-auto w-[68.5%] max-w-[1140px] pt-[57px]">
      {/* Header */}
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                Tech Stack: {project.techStack.join(", ")}
              </p>
              {/* Buttons */}
              <div className="flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
