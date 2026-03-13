import { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  { icon: '🌐', name: 'HTML', pct: 90, tags: ['Semantic', 'SEO', 'Forms'] },
  { icon: '🎨', name: 'CSS', pct: 85, tags: ['Flexbox', 'Grid', 'Animations'] },
  { icon: '⚡', name: 'JavaScript', pct: 80, tags: ['ES6+', 'DOM', 'Async'] },
  { icon: '🐍', name: 'Python', pct: 75, tags: ['Scripting', 'Automation', 'OOP'] },
  { icon: '💻', name: 'Web Development', pct: 78, tags: ['Responsive', 'React', 'Full-Stack'] },
  { icon: '🤖', name: 'AI & Machine Learning', pct: 55, tags: ['Basics', 'Neural Nets', 'Data Science'] },
];

export default function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gridRef.current.querySelectorAll('.skill-card__bar-fill').forEach((bar) => {
            bar.classList.add('animate');
          });
        }
      },
      { threshold: 0.3 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="section__tag sr">// skills</span>
        <h2 className="section__title sr">
          Technologies I <span>Work With</span>
        </h2>

        <div className="skills__grid sr" ref={gridRef}>
          {skills.map((s, i) => (
            <div className="card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="skill-card__header">
                <span className="skill-card__icon">{s.icon}</span>
                <h3 className="skill-card__name">{s.name}</h3>
              </div>
              <div className="skill-card__bar-track">
                <div
                  className="skill-card__bar-fill"
                  style={{ maxWidth: `${s.pct}%` }}
                />
              </div>
              <div className="skill-card__tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
