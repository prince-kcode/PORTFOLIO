import './Certificates.css';

const certs = [
  {
    issuer: 'Intel × INDIAai × MeitY',
    title: '"I\'m AI Sashakt" Badge',
    meta: 'AI Impact Summit 2025',
  },
  {
    issuer: 'Deloitte × Forage',
    title: 'Data Analytics Job Simulation',
    meta: 'October 23, 2025',
  },
  {
    issuer: 'TCS iON',
    title: 'Career Edge — Young Professional',
    meta: 'Oct 18 – Nov 01, 2025 · Cert ID: 240640-29210179-1016',
  },
  {
    issuer: 'BCG X × Forage',
    title: 'GenAI Job Simulation',
    meta: 'December 1, 2025',
  },
];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <span className="section__tag sr">// credentials</span>
        <h2 className="section__title sr">
          Certifications &amp; <span>Badges</span>
        </h2>

        <div className="certs__grid">
          {certs.map((c, i) => (
            <div
              className="card cert-card sr"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="cert-card__issuer">{c.issuer}</div>
              <h3 className="cert-card__title">{c.title}</h3>
              <p className="cert-card__meta">{c.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
