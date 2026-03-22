import React from "react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Professional Summary
        </h2>
        
        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
            I am an Artificial Intelligence and Machine Learning Engineering student with a focus on building practical AI solutions and scalable systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
