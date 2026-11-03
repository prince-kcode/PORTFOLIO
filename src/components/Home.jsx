import React from "react";
import { Download, Brain, ArrowRight, Mail, Sparkles, Orbit, Cpu } from "lucide-react";
import profileImg from "../assets/profile.jpg";
import HeroScene3D from "./3d/HeroScene3D";

const Home = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Prince_Kumar_Resume.pdf`;

  const aiPills = [
    { label: "Deep Learning & Neural Nets", color: "border-purple-200 bg-purple-50/80 text-purple-700" },
    { label: "Generative AI & LLMs", color: "border-pink-200 bg-pink-50/80 text-pink-700" },
    { label: "RAG & Vector Search (pgvector)", color: "border-cyan-200 bg-cyan-50/80 text-cyan-800 font-semibold" },
    { label: "IoT Telemetry & Edge AI", color: "border-emerald-200 bg-emerald-50/80 text-emerald-800" },
    { label: "SIH Team Leader · ANUPALAN (SIH26024)", color: "border-amber-200 bg-amber-50/80 text-amber-800 font-bold" },
  ];

  const statBadges = [
    { value: "SIH 2026", label: "Team NeuraForge Leader", gradient: "from-amber-500 to-orange-600" },
    { value: "8+", label: "Verified Certifications", gradient: "from-purple-600 to-indigo-600" },
    { value: "5th Sem", label: "Presidency University", gradient: "from-cyan-600 to-blue-600" },
    { value: "AI & ML", label: "Engineering Focus", gradient: "from-emerald-500 to-teal-600" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[min(100vh,1000px)] flex-col justify-center overflow-hidden px-5 pt-[calc(var(--nav-h)+24px)] pb-16 sm:px-6 lg:px-8"
    >
      {/* Mixed Color Ambient Glow Orbs in Background */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-300/30 via-purple-300/25 to-pink-300/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 -z-10 h-80 w-80 rounded-full bg-emerald-200/25 blur-3xl" />

      <div className="mx-auto max-w-7xl w-full">
        {/* Main Grid: Left Column Text & CTAs / Right Column 3D Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Content & CTAs) */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            
            {/* AI & ML Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md mb-4 transition hover:scale-105">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <Brain className="h-3.5 w-3.5 text-purple-600" />
              <span>AI &amp; ML Engineer &bull; Presidency University (2024&ndash;2028)</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Prince Kumar
            </h1>

            {/* Mixed Gradient Subheading */}
            <p className="mt-3 text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-2xl lg:text-3xl">
              Artificial Intelligence &amp; Machine Learning Engineer
            </p>

            {/* Value Proposition Description */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg mx-auto lg:mx-0">
              Team Leader of <strong className="text-slate-800 font-semibold">Team NeuraForge</strong> (Project <strong>ANUPALAN</strong> – AI Compliance Command Centre for Coal India Limited, Smart India Hackathon 2026 SIH26024). Architecting RAG engines, XGBoost risk models, computer vision triage, and real-time edge telemetry.
            </p>

            {/* AI & Tech Pills */}
            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2">
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
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
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
                className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            {/* Mixed-Color Metrics / Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
              {statBadges.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className={`text-xl font-extrabold sm:text-2xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (Interactive 3D WebGL Canvas + Profile Hologram) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* 3D WebGL Scene */}
              <div className="absolute inset-0 z-0">
                <HeroScene3D />
              </div>

              {/* Central Floating Profile Hologram Card */}
              <div className="relative z-10 pointer-events-none flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
                  <div className="relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-4 border-white shadow-2xl ring-2 ring-indigo-300">
                    <img
                      src={profileImg}
                      alt="Prince Kumar - AI and ML Developer and Web Developer from Presidency University"
                      className="h-full w-full object-cover object-top"
                      width={144}
                      height={144}
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-indigo-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-indigo-700 shadow-md backdrop-blur-md">
                  <Cpu className="h-3 w-3 text-indigo-600 animate-spin" style={{ animationDuration: "8s" }} />
                  <span>AI &bull; ML &bull; IoT</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
