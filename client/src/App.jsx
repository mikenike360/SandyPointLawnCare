import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import heroBannerFront from './1.png';
import heroBannerBack from './2.png';
import { GiHighGrass, GiGardeningShears, GiShears, GiRake, GiPreviousButton, GiNextButton } from 'react-icons/gi';

const heroCards = [
  { src: heroBannerFront, alt: 'Sandy Point Lawn Care business card front' },
  { src: heroBannerBack, alt: 'Elijah Venema business card back with contact info' },
];

const serviceIcons = {
  mowing: GiHighGrass,
  trimming: GiGardeningShears,
  weedWhack: GiShears,
  cleanup: GiRake,
};

const ServiceIcon = ({ type }) => {
  const Icon = serviceIcons[type];
  return (
    <div className="service-icon">
      <div className={`service-icon-frame service-icon-frame--${type}`}>
        <Icon className="service-icon-svg" aria-hidden="true" />
      </div>
    </div>
  );
};

const services = [
  {
    icon: 'mowing',
    title: 'Lawn Mowing',
    description: "I'll mow your whole yard and make the grass look awesome.",
  },
  {
    icon: 'trimming',
    title: 'Trimming & Edging',
    description: 'Clean edges along sidewalks, driveways, and flower beds.',
  },
  {
    icon: 'weedWhack',
    title: 'Weed Whacking',
    description: "Tough spots the mower can't reach — handled.",
  },
  {
    icon: 'cleanup',
    title: 'Yard Cleanup',
    description: 'Rake up clippings and leave your yard looking sharp.',
  },
];

const benefits = [
  {
    num: 1,
    title: 'I Show Up',
    description: "When I say I'll be there, I'll be there. No excuses.",
  },
  {
    num: 2,
    title: 'I Live Here',
    description: "I'm your neighbor in Sandy Point — not some big company.",
  },
  {
    num: 3,
    title: 'Fair Prices',
    description: 'Summer job prices, not corporate prices.',
  },
  {
    num: 4,
    title: 'I Care',
    description: "I treat every yard like it's my own.",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    window.location.href = 'tel:360-325-6301';
  };

  const showCardFront = () => setCardFlipped(false);
  const showCardBack = () => setCardFlipped(true);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="Sandy Point Lawn Care" className="logo-img" />
          </div>

          <ul className="nav-menu">
            <li>
              <button onClick={() => scrollToSection('services')} className="nav-link">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('pricing')} className="nav-link">
                Pricing
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </li>
          </ul>

          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('pricing')} className="mobile-nav-link">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              Contact
            </button>
          </div>
        )}
      </nav>

      <section className="hero" id="hero">
        <div className="cloud cloud-1" aria-hidden="true" />
        <div className="cloud cloud-2" aria-hidden="true" />
        <div className="cloud cloud-3" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-card-carousel">
            <button
              type="button"
              className="hero-card-arrow hero-card-arrow--left"
              onClick={showCardFront}
              aria-label="Show front of business card"
              disabled={!cardFlipped}
            >
              <GiPreviousButton aria-hidden="true" />
            </button>

            <div className="hero-card-scene">
              <div className={`hero-card ${cardFlipped ? 'flipped' : ''}`}>
                <div className="hero-card-face hero-card-face--front">
                  <img src={heroCards[0].src} alt={heroCards[0].alt} className="hero-banner" />
                </div>
                <div className="hero-card-face hero-card-face--back">
                  <img src={heroCards[1].src} alt={heroCards[1].alt} className="hero-banner" />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="hero-card-arrow hero-card-arrow--right"
              onClick={showCardBack}
              aria-label="Show back of business card"
              disabled={cardFlipped}
            >
              <GiNextButton aria-hidden="true" />
            </button>
          </div>

          <p className="hero-card-hint">
            {cardFlipped ? 'Back of card — Elijah\'s contact info' : 'Front of card — tap arrow to flip!'}
          </p>

          <div className="hero-content">
            <h1 className="hero-title">Hi, I&apos;m Elijah!</h1>
            <p className="hero-subtitle">Lawn Mowing Expert in Sandy Point</p>
            <p className="hero-tagline">Get your lawn trimmed and groomed this summer!</p>
            <button className="cta-button" onClick={handleContactClick}>
              Call Me!
            </button>
          </div>
        </div>

        <div className="ground-strip" aria-hidden="true" />
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <ServiceIcon type={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">Why Hire Me?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.num} className="benefit-item">
                <div className="benefit-badge">{benefit.num}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container">
          <h2 className="section-title">Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card pricing-card--featured">
              <p className="pricing-label">Standard Yard</p>
              <p className="pricing-amount">$30</p>
              <p className="pricing-note">Most yards in Sandy Point</p>
            </div>
            <div className="pricing-card">
              <p className="pricing-label">Larger Yard</p>
              <p className="pricing-amount">$30+</p>
              <p className="pricing-note">Small upcharge for bigger lawns — I&apos;ll give you a fair quote!</p>
            </div>
            <div className="pricing-card pricing-card--addon">
              <p className="pricing-label">Add-On</p>
              <p className="pricing-amount">+$15</p>
              <p className="pricing-note">Weed eating for spots the mower can&apos;t reach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-card">
              <div className="contact-item">
                <h3>Phone</h3>
                <a href="tel:360-325-6301">360-325-6301</a>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:eli@sandypointlawncare.com">eli@sandypointlawncare.com</a>
              </div>
              <div className="contact-item">
                <h3>Website</h3>
                <p>sandypointlawncare.com</p>
              </div>
            </div>
          </div>
          <button className="cta-button cta-large cta-light" onClick={handleContactClick}>
            Call Elijah!
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-ground" aria-hidden="true" />
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sandy Point Lawn Care</h4>
            <p>Summer business by Elijah Venema — mowing lawns in Sandy Point!</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection('services')}>Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')}>Pricing</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Phone: <a href="tel:360-325-6301">360-325-6301</a></p>
            <p>Email: <a href="mailto:eli@sandypointlawncare.com">eli@sandypointlawncare.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Sandy Point Lawn Care. All rights reserved.</p>
          <p className="footer-credit">
            Made with <span className="footer-heart" aria-label="love">❤</span> by{' '}
            <a href="https://www.venomlabs.xyz/" target="_blank" rel="noopener noreferrer">
              VenomLabs
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
