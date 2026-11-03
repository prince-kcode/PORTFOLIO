import React from "react";
import { CheckCircle, GraduationCap, Brain, Award, Trophy, Sparkles } from "lucide-react";

const Resume = () => {
  const highlights = [
    {
      icon: Brain,
      color: "from-purple-600 via-indigo-600 to-blue-600",
      borderGlow: "hover:border-purple-300",
      accentBg: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10",
      accentText: "text-purple-700",
      title: "AI & ML Specialization",
      items: [
        "Machine Learning & Deep Learning: Neural Networks, CNNs, Model Evaluation, Transfer Learning",
        "Generative AI & LLMs: Prompt Engineering, Conversational Chatbots (BCG X Simulation), NLP pipelines",
        "Data Engineering: Python (NumPy, Pandas, Scikit-Learn), Feature Engineering, SQL & Database Normalization",
        "Edge Intelligence: IoT Telemetry, Sensor Data Ingestion, Automated Diagnostic Alerts",
      ],
    },
    {
      icon: Trophy,
      color: "from-amber-500 via-orange-500 to-rose-500",
      borderGlow: "hover:border-amber-300",
      accentBg: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
      accentText: "text-amber-800",
      title: "Hackathon Leadership & Projects",
      items: [
        "Smart India Hackathon 2026 (Team Leader · Team NEURAFORGE) — Top 150 Teams Nationwide (AICTE / Presidency)",
        "Virtual Doctor with IoT — AI Health vitals monitoring, real-time telemetry & anomaly alerts",
        "GenAI Financial Chatbot & Analytics — Risk profiling & delinquency prediction (Tata & BCG X)",
        "High-Performance Web Architectures — Responsive React, Vite, Node.js, and API integrations",
      ],
    },
    {
      icon: Award,
      color: "from-emerald-500 via-teal-500 to-cyan-600",
      borderGlow: "hover:border-emerald-300",
      accentBg: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10",
      accentText: "text-emerald-800",
      title: "Verified Industry Certifications (8 Total)",
      items: [
        "Infosys Springboard — Introduction to Artificial Intelligence (verify.onwingspan.com)",
        "GUVI | HCL — Mastering Databases with Python (Credential ID: 381274grYHF36871XR)",
        "Google Student Ambassador — Fund My Crazy: Build Night Edition (Gemini AI Challenge)",
        "TCS iON Career Edge — Young Professional (Tata Consultancy Services · ID: 240640-29210179-1016)",
      ],
    },
    {
      icon: GraduationCap,
      color: "from-blue-600 via-cyan-600 to-teal-500",
      borderGlow: "hover:border-blue-300",
      accentBg: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
      accentText: "text-blue-800",
      title: "Academic Background",
      items: [
        "B.Tech CSE (AI & ML) — Presidency University, Bengaluru (5th Semester · 2024–2028)",
        "Senior Secondary (12th Grade Science) — Bihar School Examination Board (BSEB, 2024)",
        "Secondary School Examination (10th Grade) — Central Board of Secondary Education (CBSE, 2022)",
        "Continuous hands-on coursework in Data Structures, Algorithms, DBMS, and Artificial Intelligence",
      ],
    },
  ];

  return (
    <section id="resume" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 shadow-sm mb-3">
            <Sparkles className="h-3.5 w-3.5 text-purple-600" />
            AI &amp; ML Engineer Profile
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Prince Kumar's <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Profile</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            B.Tech CSE (AI &amp; ML) student at Presidency University. A snapshot of specialized domains, applied AI &amp; ML systems, and engineering achievements.
          </p>
        </div>

        {/* Highlights Grid with Mixed Color Theme */}
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className={`group rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${h.borderGlow}`}
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${h.color} text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${h.accentBg} ${h.accentText}`}>
                      Domain Pillar 0{i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-0.5">{h.title}</h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {h.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
