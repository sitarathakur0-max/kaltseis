import React from 'react';
import { Phone, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { NavigationPage } from '../types';

interface DirectCallBarProps {
  onNavigate: (page: NavigationPage) => void;
}

export const DirectCallBar: React.FC<DirectCallBarProps> = ({ onNavigate }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14171D]/95 backdrop-blur-md border-t border-[#2B313F] p-3 flex items-center gap-2">
      <a
        href={BUSINESS_DATA.phoneTel}
        id="mobile-bottom-call"
        className="flex-1 bg-[#0052FF] active:bg-[#0043D9] text-white py-3 px-4 font-bold text-sm flex items-center justify-center gap-2 text-center tracking-wide"
      >
        <Phone className="w-4 h-4 text-[#84CC16]" />
        <span>Call: 034 411 17 16</span>
      </a>

      <button
        onClick={() => {
          onNavigate('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        id="mobile-bottom-inquire"
        className="flex-1 bg-[#252A36] text-white py-3 px-3 font-semibold text-xs flex items-center justify-center gap-1.5 border border-[#3A4254] text-center"
      >
        <MessageSquareQuote className="w-4 h-4 text-[#38BDF8]" />
        <span>Ask About Vehicle</span>
      </button>
    </div>
  );
};
