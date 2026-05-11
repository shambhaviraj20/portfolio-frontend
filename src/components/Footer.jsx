import { personal } from '../data/resume';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: 'LinkedIn', href: personal.links.linkedin },
    { label: 'GitHub', href: personal.links.github },
    { label: 'Drive', href: personal.links.drive },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="divider footer__divider" />

        <div className="footer__grid">
          {/* Left — name & tagline */}
          <div className="footer__left">
            <span className="footer__name">{personal.name}</span>
            <span className="footer__tagline section-label">
              Frontend &amp; Full Stack Developer · Pune, India
            </span>
          </div>

          {/* Social links */}
          <nav className="footer__socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                data-hover
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <span className="footer__copy section-label">
            © {year} {personal.name}
          </span>
          <span className="footer__built section-label">
            Built with React &amp; ♡
          </span>
        </div>
      </div>
    </footer>
  );
}
