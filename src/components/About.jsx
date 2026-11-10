import React from "react";
import { Brain, Database, Radio, Sparkles, Terminal } from "lucide-react";
import TiltCard from "./ui/TiltCard";

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
    <section id="about" className="scroll-mt-[var(--nav-h)] py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent via-white/80 to-transparent">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-9 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm mb-3">
            <Terminal className="h-3.5 w-3.5 text-indigo-600" />
            About The Engineer
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Architecting <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Intelligent Systems</span>
          </h2>
          <p className="mx-auto mt-3.5 sm:mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-lg">
            I am an Artificial Intelligence &amp; Machine Learning Engineering student at <strong>Presidency University, Bengaluru (2024&ndash;2028)</strong>. I specialize in designing and deploying end-to-end intelligent systems &mdash; from raw data extraction and neural modeling to real-time IoT diagnostic telemetry.
          </p>
          <p className="mx-auto mt-2.5 sm:mt-3 max-w-3xl text-xs sm:text-base leading-relaxed text-slate-500">
            As Team Leader of <strong>Team NeuraForge</strong> (Project <strong>ANUPALAN</strong> &ndash; AI Compliance Command Centre for Coal India Limited, Smart India Hackathon 2026 SIH26024), I led a 6-member team engineering RAG search engines, XGBoost risk forecasting, and YOLOv8 image triage with tamper-evident audit logs.
          </p>
        </div>

        {/* 4 Pillars Grid with 3D Tilt Cards */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={8}
                glare={true}
                className={`group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl ${pillar.glow}`}
              >
                <div className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradient} text-white shadow-md transition-transform group-hover:scale-110 mb-3.5 sm:mb-4`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {pillar.desc}
                </p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
