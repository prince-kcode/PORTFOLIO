import React, { useState } from "react";
import { Award, Trophy, ExternalLink, Download, Eye, X } from "lucide-react";

const awardsData = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon 2026 – Top 150 Teams",
    category: "Awards",
    issuer: "Presidency University · Ministry of Education & AICTE",
    date: "Sep 16–17, 2026",
    badge: "👑 Team Leader · Top 150 Nationwide",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    file: "097_NEURAFORGE_PRINCE_KUMAR.pdf",
    isPdf: true,
    description: "Certificate of Appreciation awarded to Prince Kumar (Team Leader) and Team NEURAFORGE for outstanding team leadership, innovation, and developing technology-driven solutions to real-world challenges.",
    skills: ["Team Leader", "Smart India Hackathon", "Team NEURAFORGE", "National Hackathon", "System Innovation"],
  },
  {
    id: "google-gemini",
    title: "Fund My Crazy: Build Night Edition",
    category: "Awards",
    issuer: "Google | Google Student Ambassador Program",
    date: "August 23, 2026",
    badge: "Google Hackathon Award",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    gradient: "from-blue-500 via-indigo-600 to-purple-600",
    file: "CertificateofParticipation-2.pdf",
    isPdf: true,
    description: "Actively participated in building solutions utilizing Google Gemini to reimagine everyday urban living and visual conceptualization with Nano Banana.",
    skills: ["Google Gemini", "Generative AI", "Prompt Engineering", "Google Ambassador"],
  },
  {
    id: "adobe-hackathon",
    title: "Adobe University Hackathon",
    category: "Awards",
    issuer: "Adobe · Unstop",
    date: "August 9, 2026",
    badge: "National Hackathon",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    gradient: "from-rose-500 via-pink-600 to-red-600",
    file: "40aecb9e-53fa-4c8c-b997-67204e3b1959.pdf",
    isPdf: true,
    description: "Selected to represent Presidency University (PU), Bangalore in Adobe's competitive university hackathon on the Unstop platform.",
    skills: ["Adobe", "Unstop Hackathon", "Rapid Prototyping", "Competitive Coding"],
  },
];

const certificationsData = [
  {
    id: "infosys-ai",
    title: "Introduction to Artificial Intelligence",
    category: "Certifications",
    issuer: "Infosys | Springboard",
    date: "October 25, 2026",
    certId: "verify.onwingspan.com",
    badge: "Infosys Certified",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    gradient: "from-sky-600 via-blue-600 to-indigo-700",
    file: "infosys cirtificate.pdf",
    isPdf: true,
    description: "Successfully mastered fundamental AI architecture, intelligent agent systems, neural network logic, and enterprise AI methodologies.",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Systems", "Infosys Springboard"],
  },
  {
    id: "guvi-python-db",
    title: "Mastering Databases with Python",
    category: "Certifications",
    issuer: "GUVI | HCL (Google for Education Partner)",
    date: "September 2, 2026",
    certId: "381274grYHF36871XR",
    verifyUrl: "https://www.guvi.in/certificate?id=381274grYHF36871XR",
    badge: "ISO 9001 Certified",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    file: "HCL GUVI Certification - 381274grYHF36871XR.png",
    isPdf: false,
    description: "Hands-on mastery of relational databases, schema normalization, SQL queries, and Python database integration.",
    skills: ["Python", "Relational Databases", "SQL & Schemas", "HCL GUVI"],
  },
  {
    id: "tcs-ion",
    title: "TCS iON Career Edge – Young Professional",
    category: "Certifications",
    issuer: "TCS iON · Tata Consultancy Services",
    date: "Oct 18 – Nov 1, 2025",
    certId: "240640-29210179-1016",
    badge: "TCS Certified",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    gradient: "from-indigo-600 via-purple-600 to-violet-700",
    file: "prince_kumar_5029216.pdf",
    isPdf: true,
    description: "Comprehensive 14-day professional training covering IT foundational skills, Overview of AI, business etiquette, presentation, and interview mastery.",
    skills: ["IT Foundations", "Overview of AI", "Business Etiquette", "Tata Consultancy Services"],
  },
  {
    id: "bcg-genai",
    title: "GenAI Job Simulation",
    category: "Certifications",
    issuer: "BCG X (Boston Consulting Group) · Forage",
    date: "December 1, 2025",
    certId: "wuSCy8Z8irdFTqrZy",
    badge: "BCG X Simulation",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    gradient: "from-teal-600 via-emerald-600 to-green-700",
    file: "gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_68d49ab05232a8.pdf",
    isPdf: true,
    description: "Engineered an AI-driven financial chatbot, conducted corporate financial data extraction, and implemented natural language query pipelines.",
    skills: ["GenAI Chatbot", "Financial NLP", "Data Extraction", "BCG X"],
  },
  {
    id: "tata-genai-analytics",
    title: "GenAI Powered Data Analytics",
    category: "Certifications",
    issuer: "Tata · Forage",
    date: "September 25, 2025",
    certId: "5Df9gPTKHZ7CYLwAm",
    badge: "Tata Simulation",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    gradient: "from-blue-700 via-indigo-700 to-sky-800",
    file: "ai.pdf",
    isPdf: true,
    description: "Applied generative AI models to exploratory data analysis, risk profiling, delinquency forecasting, and automated executive reporting.",
    skills: ["Data Analytics", "AI Risk Profiling", "Delinquency Prediction", "Tata"],
  },
];

const tabs = [
  { id: "awards", label: "Awards & Honors", icon: Trophy, count: awardsData.length },
  { id: "certifications", label: "Certifications", icon: Award, count: certificationsData.length },
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("awards");
  const [activePreview, setActivePreview] = useState(null);

  const displayedItems = activeTab === "awards" ? awardsData : certificationsData;

  const getFileUrl = (fileName) => {
    return `${import.meta.env.BASE_URL}certificates/${encodeURIComponent(fileName)}`;
  };

  return (
    <section id="certificates" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Credentials &amp; Achievements
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            {activeTab === "awards" ? "Honors & Awards" : "Professional Certifications"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            {activeTab === "awards"
              ? "Recognition from national competitions, hackathons, and innovation challenges."
              : "Verified credentials from enterprise programs, specialized AI courses, and database training."}
          </p>

          {/* Separated Tabs (No 'All' option) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 !text-white shadow-md shadow-indigo-300/40 scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-2xs"
                  }`}
                  style={isActive ? { color: "#ffffff" } : undefined}
                >
                  <Icon className="h-4 w-4" style={isActive ? { color: "#ffffff" } : undefined} />
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-2">
          {displayedItems.map((cert) => {
            const fileUrl = getFileUrl(cert.file);
            return (
              <article
                key={cert.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Header Band */}
                <div className={`bg-gradient-to-r ${cert.gradient} px-6 py-4 text-white flex items-center justify-between gap-3`}>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider opacity-90">
                      {cert.issuer}
                    </span>
                    <h3 className="mt-0.5 text-base font-bold leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm bg-white/20 backdrop-blur-sm text-white border border-white/30`}>
                    {cert.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-1">
                      <span>Completed: <strong className="text-slate-600">{cert.date}</strong></span>
                      {cert.certId && (
                        <span className="font-mono text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                          ID: {cert.certId}
                        </span>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 mb-4">
                      {cert.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setActivePreview(cert)}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Preview
                    </button>
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                      title="Open full size in new tab"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={fileUrl}
                      download={cert.file}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                      title="Download Certificate"
                    >
                      <Download className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox Preview */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h3 className="text-base font-bold text-slate-800">{activePreview.title}</h3>
                <p className="text-xs text-slate-500">{activePreview.issuer} &bull; {activePreview.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={getFileUrl(activePreview.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  title="Open in new tab"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href={getFileUrl(activePreview.file)}
                  download={activePreview.file}
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  title="Download file"
                >
                  <Download className="h-5 w-5" />
                </a>
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  aria-label="Close preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto bg-slate-900/5 p-4 flex items-center justify-center min-h-[480px]">
              {activePreview.isPdf ? (
                <iframe
                  src={getFileUrl(activePreview.file)}
                  title={activePreview.title}
                  className="h-[65vh] w-full rounded-lg border border-slate-200 bg-white shadow-sm"
                />
              ) : (
                <img
                  src={getFileUrl(activePreview.file)}
                  alt={activePreview.title}
                  className="max-h-[65vh] max-w-full rounded-lg object-contain shadow-md"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;