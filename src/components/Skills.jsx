import { skills, skillsFlat } from '../data/resume';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';
import './Skills.css';

const categories = [
  { label: 'Frontend', key: 'frontend', color: 'var(--wave-light)' },
  { label: 'Backend', key: 'backend', color: 'var(--accent)' },
  { label: 'Databases', key: 'databases', color: 'var(--wave-pale)' },
  { label: 'Languages', key: 'languages', color: 'var(--wave-blue)' },
  { label: 'Libraries', key: 'libraries', color: 'var(--wave-light)' },
  { label: 'Tools', key: 'tools', color: 'var(--accent)' },
];

export default function Skills() {
  const headRef = useScrollReveal(0.2);
  const gridRef = useStaggerReveal(0.1);

  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <div className="skills__label-row">
          <span className="section-label">Skills &amp; Stack</span>
          <div className="divider skills__divider" />
        </div>

        <h2 ref={headRef} className="skills__heading reveal-text">
          What I<br /><span className="skills__heading-accent">Work With</span>
        </h2>

        <div ref={gridRef} className="skills__grid">
          {categories.map((cat) => (
            <div key={cat.key} className="skills__category">
              <h3 className="skills__cat-label section-label">{cat.label}</h3>
              <ul className="skills__tag-list">
                {skills[cat.key].map((s) => (
                  <li key={s} className="skills__tag" data-hover>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
