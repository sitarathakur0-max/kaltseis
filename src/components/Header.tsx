import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Wrench, MapPin } from 'lucide-react';
import { NavigationPage } from '../types';
import { BUSINESS_DATA } from '../data/business';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationPage; label: string; tag: string }[] = [
    { id: 'home', label: 'Workshop', tag: '01' },
    { id: 'about', label: 'About Garage', tag: '02' },
    { id: 'services', label: 'Services', tag: '03' },
    { id: 'contact', label: 'Contact & Location', tag: '04' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2D8]">
      {/* Top micro-bar: Swiss technical coordinates & direct status */}
      <div className="bg-[#14171D] text-[#ECEEF2] text-xs font-mono px-4 sm:px-8 py-1.5 border-b border-[#252A36]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse mr-2"></span>
              <span className="text-zinc-300">AUTO GARAGE HINDELBANK</span>
            </span>
            <span className="hidden md:inline text-zinc-500">|</span>
            <span className="hidden md:inline text-zinc-400">SAGI 2 • 3324 HINDELBANK</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-zinc-400 hidden sm:inline">SWITZERLAND [CH]</span>
            <a
              href={BUSINESS_DATA.phoneTel}
              className="text-[#38BDF8] hover:text-[#0052FF] font-medium tracking-wider flex items-center gap-1.5 transition-colors"
              title="Call Kaltseis direct"
            >
              <Phone className="w-3 h-3 text-[#84CC16]" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-baseline text-left group cursor-pointer focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#14171D] font-display group-hover:text-[#0052FF] transition-colors">
                  KALTSEIS
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 border border-[#14171D]/20 bg-[#F3EFE9] text-[#14171D] uppercase tracking-widest font-semibold rounded-none">
                  CH-3324
                </span>
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#5B6271] -mt-0.5">
                Auto Garage • Sagi 2 Hindelbank
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-${item.id}`}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all relative group flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0052FF] bg-[#0052FF]/10'
                      : 'text-[#2C313C] hover:text-[#0052FF] hover:bg-[#F3EFE9]'
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#5B6271] group-hover:text-[#0052FF]">
                    {item.tag}.
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0052FF]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button: Call the Garage */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              id="header-inquire-btn"
              className="text-xs font-mono uppercase tracking-wider font-semibold text-[#14171D] hover:text-[#0052FF] px-3 py-2 border border-[#E7E2D8] hover:border-[#14171D] transition-colors"
            >
              Ask About Vehicle
            </button>
            <a
              href={BUSINESS_DATA.phoneTel}
              id="header-call-btn"
              className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043D9] text-white px-4 py-2.5 text-sm font-bold tracking-wide transition-colors shadow-sm group"
            >
              <Phone className="w-4 h-4 text-[#84CC16]" />
              <span>Call 034 411 17 16</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <a
              href={BUSINESS_DATA.phoneTel}
              className="p-2 mr-2 text-[#0052FF] bg-[#0052FF]/10 border border-[#0052FF]/20"
              aria-label="Call Kaltseis"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 text-[#14171D] hover:text-[#0052FF] border border-[#E7E2D8] bg-[#FAF8F5]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E2D8] bg-[#FAF8F5] px-4 py-6 space-y-4 shadow-lg animate-fadeIn">
          <div className="p-3 bg-[#F3EFE9] border border-[#E7E2D8] text-xs font-mono text-[#5B6271] flex items-center justify-between">
            <span>LOCATION: SAGI 2, HINDELBANK</span>
            <span className="text-[#0052FF] font-semibold">TEL: 034 411 17 16</span>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`mobile-nav-${item.id}`}
                className={`w-full text-left px-4 py-3 text-base font-bold flex items-center justify-between border-l-2 ${
                  currentPage === item.id
                    ? 'border-[#0052FF] text-[#0052FF] bg-[#0052FF]/5'
                    : 'border-transparent text-[#14171D] hover:bg-[#F3EFE9]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#5B6271]">{item.tag}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={BUSINESS_DATA.phoneTel}
              id="mobile-drawer-call-btn"
              className="w-full py-3.5 bg-[#0052FF] text-white font-bold flex items-center justify-center gap-2 text-center text-sm tracking-wide shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#84CC16]" />
              <span>Call the Garage (034 411 17 16)</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              id="mobile-drawer-inquire-btn"
              className="w-full py-3 bg-[#14171D] text-white font-semibold text-center text-sm tracking-wide"
            >
              Ask About Your Vehicle
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
