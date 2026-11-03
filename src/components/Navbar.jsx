import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = ["home", "about", "skills", "projects", "education", "certificates", "contact"];

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Certificates", href: "#certificates", id: "certificates" },
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
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll on mobile when menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 py-3 shadow-lg shadow-indigo-500/5 backdrop-blur-xl border-b border-slate-200/60"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        {/* Desktop Left Spacer (Balances layout for centered nav) */}
        <div className="hidden lg:flex w-44 items-center">
          {/* No name on top left */}
        </div>

        {/* Desktop Nav Links Pill Container (Centered & Clean) */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                active === link.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 !text-white shadow-md shadow-indigo-400/30 scale-105"
                  : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              }`}
              style={active === link.id ? { color: "#ffffff" } : undefined}
              onClick={(e) => {
                if (link.href === "#home") scrollToTop(e);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA: Resume Button & Socials */}
        <div className="hidden items-center justify-end gap-2.5 lg:flex w-44">
          <a
            href={resumeUrl}
            download="Prince_Kumar_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-1.5 text-xs font-semibold !text-white shadow-sm shadow-indigo-400/25 transition-all hover:shadow-md hover:scale-105"
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
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600 hover:scale-110 shadow-2xs"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600 hover:scale-110 shadow-2xs"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Header: Clean layout with Resume Button, Socials & Menu Toggle */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Prince_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xs font-semibold !text-white shadow-sm"
              style={{ color: "#ffffff" }}
            >
              <Download className="h-3 w-3" style={{ color: "#ffffff" }} />
              <span style={{ color: "#ffffff" }}>Resume</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-2xs"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-2xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-2xs"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.href === "#home") scrollToTop(e);
                }}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  active === link.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 !text-white shadow-md shadow-indigo-300/30"
                    : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                }`}
                style={active === link.id ? { color: "#ffffff" } : undefined}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 border-t border-slate-100 pt-3">
              <a
                href={resumeUrl}
                download="Prince_Kumar_Resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-2.5 text-sm font-semibold !text-white shadow-md"
                style={{ color: "#ffffff" }}
              >
                <Download className="h-4 w-4" style={{ color: "#ffffff" }} /> Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
