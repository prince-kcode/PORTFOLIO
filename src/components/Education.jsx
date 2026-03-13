import './Education.css';

const items = [
  {
    year: '2024 — Present',
    name: 'Presidency University, Bengaluru',
    detail: 'B.Tech Computer Science & Engineering (AI & ML) — 4th Semester',
    board: null,
    active: true,
  },
  {
    year: '2022 — 2024',
    name: 'Class XII — Senior Secondary',
    detail: 'Science Stream — Physics, Chemistry, Mathematics',
    board: 'Bihar Board',
    active: false,
  },
  {
    year: '2020 — 2022',
    name: 'Class X — Secondary',
    detail: 'Completed with strong academic performance',
    board: 'CBSE Board',
    active: false,
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <span className="section__tag sr">// education</span>
        <h2 className="section__title sr">
          Academic <span>Timeline</span>
        </h2>

        <div className="timeline sr">
          {items.map((it, i) => (
            <div className={`timeline__item${it.active ? ' active' : ''}`} key={i}>
              <span className="timeline__year">{it.year}</span>
              <h3 className="timeline__name">{it.name}</h3>
              <p className="timeline__detail">{it.detail}</p>
              {it.board && <span className="timeline__board">{it.board}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
