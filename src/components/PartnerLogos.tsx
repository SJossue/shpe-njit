import React from 'react';
import './PartnerLogos.css';

interface Partner {
  name: string;
  logo: string;
}

const PartnerLogos: React.FC = () => {
  // Add your partner company logos here
  const partners: Partner[] = [
    { name: 'Company 1', logo: '/logos/partner1.png' },
    { name: 'Company 2', logo: '/logos/partner2.png' },
    { name: 'Company 3', logo: '/logos/partner3.png' },
    { name: 'Company 4', logo: '/logos/partner4.png' },
    { name: 'Company 5', logo: '/logos/partner5.png' },
    { name: 'Company 6', logo: '/logos/partner6.png' },
  ];

  return (
    <section className="partner-logos-section">
      <div className="section-container">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">Proud to work with industry leaders</p>
      </div>

      <div className="logos-scroll-container">
        <div className="logos-scroll-track">
          {/* First set of logos */}
          <div className="logos-set">
            {partners.map((partner, index) => (
              <div key={`partner-${index}`} className="logo-item">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="logos-set">
            {partners.map((partner, index) => (
              <div key={`partner-duplicate-${index}`} className="logo-item">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
