import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found Page
 *
 * WHAT IT DOES:
 * - Displays when user navigates to a non-existent route
 * - Provides a friendly message and link back to home
 */

const NotFound: React.FC = () => {
  return (
    <div style={{
      padding: '6rem 2rem',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '6rem', color: '#f39c12', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem', color: '#666' }}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '1rem 2rem',
          backgroundColor: '#f39c12',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          transition: 'all 0.3s ease'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
