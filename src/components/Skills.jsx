import React from "react";
import { Brain, Database, Cpu, Layers, Activity } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const skillCategories = [
  {
    title: "Artificial Intelligence & Deep Learning",
    badge: "Core Specialization",
    icon: Brain,
    gradient: "from-purple-600 via-indigo-600 to-pink-600",
    glow: "hover:border-purple-300",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    description: "Designing neural architectures, generative models, and intelligent predictive algorithms.",
    skills: [
      "Neural Networks & CNNs",
      "Generative AI & LLMs",
      "Prompt Engineering",
      "Computer Vision & OpenCV",
      "Model Training & Evaluation",
      "Transfer Learning & Embeddings",
    ],
  },
  {
    title: "Data Science & ML Engineering",
    badge: "Data Pipelines",
    icon: Database,
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    glow: "hover:border-emerald-300",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description: "End-to-end data pipelines, exploratory analysis, risk profiling, and database schemas.",
    skills: [
      "Python (NumPy, Pandas)",
      "Scikit-Learn Modeling",
      "Exploratory Data Analysis (EDA)",
      "Risk Profiling & Delinquency",
      "SQL & Relational Databases",
      "Database Schema Design",
    ],
  },
  {
    title: "Full-Stack ML Systems & UI",
    badge: "Interactive Systems",
    icon: Layers,
    gradient: "from-blue-600 via-indigo-600 to-sky-600",
    glow: "hover:border-blue-300",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    description: "Connecting machine learning models to intuitive, lightning-fast web applications.",
    skills: [
      "React.js & Component Design",
      "Three.js & 3D WebGL",
      "Tailwind CSS & Responsive UI",
      "JavaScript (ES6+) & DOM",
      "Node.js & Express APIs",
      "Vite & Modern Toolchains",
    ],
  },
  {
    title: "Edge AI, IoT & MLOps Tooling",
    badge: "Hardware & DevOps",
    icon: Activity,
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    glow: "hover:border-amber-300",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    description: "Deploying intelligent telemetry to physical IoT sensors with automated CI/CD pipelines.",
    skills: [
      "IoT Hardware Telemetry",
      "Real-time Sensor Streaming",
      "Git & GitHub Version Control",
      "GitHub Actions CI/CD",
      "Linux Shell & Automation",
      "Web3Forms Integration",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-[var(--nav-h)] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-9 sm:mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 shadow-sm mb-3">
            <Cpu className="h-3.5 w-3.5 text-teal-600" />
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            AI &amp; ML <span className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Engineering Stack</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-600 max-w-2xl text-sm sm:text-lg">
            Core competencies organized across Deep Learning, Data Analytics, Full-Stack ML Serving, and Hardware IoT Telemetry.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={8}
                glare={true}
                className={`group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-2xl ${cat.glow}`}
              >
                {/* Header with Mixed Gradient */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                  <span className={`self-start sm:self-center shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-4 sm:mb-5">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50/80 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
