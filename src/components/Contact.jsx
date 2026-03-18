import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-[#22d3ee] text-sm tracking-widest uppercase mb-4 block">
            contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              Let’s connect
            </h3>
            <p className="text-[#a1a1aa] text-lg mb-8">
              I’m open to internships, collaborative projects, and conversations about web development and AI/ML.
            </p>
            <a 
              href="mailto:princek8320@gmail.com" 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#22d3ee] hover:opacity-80 transition-opacity break-all"
            >
              princek8320@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 lg:justify-end items-start"
          >
            <a
              href="https://github.com/prince-kcode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-white/30 hover:bg-white/5 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prince-kumar-00863b336"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-white/30 hover:bg-white/5 transition-all"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
