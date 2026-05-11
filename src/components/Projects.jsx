import { useState } from 'react';
import { projects } from '../data/resume';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';
import bgWave from '../assets/bg-wave.png';
import './Projects.css';

export default function Projects() {
  const [active, setActive] = useState(null);
  const labelRef = useScrollReveal(0.2);
  const headRef = useScrollReveal(0.2);
  const listRef = useStaggerReveal(0.1);

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="projects__label-row">
          <span ref={labelRef} className="section-label reveal-inline">Selected Projects</span>
          <div className="divider projects__divider" />
          <span className="section-label">{projects.length} works</span>
        </div>

        <h2 ref={headRef} className="projects__heading reveal-text">
          What I've<br /><span className="projects__heading-accent">Built</span>
        </h2>

        {/* Project cards */}
        <ul ref={listRef} className="projects__list">
          {projects.map((p, i) => (
            <li
              key={p.id}
              className={`project-card ${active === p.id ? 'project-card--active' : ''}`}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              data-hover
            >
              <div className="project-card__num mono-font">
                0{i + 1}
              </div>

              <div className="project-card__body">
                <div className="project-card__top">
                  <div>
                    <h3 className="project-card__title">{p.title}</h3>
                    <span className="project-card__sub">{p.subtitle}</span>
                  </div>
                  <div className="project-card__highlight mono-font">
                    {p.highlight}
                  </div>
                </div>

                <p className="project-card__desc">{p.description}</p>

                <div className="project-card__footer">
                  <span className="project-card__tech mono-font">{p.tech}</span>
                  {p.link && (
                    <a href={p.link} className="project-card__link" data-hover>
                      View project ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Image reveal on hover */}
              <div className="project-card__img-wrap">
                <img src={bgWave} alt={p.title} className="project-card__img" />
                <div className="project-card__img-overlay" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
