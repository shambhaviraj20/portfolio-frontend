import { personal, experience, education } from '../data/resume';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';
import './About.css';

export default function About() {
  const titleRef = useScrollReveal(0.2);
  const expRef = useStaggerReveal(0.15);
  const eduRef = useStaggerReveal(0.15);

  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Section label */}
        <div className="about__label-row">
          <span className="section-label">About</span>
          <div className="divider about__divider" />
        </div>

        {/* Big heading */}
        <h2 ref={titleRef} className="about__heading reveal-text">
          Hello. I am<br />
          <span className="about__heading-name">{personal.nameFirst} {personal.nameLast}</span>
        </h2>

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio">
            <p className="about__bio-text">{personal.about}</p>
            <a
              href={`mailto:${personal.email}`}
              className="about__contact-pill"
              data-hover
            >
              {personal.email} ↗
            </a>
          </div>

          {/* Experience */}
          <div className="about__side">
            <h3 className="about__sub-heading section-label">Experience</h3>
            <ul ref={expRef} className="about__exp-list">
              {experience.map((e, i) => (
                <li key={i} className="about__exp-item">
                  <div className="about__exp-header">
                    <span className="about__exp-role">{e.role}</span>
                    <span className="about__exp-period mono-font">{e.period}</span>
                  </div>
                  <span className="about__exp-company">{e.company}</span>
                  <ul className="about__exp-bullets">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <h3 className="about__sub-heading section-label" style={{ marginTop: '3rem' }}>Education</h3>
            <ul ref={eduRef} className="about__edu-list">
              {education.map((e, i) => (
                <li key={i} className="about__edu-item">
                  <div className="about__edu-row">
                    <span className="about__edu-degree">{e.degree}</span>
                    <span className="about__edu-score mono-font">{e.score}</span>
                  </div>
                  <span className="about__edu-inst">{e.institution}</span>
                  <span className="about__edu-year mono-font">{e.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
