import React from "react";

const projects = [
  {
    title: "Virtual Doctor with IoT",
    description: "AI-powered health monitoring system using IoT sensors for real-time diagnosis support.",
  },
  {
    title: "Presidency University Clone Project",
    description: "Interactive system developed as part of university work (UI/logic-based project).",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-white/60">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-500">
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
