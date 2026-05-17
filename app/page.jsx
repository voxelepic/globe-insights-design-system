"use client";

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useReveal, useCountUp, Cursor, Nav, Marquee, Footer } from '../components/shared';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

/* ============================================================
   HERO — parallax + 3D depth + letter pop-in
   ============================================================ */
function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tripsRef   = useCountUp(2847);
  const priceRef   = useCountUp(412);
  const hoursRef   = useCountUp(48);

  return (
    <section className="gi-hero">
      <div className="gi-hero__bg-type" style={{ transform: `translateY(${y * 0.25}px)` }}>WEEKEND</div>
      <div className="gi-hero__bg-type gi-hero__bg-type--2" style={{ transform: `translateY(${y * -0.18}px)` }}>SHORT</div>

      <div className="gi-bg-shapes" aria-hidden="true">
        <div className="gi-hero__shape-1 gi-shape--circle" style={{ transform: `translateY(${y * -0.12}px)` }} />
        <div className="gi-hero__shape-2"                   style={{ transform: `translateY(${y * -0.22}px)` }} />
        <div className="gi-hero__shape-3 gi-shape--circle"  style={{ transform: `translateY(${y * -0.16}px)` }} />
        <div className="gi-hero__shape-4 gi-shape--circle"  style={{ transform: `translateY(${y * -0.28}px)` }} />
      </div>

      <div className="gi-container gi-hero__inner">
        <div className="gi-hero__left">
          <span className="gi-eyebrow"><span className="gi-eyebrow__dot" />SHORT TRIPS · BIG WINS</span>
          <h1 className="gi-hero__h1">
            <span className="gi-line"><span>SHORT TRIPS.</span></span>
            <span className="gi-line"><span>LONG MEMORIES.</span></span>
            <span className="gi-line"><span><span className="gi-hero__h1-pink">ZERO B.S.</span></span></span>
          </h1>
          <p className="gi-hero__sub">
            You give us a weekend. We give you a city. 3 days max.<br/>
            1 carry-on. Best comfort per dollar, every time.
          </p>
          <div className="gi-hero__ctas">
            <a className="gi-btn gi-btn--primary gi-btn--lg">PLAN MY TRIP <span className="gi-arrow">→</span></a>
            <a className="gi-btn gi-btn--lg">SEE THE PLANS</a>
          </div>
          <div className="gi-hero__stats">
            <div className="gi-stat"><b ref={tripsRef}>0</b><span>TRIPS BOOKED</span></div>
            <div className="gi-stat"><b>€<span ref={priceRef}>0</span></b><span>AVG · ALL IN</span></div>
            <div className="gi-stat"><b><span ref={hoursRef}>0</span>H</b><span>AVG TRIP</span></div>
          </div>
        </div>

        <div className="gi-hero__right">
          <div className="gi-hero__card gi-hero__card--front" style={{ transform: `translate3d(0, ${y * -0.08}px, 0) rotate(-1.5deg) perspective(1200px) rotateY(${Math.min(y * 0.02, 4)}deg)` }}>
            <div className="gi-hero__card-img" />
            <div className="gi-hero__card-meta">LIS অত্যাবশ্যক 48H</div>
            <div className="gi-hero__card-price">€420 ALL IN</div>
          </div>
          <div className="gi-hero__card gi-hero__card--back" style={{ transform: `translate3d(0, ${y * -0.04}px, 0) rotate(2deg)` }}>
            <div className="gi-hero__card-meta">PORTO / 36H</div>
            <div className="gi-hero__card-price">€380</div>
          </div>
          <div className="gi-sticker gi-hero__sticker" style={{ transform: `translateY(${y * -0.18}px) rotate(-8deg)` }}>
            <b>48H</b><span>TRIP</span>
          </div>
          <div className="gi-sticker gi-hero__sticker--2" style={{ transform: `translateY(${y * -0.3}px) rotate(6deg)` }}>1 CARRY-ON</div>
          <div className="gi-sticker gi-hero__sticker--3" style={{ transform: `translateY(${y * -0.22}px) rotate(14deg)` }}>NEW</div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRIPS
   ============================================================ */
const TRIPS = [
  { city: 'LISBON',   meta: '48H · 2 FLIGHTS', price: '€420', tilt: -1.5, img: 'lisbon',   color: 'c1', sticker: 'NEW' },
  { city: 'PORTO',    meta: '36H · 1 FLIGHT',  price: '€380', tilt: 1.5,  img: 'porto',    color: 'c2', sticker: 'HOT' },
  { city: 'OSLO',     meta: '48H · 2 FLIGHTS', price: '€460', tilt: -2,   img: 'oslo',     color: 'c3', sticker: '' },
  { city: 'BUDAPEST', meta: '60H · 1 FLIGHT',  price: '€340', tilt: 1,    img: 'budapest', color: 'c4', sticker: '−€80' },
  { city: 'SEVILLE',  meta: '48H · 1 FLIGHT',  price: '€395', tilt: -1,   img: 'seville',  color: 'c5', sticker: '' },
  { city: 'ATHENS',   meta: '60H · 2 FLIGHTS', price: '€440', tilt: 2,    img: 'athens',   color: 'c6', sticker: '' },
];

function TripCards() {
  const headRef = useReveal();
  return (
    <section className="gi-trips">
      <div className="gi-container">
        <div ref={headRef} className="gi-reveal gi-trips__head">
          <h2 className="gi-trips__title">PICK A WEEKEND.<br/>LEAVE <span className="gi-pink-mark">FRIDAY.</span></h2>
          <p className="gi-trips__sub">Six plans, all priced all-in. Flights, beds, transit, the lot. Pick one. Pack one bag.</p>
        </div>
        <div className="gi-trips__grid">
          {TRIPS.map((t, i) => <TripCard key={i} {...t} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function TripCard({ city, meta, price, tilt, img, color, sticker, index }) {
  const ref = useRef(null);
  const reveal = useReveal();
  const [tx, setTx] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -8;
    setTx({ x, y });
  };
  const onLeave = () => setTx({ x: 0, y: 0 });

  return (
    <div ref={reveal} className="gi-reveal" style={{ transitionDelay: (index * 80) + 'ms' }}>
      <a
        ref={ref}
        className={"gi-trip gi-trip--" + color}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          transform: `rotate(${tilt}deg) perspective(1200px) rotateY(${tx.x}deg) rotateX(${tx.y}deg)`
        }}
      >
        <div className={"gi-trip__img gi-trip__img--" + img}>
          <span className="gi-trip__num">0{index + 1}</span>
          {sticker && <span className="gi-trip__sticker">{sticker}</span>}
        </div>
        <div className="gi-trip__body">
          <div className="gi-trip__meta">{meta}</div>
          <div className="gi-trip__city">{city}</div>
          <div className="gi-trip__row">
            <span className="gi-trip__price">{price}</span>
            <span className="gi-trip__cta">BOOK <span className="gi-arrow">→</span></span>
          </div>
        </div>
      </a>
    </div>
  );
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */
function HowItWorks() {
  const head = useReveal();
  const grid = useReveal();
  const steps = [
    { n: '01', t: 'TELL US YOUR WEEKEND', d: 'One form. 4 fields. 30 seconds. Where you live, what you got, what kind of food you want at 11pm.' },
    { n: '02', t: 'WE BUILD THE PLAN',    d: 'Real itinerary. Flights, hotel, the one tram you should take. Everything timed to the minute.' },
    { n: '03', t: 'YOU TAP BOOK',         d: 'One button. Everything reserved at once. Confirmations land in your inbox in under a minute.' },
    { n: '04', t: 'GO',                   d: 'Friday 6pm wheels-up. Sunday 11pm home. Show up. We handled the rest.' },
  ];
  return (
    <section className="gi-how">
      <div className="gi-how__bg" aria-hidden="true">
        <div className="gi-how__bg-shape-1" />
        <div className="gi-how__bg-shape-2" />
      </div>
      <div className="gi-container">
        <div ref={head} className="gi-reveal gi-how__head">
          <span className="gi-tag gi-tag--ink">FEATURED</span>
          <h2 className="gi-how__title">FOUR STEPS.<br/>NO HOMEWORK.</h2>
        </div>
        <div ref={grid} className="gi-reveal gi-how__grid">
          {steps.map((s, i) => (
            <div className="gi-how__step" key={i} style={{ transitionDelay: (i * 100) + 'ms' }}>
              <div className="gi-how__n">{s.n}</div>
              <h3 className="gi-how__t">{s.t}</h3>
              <p className="gi-how__d">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   QUOTES
   ============================================================ */
function Quotes() {
  const head = useReveal();
  const quotes = [
    { q: '"Booked Friday morning. On a tram in Lisbon by 9pm."',     who: 'MAYA · BERLIN',     tilt: -1 },
    { q: '"Planned Porto in 30 seconds. Best food trip of my life."', who: 'JONAS · COPENHAGEN', tilt: 1.5 },
    { q: '"€340 for Budapest, all in. I checked twice."',             who: 'PRIYA · LONDON',     tilt: -1.5 },
  ];
  return (
    <section className="gi-quotes">
      <div className="gi-container">
        <h2 ref={head} className="gi-reveal gi-quotes__title">REAL TRIPS.<br/>REAL <em>RECEIPTS.</em></h2>
        <div className="gi-quotes__grid">
          {quotes.map((q, i) => <Quote key={i} {...q} index={i} />)}
        </div>
      </div>
    </section>
  );
}
function Quote({ q, who, tilt, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="gi-quote gi-reveal" style={{ transform: `rotate(${tilt}deg)`, transitionDelay: (index * 120) + 'ms' }}>
      <p className="gi-quote__q">{q}</p>
      <div className="gi-quote__who">{who}</div>
    </div>
  );
}

export default function App() {
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
          <Hero />
          <Marquee color="pink" items={['CHEAP.', 'FAST.', 'SHORT.', 'COMFORTABLE.', 'CHEAP.', 'FAST.', 'SHORT.', 'COMFORTABLE.']} />
          <TripCards />
          <Marquee color="lime" reverse items={['48H', '1 CARRY-ON', 'BEST COMFORT PER €', '€420 ALL IN', '48H', '1 CARRY-ON', 'BEST COMFORT PER €', '€420 ALL IN']} />
          <HowItWorks />
          <Marquee color="blue" items={['BERLIN ↔ LISBON', 'COPENHAGEN ↔ PORTO', 'LONDON ↔ BUDAPEST', 'PARIS ↔ SEVILLE', 'AMSTERDAM ↔ ATHENS']} />
          <Quotes />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
