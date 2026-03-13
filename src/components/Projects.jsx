import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Virtual Doctor with IoT',
    description: 'A smart healthcare system using IoT for real-time vitals tracking and Suggestion.',
    tech: ['Python', 'IoT', 'Web'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and modern UI/UX principles.',
    tech: ['React', 'Vite', 'CSS'],
    link: '#'
  },
  {
    title: 'Presidency Univ Clone',
    description: 'A pixel-perfect recreation of the university landing page.',
    tech: ['HTML', 'CSS', 'JS'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="reveal">
      <div className="container">
        <span className="section-tag">// showcase</span>
        <h2 className="section-title">Selected Projects</h2>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-action">
                <a href={project.link} className="view-link">
                  View Case Study <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
