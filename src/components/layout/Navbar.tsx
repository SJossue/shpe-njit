import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          SHPE NJIT
        </Link>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/board" className="nav-link" onClick={closeMenu}>
              Board Members
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar" className="nav-link" onClick={closeMenu}>
              Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link" onClick={closeMenu}>
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item nav-item-cta">
            <Link to="/become-member" className="nav-link nav-link-cta" onClick={closeMenu}>
              Join SHPE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
