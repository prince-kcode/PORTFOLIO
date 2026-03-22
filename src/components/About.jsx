import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:text-left"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            about_me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I&apos;m <strong className="text-slate-900 dark:text-white">Prince Kumar</strong>, a{" "}
            <strong className="text-slate-900 dark:text-white">B.Tech CSE (AI &amp; ML)</strong>{" "}
            student in my <strong className="text-slate-900 dark:text-white">4th semester</strong>{" "}
            at <strong className="text-slate-900 dark:text-white">Presidency University, Bengaluru</strong>
            . I focus on building reliable interfaces, experimenting with ML workflows, and writing
            backend code that stays easy to reason about.
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Reach me at{" "}
            <a
              href="mailto:princek8320@gmail.com"
              className="font-semibold text-sky-700 underline decoration-sky-700/30 underline-offset-2 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
            >
              princek8320@gmail.com
            </a>
            .
          </p>

          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-white/80 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/50 text-center">
              <dt className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                College
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                Presidency University
              </dd>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white/80 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/50 text-center">
              <dt className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Degree
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                B.Tech (CSE — AI &amp; ML)
              </dd>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white/80 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/50 text-center">
              <dt className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Semester
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">4th</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
