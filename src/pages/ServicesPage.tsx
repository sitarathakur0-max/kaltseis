import React, { useState } from 'react';
import { Phone, ArrowRight, Wrench, ShieldAlert, CheckCircle, Info, ChevronRight, FileCheck } from 'lucide-react';
import { WORKSHOP_SECTORS, BUSINESS_DATA } from '../data/business';
import { NavigationPage } from '../types';

interface ServicesPageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const [activeSector, setActiveSector] = useState(WORKSHOP_SECTORS[0].code);

  const selectedSector = WORKSHOP_SECTORS.find((s) => s.code === activeSector) || WORKSHOP_SECTORS[0];

  const handleInquire = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <section className="border-b border-[#E5E0D8] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold mb-3">
          <span className="w-2 h-2 bg-[#84CC16]"></span>
          <span>// 03 Garage Workshop Services</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14171D] font-display tracking-tight">
              Practical vehicle repairs, diagnostics, and routine maintenance.
            </h1>
            <p className="text-base sm:text-lg text-[#404654] leading-relaxed max-w-2xl">
              From troubleshooting engine warning lamps and abnormal chassis noises to seasonal tire mounting and pre-MFK roadworthiness checks, Kaltseis provides hands-on mechanical care at Sagi 2 in Hindelbank.
            </p>
          </div>

          {/* Pricing Policy Box (Authentic & Honest - No Fake Prices!) */}
          <div className="lg:col-span-4 bg-[#F5F2EB] border border-[#E5E0D8] p-5 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-[#14171D]">
              <Info className="w-4 h-4 text-[#0052FF]" />
              <span className="font-mono uppercase tracking-wider">Transparent Quote Policy</span>
            </div>
            <p className="text-[#5B6271] leading-relaxed">
              We do not post generic, fabricated prices. Vehicle needs vary significantly based on vehicle age, mileage, model specifications, and part availability.
            </p>
            <p className="text-[#14171D] font-semibold pt-1">
              Call <a href={BUSINESS_DATA.phoneTel} className="text-[#0052FF] hover:underline font-mono">034 411 17 16</a> for a direct estimate tailored to your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Service Inspector / Workshop Catalog */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Technical Sector List */}
        <div className="lg:col-span-5 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#5B6271] mb-2 font-semibold">
            Select Workshop Scope:
          </div>

          <div className="space-y-2">
            {WORKSHOP_SECTORS.map((sector) => {
              const isSelected = sector.code === activeSector;
              return (
                <button
                  key={sector.code}
                  onClick={() => setActiveSector(sector.code)}
                  className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-[#0052FF] bg-[#0052FF]/5 shadow-xs'
                      : 'border-[#E5E0D8] bg-white hover:border-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 ${
                        isSelected ? 'bg-[#0052FF] text-white' : 'bg-[#14171D] text-white'
                      }`}
                    >
                      {sector.index}
                    </span>
                    <div>
                      <div className="text-xs font-mono text-[#5B6271]">{sector.category}</div>
                      <div className="text-sm font-bold text-[#14171D] font-display">
                        {sector.title}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#0052FF] translate-x-1' : 'text-zinc-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: In-Depth Service Specification Panel */}
        <div className="lg:col-span-7 bg-white border border-[#E5E0D8] p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#E5E0D8] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0052FF]">
                <span className="w-2 h-2 bg-[#84CC16]"></span>
                <span>CODE // {selectedSector.code}</span>
                <span>•</span>
                <span>{selectedSector.category}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#14171D] font-display mt-1">
                {selectedSector.title}
              </h2>
            </div>

            <span className="text-xs font-mono px-3 py-1 bg-[#F5F2EB] text-[#14171D] border border-[#E5E0D8] self-start sm:self-center">
              Sagi 2, Hindelbank
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#404654] leading-relaxed">
            {selectedSector.summary}
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#14171D] font-bold">
              Included Workshop Inspection & Tasks:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedSector.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#FAF8F5] border border-[#E5E0D8] text-xs text-[#2A2F3A] flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#5B6271]">
              <div>INQUIRY READY FOR: {selectedSector.title}</div>
              <div className="text-[#0052FF] font-semibold">DIRECT TEL: {BUSINESS_DATA.phone}</div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_DATA.phoneTel}
                className="px-4 py-2.5 bg-[#14171D] hover:bg-black text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>Call Directly</span>
              </a>

              <button
                onClick={() => handleInquire(selectedSector.title)}
                className="px-5 py-2.5 bg-[#0052FF] hover:bg-[#0043D9] text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MFK Special Focus Section (Authentic Swiss requirement) */}
      <section className="bg-[#14171D] text-white p-8 sm:p-12 border border-[#252A36]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#84CC16] font-semibold flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#84CC16]" />
              <span>Official Swiss Motor Vehicle Inspection (MFK)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Preparing Your Car for the Official Cantonal Inspection
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
              Have you received an official invitation for your periodic vehicle inspection (Motorfahrzeugkontrolle) in the Canton of Bern? Bringing your car to Kaltseis in advance allows critical road-safety items — including lighting alignment, brake balance, chassis condition, and fluid leaks — to be rectified prior to presenting the vehicle at the test center.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={BUSINESS_DATA.phoneTel}
              className="w-full py-3 bg-[#0052FF] hover:bg-[#0043D9] text-white font-bold text-xs font-mono flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#84CC16]" />
              <span>CALL 034 411 17 16 FOR MFK CHECK</span>
            </a>
            <button
              onClick={() => handleInquire('Pre-Inspection Preparation (MFK)')}
              className="w-full py-3 bg-[#242A36] hover:bg-[#2F3645] text-white font-semibold text-xs font-mono text-center border border-[#3A4252] transition-colors"
            >
              Ask About MFK Inspection Check
            </button>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="text-center space-y-4 py-8 border-t border-[#E5E0D8]">
        <h3 className="text-2xl font-bold font-display text-[#14171D]">
          Need an unlisted repair or have a specific vehicle question?
        </h3>
        <p className="text-sm text-[#5B6271] max-w-lg mx-auto">
          Contact Kaltseis directly. We will be glad to evaluate your vehicle's requirements and advise you on the next steps.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <a
            href={BUSINESS_DATA.phoneTel}
            className="bg-[#0052FF] hover:bg-[#0043D9] text-white px-6 py-3 font-bold text-sm tracking-wide inline-flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#84CC16]" />
            <span>Call 034 411 17 16</span>
          </a>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#14171D] hover:bg-black text-white px-6 py-3 font-bold text-sm transition-colors"
          >
            Submit an Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};
