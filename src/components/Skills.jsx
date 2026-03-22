import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", hint: "Structure & semantics" },
  { name: "CSS", hint: "Layout & responsive UI" },
  { name: "JavaScript", hint: "ES6+ & DOM" },
  { name: "React", hint: "Components & hooks" },
  { name: "GitHub", hint: "Workflow & collaboration" },
  { name: "Basic Backend", hint: "Node · Express · APIs" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-[var(--nav-h)] border-y border-slate-200/80 bg-slate-50/80 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:text-left"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            A focused toolkit for building full-stack prototypes and shipping incremental improvements.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/50"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{skill.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{skill.hint}</p>
              <div className="mt-4 h-1 w-10 rounded-full bg-slate-900 transition-all group-hover:w-16 dark:bg-sky-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
