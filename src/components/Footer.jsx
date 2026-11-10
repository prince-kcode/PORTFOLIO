import React from "react";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

const GITHUB_URL = "https://github.com/prince-kcode";
const LINKEDIN_URL = "https://www.linkedin.com/in/prince-kumar-00863b336";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-8 sm:py-12 text-sm text-slate-500 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="font-bold text-slate-800 text-sm">
              Prince Kumar &bull; AI &amp; ML Developer
            </span>
          </div>

          {/* Quick Nav Links for Crawlers & Users */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-xs font-medium text-slate-600">
            <a href="#home" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">Home</a>
            <a href="#about" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">About</a>
            <a href="#skills" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">Skills</a>
            <a href="#projects" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">Projects</a>
            <a href="#education" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">Education</a>
            <a href="#certificates" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">Certificates</a>
            <a href="#resume" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">Resume</a>
            <a href="#contact" className="transition hover:text-indigo-600 active:text-indigo-700 py-1 px-1.5">Contact</a>
          </nav>

          {/* Socials & Contact */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prince Kumar GitHub Profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-2xs transition hover:border-indigo-400 hover:text-indigo-600 active:scale-95"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prince Kumar LinkedIn Profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-2xs transition hover:border-indigo-400 hover:text-indigo-600 active:scale-95"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:princek8320@gmail.com"
              aria-label="Email Prince Kumar"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-2xs transition hover:border-indigo-400 hover:text-indigo-600 active:scale-95"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-slate-100 pt-5 sm:pt-6 text-center text-[11px] sm:text-xs text-slate-400">
          <p>
            &copy; {currentYear} Prince Kumar &bull; Presidency University, Bengaluru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
