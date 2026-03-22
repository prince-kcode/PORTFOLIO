import React from "react";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-[min(100vh,800px)] flex-col items-center justify-center px-5 pt-[var(--nav-h)] text-center sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-slate-800 shadow-lg sm:h-52 sm:w-52">
            <img
              src={profileImg}
              alt="Prince Kumar"
              className="h-full w-full object-cover object-top"
              width={208}
              height={208}
              loading="eager"
            />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Prince Kumar
        </h1>
        <p className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl">
          Artificial Intelligence & Machine Learning Engineering Student
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Focused on building real-world AI systems and scalable applications.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex min-w-[200px] items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-black shadow-sm transition hover:bg-slate-200"
          >
            View Projects
          </a>
          <a
            href="mailto:princek8320@gmail.com"
            className="inline-flex min-w-[200px] items-center justify-center rounded-md border border-slate-600 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
