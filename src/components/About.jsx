import './About.css';

const stats = [
  { value: '4th', label: 'Semester' },
  { value: '3', label: 'Projects' },
  { value: '6+', label: 'Technologies' },
  { value: '∞', label: 'Curiosity' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="section__tag sr">// about me</span>
        <h2 className="section__title sr">
          Who Is <span>Prince</span>?
        </h2>

        <div className="about__grid">
          <div className="about__text sr">
            <p>
              I'm a <strong>B.Tech Computer Science &amp; Engineering (AI &amp; ML)</strong> student at{' '}
              <strong>Presidency University, Bengaluru</strong>, currently in my <strong>4th semester</strong>.
              My journey into tech started with curiosity about how software works — and quickly turned
              into a full-blown passion for building real-world solutions.
            </p>
            <p>
              I spend my time sharpening skills in <strong>HTML, CSS, JavaScript, Python</strong>, and{' '}
              <strong>AI &amp; Machine Learning</strong>. From responsive portfolio sites to IoT-powered
              healthcare projects, I love turning ideas into working code.
            </p>
            <p>
              When I'm not coding, I'm exploring new frameworks, participating in hackathons,
              and hunting for my next programming challenge.
            </p>
          </div>

          <div className="about__stats sr">
            {stats.map((s) => (
              <div className="card stat-card" key={s.label}>
                <div className="stat-card__value">{s.value}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
