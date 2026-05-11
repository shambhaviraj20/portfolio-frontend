import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { skillsFlat, interests } from './data/resume';
import './App.css';

export default function App() {
  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. First marquee — skills ticker */}
        <Marquee items={skillsFlat} />

        {/* 3. About + Experience + Education */}
        <About />

        {/* 4. Reverse marquee */}
        <Marquee items={interests} reverse speed="slow" />

        {/* 5. Projects (replaces Patrick David's "cases") */}
        <Projects />

        {/* 6. Skills grid */}
        <Skills />

        {/* 7. Hackathons + Publications + Leadership */}
        <Achievements />

        {/* 8. Contact */}
        <Contact />

        {/* 9. Footer */}
        <Footer />
      </main>
    </>
  );
}
