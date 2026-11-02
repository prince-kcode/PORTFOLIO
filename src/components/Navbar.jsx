import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = ["home", "about", "skills", "projects", "education", "certificates", "resume", "contact"];

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Certificates", href: "#certificates", id: "certificates" },
  { name: "Resume", href: "#resume", id: "resume" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const GITHUB_URL = "https://github.com/prince-kcode";
const LINKEDIN_URL = "https://www.linkedin.com/in/prince-kumar-00863b336";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const resumeUrl = `${import.meta.env.BASE_URL}Prince_Kumar_Resume.pdf`;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 py-3 shadow-md backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#home"
          onClick={scrollToTop}
          className="text-base font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent lg:hidden"
        >
          Prince Kumar
        </a>

        <nav className="hidden items-center gap-1 lg:flex mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                active === link.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
              onClick={(e) => {
                if (link.href === "#home") scrollToTop(e);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex ml-4">
          <a
            href={resumeUrl}
            download="Prince_Kumar_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 text-xs font-semibold !text-white shadow-sm transition-all hover:shadow-md hover:scale-105"
            style={{ color: "#ffffff" }}
            title="Download Prince Kumar's Resume"
          >
            <Download className="h-3.5 w-3.5" style={{ color: "#ffffff" }} />
            <span style={{ color: "#ffffff" }}>Resume</span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-indigo-600"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-indigo-600"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={resumeUrl}
            download="Prince_Kumar_Resume.pdf"
            className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold !text-white shadow-sm"
            style={{ color: "#ffffff" }}
          >
            <Download className="h-3 w-3" style={{ color: "#ffffff" }} />
            <span style={{ color: "#ffffff" }}>Resume</span>
          </a>
          <button
            type="button"
            className="p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-white shadow-lg lg:hidden relative z-50">
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.href === "#home") scrollToTop(e);
                }}
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                  active === link.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-4">
              <a
                href={resumeUrl}
                download="Prince_Kumar_Resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-sm"
              >
                <Download className="h-4 w-4" /> Download Resume (PDF)
              </a>
              <div className="flex gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-semibold text-slate-600"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-semibold text-slate-600"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
