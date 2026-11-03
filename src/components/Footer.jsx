import React from "react";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

const GITHUB_URL = "https://github.com/prince-kcode";
const LINKEDIN_URL = "https://www.linkedin.com/in/prince-kumar-00863b336";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-12 text-sm text-slate-500 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="font-bold text-slate-800">
              Prince Kumar &bull; AI &amp; ML Developer
            </span>
          </div>

          {/* Quick Nav Links for Crawlers & Users */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <a href="#home" className="transition hover:text-indigo-600">Home</a>
            <a href="#about" className="transition hover:text-indigo-600">About</a>
            <a href="#skills" className="transition hover:text-indigo-600">Skills</a>
            <a href="#projects" className="transition hover:text-indigo-600">Projects</a>
            <a href="#education" className="transition hover:text-indigo-600">Education</a>
            <a href="#certificates" className="transition hover:text-indigo-600">Certificates</a>
            <a href="#resume" className="transition hover:text-indigo-600">Resume</a>
            <a href="#contact" className="transition hover:text-indigo-600">Contact</a>
          </nav>

          {/* Socials & Contact */}
          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prince Kumar GitHub Profile"
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prince Kumar LinkedIn Profile"
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:princek8320@gmail.com"
              aria-label="Email Prince Kumar"
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          <p>
            &copy; {currentYear} Prince Kumar &bull; Presidency University, Bengaluru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
