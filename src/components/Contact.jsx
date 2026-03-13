import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="reveal">
      <div className="container">
        <span className="section-tag">// let's talk</span>
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-main">
            <h3 className="contact-heading">Interested in working together?</h3>
            <p className="contact-sub">Always open to new projects, opportunities, or just a friendly chat about AI and web tech.</p>
            <a href="mailto:princek8320@gmail.com" className="email-link">princek8320@gmail.com</a>
          </div>
          
          <div className="contact-socials">
            <a href="https://github.com/prince-kcode" target="_blank" rel="noopener noreferrer" className="social-pill">GitHub</a>
            <a href="https://www.linkedin.com/in/prince-kumar-00863b336" target="_blank" rel="noopener noreferrer" className="social-pill">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
