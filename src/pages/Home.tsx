import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Hero from './homepage/Hero';
import { homeContent } from '../content/homeContent';

const Home: React.FC = () => {
  const { mission, whatWeDo, convention, events, cta } = homeContent;

  return (
    <div className="home-page">
      <Hero />

      <section className="mission-section section-white">
        <div className="section-container">
          <h2 className="section-title">{mission.title}</h2>
          <p className="section-subtitle">{mission.subtitle}</p>
          <p className="mission-text">{mission.text}</p>
        </div>
      </section>

      <section className="what-we-do-section section-cream">
        <div className="section-container">
          <h2 className="section-title">{whatWeDo.title}</h2>
          <p className="section-subtitle">{whatWeDo.subtitle}</p>

          <div className="feature-grid">
            {whatWeDo.features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="convention-section">
        <div className="convention-overlay"></div>
        <div className="convention-content">
          <span className="convention-label">{convention.label}</span>
          <h2 className="convention-title">{convention.title}</h2>
          <p className="convention-description">{convention.description}</p>
          <div className="convention-buttons">
            <a
              href={convention.primaryButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-convention-primary"
            >
              {convention.primaryButton.text}
            </a>
            <Link to={convention.secondaryButton.url} className="btn-convention-secondary">
              {convention.secondaryButton.text}
            </Link>
          </div>
        </div>

        <div className="convention-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-arrow-down"></div>
        </div>
      </section>

      <section className="events-section section-white">
        <div className="section-container">
          <h2 className="section-title">{events.title}</h2>
          <p className="section-subtitle">{events.subtitle}</p>

          <div className="events-grid">
            {events.upcomingEvents.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-date">
                  <span className="event-month">{event.month}</span>
                  <span className="event-day">{event.day}</span>
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="event-location">📍 {event.location}</span>
                </div>
              </div>
            ))}
          </div>

          <Link to="/events" className="btn-secondary-outline">
            View All Events
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">{cta.title}</h2>
          <p className="cta-text">{cta.text}</p>
          <Link to={cta.buttonUrl} className="btn-cta-large">
            {cta.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
