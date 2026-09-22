import React from 'react';
import { Phone, MapPin, Navigation, ArrowUpRight, ShieldCheck, Compass } from 'lucide-react';
import { NavigationPage } from '../types';
import { BUSINESS_DATA } from '../data/business';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#14171D] text-[#ECEEF2] border-t border-[#252A36] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Technical Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#252A36]">
          {/* Col 1: Brand & identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold tracking-tight text-white font-display">
                KALTSEIS
              </span>
              <span className="text-xs font-mono px-2 py-0.5 border border-[#84CC16]/40 text-[#84CC16] bg-[#84CC16]/10 uppercase font-semibold">
                Auto Garage
              </span>
            </div>
            
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Local automotive garage operating at Sagi 2 in 3324 Hindelbank, Switzerland. Providing direct vehicle maintenance, diagnostic troubleshooting, and automotive repair work for passenger cars and light vehicles in the Hindelbank and Bernese Mittelland region.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-[#1F242E] text-zinc-300 border border-[#2D3442]">
                LOC: 3324 HINDELBANK
              </span>
              <span className="px-2.5 py-1 bg-[#1F242E] text-zinc-300 border border-[#2D3442]">
                SWISS GRID: {BUSINESS_DATA.address.swissGrid}
              </span>
            </div>
          </div>

          {/* Col 2: Direct Contact & Location */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
              // Direct Workshop Contact
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-xs text-zinc-400 block font-mono">Telephone:</span>
                <a
                  href={BUSINESS_DATA.phoneTel}
                  className="text-xl font-bold text-white hover:text-[#38BDF8] transition-colors inline-flex items-center gap-2 mt-0.5"
                  id="footer-call-link"
                >
                  <Phone className="w-5 h-5 text-[#84CC16]" />
                  <span>{BUSINESS_DATA.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-zinc-400 block font-mono">Workshop Address:</span>
                <p className="text-sm text-zinc-200 font-medium mt-0.5">
                  {BUSINESS_DATA.address.street}
                  <br />
                  {BUSINESS_DATA.address.postalCode} {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.country}
                </p>
                <div className="mt-2 flex gap-3 text-xs font-mono">
                  <a
                    href={BUSINESS_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] hover:underline inline-flex items-center gap-1"
                  >
                    Google Maps <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <span className="text-zinc-600">|</span>
                  <a
                    href={BUSINESS_DATA.appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] hover:underline inline-flex items-center gap-1"
                  >
                    Apple Maps <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Garage Overview & Transparency */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#84CC16]">
              // Workshop Directory
            </div>

            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between w-full text-left py-1"
                >
                  <span>Workshop Overview</span>
                  <span className="text-xs font-mono text-zinc-500">01</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between w-full text-left py-1"
                >
                  <span>About Garage</span>
                  <span className="text-xs font-mono text-zinc-500">02</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between w-full text-left py-1"
                >
                  <span>Workshop Services</span>
                  <span className="text-xs font-mono text-zinc-500">03</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between w-full text-left py-1"
                >
                  <span>Contact & Intake</span>
                  <span className="text-xs font-mono text-zinc-500">04</span>
                </button>
              </li>
            </ul>

            <div className="pt-2 p-3 bg-[#191D24] border border-[#272D3A] text-xs text-zinc-400">
              <div className="flex items-center gap-1.5 text-zinc-300 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>Local.ch Status: 0 listed reviews</span>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-400">
                Transparent local listing. Speak directly with the technician regarding your vehicle's condition and required work.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Exact Business Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} KALTSEIS</span>
            <span>•</span>
            <span>Category: Auto Garage</span>
            <span>•</span>
            <span>Hindelbank, Switzerland</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400">Direct Phone: 034 411 17 16</span>
            <span>•</span>
            <span className="text-zinc-400">Address: Sagi 2, 3324 Hindelbank</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
