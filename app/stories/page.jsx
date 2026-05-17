"use client";

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { Cursor, Nav, Footer, Marquee, useReveal } from '../../components/shared';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function StoriesHero() {
  const headRef = useReveal();
  return (
    <section className="gi-hero" style={{ padding: '160px 0 96px', borderBottom: '3px solid var(--ink)', background: 'var(--punch-blue)', color: 'var(--paper)' }}>
      <div className="gi-container" style={{ position: 'relative', zIndex: 2 }}>
        <div ref={headRef} className="gi-reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="gi-hero__h1" style={{ fontSize: '88px', marginBottom: '32px' }}>
            <span className="gi-line"><span>REAL TRIPS.</span></span>
            <span className="gi-line"><span><span className="gi-hero__h1-yel" style={{ color: 'var(--ink)' }}>REAL RECEIPTS.</span></span></span>
          </h1>
          <p className="gi-hero__sub" style={{ margin: '0 auto', fontSize: '20px' }}>
            Don't just take our word for it. See how other travelers spent their 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

const STORIES_DATA = [
  { q: '"Booked Friday morning. On a tram in Lisbon by 9pm. Drank the best green wine of my life."', who: 'MAYA · BERLIN', city: 'LISBON', tilt: -1.5, color: 'var(--punch-pink)' },
  { q: '"Planned Porto in 30 seconds. The Francesinha sandwich ruined all other sandwiches for me."', who: 'JONAS · COPENHAGEN', city: 'PORTO', tilt: 2, color: 'var(--accent)' },
  { q: '"€340 for Budapest, all in. I checked my bank account twice because I didn\'t believe it."', who: 'PRIYA · LONDON', city: 'BUDAPEST', tilt: -2, color: 'var(--punch-lime)' },
  { q: '"Seville in spring is unmatched. The tapas recommendations were scarily accurate."', who: 'DAVID · PARIS', city: 'SEVILLE', tilt: 1.5, color: 'var(--punch-orange)' },
  { q: '"Oslo architecture tour was breathtaking. The sauna boat was the highlight of my year."', who: 'ELENA · MILAN', city: 'OSLO', tilt: -1, color: 'var(--punch-mint)' },
  { q: '"Athens felt like a different world, yet it was only a 3 hour flight. Perfect weekend escape."', who: 'SAM · AMSTERDAM', city: 'ATHENS', tilt: 1, color: 'var(--paper)' },
];

function StoriesGrid() {
  const gridRef = useReveal();
  
  return (
    <section style={{ padding: '96px 0', background: 'var(--paper)' }}>
      <div className="gi-container">
        <div ref={gridRef} className="gi-quotes__grid gi-reveal">
          {STORIES_DATA.map((story, i) => (
            <StoryCard key={i} {...story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ q, who, city, tilt, color, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="gi-quote gi-reveal" style={{ transform: `rotate(${tilt}deg)`, transitionDelay: `${index * 80}ms`, background: color, color: color === 'var(--paper)' || color === 'var(--accent)' || color === 'var(--punch-lime)' ? 'var(--ink)' : 'var(--paper)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 'bold', marginBottom: '16px', opacity: 0.8, letterSpacing: '0.1em' }}>
        DESTINATION: {city}
      </div>
      <p className="gi-quote__q" style={{ fontSize: '20px', textTransform: 'none', lineHeight: 1.4 }}>{q}</p>
      <div className="gi-quote__who" style={{ marginTop: '32px' }}>{who}</div>
    </div>
  );
}

export default function StoriesPage() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true
    });
  }, []);

  return (
    <React.Fragment>
      <Cursor />
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <StoriesHero />
          <Marquee color="pink" items={['TESTIMONIALS.', 'REVIEWS.', 'MEMORIES.', 'GOOD TIMES.']} />
          <StoriesGrid />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
