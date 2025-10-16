import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    // Simulate API call (replace with actual newsletter service later)
    setTimeout(() => {
      setMessage('Thanks for subscribing! Check your email to confirm.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);

    // TODO: Integrate with actual newsletter service (Mailchimp, SendGrid, etc.)
    // Example: await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-description">
              Get the latest news, events, and opportunities delivered to your inbox
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="newsletter-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {message && <p className="newsletter-message">{message}</p>}
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-heading">SHPE NJIT</h3>
          <p className="footer-description">
            The Society of Hispanic Professional Engineers at NJIT is committed
            to empowering the Hispanic community through STEM education,
            professional development, and community service.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/board">Board Members</Link>
            </li>
            <li>
              <Link to="/become-member">Join SHPE</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Connect With Us</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:shpe@njit.edu">shpe@njit.edu</a>
            </li>
            <li>
              <Link to="/contact">Contact Form</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="social-links">
            <a
              href="https://www.instagram.com/shpenjit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/shpe-njit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/shpenjit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://shpe.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="National SHPE Website"
              className="social-icon"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} SHPE NJIT Chapter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
