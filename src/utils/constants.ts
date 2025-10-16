/**
 * Design System Constants
 *
 * Inspired by Haven Servicing's modern, professional aesthetic
 * Adapted for SHPE NJIT branding
 */

// COLOR PALETTE
export const COLORS = {
  // Primary Colors
  primary: '#f39c12',        // SHPE Orange - Keep brand identity
  primaryDark: '#e67e22',    // Darker orange for hovers

  // Navy/Dark Colors
  navy: '#1a1a2e',           // Deep navy for headers
  navyLight: '#1c4044',      // Lighter navy for text

  // Accent Colors (Haven-inspired)
  teal: '#16a085',           // Modern teal accent
  tealLight: '#64ccc2',      // Light teal for highlights
  green: '#068664',          // Forest green

  // Neutral Colors
  cream: '#f9f7f3',          // Warm background (instead of white)
  white: '#ffffff',
  lightGray: '#e8e8e8',
  gray: '#666666',
  darkGray: '#333333',

  // Semantic Colors
  success: '#068664',
  error: '#e74c3c',
  warning: '#f39c12',
  info: '#3498db',
};

// TYPOGRAPHY
export const FONTS = {
  heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
};

export const FONT_SIZES = {
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px
  base: '1rem',       // 16px
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
};

// SPACING (matches modern design systems)
export const SPACING = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
};

// BREAKPOINTS (for responsive design)
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
};

// TRANSITIONS (for smooth animations)
export const TRANSITIONS = {
  fast: 'all 0.15s ease',
  normal: 'all 0.3s ease',
  slow: 'all 0.5s ease',
};

// SHADOWS (for depth)
export const SHADOWS = {
  sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 25px rgba(0, 0, 0, 0.15)',
  xl: '0 20px 40px rgba(0, 0, 0, 0.2)',
};

// BORDER RADIUS
export const RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',  // Fully rounded (pills/circles)
};
