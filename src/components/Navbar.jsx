import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* active section tracking */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="navbar__logo">
        &lt;prince<em>/</em>&gt;
      </a>

      <div className={`navbar__links${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={active === l.href.slice(1) ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>

      <button
        className={`navbar__hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
