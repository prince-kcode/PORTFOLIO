import React from "react";

const certificates = [
  {
    title: "GenAI Job Simulation",
    platform: "Forage",
    skills: "AI chatbot, data analysis",
  },
  {
    title: "TCS iON Career Edge \u2013 Young Professional",
    platform: "TCS iON",
    skills: "Communication, AI basics, IT fundamentals",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
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
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-40 w-full bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center border-b border-slate-100">
                <svg className="w-10 h-10 text-indigo-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-indigo-400 font-medium text-xs tracking-widest uppercase">Certificate</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-indigo-500 mb-4">
                  {cert.platform}
                </p>
                <div className="text-sm leading-relaxed text-slate-500">
                  <strong className="text-slate-700">Skills: </strong>
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
