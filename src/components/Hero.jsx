import { useEffect, useRef } from 'react';
import { personal } from '../data/resume';
import bgWave from '../assets/bg-wave.png';
import portrait from '../assets/sham.png';
import './Hero.css';

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const portraitRef = useRef(null); // New ref

  useEffect(() => {
    // Reveal Title
    const timer = setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add('visible');
    }, 200);
    
    // Reveal Portrait Bubble
    const timerPortrait = setTimeout(() => {
      if (portraitRef.current) portraitRef.current.classList.add('visible');
    }, 400);

    // Reveal Subtext
    const timer2 = setTimeout(() => {
      if (subRef.current) subRef.current.classList.add('visible');
    }, 800);

    return () => { 
      clearTimeout(timer); 
      clearTimeout(timerPortrait); 
      clearTimeout(timer2); 
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img src={bgWave} alt="" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__meta">
        <span className="section-label">
          {personal.location} — {new Date().getFullYear()}
        </span>
        <span className="section-label hero__meta-right">
          {personal.availableText}
          <span className="hero__avail-dot" />
        </span>
      </div>

      <div className="hero__content">
        <div className="hero__eyebrow section-label">
          Frontend &amp; Full Stack Developer
        </div>

        <h1 ref={titleRef} className="hero__title">
          <span className="hero__title-line hero__title-line--first">
            {personal.nameFirst}
          </span>
          <span className="hero__title-line hero__title-line--last">
            {personal.nameLast}
          </span>
        </h1>

        <p ref={subRef} className="hero__sub">
          Building AI-integrated web apps &amp; visually refined platforms
          <br />
          with React.js, Tailwind CSS, Flask, and Node.js
        </p>

        <div className="hero__cta">
          <a href="#projects" className="hero__cta-btn">
            <span>See my work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href={`mailto:${personal.email}`} className="hero__cta-link">
            Get in touch ↗
          </a>
        </div>
      </div>

      {/* PORTRAIT BUBBLE - Moved here to be relative to the whole Hero section */}
      <div ref={portraitRef} className="hero__portrait-wrap" aria-hidden="true">
        <span className="hero__portrait-ring" />
        <img src={portrait} alt="Portrait" className="hero__portrait" draggable="false" />
        <span className="hero__portrait-tag mono-font">that's me ✦</span>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="section-label">scroll</span>
      </div>

      {/* Stats row */}
      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-num">9.17</span>
          <span className="hero__stat-label">CGPA</span>
        </div>
        <div className="hero__stat-div" />
        <div className="hero__stat">
          <span className="hero__stat-num">3+</span>
          <span className="hero__stat-label">Projects</span>
        </div>
        <div className="hero__stat-div" />
        <div className="hero__stat">
          <span className="hero__stat-num">3</span>
          <span className="hero__stat-label">Publications</span>
        </div>
      </div>
    </section>
  );
}
