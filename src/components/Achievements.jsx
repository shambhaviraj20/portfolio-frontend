import { hackathons, publications, leadership } from '../data/resume';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';
import './Achievements.css';

export default function Achievements() {
  const headRef = useScrollReveal(0.2);
  const hackRef = useStaggerReveal(0.1);
  const pubRef = useStaggerReveal(0.1);
  const leadRef = useStaggerReveal(0.1);

  return (
    <section className="achievements" id="achievements">
      <div className="achievements__inner">
        <div className="achievements__label-row">
          <span className="section-label">Recognition</span>
          <div className="divider achievements__divider" />
        </div>

        <h2 ref={headRef} className="achievements__heading reveal-text">
          Achievements<br />
          <span className="achievements__heading-accent">&amp; Research</span>
        </h2>

        <div className="achievements__grid">
          {/* Hackathons */}
          <div className="achievements__col">
            <h3 className="achievements__col-title section-label">Hackathons</h3>
            <ul ref={hackRef} className="ach-list">
              {hackathons.map((h, i) => (
                <li key={i} className="ach-item">
                  <div className="ach-item__result mono-font">{h.result}</div>
                  <div className="ach-item__event">{h.event}</div>
                  <div className="ach-item__org mono-font">{h.org}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div className="achievements__col">
            <h3 className="achievements__col-title section-label">Research Publications</h3>
            <ul ref={pubRef} className="pub-list">
              {publications.map((p, i) => (
                <li key={i} className="pub-item">
                  <div className="pub-item__venue mono-font">{p.venue} · {p.year}</div>
                  <div className="pub-item__title">{p.title}</div>
                  {p.link && (
                    <a href={p.link} className="pub-item__link mono-font" data-hover>
                      read paper ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership */}
          <div className="achievements__col">
            <h3 className="achievements__col-title section-label">Leadership</h3>
            <ul ref={leadRef} className="lead-list">
              {leadership.map((l, i) => (
                <li key={i} className="lead-item">
                  <span className="lead-item__role">{l.role}</span>
                  <span className="lead-item__org">{l.org}</span>
                  <span className="lead-item__period mono-font">{l.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
