import React from "react";
import { CheckCircle, GraduationCap, Code2, Award, Briefcase } from "lucide-react";

const Resume = () => {
  const highlights = [
    {
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 text-blue-700 border-blue-200",
      title: "Academic Background",
      items: [
        "B.Tech CSE (AI & ML) — Presidency University, Bengaluru (5th Sem | Joined 2024, Passing 2028)",
        "Senior Secondary (12th Science) — Bihar Board / BSEB (Passed 2024)",
        "Secondary School Examination (10th) — CBSE (Passed 2022)",
      ],
    },
    {
      icon: Code2,
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Core Technical Stack",
      items: [
        "Frontend & UI: React.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3, Responsive UI",
        "Backend & Database: Node.js, Express.js, Python, SQL, Relational Databases, REST APIs",
        "AI/ML & Specialization: AI/ML Foundations, Neural Networks, IoT Telemetry, GenAI",
      ],
    },
    {
      icon: Briefcase,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-purple-50 text-purple-700 border-purple-200",
      title: "Key Projects",
      items: [
        "Smart India Hackathon 2026 (Team Leader — Team NEURAFORGE) — Top 150 Teams nationwide",
        "Virtual Doctor with IoT — AI health vitals telemetry & alerts",
        "Interactive Portfolio Web Application — Modern React + Vite showcase",
        "Presidency University Portal Clone — Responsive institutional web UI",
      ],
    },
    {
      icon: Award,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50 text-amber-700 border-amber-200",
      title: "Honors & 8 Verified Certifications",
      items: [
        "Smart India Hackathon 2026 – Top 150 Teams (Team Leader · AICTE / Presidency)",
        "Infosys Springboard – Introduction to Artificial Intelligence",
        "GUVI | HCL – Mastering Databases with Python (ID: 381274grYHF36871XR)",
        "Google Student Ambassador – Gemini Build Night Challenge",
      ],
    },
  ];

  return (
    <section id="resume" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Resume &amp; Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Prince Kumar's Profile &amp; Highlights
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            B.Tech CSE (AI &amp; ML) 5th Semester student at Presidency University (2024&ndash;2028). Explore career highlights, grouped competencies, and verified milestones below.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${h.color} text-white shadow-sm`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{h.title}</h3>
                </div>
                <ul className="space-y-2.5">
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

