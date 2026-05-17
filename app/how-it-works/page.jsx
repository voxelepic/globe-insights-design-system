"use client";

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { Cursor, Nav, Footer, Marquee, useReveal } from '../../components/shared';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function HowItWorksHero() {
  const headRef = useReveal();
  return (
    <section className="gi-how-hero" style={{ padding: '160px 0 96px', borderBottom: '3px solid var(--ink)', position: 'relative', overflow: 'hidden' }}>
      <div className="gi-container" style={{ position: 'relative', zIndex: 2 }}>
        <div ref={headRef} className="gi-reveal" style={{ maxWidth: '800px' }}>
          <span className="gi-eyebrow" style={{ marginBottom: '24px' }}>
            <span className="gi-eyebrow__dot" />THE PLAYBOOK
          </span>
          <h1 className="gi-hero__h1" style={{ fontSize: '72px', marginBottom: '32px' }}>
            <span className="gi-line"><span>ZERO PLANNING.</span></span>
            <span className="gi-line"><span><span className="gi-hero__h1-pink">MAXIMUM IMPACT.</span></span></span>
          </h1>
          <p className="gi-hero__sub" style={{ maxWidth: '600px', fontSize: '20px' }}>
            Stop spending hours reading TripAdvisor reviews from 2018. We have mapped out the perfect 48 hours in Europe’s best cities. You just need to show up.
          </p>
        </div>
      </div>
      
      {/* Decorative background shapes */}
      <div className="gi-bg-shapes">
        <div className="gi-hero__shape-1 gi-shape--circle" style={{ top: '20%', right: '10%', animation: 'gi-float 6s ease-in-out infinite' }} />
        <div className="gi-hero__shape-2" style={{ top: '60%', right: '30%', animation: 'gi-spin 15s linear infinite' }} />
      </div>
    </section>
  );
}

function DetailedSteps() {
  const steps = [
    {
      num: '01',
      title: 'THE VIBE CHECK',
      desc: 'Tell us what you are looking for. Art galleries and natural wine? Techno and late-night kebabs? Or just a quiet spot by the water? We match you with the city that fits your weekend mood perfectly.',
      img: 'lisbon',
      color: 'c1'
    },
    {
      num: '02',
      title: 'THE ITINERARY',
      desc: 'We send you a beautifully designed, mobile-first itinerary. No overwhelming lists of 50 things to do. Just the absolute best spots for breakfast, lunch, dinner, and drinks, timed out so you are never rushing.',
      img: 'porto',
      color: 'c2'
    },
    {
      num: '03',
      title: 'THE LOGISTICS',
      desc: 'Flights and boutique hotels are booked in one click. We even give you the exact train to take from the airport so you do not get ripped off by a taxi. Seamless from door to door.',
      img: 'seville',
      color: 'c5'
    }
  ];

  return (
    <section style={{ padding: '96px 0', background: 'var(--paper)' }}>
      <div className="gi-container">
        <div style={{ display: 'grid', gap: '64px' }}>
          {steps.map((step, i) => (
            <StepRow key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepRow({ step, index }) {
  const revealRef = useReveal();
  const isEven = index % 2 === 0;

  return (
    <div ref={revealRef} className="gi-reveal" style={{ display: 'grid', gridTemplateColumns: isEven ? '1fr 1.2fr' : '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
      
      {/* Image Block */}
      <div style={{ order: isEven ? 1 : 2 }}>
        <div className={`gi-trip gi-trip--${step.color}`} style={{ transform: `rotate(${isEven ? '-1.5deg' : '1.5deg'})`, padding: '16px', pointerEvents: 'none' }}>
          <div className={`gi-trip__img gi-trip__img--${step.img}`} style={{ height: '300px', border: '3px solid var(--ink)' }}></div>
        </div>
      </div>

      {/* Text Block */}
      <div style={{ order: isEven ? 2 : 1 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '96px', lineHeight: 1, color: 'transparent', WebkitTextStroke: '3px var(--ink)', marginBottom: '16px' }}>
          {step.num}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '48px', textTransform: 'uppercase', marginBottom: '24px', lineHeight: 1.1 }}>
          {step.title}
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.6 }}>
          {step.desc}
        </p>
      </div>

    </div>
  );
}

export default function HowItWorksPage() {
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
          <HowItWorksHero />
          <Marquee color="lime" items={['NO RESEARCH.', 'NO STRESS.', 'JUST PACK.', 'GO.']} />
          <DetailedSteps />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
