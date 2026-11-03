import React from "react";
import { Download, Sparkles, Brain, Cpu, Database, Trophy, ArrowRight, Mail } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Prince_Kumar_Resume.pdf`;

  const aiPills = [
    { label: "Deep Learning & Neural Nets", color: "border-purple-200 bg-purple-50/80 text-purple-700" },
    { label: "Generative AI & LLMs", color: "border-pink-200 bg-pink-50/80 text-pink-700" },
    { label: "Data Engineering & Analytics", color: "border-cyan-200 bg-cyan-50/80 text-cyan-800" },
    { label: "IoT Telemetry & Edge AI", color: "border-emerald-200 bg-emerald-50/80 text-emerald-800" },
    { label: "SIH Team Leader · Top 150", color: "border-amber-200 bg-amber-50/80 text-amber-800 font-bold" },
  ];

  const statBadges = [
    { value: "Top 150", label: "SIH 2026 Teams", gradient: "from-amber-500 to-orange-600" },
    { value: "8+", label: "Verified Certifications", gradient: "from-purple-600 to-indigo-600" },
    { value: "5th Sem", label: "Presidency University", gradient: "from-cyan-600 to-blue-600" },
    { value: "AI & ML", label: "Engineering Focus", gradient: "from-emerald-500 to-teal-600" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[min(100vh,950px)] flex-col items-center justify-center overflow-hidden px-5 pt-[calc(var(--nav-h)+20px)] pb-20 text-center sm:px-6"
    >
      {/* Mixed Color Ambient Glow Orbs in Background */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-300/30 via-purple-300/25 to-pink-300/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 -z-10 h-80 w-80 rounded-full bg-emerald-200/25 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        {/* Profile Image with Vibrant Glowing Ring */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-2xl ring-2 ring-indigo-300 sm:h-52 sm:w-52">
              <img
                src={profileImg}
                alt="Prince Kumar"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                width={208}
                height={208}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* AI & ML Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md mb-4">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <Brain className="h-3.5 w-3.5 text-purple-600" />
          <span>AI &amp; ML Engineer &bull; Presidency University, Bengaluru (2024&ndash;2028)</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Prince Kumar
        </h1>

        {/* Mixed Gradient Subheading */}
        <p className="mt-4 text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-2xl lg:text-3xl">
          Artificial Intelligence &amp; Machine Learning Engineer
        </p>

        {/* Value Proposition Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Team Leader of <strong className="text-slate-800 font-semibold">NEURAFORGE</strong> (Smart India Hackathon 2026 Top 150 Nationwide). Building predictive AI models, real-time IoT diagnostic telemetry, and scalable full-stack intelligence systems.
        </p>

        {/* AI & Tech Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {aiPills.map((pill, idx) => (
            <span
              key={idx}
              className={`rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition hover:scale-105 ${pill.color}`}
            >
              {pill.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={resumeUrl}
            download="Prince_Kumar_Resume.pdf"
            className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-3.5 text-sm font-semibold !text-white shadow-lg shadow-indigo-400/30 transition-all hover:shadow-xl hover:shadow-purple-400/40 hover:scale-105"
            style={{ color: "#ffffff" }}
          >
            <Download className="h-4 w-4" style={{ color: "#ffffff" }} />
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full border-2 border-indigo-200 bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-all hover:bg-indigo-50 hover:border-indigo-400 hover:scale-105"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:princek8320@gmail.com"
            className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        {/* Mixed-Color Metrics / Stats Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-3xl mx-auto">
          {statBadges.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className={`text-xl font-extrabold sm:text-2xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
