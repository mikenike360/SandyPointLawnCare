import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    window.location.href = 'tel:360-325-6301';
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Sandy Point Lawn Care" className="logo-img" />
          </div>

          {/* Desktop Menu */}
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
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Professional Lawn Care Services</h1>
          <p className="hero-tagline">Reliable service with a personal touch</p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {[
              {
                title: 'Lawn Mowing',
                description: 'Regular maintenance with precision cutting and edging for a pristine finish.',
              },
              {
                title: 'Trimming & Edging',
                description: 'Professional trimming and clean edges to frame your landscape beautifully.',
              },
              {
                title: 'Seasonal Cleanup',
                description: 'Spring and fall cleanup services to keep your yard looking its best year-round.',
              },
              {
                title: 'Fertilization',
                description: 'Custom fertilization programs to promote healthy, vibrant grass growth.',
              },
              {
                title: 'Weed Control',
                description: 'Targeted weed control solutions to keep your lawn weed-free and pristine.',
              },
              {
                title: 'Mulch & Landscape',
                description: 'Professional mulching and landscape design to enhance your property\'s curb appeal.',
              },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <span>🌿</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-badge">1</div>
              <h3>Expert Care</h3>
              <p>With years of experience, we deliver professional lawn care services that exceed expectations.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-badge">2</div>
              <h3>Local Service</h3>
              <p>We're your trusted local lawn care provider, serving the Sandy Point community with pride.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-badge">3</div>
              <h3>Reliable & Prompt</h3>
              <p>Dependable service every time. We arrive on schedule and complete work to your satisfaction.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-badge">4</div>
              <h3>Personal Touch</h3>
              <p>We treat your lawn like our own, delivering customized solutions tailored to your property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-card">
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <a href="tel:360-325-6301">360-325-6301</a>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <a href="mailto:eli@sandypointlawncare.com">eli@sandypointlawncare.com</a>
              </div>
              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>4550 Decatur Drive<br />Ferndale, WA 98248</p>
              </div>
              <div className="contact-item">
                <h3>🌐 Website</h3>
                <p>sandypointlawncare.com</p>
              </div>
            </div>
          </div>
          <button className="cta-button cta-large" onClick={handleContactClick}>
            Call Us Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sandy Point Lawn Care</h4>
            <p>Professional lawn care services for the Sandy Point community.</p>
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
          <p>&copy; 2024 Sandy Point Lawn Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
