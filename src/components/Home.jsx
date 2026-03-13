import { useState, useEffect, useCallback } from 'react';
import './Home.css';

const slides = [
  {
    icon: '👋',
    greeting: "Hi, I'm",
    name: (
      <>
        Prince <span className="accent">Kumar.</span>
      </>
    ),
    desc: 'B.Tech CSE (AI & ML) student at Presidency University, Bengaluru — building the future, one line of code at a time.',
  },
  {
    icon: '🚀',
    greeting: 'What I Do',
    name: (
      <>
        Full-Stack <span className="accent">Developer.</span>
      </>
    ),
    desc: 'React · JavaScript · Node.js — I design and develop modern, responsive web experiences from concept to deployment.',
  },
  {
    icon: '🎯',
    greeting: 'My Goal',
    name: (
      <>
        Build <span className="accent">Impact.</span>
      </>
    ),
    desc: 'Combining AI/ML knowledge with software engineering to create solutions that matter.',
  },
];

export default function Home() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + slides.length) % slides.length), []);

  /* auto-play */
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="home" id="home">
      <div className="carousel">
        <button className="carousel__arrow carousel__arrow--left" onClick={prev} aria-label="Previous slide">
          ‹
        </button>

        <div className="carousel__track">
          <div className="carousel__slides" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {slides.map((s, i) => (
              <div className="carousel__slide" key={i}>
                <div className="carousel__icon">{s.icon}</div>
                <span className="carousel__badge">
                  <span className="pulse" /> 4th Semester · Presidency University
                </span>
                <p className="carousel__greeting">{s.greeting}</p>
                <h1 className="carousel__name">{s.name}</h1>
                <p className="carousel__desc">{s.desc}</p>
                <div className="carousel__cta">
                  <a href="#projects" className="btn btn--filled">View Projects</a>
                  <a href="#contact" className="btn">Contact Me</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Next slide">
          ›
        </button>

        <div className="carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="home__scroll">
        <span className="home__scroll-text">Scroll</span>
        <span className="home__scroll-line" />
      </div>
    </section>
  );
}
