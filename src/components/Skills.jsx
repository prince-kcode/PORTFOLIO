import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'Web Development', icon: '💻' },
  { name: 'AI & Machine Learning', icon: '🤖' }
];

const Skills = () => {
  return (
    <section id="skills" className="reveal">
      <div className="container">
        <span className="section-tag">// expertise</span>
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
