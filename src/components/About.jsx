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
        
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-left sm:text-center">
          <p className="text-lg leading-relaxed text-slate-700 sm:text-xl font-normal">
            I am a student at Presidency University, Bengaluru, with a strong focus on Machine Learning, Artificial Intelligence, and Database Management Systems (DBMS). Beyond building applications, I am passionate about bringing the tech community together.
          </p>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Whether I'm developing ML tools, exploring cutting-edge AI technologies, or serving in leadership roles for major campus hackathons, I love turning complex problems into collaborative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
