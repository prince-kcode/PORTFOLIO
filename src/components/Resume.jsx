import React from "react";
import { CheckCircle, GraduationCap, Brain, Award, Trophy, Sparkles, Download, ExternalLink } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const Resume = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Prince_Kumar_Resume.pdf`;
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
        "Smart India Hackathon 2026 (SIH26024) — Team Leader, Team NeuraForge (6 members): Designed ANUPALAN, an AI compliance-monitoring command centre for Coal India Ltd (310 mines, 14 subsidiaries) using RAG (pgvector), XGBoost, and YOLOv8",
        "AlphaRisk — GenAI financial risk analytics & conversational LLM chatbot with delinquency forecasting pipelines",
        "EasyXray — Dual-model medical imaging pipeline (image verification gatekeeper + deep abnormality classifier) for low-cost patient screening",
        "Smart Quality Inspection — Industrial computer vision platform trained on 3 defect datasets with dual-model surface scratch & defect detection",
        "Virtual Doctor with IoT — AI Health vitals monitoring, real-time telemetry & anomaly alerts",
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
    <section id="resume" className="scroll-mt-[var(--nav-h)] py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-9 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 shadow-sm mb-3">
            <Sparkles className="h-3.5 w-3.5 text-purple-600" />
            AI &amp; ML Engineer Profile
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-800">
            Prince Kumar's <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Profile</span>
          </h2>
          <p className="mx-auto mt-2.5 sm:mt-4 max-w-2xl text-sm sm:text-lg text-slate-600">
            B.Tech CSE (AI &amp; ML) student at Presidency University. A snapshot of specialized domains, applied AI &amp; ML systems, and engineering achievements.
          </p>

          {/* Direct Crawlable Resume PDF Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-2.5 text-xs sm:text-sm font-semibold !text-white shadow-md shadow-indigo-300/30 transition hover:scale-105 active:scale-95"
              style={{ color: "#ffffff" }}
            >
              <ExternalLink className="h-4 w-4" style={{ color: "#ffffff" }} />
              <span style={{ color: "#ffffff" }}>View Official Resume (PDF)</span>
            </a>
            <a
              href={resumeUrl}
              download="Prince_Kumar_Resume.pdf"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50 hover:border-indigo-300 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Highlights Grid with 3D Tilt Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <TiltCard
                key={i}
                maxTilt={8}
                glare={true}
                className={`group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${h.borderGlow}`}
              >
                <div className="flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-5">
                  <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${h.color} text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-110`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${h.accentBg} ${h.accentText}`}>
                      Domain Pillar 0{i + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">{h.title}</h3>
                  </div>
                </div>

                <ul className="space-y-2.5 sm:space-y-3">
                  {h.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <CheckCircle className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
