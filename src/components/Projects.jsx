import React from "react";
import { Github, ExternalLink, Trophy } from "lucide-react";

const projects = [
  {
    title: "Smart India Hackathon 2026 – Team NEURAFORGE",
    role: "Team Leader",
    roleBadge: "👑 Team Leader · Top 150 Nationwide",
    roleBadgeColor: "bg-amber-100 text-amber-900 border-amber-300 font-bold",
    description: "Led Team NEURAFORGE as Team Leader to the Top 150 Teams nationwide at Smart India Hackathon 2026 (Internal, organized by Presidency Makerspace & AICTE). Directed system architecture and prototype engineering for real-world technology challenges.",
    tags: ["Team Leader", "Hackathon", "AI & IoT", "Innovation", "System Architecture"],
    github: "https://github.com/shreshav2404-code/SIH-2026",
  },
  {
    title: "Interactive Portfolio Web Application",
    role: "Developer & Designer",
    roleBadge: "Live Production App",
    roleBadgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold",
    description: "Ultra-fast, responsive web application showcasing engineering projects, academic credentials, verified certificates, and Web3Forms contact integration with modern React, Vite, and Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind CSS", "Lucide", "GitHub Pages"],
    github: "https://github.com/prince-kcode/PORTFOLIO",
    demo: "https://prince-kcode.github.io/PORTFOLIO/",
  },
  {
    title: "Virtual Doctor with IoT",
    role: "AI & IoT Developer",
    description: "AI-powered health monitoring prototype using IoT sensors for real-time vitals telemetry, patient monitoring, and automated baseline health feedback.",
    tags: ["IoT", "Python", "Sensors", "Web Dashboard"],
  },
  {
    title: "Presidency University Web Portal Clone",
    role: "Frontend Developer",
    description: "Responsive institutional web portal clone focusing on accessible layout, interactive navigation, and pixel-accurate design.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-white/60">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Featured engineering work spanning hackathon team leadership, IoT telemetry, and modern web applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                  {project.roleBadge && (
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs shadow-2xs ${project.roleBadgeColor}`}>
                      {project.roleBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2.5">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                {project.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${
                          tag === "Team Leader"
                            ? "bg-amber-100 text-amber-800 font-bold border border-amber-200"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Links */}
                {(project.github || project.demo) && (
                  <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-100">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-300"
                        title="View source code on GitHub"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-1.5 text-xs font-semibold !text-white shadow-sm transition hover:shadow-md hover:from-indigo-700 hover:to-purple-700"
                        style={{ color: "#ffffff" }}
                        title="Open live project"
                      >
                        <ExternalLink className="h-3.5 w-3.5" style={{ color: "#ffffff" }} />
                        <span style={{ color: "#ffffff" }}>Live Portfolio</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
