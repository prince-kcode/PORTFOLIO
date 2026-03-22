import React from "react";

const certificates = [
  {
    title: "GenAI Job Simulation",
    platform: "Forage",
    skills: "AI chatbot, data analysis",
    imagePlaceholder: "GenAI",
  },
  {
    title: "TCS iON Career Edge \u2013 Young Professional",
    platform: "TCS iON",
    skills: "Communication, AI basics, IT fundamentals",
    imagePlaceholder: "TCS iON",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-[#0f172a]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certificates
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert, idx) => (
            <article
              key={idx}
              className="flex flex-col overflow-hidden rounded-lg border border-slate-800 bg-[#1e293b]/30 shadow-md transition-all hover:border-slate-600 hover:shadow-lg"
            >
              <div className="h-48 w-full bg-[#1e293b] flex flex-col items-center justify-center border-b border-slate-700">
                <svg className="w-12 h-12 text-slate-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-slate-500 font-mono text-xs tracking-widest">{cert.imagePlaceholder} CERTIFICATE PREVIEW</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 mb-4">
                  {cert.platform}
                </p>
                <div className="text-sm leading-relaxed text-slate-300">
                  <strong className="text-white">Skills: </strong>
                  {cert.skills}
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
