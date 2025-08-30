import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolioImg from "../images/portfolio.png";
import classTrackerImg from "../images/classTracker.png";
import passGenImg from "../images/passGen.png";
import shpSphereImg from "../images/shpsphere.png";
import omTechImg from "../images/omtech.PNG";

const projects = [
  {
    title: "OM Tech Solutions – Company Website",
    description:
      "A fully responsive and dynamic company website built using React.js and Tailwind CSS. It showcases services like digital marketing, SEO, app and web development with sleek UI and booking features.",
    link: "https://tarun0009.github.io/omconsulting/#/",
    image: omTechImg,
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React.js and Tailwind CSS to showcase my skills and projects.",
    link: "https://tarun0009.github.io/myportfolio/",
    image: portfolioImg,
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "Class Tracker",
    description:
      "A system for managing student attendance, enabling institutions to efficiently track attendance while providing a user-friendly interface.",
    link: "https://tarun0009.github.io/ClassTracker/",
    image: classTrackerImg,
    tech: "React, Node.js",
  },
  {
    title: "Password Generator",
    description:
      "A responsive web app that generates secure passwords with customizable options. Includes copy-to-clipboard functionality.",
    link: "https://tarun0009.github.io/Password-Generator/",
    image: passGenImg,
    tech: "JavaScript, HTML, CSS",
  },
  {
    title: "ShopSphere - E-commerce Website",
    description:
      "A modern and responsive e-commerce platform built with React.js and Tailwind CSS, providing a seamless shopping experience.",
    link: "https://tarun0009.github.io/shopsphere/",
    image: shpSphereImg,
    tech: "React.js, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-12 bg-[#0c0c0c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            A selection of my recent web and mobile development work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative border border-white/10 rounded-xl p-3 bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.06)] hover:shadow-blue-500/10 hover:scale-[1.02] transition-transform transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ImageWithSkeleton src={project.image} alt={project.title} />

              <div className="mt-3">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.split(", ").map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3">
                  <a
                    href={project.link}
                    className="inline-block bg-blue-600 text-white px-4 py-1.5 text-xs sm:text-sm rounded-md hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full aspect-video relative bg-gray-700 rounded-lg overflow-hidden">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-600" />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default Projects;