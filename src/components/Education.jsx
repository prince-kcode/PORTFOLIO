import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2019–2020",
    title: "10th — CBSE",
    detail: "Secondary education with emphasis on science and mathematics.",
  },
  {
    year: "2021–2022",
    title: "12th — Bihar Board (Science)",
    detail: "Science stream; foundation for engineering entrance and quantitative work.",
  },
  {
    year: "2023 — Present",
    title: "B.Tech — Presidency University, Bengaluru",
    detail: "CSE (AI & ML), 4th semester. Coursework and projects spanning ML, software systems, and web engineering.",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:text-left"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            education
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Timeline
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            10th → 12th → B.Tech (AI &amp; ML).
          </p>
        </motion.div>

        <div className="space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-5 sm:gap-8"
            >
              <div className="flex flex-col items-center">
                <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-white bg-slate-900 shadow-sm dark:border-slate-950 dark:bg-sky-500" />
                {i < milestones.length - 1 ? (
                  <div className="mt-2 w-px min-h-[4.5rem] bg-slate-200 dark:bg-slate-700" />
                ) : null}
              </div>
              <div className="pb-12 last:pb-0">
                <p className="font-mono text-sm text-sky-600 dark:text-sky-400">{m.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {m.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
