import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container animate-up">
        <div className="profile-wrapper">
          <img 
            src="/profile.png" 
            alt="Prince Kumar" 
            className="profile-img"
            onError={(e) => {
              e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Prince";
            }}
          />
        </div>
        
        <h1 className="hero-name">Prince Kumar</h1>
        <p className="hero-subtitle">B.Tech CSE (AI & ML) Student | Web Developer | AI Enthusiast</p>
        
        <div className="hero-description">
          <p>Building functional and beautiful digital experiences with modern technologies.</p>
          <p className="tagline">"Me, Coffee and My Omen"</p>
        </div>

        <div className="hero-btns">
          <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
