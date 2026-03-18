import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import "./Home.css";

const subtitleFull =
  "B.Tech CSE (AI & ML) Student · Web Developer · AI & ML Enthusiast";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(subtitleFull.slice(0, i + 1));
      i++;
      if (i >= subtitleFull.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden" 
      style={{ background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div
            className="rounded-full overflow-hidden border border-white/10 mx-auto"
            style={{ width: 156, height: 156, boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
          >
            <img
              src="profile.jpg"
              alt="Prince Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-[#a1a1aa] text-xl mb-2">Hello, I’m</p>
          <h1
            className="font-extrabold tracking-tight mb-4 text-gradient"
            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)" }}
          >
            Prince Kumar
          </h1>
          <p className="font-mono text-[#22d3ee] text-sm sm:text-base md:text-lg mb-3 min-h-[1.5em]">
            {typedText}<span className={typingDone ? "hidden" : "cursor-blink"}>|</span>
          </p>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            I’m a B.Tech CSE (AI & ML) student focused on building reliable web applications and
            exploring practical AI/ML. I enjoy turning ideas into clean, user-friendly products and
            improving them through iteration and feedback.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#22d3ee] text-black font-semibold hover:bg-[#22d3ee]/90 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            View Projects
          </a>

          <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
            <a 
              href="https://github.com/prince-kcode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full border border-white/10 hover:border-[#22d3ee]/50 hover:text-[#22d3ee] transition-colors text-[#a1a1aa]"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/prince-kumar-00863b336" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full border border-white/10 hover:border-[#22d3ee]/50 hover:text-[#22d3ee] transition-colors text-[#a1a1aa]"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
