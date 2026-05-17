"use client";

import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { Cursor, Nav, Footer, Marquee, useReveal } from '../../components/shared';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const FAQS = [
  {
    q: "How does the pricing work?",
    a: "Our prices are fully comprehensive. The 'All In' price includes your roundtrip flights, 2 nights at a highly-rated boutique hotel, and estimated public transit costs. No hidden fees, no bullshit."
  },
  {
    q: "Can I bring checked luggage?",
    a: "Our itineraries are designed for speed and efficiency. We assume a single carry-on bag to avoid luggage claim waits. If you really need to check a bag, you can add it during the booking process with the airline directly."
  },
  {
    q: "What if I need to cancel?",
    a: "We offer a 24-hour grace period for full refunds. After that, we are subject to the cancellation policies of the airlines and hotels we book on your behalf. We highly recommend travel insurance."
  },
  {
    q: "Do you cater to dietary restrictions?",
    a: "Absolutely. Our curated itineraries include restaurant recommendations that cater to vegan, gluten-free, and other common dietary requirements. Just let us know in the intake form."
  },
  {
    q: "How far in advance do I need to book?",
    a: "We require a minimum of 14 days advance notice to secure the best rates and availability. For peak summer dates, we recommend booking at least 6 weeks out."
  }
];

function FAQHero() {
  const headRef = useReveal();
  return (
    <section className="gi-hero" style={{ padding: '160px 0 96px', borderBottom: '3px solid var(--ink)', background: 'var(--accent)' }}>
      <div className="gi-container" style={{ position: 'relative', zIndex: 2 }}>
        <div ref={headRef} className="gi-reveal" style={{ maxWidth: '800px' }}>
          <h1 className="gi-hero__h1" style={{ fontSize: '96px', marginBottom: '32px' }}>
            <span className="gi-line"><span>GOT QUESTIONS?</span></span>
            <span className="gi-line"><span><span className="gi-hero__h1-pink">WE GOT ANSWERS.</span></span></span>
          </h1>
          <p className="gi-hero__sub" style={{ fontSize: '20px' }}>
            Straight talk. No marketing fluff. Here is everything you need to know before you pack your bag.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: '96px 0', background: 'var(--paper)', minHeight: '60vh' }}>
      <div className="gi-container" style={{ maxWidth: '900px' }}>
        {FAQS.map((faq, i) => (
          <FAQItem 
            key={i} 
            faq={faq} 
            isOpen={openIndex === i} 
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)} 
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick, index }) {
  const revealRef = useReveal();
  
  return (
    <div ref={revealRef} className="gi-reveal" style={{ transitionDelay: `${index * 50}ms`, marginBottom: '24px' }}>
      <div 
        className="gi-faq__q"
        onClick={onClick}
        style={{ 
          background: isOpen ? 'var(--ink)' : 'var(--paper)',
          color: isOpen ? 'var(--paper)' : 'var(--ink)',
          border: '3px solid var(--ink)',
          padding: '24px 32px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: isOpen ? '6px 6px 0 0 var(--punch-pink)' : '4px 4px 0 0 var(--ink)',
          transition: 'all 200ms var(--ease-out)',
          transform: isOpen ? 'translate(-2px, -2px)' : 'none'
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.background = 'var(--punch-lime)';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.currentTarget.style.background = 'var(--paper)';
        }}
      >
        <h3 style={{ margin: 0, fontSize: '24px', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase' }}>
          {faq.q}
        </h3>
        <span style={{ fontSize: '32px', lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 300ms var(--ease-out)' }}>
          +
        </span>
      </div>
      
      <div 
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 400ms var(--ease-out), opacity 400ms var(--ease-out)',
          opacity: isOpen ? 1 : 0,
          border: isOpen ? '3px solid var(--ink)' : '3px solid transparent',
          borderTop: 'none',
          background: 'var(--paper)',
          transform: isOpen ? 'translate(-2px, -2px)' : 'none',
          boxShadow: isOpen ? '6px 6px 0 0 var(--punch-pink)' : 'none',
        }}
      >
        <div style={{ padding: '32px', fontSize: '18px', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
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
          <FAQHero />
          <Marquee color="blue" items={['ASK US ANYTHING.', 'NO B.S.', 'TRANSPARENCY.', 'CLEAR ANSWERS.']} />
          <FAQAccordion />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
