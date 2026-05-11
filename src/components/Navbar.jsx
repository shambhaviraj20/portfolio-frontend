import { useState, useEffect } from 'react';
import { personal } from '../data/resume';
import './Navbar.css';
import logo from '../assets/logo-removebg.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'works', href: '#projects' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#" className="navbar__logo">
      <img src={logo} alt="Shambhavi Raj" className="navbar__logo-img" />
        {personal.available && (
          <span className="navbar__avail">
            <span className="navbar__avail-dot" />
            available
          </span>
        )}
      </a>

      {/* Desktop links */}
      <ul className="navbar__links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="navbar__link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
