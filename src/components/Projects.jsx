import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "Presidency Univ Clone",
    description: "A responsive recreation of the university landing page with a strong focus on layout and consistency.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/prince-kcode"
  },
  {
    title: "Virtual Doctor with IoT",
    description: "A smart healthcare prototype using IoT for real-time vitals tracking and basic health insights.",
    tags: ["Python", "IoT", "Flask"],
    href: "https://github.com/prince-kcode"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, with a clean layout and modern UI patterns.",
    tags: ["React", "Vite", "CSS"],
    href: "https://github.com/prince-kcode"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-[#22d3ee] text-sm tracking-widest uppercase mb-4 block">
            projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mt-4 leading-relaxed">
            A selection of projects that reflect my current focus and interests.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#121216] border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-6 justify-between md:items-center hover:border-white/20 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#22d3ee] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a1a1aa] mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-[#22d3ee] transition-colors"
                >
                  View on GitHub <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
