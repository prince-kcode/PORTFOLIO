import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

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

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#121216]/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#22d3ee] text-sm tracking-widest uppercase mb-4 block">
            skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            A focused set of tools and technologies I use to build and ship projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#121216] border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300"
            >
              <span className="text-4xl" role="img" aria-label={skill.name}>
                {skill.emoji}
              </span>
              <span className="font-bold text-white text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
