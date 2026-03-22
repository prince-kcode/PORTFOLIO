import React from "react";

const skills = [
  { name: "HTML", hint: "Structure & semantics" },
  { name: "CSS", hint: "Layout & responsive UI" },
  { name: "JavaScript", hint: "ES6+ & DOM" },
  { name: "React", hint: "Components & hooks" },
  { name: "GitHub", hint: "Workflow & collaboration" },
  { name: "Basic Backend", hint: "Node \u00B7 Express \u00B7 APIs" },
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
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-slate-800">{skill.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{skill.hint}</p>
              <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
