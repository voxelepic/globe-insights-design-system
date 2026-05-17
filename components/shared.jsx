"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ============================================================
   useReveal — IntersectionObserver-driven scroll reveal
   ============================================================ */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-in'); });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ============================================================
   useCountUp — animate a number
   ============================================================ */
export function useCountUp(target, duration = 1400, decimals = 0) {
  const ref = useRef(null);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !done) {
        setDone(true);
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const v = target * eased;
          el.textContent = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, decimals, done]);
  return ref;
}

/* ============================================================
   CURSOR — decorative pink dot following pointer
   ============================================================ */
export function Cursor() {
  const ref = useRef(null);
  const [hot, setHot] = useState(false);
  useEffect(() => {
    let raf = 0; let x = 0, y = 0, tx = 0, ty = 0;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const enter = (e) => { if (e.target.closest && e.target.closest('a, button, .gi-trip, .gi-how__step, .gi-faq__q')) setHot(true); };
    const leave = (e) => { if (e.target.closest && e.target.closest('a, button, .gi-trip, .gi-how__step, .gi-faq__q')) setHot(false); };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', enter); document.removeEventListener('mouseout', leave); };
  }, []);
  return <div ref={ref} className={"gi-cursor" + (hot ? " is-hot" : "")} />;
}

/* ============================================================
   NAV
   ============================================================ */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className={"gi-nav" + (scrolled ? " is-scrolled" : "")}>
      <Link href="/" className="gi-nav__brand">
        <span className="gi-mark" aria-hidden="true">
          <svg viewBox="0 0 56 56" width="36" height="36">
            <rect x="3" y="3" width="50" height="50" fill="var(--ink)" stroke="var(--ink)" strokeWidth="3"/>
            <circle cx="28" cy="28" r="14" fill="none" stroke="var(--accent)" strokeWidth="3"/>
            <line x1="28" y1="14" x2="28" y2="42" stroke="var(--accent)" strokeWidth="3"/>
            <ellipse cx="28" cy="28" rx="7" ry="14" fill="none" stroke="var(--accent)" strokeWidth="3"/>
          </svg>
        </span>
        <span className="gi-wordmark">globe<span className="gi-wordmark__dot">.</span>insights</span>
      </Link>
      <ul className="gi-nav__links">
        <li><Link href="/" className={"gi-link" + (pathname === '/' ? " is-active" : "")}>PLANS</Link></li>
        <li><Link href="/how-it-works" className={"gi-link" + (pathname === '/how-it-works' ? " is-active" : "")}>HOW IT WORKS</Link></li>
        <li><Link href="/stories" className={"gi-link" + (pathname === '/stories' ? " is-active" : "")}>STORIES</Link></li>
        <li><Link href="/faq" className={"gi-link" + (pathname === '/faq' ? " is-active" : "")}>FAQ</Link></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button className="gi-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>
        <Link href="/" className="gi-btn gi-btn--primary">PLAN MY TRIP <span className="gi-arrow">→</span></Link>
      </div>
    </nav>
  );
}

/* ============================================================
   MARQUEE
   ============================================================ */
export function Marquee({ items, color, reverse }) {
  const cls = "gi-marquee" + (color ? " gi-marquee--" + color : "") + (reverse ? " gi-marquee--reverse" : "");
  return (
    <div className={cls}>
      <div className="gi-marquee__track">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="gi-marquee__item">
            {it}<span className="gi-marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  return (
    <footer className="gi-footer">
      <div className="gi-container">
        <div className="gi-footer__top">
          <div>
            <h2 className="gi-footer__cta">READY?<br/>PICK A <em>WEEKEND.</em></h2>
            <Link href="/" className="gi-btn gi-btn--primary gi-btn--lg" style={{marginTop: 24}}>PLAN MY TRIP <span className="gi-arrow">→</span></Link>
          </div>
          <div className="gi-footer__cols">
            <div>
              <h5>PRODUCT</h5>
              <Link href="/">Plans</Link><Link href="/how-it-works">How it works</Link><Link href="/">Pricing</Link><Link href="/faq">FAQ</Link>
            </div>
            <div>
              <h5>COMPANY</h5>
              <Link href="/">About</Link><Link href="/stories">Stories</Link><Link href="/">Press</Link><Link href="/">Careers</Link>
            </div>
            <div>
              <h5>CONTACT</h5>
              <Link href="/">hi@globe.insights</Link><Link href="/">Berlin · Lisbon</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="gi-footer__mega">
        <div className="gi-footer__mega-text">
          <span className="gi-mega-part-1">glo</span><span className="gi-mega-part-2">be.</span><span className="gi-mega-part-3">insights</span>
        </div>
      </div>
      <div className="gi-footer__legal">
        <span>© 2026 GLOBE INSIGHTS</span>
        <span>SHORT TRIPS / LONG MEMORIES / ZERO B.S.</span>
      </div>
    </footer>
  );
}
