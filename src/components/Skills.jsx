import React from "react";
import { Layout, Database, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & UI Design",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Responsive layouts, intuitive component design, smooth animations, and clean user experience.",
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI", "DOM & Async"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Server architecture, RESTful API endpoints, relational database design, SQL queries, and normalization.",
    skills: ["Node.js", "Express.js", "Python", "SQL", "Relational Databases", "RESTful APIs", "Schema Design"],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    color: "from-purple-500 to-indigo-500",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Applied machine learning fundamentals, intelligent systems, generative AI prompting, and IoT telemetry.",
    skills: ["ML Foundations", "Neural Networks Basics", "Generative AI", "Prompt Engineering", "IoT Sensor Data"],
  },
  {
    title: "Developer Tools & Workflow",
    icon: Wrench,
    color: "from-amber-500 to-orange-500",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "Modern build tooling, version control, API integrations, and developer environments.",
    skills: ["Git & GitHub", "Vite", "VS Code", "Web3Forms API", "Linux Shell Basics", "GitHub Pages CI/CD"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Expertise
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Core competencies organized across Frontend &amp; UI, Backend &amp; Databases, Artificial Intelligence, and development workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-sm`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{cat.title}</h3>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold mt-0.5 ${cat.badgeColor}`}>
                        Core Domain
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 shadow-2xs hover:bg-white hover:border-slate-300 transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
