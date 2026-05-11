import { useEffect, useRef } from 'react';

/* ──────────────────────────────────
   Custom cursor hook
────────────────────────────────── */
export function useCursor() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    if (!cursor || !cursorDot) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    let raf;
    const animate = () => {
      dotX += (mouseX - dotX) * 0.08;
      dotY += (mouseY - dotY) * 0.08;
      cursor.style.transform = `translate(${dotX - 20}px, ${dotY - 20}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursor.classList.add('cursor--hover');
      cursorDot.classList.add('cursor-dot--hover');
    };
    const onLeave = () => {
      cursor.classList.remove('cursor--hover');
      cursorDot.classList.remove('cursor-dot--hover');
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/* ──────────────────────────────────
   Scroll reveal hook
   Usage: const ref = useScrollReveal();
────────────────────────────────── */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/* ──────────────────────────────────
   Staggered children reveal hook
────────────────────────────────── */
export function useStaggerReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = [...container.children];
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px)';
      child.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
