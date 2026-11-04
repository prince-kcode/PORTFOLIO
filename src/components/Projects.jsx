import React from "react";
import { Github, ExternalLink, Trophy, Brain, Activity, Sparkles, FolderGit2, Cpu } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const projects = [
  {
    title: "ANUPALAN – AI Compliance & Governance Command Centre",
    role: "Team Leader · Team NeuraForge (6 Members)",
    icon: Trophy,
    category: "Smart India Hackathon 2026 (SIH26024)",
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    glow: "hover:border-amber-300",
    roleBadge: "SIH 2026 · Team NeuraForge Leader",
    roleBadgeColor: "bg-amber-100 text-amber-900 border-amber-300 font-bold",
    description: "Led a 6-member team to design an enterprise AI compliance-monitoring system for Coal India Limited (310 mines, 14 subsidiaries); selected in the internal hackathon and awarded a Certificate of Appreciation by Presidency University. Architected a RAG engine (pgvector, sentence-transformers) converting mining regulations into tracked obligations with owners, deadlines, and evidence types. Integrated an XGBoost risk model and YOLOv8 image triage to flag violations and filter false reports, backed by an offline-first React Native app, FastAPI, PostgreSQL, and tamper-evident geotagged audit logs.",
    tags: ["RAG (pgvector)", "Sentence-Transformers", "XGBoost", "YOLOv8", "FastAPI", "PostgreSQL", "React Native", "SIH26024"],
    github: "https://github.com/shreshav2404-code/SIH-2026",
  },
  {
    title: "AlphaRisk – GenAI Financial Chatbot & Risk Analytics",
    role: "Generative AI & Data Engineer",
    icon: Brain,
    category: "LLM Chatbots & Predictive Risk Modeling",
    gradient: "from-purple-600 via-indigo-600 to-pink-600",
    glow: "hover:border-purple-300",
    roleBadge: "Generative AI & NLP",
    roleBadgeColor: "bg-purple-100 text-purple-900 border-purple-300 font-semibold",
    description: "Engineered an AI-powered conversational chatbot for corporate financial data exploration, combined with exploratory data analysis pipelines to forecast risk delinquency, evaluate solvency ratios, and synthesize automated executive risk reports (BCG X & Tata simulations).",
    tags: ["Generative AI", "LLM Chatbot", "Prompt Engineering", "Risk Delinquency", "EDA & Pandas", "Python"],
    github: "https://github.com/prince-kcode/AlphaRisk_finance_analyze",
  },
  {
    title: "EasyXray – Dual-Model Medical AI Diagnostic System",
    role: "Medical AI & Computer Vision Engineer",
    icon: Activity,
    category: "Healthcare AI & Deep Learning Vision",
    gradient: "from-teal-500 via-cyan-600 to-emerald-600",
    glow: "hover:border-teal-300",
    roleBadge: "Healthcare AI Vision",
    roleBadgeColor: "bg-teal-100 text-teal-900 border-teal-300 font-semibold",
    description: "Designed an accessible healthcare diagnostic platform to provide patients with instant, cost-effective preliminary X-ray screenings prior to clinical consultations. Built an end-to-end dual-model deep learning pipeline: Model 1 operates as a verification gatekeeper to validate whether the input is a genuine medical X-ray, and Model 2 performs deep diagnostic analysis across clinical datasets to detect abnormalities, fractures, and pulmonary conditions.",
    tags: ["Computer Vision", "Dual-Model Architecture", "Medical Imaging", "Deep Learning", "Healthcare AI", "Python"],
    github: "https://github.com/prince-kcode/easy-xray",
  },
  {
    title: "Smart Quality Inspection – Industrial Defect Detection System",
    role: "Computer Vision & Quality Assurance Engineer",
    icon: Cpu,
    category: "Industrial AI & Surface Defect Vision",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    glow: "hover:border-blue-300",
    roleBadge: "Industrial AI Inspection",
    roleBadgeColor: "bg-blue-100 text-blue-900 border-blue-300 font-semibold",
    description: "Engineered an automated industrial computer vision inspection system for manufacturing lines to determine whether products meet commercial sale standards. Trained across 3 diverse industrial defect datasets utilizing a dual-model pipeline: Model 1 recognizes product category and structural boundaries, while Model 2 conducts fine-grained surface defect segmentation to detect scratches, fractures, and surface irregularities for automated quality pass/fail decisions.",
    tags: ["Computer Vision", "Surface Defect Detection", "Dual-Model Pipeline", "Industrial QA", "Multi-Dataset Training", "Python"],
    github: "https://github.com/prince-kcode/smartQualityInsoection-system",
  },
  {
    title: "Virtual Doctor with IoT & Predictive AI",
    role: "AI & IoT Telemetry Engineer",
    icon: Activity,
    category: "Healthcare AI & Edge Telemetry",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    glow: "hover:border-emerald-300",
    roleBadge: "AI Healthcare IoT",
    roleBadgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300 font-semibold",
    description: "Designed an intelligent health monitoring prototype using physical IoT sensors for real-time vital telemetry (pulse, temperature, SPO2), rule-based anomaly detection, and automated baseline health feedback dashboard.",
    tags: ["Python", "IoT Telemetry", "Predictive Analytics", "Sensor Streaming", "Web Dashboard"],
  },
  {
    title: "Interactive 3D WebGL Developer Platform",
    role: "Full-Stack Architect & 3D Designer",
    icon: Sparkles,
    category: "Modern Web Engineering & 3D WebGL",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    glow: "hover:border-cyan-300",
    roleBadge: "Live Production App",
    roleBadgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300 font-semibold",
    description: "High-performance 3D developer platform featuring real-time WebGL Three.js AI neural nexus scene, interactive 3D perspective tilt cards, verified certificate viewer modal, and automated GitHub Actions CI/CD with Vercel deployment.",
    tags: ["React.js", "Three.js", "Tailwind CSS", "GitHub Actions", "Vercel", "Web3Forms"],
    github: "https://github.com/prince-kcode/PORTFOLIO",
    demo: "https://portfolio-princepandit.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-gradient-to-b from-white/70 via-slate-50/50 to-white/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-sm mb-3">
            <FolderGit2 className="h-3.5 w-3.5 text-blue-600" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Selected <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">AI &amp; Software Projects</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
            Featured work spanning national hackathon team leadership, dual-model computer vision, medical diagnostic AI, and Generative AI applications. Hover to explore 3D tilt interaction.
          </p>
        </div>

        {/* Projects Grid with Interactive 3D Tilt Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={10}
                glare={true}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-2xl ${project.glow}`}
              >
                <div>
                  {/* Card Header with Mixed Gradient Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-md transition-transform group-hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs ${project.roleBadgeColor}`}>
                      {project.roleBadge}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Links */}
                {(project.github || project.demo) && (
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
                      >
                        <Github className="h-4 w-4" />
                        Code Repository
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-2 text-xs font-semibold !text-white shadow-sm transition hover:shadow-md hover:scale-105"
                        style={{ color: "#ffffff" }}
                      >
                        <ExternalLink className="h-4 w-4" style={{ color: "#ffffff" }} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
