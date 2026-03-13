import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="container">
        <span className="section-tag">// introduction</span>
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-text">
            I am <strong>Prince Kumar</strong>, a B.Tech CSE student specializing in 
            <strong> Artificial Intelligence and Machine Learning</strong>. I am passionate about 
            web development, technology and building useful digital products that solve real-world problems.
          </p>
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Bengaluru, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
