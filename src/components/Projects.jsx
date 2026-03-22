import React from "react";

const projects = [
  {
    title: "Virtual Doctor with IoT",
    description: "AI-powered health monitoring system using IoT sensors for real-time diagnosis support.",
  },
  {
    title: "Presidency University Clown Project",
    description: "Interactive system developed as part of university work (UI/logic-based project).",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="flex flex-col rounded-lg border border-slate-800 bg-[#1e293b]/50 p-6 shadow-md transition-all hover:border-slate-600 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
