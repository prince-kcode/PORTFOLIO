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
    <section id="skills" className="scroll-mt-[var(--nav-h)] border-y border-slate-800 bg-[#1e293b]/20 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Expertise
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="rounded-lg border border-slate-800 bg-[#1e293b]/50 p-6 shadow-sm transition-all hover:border-slate-600 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{skill.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
