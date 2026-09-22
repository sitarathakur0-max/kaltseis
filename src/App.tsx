import React, { useState, useEffect } from 'react';
import { NavigationPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DirectCallBar } from './components/DirectCallBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Handle URL hash navigation for deep linking & browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'services' || hash === 'contact' || hash === 'home') {
        setCurrentPage(hash as NavigationPage);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const handlePrefillInquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14171D] bg-tech-grid">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 pb-16 sm:pb-0" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onPrefillInquiry={handlePrefillInquiry}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={handlePrefillInquiry}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage initialServiceCategory={prefilledService} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Call & Inquiry Bar */}
      <DirectCallBar onNavigate={handleNavigate} />
    </div>
  );
}
