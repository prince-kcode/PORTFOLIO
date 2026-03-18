import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2f2ccbcf"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=2f2ccbcf"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=9e966bd0";
import { Github, Linkedin, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=23d6c3cb";
import { Navbar } from "/src/components/Navbar.tsx?t=1773755474962";
import { useToast } from "/src/hooks/use-toast.ts";
const skills = [
  { name: "Python", emoji: "🐍" },
  { name: "JavaScript", emoji: "⚡" },
  { name: "HTML & CSS", emoji: "🌐" },
  { name: "React", emoji: "⚛️" },
  { name: "AI & ML", emoji: "🧠" },
  { name: "IoT", emoji: "🔌" },
  { name: "Vite", emoji: "⚡" },
  { name: "Web Dev", emoji: "💻" },
  { name: "GitHub", emoji: "🐙" },
  { name: "Animation", emoji: "🎨" }
];
const projects = [
  {
    title: "Presidency Univ Clone",
    description: "A pixel-perfect recreation of the university landing page.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/prince-kcode"
  },
  {
    title: "Virtual Doctor with IoT",
    description: "A smart healthcare system using IoT for real-time vitals tracking and Suggestion.",
    tags: ["Python", "IoT", "Flask"],
    href: "https://github.com/prince-kcode"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and modern UI/UX principles.",
    tags: ["React", "Vite", "CSS"],
    href: "https://github.com/prince-kcode"
  }
];
const education = [
  {
    degree: "B.Tech — Computer Science (AI & ML)",
    institution: "Presidency University",
    location: "Bengaluru, India",
    period: "2023 – 2027 (Expected)",
    board: "",
    marks: "",
    result: "",
    description: "Specializing in Artificial Intelligence and Machine Learning, with coursework in Data Structures, Neural Networks, IoT, and Web Technologies."
  },
  {
    degree: "12th Standard — Science (PCM + Biology)",
    institution: "Rajkiyakrit Shri Sitaram Rai +2 Vidyalaya, Rajoura",
    location: "Begusarai, Bihar",
    period: "2024",
    board: "Bihar School Examination Board (BSEB), Patna",
    marks: "415 / 500",
    result: "1st Division",
    description: "Physics (81) · Chemistry (89) · Mathematics (95) · English (76) · Hindi (74) · Biology (52)"
  },
  {
    degree: "10th Standard — Secondary School Examination",
    institution: "Vikas Vidyalaya Shikshak Ngr Dumri",
    location: "Begusarai, Bihar",
    period: "2022",
    board: "Central Board of Secondary Education (CBSE)",
    marks: "365 / 500",
    result: "Pass",
    description: "English (69) · Hindi (76) · Mathematics (72) · Science (70) · Social Science (78)"
  }
];
const subtitleFull = "B.Tech CSE (AI & ML) Student | Web Developer | AI Enthusiast";
export default function Home() {
  _s();
  const { toast } = useToast();
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
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });
    const form = e.target;
    form.reset();
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:105:4", "data-component-name": "div", className: "relative bg-[#0a0a0c] min-h-screen text-white selection:bg-primary selection:text-primary-foreground font-sans", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:106:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:108:6", "data-component-name": "main", id: "top", children: [
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:110:8", "data-component-name": "section", className: "relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden", style: { background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)" }, children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:111:10", "data-component-name": "div", className: "max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:112:12",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "mb-8",
            children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:118:14", "data-component-name": "div", className: "w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_rgba(34,211,238,0.3)] mx-auto", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:119:16",
                "data-component-name": "img",
                src: `${import.meta.env.BASE_URL}images/profile.jpg`,
                alt: "Prince Kumar",
                className: "w-full h-full object-cover object-top"
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 119,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
            lineNumber: 112,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:127:12",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 },
            children: [
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:132:14", "data-component-name": "p", className: "text-muted-foreground text-xl mb-2", children: "Hi, I'm" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 132,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:133:14", "data-component-name": "h1", className: "text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-extrabold tracking-tight mb-4 text-gradient", children: "Prince Kumar" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 133,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:136:14", "data-component-name": "p", className: "font-mono text-primary text-sm sm:text-base md:text-lg mb-3 min-h-[1.5em]", children: [
                typedText,
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:137:27", "data-component-name": "span", className: typingDone ? "hidden" : "cursor-blink", children: "|" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 137,
                  columnNumber: 28
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 136,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:139:14", "data-component-name": "p", className: "font-mono text-primary/60 text-sm italic mb-8", children: "— Me, Coffee and My Omen" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 139,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:140:14", "data-component-name": "p", className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed", children: "I am a passionate B.Tech CSE (AI & ML) student interested in Artificial Intelligence, Machine Learning, and Web Development. I enjoy building modern web applications and learning new technologies to solve real-world problems." }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 140,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
            lineNumber: 127,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:145:12",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            className: "flex flex-col sm:flex-row items-center gap-4",
            children: [
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:151:14",
                  "data-component-name": "a",
                  href: "#",
                  className: "w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors",
                  children: "Download Resume"
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 151,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:157:14",
                  "data-component-name": "a",
                  href: "#projects",
                  className: "w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors",
                  children: "View Projects"
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 157,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:164:14", "data-component-name": "div", className: "flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0", children: [
                /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:165:16", "data-component-name": "a", href: "https://github.com/prince-kcode", target: "_blank", rel: "noopener noreferrer", className: "p-3 rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground", children: [
                  /* @__PURE__ */ jsxDEV(Github, { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:166:18", "data-component-name": "Github", className: "w-5 h-5" }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 166,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:167:18", "data-component-name": "span", className: "sr-only", children: "GitHub" }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 167,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 165,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:169:16", "data-component-name": "a", href: "https://www.linkedin.com/in/prince-kumar-00863b336", target: "_blank", rel: "noopener noreferrer", className: "p-3 rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground", children: [
                  /* @__PURE__ */ jsxDEV(Linkedin, { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:170:18", "data-component-name": "Linkedin", className: "w-5 h-5" }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 170,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:171:18", "data-component-name": "span", className: "sr-only", children: "LinkedIn" }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 171,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 169,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 164,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
            lineNumber: 145,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:179:8", "data-component-name": "section", id: "about", className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:180:10", "data-component-name": "div", className: "max-w-4xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:181:12",
          "data-component-name": "motion.div",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:187:14", "data-component-name": "span", className: "font-mono text-primary text-sm tracking-widest uppercase mb-4 block", children: "about_me" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 187,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:188:14", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-8", children: "Who Am I?" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:190:14", "data-component-name": "p", className: "text-muted-foreground text-xl leading-[1.8] mb-12", children: [
              "I am a passionate ",
              /* @__PURE__ */ jsxDEV("strong", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:191:34", "data-component-name": "strong", className: "text-white", children: "B.Tech CSE (AI & ML)" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 191,
                columnNumber: 35
              }, this),
              " student interested in",
              " ",
              /* @__PURE__ */ jsxDEV("strong", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:192:16", "data-component-name": "strong", className: "text-white", children: "Artificial Intelligence, Machine Learning," }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 192,
                columnNumber: 17
              }, this),
              " and",
              " ",
              /* @__PURE__ */ jsxDEV("strong", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:193:16", "data-component-name": "strong", className: "text-white", children: "Web Development" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 193,
                columnNumber: 17
              }, this),
              ". I enjoy building modern web applications and learning new technologies to solve real-world problems."
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 190,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:197:14", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-12", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:198:16", "data-component-name": "div", children: [
                /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:199:18", "data-component-name": "h3", className: "font-mono text-primary text-sm uppercase tracking-widest mb-2", children: "Location" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 199,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:200:18", "data-component-name": "p", className: "text-lg font-medium text-white", children: "Bengaluru, India" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 200,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 198,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:202:16", "data-component-name": "div", children: [
                /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:203:18", "data-component-name": "h3", className: "font-mono text-primary text-sm uppercase tracking-widest mb-2", children: "Degree" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 203,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:204:18", "data-component-name": "p", className: "text-lg font-medium text-white", children: "B.Tech CSE (AI & ML)" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 204,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 202,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:206:16", "data-component-name": "div", children: [
                /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:207:18", "data-component-name": "h3", className: "font-mono text-primary text-sm uppercase tracking-widest mb-2", children: "Status" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 207,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:208:18", "data-component-name": "p", className: "text-lg font-medium text-white", children: "Available for Internships" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 208,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 206,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 197,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
          lineNumber: 181,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:216:8", "data-component-name": "section", id: "skills", className: "py-24 bg-[#121216]/30", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:217:10", "data-component-name": "div", className: "max-w-5xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:218:12",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:225:14", "data-component-name": "span", className: "font-mono text-primary text-sm tracking-widest uppercase mb-4 block", children: "skills" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 225,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:226:14", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold", children: "What I Know" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 226,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
            lineNumber: 218,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:229:12", "data-component-name": "div", className: "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6", children: skills.map(
          (skill, idx) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:231:16",
              "data-component-name": "motion.div",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: idx * 0.05 },
              className: "bg-[#121216] border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:239:18", "data-component-name": "span", className: "text-4xl", children: skill.emoji }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 239,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:240:18", "data-component-name": "span", className: "font-bold text-white text-lg", children: skill.name }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 240,
                  columnNumber: 19
                }, this)
              ]
            },
            skill.name,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 231,
              columnNumber: 15
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:248:8", "data-component-name": "section", id: "projects", className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:249:10", "data-component-name": "div", className: "max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:250:12",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "mb-16",
            children: [
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:257:14", "data-component-name": "span", className: "font-mono text-primary text-sm tracking-widest uppercase mb-4 block", children: "projects" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 257,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:258:14", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold", children: "What I've Built" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 258,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
            lineNumber: 250,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:261:12", "data-component-name": "div", className: "space-y-6", children: projects.map(
          (project, idx) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:263:16",
              "data-component-name": "motion.div",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: idx * 0.1 },
              className: "group bg-[#121216] border border-white/10 p-8 md:p-10 rounded-[20px] flex flex-col md:flex-row gap-6 justify-between md:items-center hover:border-white/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:271:18", "data-component-name": "div", className: "flex-1", children: [
                  /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:272:20", "data-component-name": "h3", className: "text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors", children: project.title }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 272,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:275:20", "data-component-name": "p", className: "text-muted-foreground mb-6 leading-relaxed", children: project.description }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 275,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:278:20", "data-component-name": "div", className: "flex flex-wrap gap-2", children: project.tags.map(
                    (tag) => /* @__PURE__ */ jsxDEV(
                      "span",
                      {
                        "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:280:24",
                        "data-component-name": "span",
                        className: "font-mono text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20",
                        children: tag
                      },
                      tag,
                      false,
                      {
                        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                        lineNumber: 280,
                        columnNumber: 21
                      },
                      this
                    )
                  ) }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 278,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 271,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:290:18", "data-component-name": "div", className: "mt-4 md:mt-0", children: /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:291:20",
                    "data-component-name": "a",
                    href: project.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors",
                    children: [
                      "View on GitHub ",
                      /* @__PURE__ */ jsxDEV(ArrowRight, { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:297:37", "data-component-name": "ArrowRight", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                        lineNumber: 297,
                        columnNumber: 38
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 291,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 290,
                  columnNumber: 19
                }, this)
              ]
            },
            project.title,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 263,
              columnNumber: 15
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 249,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:307:8", "data-component-name": "section", id: "education", className: "py-24 bg-[#121216]/30", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:308:10", "data-component-name": "div", className: "max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:309:12",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "mb-16",
            children: [
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:316:14", "data-component-name": "span", className: "font-mono text-primary text-sm tracking-widest uppercase mb-4 block", children: "education" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 316,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:317:14", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold", children: "Where I Study" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 317,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
            lineNumber: 309,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:320:12", "data-component-name": "div", className: "relative pl-8 border-l-2 border-primary/30 space-y-10", children: education.map(
          (edu, idx) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:322:16",
              "data-component-name": "motion.div",
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: idx * 0.1 },
              className: "relative",
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:330:18", "data-component-name": "div", className: "absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(34,211,238,0.5)]" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 330,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:331:18", "data-component-name": "div", className: "bg-[#121216] border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-colors", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:332:20", "data-component-name": "div", className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:333:22", "data-component-name": "h3", className: "text-xl font-bold text-white", children: edu.degree }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                      lineNumber: 333,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:334:22", "data-component-name": "span", className: "font-mono text-primary text-sm whitespace-nowrap", children: edu.period }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                      lineNumber: 334,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 332,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:336:20", "data-component-name": "p", className: "text-primary/80 font-medium mb-1", children: edu.institution }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 336,
                    columnNumber: 21
                  }, this),
                  edu.board && /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:337:34", "data-component-name": "p", className: "text-muted-foreground text-xs mb-1", children: edu.board }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 337,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:338:20", "data-component-name": "p", className: "text-muted-foreground text-sm mb-4", children: edu.location }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 338,
                    columnNumber: 21
                  }, this),
                  (edu.marks || edu.result) && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:340:22", "data-component-name": "div", className: "flex flex-wrap gap-4 mb-4", children: [
                    edu.marks && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:342:26", "data-component-name": "div", className: "px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20", children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:343:28", "data-component-name": "span", className: "font-mono text-xs text-primary", children: "Marks: " }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                        lineNumber: 343,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:344:28", "data-component-name": "span", className: "font-mono text-xs text-white font-bold", children: edu.marks }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                        lineNumber: 344,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                      lineNumber: 342,
                      columnNumber: 21
                    }, this),
                    edu.result && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:348:26", "data-component-name": "div", className: "px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20", children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:349:28", "data-component-name": "span", className: "font-mono text-xs text-green-400", children: "Result: " }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                        lineNumber: 349,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:350:28", "data-component-name": "span", className: "font-mono text-xs text-white font-bold", children: edu.result }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                        lineNumber: 350,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                      lineNumber: 348,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 340,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:355:20", "data-component-name": "p", className: "text-muted-foreground leading-relaxed", children: edu.description }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 355,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 331,
                  columnNumber: 19
                }, this)
              ]
            },
            idx,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 322,
              columnNumber: 15
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 308,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 307,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:364:8", "data-component-name": "section", id: "contact", className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:365:10", "data-component-name": "div", className: "max-w-5xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:366:12",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "mb-16",
            children: [
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:373:14", "data-component-name": "span", className: "font-mono text-primary text-sm tracking-widest uppercase mb-4 block", children: "contact" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 373,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:374:14", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold", children: "Get In Touch" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                lineNumber: 374,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
            lineNumber: 366,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:377:12", "data-component-name": "div", className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:378:14",
              "data-component-name": "motion.div",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:384:16", "data-component-name": "h3", className: "text-3xl font-bold mb-4", children: "Interested in working together?" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 384,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:385:16", "data-component-name": "p", className: "text-muted-foreground text-lg mb-8", children: "Always open to new projects, opportunities, or just a friendly chat about AI and web tech." }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 385,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:388:16", "data-component-name": "a", href: "mailto:princek8320@gmail.com", className: "text-2xl sm:text-3xl md:text-4xl font-bold text-primary hover:opacity-80 transition-opacity break-all", children: "princek8320@gmail.com" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                  lineNumber: 388,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 378,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:393:14",
              "data-component-name": "motion.div",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.2 },
              className: "flex flex-col sm:flex-row gap-4 lg:justify-end items-start",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:400:16",
                    "data-component-name": "a",
                    href: "https://github.com/prince-kcode",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-[#0a0a0c] transition-all",
                    children: "GitHub"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 400,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:408:16",
                    "data-component-name": "a",
                    href: "https://www.linkedin.com/in/prince-kumar-00863b336",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-[#0a0a0c] transition-all",
                    children: "LinkedIn"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
                    lineNumber: 408,
                    columnNumber: 17
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
              lineNumber: 393,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
          lineNumber: 377,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 365,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
        lineNumber: 364,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:423:6", "data-component-name": "footer", className: "py-8 text-center border-t border-white/10", children: /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/portfolio/src/pages/Home.tsx:424:8", "data-component-name": "p", className: "text-muted-foreground text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Prince Kumar. Built with React & Vite."
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
      lineNumber: 424,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
      lineNumber: 423,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
_s(Home, "EaEsWKdSdyb99/LVK2hRYrkr/Jg=", false, function() {
  return [useToast];
});
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/portfolio/src/pages/Home.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QyxNQUFLO0FBQUEsb0JBQ0wsUUFBTztBQUFBLG9CQUNQLEtBQUk7QUFBQSxvQkFDSixXQUFVO0FBQUEsb0JBQTBIO0FBQUE7QUFBQSxrQkFKdEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU9BO0FBQUEsZ0JBQ0E7QUFBQSxrQkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNDLE1BQUs7QUFBQSxvQkFDTCxRQUFPO0FBQUEsb0JBQ1AsS0FBSTtBQUFBLG9CQUNKLFdBQVU7QUFBQSxvQkFBMEg7QUFBQTtBQUFBLGtCQUp0STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBT0E7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBdUJBO0FBQUEsYUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXdDQTtBQUFBLFdBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFxREEsS0F0REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXVEQTtBQUFBLFNBdlRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F3VEE7QUFBQSxJQUdBLHVCQUFDLFlBQUsseUdBQUUsV0FBVSw2Q0FDaEIsaUNBQUMsMkdBQUUsV0FBVSxpQ0FBK0I7QUFBQTtBQUFBLE9BQ3ZDLG9CQUFJUyxLQUFLLEdBQUVDLFlBQVk7QUFBQSxNQUFFO0FBQUEsU0FEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlBO0FBQUEsT0FsVUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW1VQTtBQUVKO0FBQUFuQyxHQWxXd0JELE1BQUk7QUFBQSxVQUNSbEIsUUFBUTtBQUFBO0FBQUEsS0FESmtCO0FBQUksSUFBQXFDO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiR2l0aHViIiwiTGlua2VkaW4iLCJBcnJvd1JpZ2h0IiwiTmF2YmFyIiwidXNlVG9hc3QiLCJza2lsbHMiLCJuYW1lIiwiZW1vamkiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwiaHJlZiIsImVkdWNhdGlvbiIsImRlZ3JlZSIsImluc3RpdHV0aW9uIiwibG9jYXRpb24iLCJwZXJpb2QiLCJib2FyZCIsIm1hcmtzIiwicmVzdWx0Iiwic3VidGl0bGVGdWxsIiwiSG9tZSIsIl9zIiwidG9hc3QiLCJ0eXBlZFRleHQiLCJzZXRUeXBlZFRleHQiLCJ0eXBpbmdEb25lIiwic2V0VHlwaW5nRG9uZSIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic2xpY2UiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ29udGFjdFN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJ0YXJnZXQiLCJyZXNldCIsImJhY2tncm91bmQiLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwiaW1wb3J0IiwiZW52IiwiQkFTRV9VUkwiLCJkZWxheSIsIm9uY2UiLCJtYXAiLCJza2lsbCIsImlkeCIsInByb2plY3QiLCJ0YWciLCJlZHUiLCJ4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEdpdGh1YiwgTGlua2VkaW4sIEFycm93UmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9ob29rcy91c2UtdG9hc3RcIjtcblxuY29uc3Qgc2tpbGxzID0gW1xuICB7IG5hbWU6IFwiUHl0aG9uXCIsIGVtb2ppOiBcIvCfkI1cIiB9LFxuICB7IG5hbWU6IFwiSmF2YVNjcmlwdFwiLCBlbW9qaTogXCLimqFcIiB9LFxuICB7IG5hbWU6IFwiSFRNTCAmIENTU1wiLCBlbW9qaTogXCLwn4yQXCIgfSxcbiAgeyBuYW1lOiBcIlJlYWN0XCIsIGVtb2ppOiBcIuKam++4j1wiIH0sXG4gIHsgbmFtZTogXCJBSSAmIE1MXCIsIGVtb2ppOiBcIvCfp6BcIiB9LFxuICB7IG5hbWU6IFwiSW9UXCIsIGVtb2ppOiBcIvCflIxcIiB9LFxuICB7IG5hbWU6IFwiVml0ZVwiLCBlbW9qaTogXCLimqFcIiB9LFxuICB7IG5hbWU6IFwiV2ViIERldlwiLCBlbW9qaTogXCLwn5K7XCIgfSxcbiAgeyBuYW1lOiBcIkdpdEh1YlwiLCBlbW9qaTogXCLwn5CZXCIgfSxcbiAgeyBuYW1lOiBcIkFuaW1hdGlvblwiLCBlbW9qaTogXCLwn46oXCIgfSxcbl07XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiUHJlc2lkZW5jeSBVbml2IENsb25lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBwaXhlbC1wZXJmZWN0IHJlY3JlYXRpb24gb2YgdGhlIHVuaXZlcnNpdHkgbGFuZGluZyBwYWdlLlwiLFxuICAgIHRhZ3M6IFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhU2NyaXB0XCJdLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ByaW5jZS1rY29kZVwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWaXJ0dWFsIERvY3RvciB3aXRoIElvVFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc21hcnQgaGVhbHRoY2FyZSBzeXN0ZW0gdXNpbmcgSW9UIGZvciByZWFsLXRpbWUgdml0YWxzIHRyYWNraW5nIGFuZCBTdWdnZXN0aW9uLlwiLFxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIklvVFwiLCBcIkZsYXNrXCJdLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ByaW5jZS1rY29kZVwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQb3J0Zm9saW8gV2Vic2l0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk15IHBlcnNvbmFsIHBvcnRmb2xpbyBidWlsdCB3aXRoIFJlYWN0IGFuZCBtb2Rlcm4gVUkvVVggcHJpbmNpcGxlcy5cIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlZpdGVcIiwgXCJDU1NcIl0sXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJpbmNlLWtjb2RlXCJcbiAgfVxuXTtcblxuY29uc3QgZWR1Y2F0aW9uID0gW1xuICB7XG4gICAgZGVncmVlOiBcIkIuVGVjaCDigJQgQ29tcHV0ZXIgU2NpZW5jZSAoQUkgJiBNTClcIixcbiAgICBpbnN0aXR1dGlvbjogXCJQcmVzaWRlbmN5IFVuaXZlcnNpdHlcIixcbiAgICBsb2NhdGlvbjogXCJCZW5nYWx1cnUsIEluZGlhXCIsXG4gICAgcGVyaW9kOiBcIjIwMjMg4oCTIDIwMjcgKEV4cGVjdGVkKVwiLFxuICAgIGJvYXJkOiBcIlwiLFxuICAgIG1hcmtzOiBcIlwiLFxuICAgIHJlc3VsdDogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTcGVjaWFsaXppbmcgaW4gQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgYW5kIE1hY2hpbmUgTGVhcm5pbmcsIHdpdGggY291cnNld29yayBpbiBEYXRhIFN0cnVjdHVyZXMsIE5ldXJhbCBOZXR3b3JrcywgSW9ULCBhbmQgV2ViIFRlY2hub2xvZ2llcy5cIlxuICB9LFxuICB7XG4gICAgZGVncmVlOiBcIjEydGggU3RhbmRhcmQg4oCUIFNjaWVuY2UgKFBDTSArIEJpb2xvZ3kpXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFqa2l5YWtyaXQgU2hyaSBTaXRhcmFtIFJhaSArMiBWaWR5YWxheWEsIFJham91cmFcIixcbiAgICBsb2NhdGlvbjogXCJCZWd1c2FyYWksIEJpaGFyXCIsXG4gICAgcGVyaW9kOiBcIjIwMjRcIixcbiAgICBib2FyZDogXCJCaWhhciBTY2hvb2wgRXhhbWluYXRpb24gQm9hcmQgKEJTRUIpLCBQYXRuYVwiLFxuICAgIG1hcmtzOiBcIjQxNSAvIDUwMFwiLFxuICAgIHJlc3VsdDogXCIxc3QgRGl2aXNpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQaHlzaWNzICg4MSkgwrcgQ2hlbWlzdHJ5ICg4OSkgwrcgTWF0aGVtYXRpY3MgKDk1KSDCtyBFbmdsaXNoICg3NikgwrcgSGluZGkgKDc0KSDCtyBCaW9sb2d5ICg1MilcIlxuICB9LFxuICB7XG4gICAgZGVncmVlOiBcIjEwdGggU3RhbmRhcmQg4oCUIFNlY29uZGFyeSBTY2hvb2wgRXhhbWluYXRpb25cIixcbiAgICBpbnN0aXR1dGlvbjogXCJWaWthcyBWaWR5YWxheWEgU2hpa3NoYWsgTmdyIER1bXJpXCIsXG4gICAgbG9jYXRpb246IFwiQmVndXNhcmFpLCBCaWhhclwiLFxuICAgIHBlcmlvZDogXCIyMDIyXCIsXG4gICAgYm9hcmQ6IFwiQ2VudHJhbCBCb2FyZCBvZiBTZWNvbmRhcnkgRWR1Y2F0aW9uIChDQlNFKVwiLFxuICAgIG1hcmtzOiBcIjM2NSAvIDUwMFwiLFxuICAgIHJlc3VsdDogXCJQYXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW5nbGlzaCAoNjkpIMK3IEhpbmRpICg3NikgwrcgTWF0aGVtYXRpY3MgKDcyKSDCtyBTY2llbmNlICg3MCkgwrcgU29jaWFsIFNjaWVuY2UgKDc4KVwiXG4gIH1cbl07XG5cbmNvbnN0IHN1YnRpdGxlRnVsbCA9IFwiQi5UZWNoIENTRSAoQUkgJiBNTCkgU3R1ZGVudCB8IFdlYiBEZXZlbG9wZXIgfCBBSSBFbnRodXNpYXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG4gIGNvbnN0IFt0eXBlZFRleHQsIHNldFR5cGVkVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3R5cGluZ0RvbmUsIHNldFR5cGluZ0RvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VHlwZWRUZXh0KHN1YnRpdGxlRnVsbC5zbGljZSgwLCBpICsgMSkpO1xuICAgICAgaSsrO1xuICAgICAgaWYgKGkgPj0gc3VidGl0bGVGdWxsLmxlbmd0aCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgc2V0VHlwaW5nRG9uZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9LCA0MCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ29udGFjdFN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2FzdCh7XG4gICAgICB0aXRsZTogXCJNZXNzYWdlIHNlbnQhXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGFua3MgZm9yIHJlYWNoaW5nIG91dC4gSSdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi5cIixcbiAgICB9KTtcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctWyMwYTBhMGNdIG1pbi1oLXNjcmVlbiB0ZXh0LXdoaXRlIHNlbGVjdGlvbjpiZy1wcmltYXJ5IHNlbGVjdGlvbjp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmb250LXNhbnNcIj5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgPG1haW4gaWQ9XCJ0b3BcIj5cbiAgICAgICAgey8qIEhFUk8gU0VDVElPTiAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTIwIHBiLTEyIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCByZ2JhKDM0LDIxMSwyMzgsMC4wNSkgMCUsIHRyYW5zcGFyZW50IDcwJSlcIiB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHB4LTYgcmVsYXRpdmUgei0xMCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi04XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxNTBweF0gaC1bMTUwcHhdIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTIgYm9yZGVyLXByaW1hcnkvNTAgc2hhZG93LVswXzBfNDBweF9yZ2JhKDM0LDIxMSwyMzgsMC4zKV0gbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7aW1wb3J0Lm1ldGEuZW52LkJBU0VfVVJMfWltYWdlcy9wcm9maWxlLmpwZ2B9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcmluY2UgS3VtYXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LXRvcFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC14bCBtYi0yXCI+SGksIEknbTwvcD5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtW2NsYW1wKDIuNXJlbSw1dncrMXJlbSw0LjVyZW0pXSBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCBtYi00IHRleHQtZ3JhZGllbnRcIj5cbiAgICAgICAgICAgICAgICBQcmluY2UgS3VtYXJcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtcHJpbWFyeSB0ZXh0LXNtIHNtOnRleHQtYmFzZSBtZDp0ZXh0LWxnIG1iLTMgbWluLWgtWzEuNWVtXVwiPlxuICAgICAgICAgICAgICAgIHt0eXBlZFRleHR9PHNwYW4gY2xhc3NOYW1lPXt0eXBpbmdEb25lID8gXCJoaWRkZW5cIiA6IFwiY3Vyc29yLWJsaW5rXCJ9Pnw8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtcHJpbWFyeS82MCB0ZXh0LXNtIGl0YWxpYyBtYi04XCI+4oCUIE1lLCBDb2ZmZWUgYW5kIE15IE9tZW48L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LWxnIG1heC13LTJ4bCBteC1hdXRvIG1iLTEwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIEkgYW0gYSBwYXNzaW9uYXRlIEIuVGVjaCBDU0UgKEFJICYgTUwpIHN0dWRlbnQgaW50ZXJlc3RlZCBpbiBBcnRpZmljaWFsIEludGVsbGlnZW5jZSwgTWFjaGluZSBMZWFybmluZywgYW5kIFdlYiBEZXZlbG9wbWVudC4gSSBlbmpveSBidWlsZGluZyBtb2Rlcm4gd2ViIGFwcGxpY2F0aW9ucyBhbmQgbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcyB0byBzb2x2ZSByZWFsLXdvcmxkIHByb2JsZW1zLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtOCBweS0zLjUgcm91bmRlZC1sZyBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctcHJpbWFyeS85MCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEb3dubG9hZCBSZXN1bWVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIjcHJvamVjdHNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtOCBweS0zLjUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy13aGl0ZS8xMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWaWV3IFByb2plY3RzXG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG1sLTAgc206bWwtNCBtdC00IHNtOm10LTBcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ByaW5jZS1rY29kZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgaG92ZXI6Ym9yZGVyLXByaW1hcnkvNTAgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5HaXRIdWI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcHJpbmNlLWt1bWFyLTAwODYzYjMzNlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgaG92ZXI6Ym9yZGVyLXByaW1hcnkvNTAgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtlZGluIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxpbmtlZEluPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogQUJPVVQgU0VDVElPTiAqL31cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInB5LTI0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtcHJpbWFyeSB0ZXh0LXNtIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgbWItNCBibG9ja1wiPmFib3V0X21lPC9zcGFuPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLThcIj5XaG8gQW0gST88L2gyPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXhsIGxlYWRpbmctWzEuOF0gbWItMTJcIj5cbiAgICAgICAgICAgICAgICBJIGFtIGEgcGFzc2lvbmF0ZSA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5CLlRlY2ggQ1NFIChBSSAmIE1MKTwvc3Ryb25nPiBzdHVkZW50IGludGVyZXN0ZWQgaW57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+QXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UsIE1hY2hpbmUgTGVhcm5pbmcsPC9zdHJvbmc+IGFuZHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5XZWIgRGV2ZWxvcG1lbnQ8L3N0cm9uZz4uIEkgZW5qb3kgYnVpbGRpbmcgbW9kZXJuIHdlYiBhcHBsaWNhdGlvbnMgYW5kIGxlYXJuaW5nXG4gICAgICAgICAgICAgICAgbmV3IHRlY2hub2xvZ2llcyB0byBzb2x2ZSByZWFsLXdvcmxkIHByb2JsZW1zLlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC04IHRleHQtY2VudGVyIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBwdC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtcHJpbWFyeSB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMlwiPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPkJlbmdhbHVydSwgSW5kaWE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1wcmltYXJ5IHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yXCI+RGVncmVlPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPkIuVGVjaCBDU0UgKEFJICYgTUwpPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtcHJpbWFyeSB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMlwiPlN0YXR1czwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5BdmFpbGFibGUgZm9yIEludGVybnNoaXBzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTS0lMTFMgU0VDVElPTiAqL31cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJza2lsbHNcIiBjbGFzc05hbWU9XCJweS0yNCBiZy1bIzEyMTIxNl0vMzBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXByaW1hcnkgdGV4dC1zbSB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIG1iLTQgYmxvY2tcIj5za2lsbHM8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGRcIj5XaGF0IEkgS25vdzwvaDI+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdChhdXRvLWZpdCxtaW5tYXgoMjAwcHgsMWZyKSldIGdhcC02XCI+XG4gICAgICAgICAgICAgIHtza2lsbHMubWFwKChza2lsbCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17c2tpbGwubmFtZX1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IGlkeCAqIDAuMDUgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMTIxMjE2XSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtOCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBob3Zlcjpib3JkZXItcHJpbWFyeSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjpzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMzQsMjExLDIzOCwwLjE1KV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPntza2lsbC5lbW9qaX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWxnXCI+e3NraWxsLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBQUk9KRUNUUyBTRUNUSU9OICovfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCIgY2xhc3NOYW1lPVwicHktMjRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXByaW1hcnkgdGV4dC1zbSB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIG1iLTQgYmxvY2tcIj5wcm9qZWN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZFwiPldoYXQgSSd2ZSBCdWlsdDwvaDI+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpZHggKiAwLjEgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGJnLVsjMTIxMjE2XSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtOCBtZDpwLTEwIHJvdW5kZWQtWzIwcHhdIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTYganVzdGlmeS1iZXR3ZWVuIG1kOml0ZW1zLWNlbnRlciBob3Zlcjpib3JkZXItd2hpdGUvMjAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMyB0ZXh0LXdoaXRlIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNiBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFncy5tYXAodGFnID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyBweC0zIHB5LTEuNSByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1kOm10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBvbiBHaXRIdWIgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBFRFVDQVRJT04gU0VDVElPTiAqL31cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJlZHVjYXRpb25cIiBjbGFzc05hbWU9XCJweS0yNCBiZy1bIzEyMTIxNl0vMzBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXByaW1hcnkgdGV4dC1zbSB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIG1iLTQgYmxvY2tcIj5lZHVjYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGRcIj5XaGVyZSBJIFN0dWR5PC9oMj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwbC04IGJvcmRlci1sLTIgYm9yZGVyLXByaW1hcnkvMzAgc3BhY2UteS0xMFwiPlxuICAgICAgICAgICAgICB7ZWR1Y2F0aW9uLm1hcCgoZWR1LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fVxuICAgICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogaWR4ICogMC4xIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC1bMi44NXJlbV0gdG9wLTEgdy00IGgtNCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeSBzaGFkb3ctWzBfMF8xMnB4X3JnYmEoMzQsMjExLDIzOCwwLjUpXVwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMTIxMjE2XSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtOCByb3VuZGVkLTJ4bCBob3Zlcjpib3JkZXItcHJpbWFyeS8zMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtc3RhcnQgc206anVzdGlmeS1iZXR3ZWVuIGdhcC0yIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntlZHUuZGVncmVlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtcHJpbWFyeSB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCI+e2VkdS5wZXJpb2R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LzgwIGZvbnQtbWVkaXVtIG1iLTFcIj57ZWR1Lmluc3RpdHV0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAge2VkdS5ib2FyZCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC14cyBtYi0xXCI+e2VkdS5ib2FyZH08L3A+fVxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBtYi00XCI+e2VkdS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIHsoZWR1Lm1hcmtzIHx8IGVkdS5yZXN1bHQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlZHUubWFya3MgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMS41IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzEwIGJvcmRlciBib3JkZXItcHJpbWFyeS8yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtcHJpbWFyeVwiPk1hcmtzOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHMgdGV4dC13aGl0ZSBmb250LWJvbGRcIj57ZWR1Lm1hcmtzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2VkdS5yZXN1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMS41IHJvdW5kZWQtZnVsbCBiZy1ncmVlbi01MDAvMTAgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyB0ZXh0LWdyZWVuLTQwMFwiPlJlc3VsdDogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+e2VkdS5yZXN1bHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIj57ZWR1LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBDT05UQUNUIFNFQ1RJT04gKi99XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInB5LTI0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBweC02XCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMTZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1wcmltYXJ5IHRleHQtc20gdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSBtYi00IGJsb2NrXCI+Y29udGFjdDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZFwiPkdldCBJbiBUb3VjaDwvaDI+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtMTZcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPkludGVyZXN0ZWQgaW4gd29ya2luZyB0b2dldGhlcj88L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LWxnIG1iLThcIj5cbiAgICAgICAgICAgICAgICAgIEFsd2F5cyBvcGVuIHRvIG5ldyBwcm9qZWN0cywgb3Bwb3J0dW5pdGllcywgb3IganVzdCBhIGZyaWVuZGx5IGNoYXQgYWJvdXQgQUkgYW5kIHdlYiB0ZWNoLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnByaW5jZWs4MzIwQGdtYWlsLmNvbVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLW9wYWNpdHkgYnJlYWstYWxsXCI+XG4gICAgICAgICAgICAgICAgICBwcmluY2VrODMyMEBnbWFpbC5jb21cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQgbGc6anVzdGlmeS1lbmQgaXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHJpbmNlLWtjb2RlXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktNCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzBhMGEwY10gdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wcmluY2Uta3VtYXItMDA4NjNiMzM2XCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktNCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzBhMGEwY10gdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExpbmtlZEluXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogRk9PVEVSICovfVxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJweS04IHRleHQtY2VudGVyIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbVwiPlxuICAgICAgICAgIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFByaW5jZSBLdW1hci4gQnVpbHQgd2l0aCBSZWFjdCAmIFZpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9wb3J0Zm9saW8vc3JjL3BhZ2VzL0hvbWUudHN4In0=