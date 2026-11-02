import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const milestones = [
  {
    year: "2024 — 2028",
    title: "B.Tech CSE (AI & ML) — Presidency University, Bengaluru",
    detail: "Currently in 5th Semester (Joined 2024, Passing 2028). Coursework and applied engineering projects spanning Artificial Intelligence, Machine Learning, Web Engineering, and Data Systems.",
    current: true,
  },
  {
    year: "Passed 2024",
    title: "12th (Senior Secondary) — Bihar Board (BSEB)",
    detail: "Science Stream (Physics, Chemistry, Mathematics); strong quantitative reasoning, analytical thinking, and engineering foundations.",
    current: false,
  },
  {
    year: "Passed 2022",
    title: "10th (Secondary School Examination) — CBSE",
    detail: "Secondary education completed in 2022 with strong academic emphasis on Science, Mathematics, and Computer foundations.",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-white/60">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Academic Journey
          </h2>
          <p className="mt-3 text-slate-500">
            Solid foundations in Science and Mathematics leading to advanced B.Tech studies in AI &amp; ML.
          </p>
        </motion.div>

        <div className="space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 sm:gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                m.current 
                  ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white" 
                  : "bg-slate-100 text-slate-600"
              }`}>
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    m.current ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-600"
                  }`}>
                    {m.year}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
