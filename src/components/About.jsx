import React from "react";
import { Brain, Cpu, Database, Radio, Sparkles, Terminal } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Deep Learning & Neural Networks",
    gradient: "from-purple-600 to-indigo-600",
    glow: "hover:border-purple-300",
    desc: "Architecting convolutional and feedforward neural models, loss optimization, and feature representation for predictive tasks.",
  },
  {
    icon: Sparkles,
    title: "Generative AI & LLM Solutions",
    gradient: "from-pink-500 to-rose-600",
    glow: "hover:border-pink-300",
    desc: "Building conversational chatbots, structured prompt engineering, and intelligent financial NLP agents (BCG X & Tata simulations).",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    gradient: "from-cyan-500 to-blue-600",
    glow: "hover:border-cyan-300",
    desc: "Rigorous exploratory data analysis (EDA), statistical risk profiling, relational database normalization, and SQL optimization.",
  },
  {
    icon: Radio,
    title: "IoT & Edge Intelligence",
    gradient: "from-emerald-500 to-teal-600",
    glow: "hover:border-emerald-300",
    desc: "Real-time telemetry ingestion, hardware sensor streaming, and predictive healthcare diagnostic alerts (Virtual Doctor project).",
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-gradient-to-b from-transparent via-white/80 to-transparent">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm mb-3">
            <Terminal className="h-3.5 w-3.5 text-indigo-600" />
            About The Engineer
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Architecting <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Intelligent Systems</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            I am an Artificial Intelligence &amp; Machine Learning Engineering student at <strong>Presidency University, Bengaluru (2024&ndash;2028)</strong>. I specialize in designing and deploying end-to-end intelligent systems &mdash; from raw data extraction and neural modeling to real-time IoT diagnostic telemetry.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
            As Team Leader of <strong>NEURAFORGE</strong> (Top 150 Nationwide at Smart India Hackathon 2026), I lead cross-functional engineering teams to solve complex real-world challenges through data-driven AI engineering, algorithmic clarity, and robust full-stack deployment.
          </p>
        </div>

        {/* 4 Pillars Grid with Mixed Colors */}
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pillar.glow}`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradient} text-white shadow-md transition-transform group-hover:scale-110 mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
