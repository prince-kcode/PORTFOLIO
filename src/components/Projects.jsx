import './Projects.css';

const projects = [
  {
    icon: '🏥',
    title: 'Virtual Doctor with IoT',
    desc: 'A smart healthcare project that uses IoT devices to monitor patient health data and provide basic medical suggestions. Integrates sensors with a web dashboard for real-time vitals tracking.',
    tech: ['IoT', 'Python', 'Web Dashboard'],
  },
  {
    icon: '🖥️',
    title: 'Portfolio Website',
    desc: 'A personal portfolio website built using HTML, CSS, and JavaScript to showcase my skills, projects, and professional journey with modern design and smooth animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: '🎓',
    title: 'Presidency University Website Clone',
    desc: 'A mini web development project where I recreated the Presidency University website interface using HTML and CSS, focusing on layout accuracy and responsive design.',
    tech: ['HTML', 'CSS', 'Responsive Design'],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section__tag sr">// projects</span>
        <h2 className="section__title sr">
          Things I've <span>Built</span>
        </h2>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <div
              className="card project-card sr"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="project-card__icon">{p.icon}</span>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
