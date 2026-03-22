import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cube3D from "./ui/Cube3D";
import CornerLines from "./ui/CornerLines";
import profileImg from "../assets/profile.jpg";

const slides = [
  {
    id: "intro",
    kicker: "Portfolio",
    title: "Prince Kumar",
    role: "AI & ML Engineer",
    tagline: 'Me with coffee ☕ and my Omen 💻',
    body:
      "B.Tech CSE (AI & ML), 4th semester — Presidency University, Bengaluru. I build clean interfaces and practical ML-aware software.",
  },
  {
    id: "focus",
    kicker: "Focus",
    title: "Engineering with clarity",
    role: "Web · AI · Systems",
    tagline: "Ship small, measure, iterate.",
    body:
      "I enjoy turning complex ideas into maintainable products: thoughtful UI, solid APIs, and experiments that stay lightweight.",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const slide = slides[index];

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  return (
    <section
      id="home"
      className="relative min-h-[min(100vh,920px)] overflow-hidden pt-[var(--nav-h)] pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(15,23,42,0.06)_0%,transparent_55%)] dark:bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.08)_0%,transparent_55%)]"
        aria-hidden
      />
      <CornerLines />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6 lg:gap-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {slide.kicker}
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl">
                {slide.role}
              </p>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                👉 {slide.tagline}
              </p>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">
                {slide.body}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
                <a
                  href="#projects"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-slate-500"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative flex flex-col items-center gap-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/50">
                <Cube3D />
              </div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Lightweight CSS 3D
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="order-3 flex justify-center lg:justify-end"
          >
            <div
              className="relative h-52 w-52 overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_28px_80px_-32px_rgba(15,23,42,0.55)] dark:border-slate-600/80 dark:bg-slate-900 sm:h-60 sm:w-60"
            >
              <img
                src={profileImg}
                alt="Prince Kumar"
                className="h-full w-full object-cover object-top"
                width={480}
                height={480}
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4 pb-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-slate-900 dark:bg-sky-400" : "w-2 bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
