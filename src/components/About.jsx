import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#22d3ee] text-sm tracking-widest uppercase mb-4 block">
            about_me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Am I?</h2>

          <p className="text-[#a1a1aa] text-xl leading-[1.8] mb-12">
            I am a passionate <strong className="text-white">B.Tech CSE (AI & ML)</strong> student interested in{" "}
            <strong className="text-white">Artificial Intelligence, Machine Learning,</strong> and{" "}
            <strong className="text-white">Web Development</strong>. I enjoy building modern web 
            applications and learning new technologies to solve real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-12">
            <div>
              <h3 className="font-mono text-[#22d3ee] text-sm uppercase tracking-widest mb-2">Location</h3>
              <p className="text-lg font-medium text-white">Bengaluru, India</p>
            </div>
            <div>
              <h3 className="font-mono text-[#22d3ee] text-sm uppercase tracking-widest mb-2">Degree</h3>
              <p className="text-lg font-medium text-white">B.Tech CSE (AI & ML)</p>
            </div>
            <div>
              <h3 className="font-mono text-[#22d3ee] text-sm uppercase tracking-widest mb-2">Status</h3>
              <p className="text-lg font-medium text-white">Available for Internships</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
