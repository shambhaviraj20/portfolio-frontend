import { personal, interests } from '../data/resume';
import { useScrollReveal } from '../hooks/useAnimations';
import './Contact.css';

export default function Contact() {
  const headRef = useScrollReveal(0.2);

  const interestLinks = [
    { label: 'FRONTEND DEV', subject: "Frontend Dev Opportunity — Let's Talk" },
    { label: 'FULL STACK', subject: 'Full Stack Opportunity' },
    { label: 'AI INTEGRATION', subject: 'AI Integration Project' },
    { label: 'UI/UX DESIGN', subject: 'UI/UX Design Work' },
    { label: 'OPEN SOURCE', subject: 'Open Source Collaboration' },
    { label: 'INTERNSHIP', subject: 'Internship Opportunity' },
    { label: 'RAG PIPELINES', subject: 'RAG / AI Project' },
    { label: 'HACKATHONS', subject: 'Hackathon Team' },
    { label: 'RESEARCH', subject: 'Research Collaboration' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__label-row">
          <span className="section-label">Contact</span>
          <div className="divider contact__divider" />
        </div>

        <h2 ref={headRef} className="contact__heading reveal-text">
          Let's<br />
          <span className="contact__heading-accent">Connect</span>
        </h2>

        <p className="contact__sub">
          I'm always open to new projects, collaborations,<br />
          and interesting problems to solve.
        </p>

        {/* Interest links — scrolling ticker style */}
        <div className="contact__interests">
          {interestLinks.map((item, i) => (
            <a
              key={i}
              href={`mailto:${personal.email}?subject=👋 ${item.subject}`}
              className="contact__interest-tag"
              data-hover
            >
              {item.label}
              <span className="contact__interest-arrow">↗</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="contact__cta">
          <p className="contact__cta-question">Have a project in mind?</p>
          <a
            href={`mailto:${personal.email}?subject=🤝 Project info. Let's talk`}
            className="contact__cta-btn"
            data-hover
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
