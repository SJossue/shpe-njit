import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './PageLayout.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;