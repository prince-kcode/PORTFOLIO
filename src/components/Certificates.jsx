import React from "react";

const certificates = [
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON · Tata Consultancy Services",
    date: "Oct 18 – Nov 1, 2025",
    certId: "240640-29210179-1016",
    skills: [
      "Communication Skills",
      "Presentation Skill",
      "Soft Skills",
      "Resume Writing",
      "Interview Skills",
      "Business Etiquette",
      "IT Foundational Skills",
      "Overview of AI",
    ],
    color: "from-blue-500 to-blue-700",
    bgColor: "from-blue-50 to-sky-50",
    accentText: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "GenAI Job Simulation",
    issuer: "BCG X · Forage",
    date: "December 1, 2025",
    certId: "wuSCy8Z8irdFTqrZy",
    skills: [
      "Data Extraction & Analysis",
      "AI-Powered Financial Chatbot",
    ],
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-50 to-green-50",
    accentText: "text-emerald-600",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Certificates
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert, idx) => (
            <article
              key={idx}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Header band */}
              <div className={`bg-gradient-to-r ${cert.color} px-6 py-5 text-white`}>
                <p className="text-xs font-medium uppercase tracking-widest opacity-80">
                  Certificate of Achievement
                </p>
                <h3 className="mt-1 text-lg font-bold leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className={`text-sm font-semibold ${cert.accentText} mb-1`}>
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 mb-4">
                  Completed: {cert.date} · Cert ID: {cert.certId}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${cert.badgeColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
