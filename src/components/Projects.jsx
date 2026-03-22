import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GITHUB_LINK = "https://share.google/Kw9CQ6yJ2597j1PaG";

const projects = [
  {
    title: "University landing clone",
    description:
      "Responsive layout study mirroring institutional branding, navigation patterns, and content hierarchy.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: GITHUB_LINK,
  },
  {
    title: "Health IoT prototype",
    description:
      "Concept project exploring sensor data flows and lightweight dashboards for wellness insights.",
    stack: ["Python", "IoT", "Flask"],
    href: GITHUB_LINK,
  },
  {
    title: "Portfolio website",
    description:
      "This production portfolio — React UI, Express contact API, and deployment-ready structure.",
    stack: ["React", "Vite", "Tailwind", "Node"],
    href: GITHUB_LINK,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:text-left"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Cards summarize scope; follow the link for code and details.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/50"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
              >
                View on GitHub <ExternalLink className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
