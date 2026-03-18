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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12 text-left">
            <div className="flex justify-center lg:justify-end">
              <div
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ width: 220, height: 220 }}
              >
                <img
                  src="profile.jpg"
                  alt="Prince Kumar portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div>
              <p className="text-[#a1a1aa] text-xl mb-6" style={{ lineHeight: 1.8 }}>
                I am a passionate <strong className="text-white">B.Tech CSE (AI & ML)</strong> student interested in{" "}
                <strong className="text-white">Artificial Intelligence, Machine Learning,</strong> and{" "}
                <strong className="text-white">Web Development</strong>. I enjoy building modern web 
                applications and learning new technologies to solve real-world problems.
              </p>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                I value clean engineering, thoughtful UI, and continuous learning. I'm currently seeking
                opportunities to contribute to impactful projects and grow as a developer.
              </p>
            </div>
          </div>

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
