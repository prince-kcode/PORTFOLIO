import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Generate random particles for the ambient background */
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  duration: `${Math.random() * 15 + 10}s`,
  delay: `${Math.random() * 10}s`,
  opacity: Math.random() * 0.4 + 0.1,
}));

export default function App() {
  /* ── Scroll Reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.sr').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Ambient particles */}
      <div className="app__particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="app__particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
