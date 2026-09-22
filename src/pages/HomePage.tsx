import React from 'react';
import { Phone, MapPin, ArrowRight, Shield, Check, Compass, AlertCircle, Wrench, Clock, CornerRightDown } from 'lucide-react';
import { BUSINESS_DATA, WORKSHOP_SECTORS, ACCESS_ROUTES } from '../data/business';
import { NavigationPage } from '../types';
import { VehicleInquiryCalculator } from '../components/VehicleInquiryCalculator';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onPrefillInquiry: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onPrefillInquiry }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION - Strong Asymmetric Technical Layout */}
      <section className="relative pt-6 sm:pt-12 pb-8 border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Top metadata badge bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5B6271] pb-6 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#84CC16] rounded-none"></span>
              <span className="text-[#14171D] font-bold tracking-wider">KALTSEIS</span>
              <span className="text-zinc-400">//</span>
              <span>AUTO GARAGE</span>
              <span className="text-zinc-400">//</span>
              <span>HINDELBANK, CH</span>
            </div>
            <div className="flex items-center gap-4">
              <span>LOCAL.CH: {BUSINESS_DATA.localChReviews.toUpperCase()} REVIEWS</span>
              <span className="hidden sm:inline text-zinc-300">|</span>
              <span className="text-[#0052FF] font-semibold">DIRECT TEL: {BUSINESS_DATA.phone}</span>
            </div>
          </div>

          {/* Asymmetric Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 items-start">
            {/* Left 7 Columns: Editorial Headline, Explanation, and Immediate CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-xs font-mono uppercase tracking-widest px-2.5 py-1 bg-[#0052FF]/10 text-[#0052FF] font-bold border border-[#0052FF]/20">
                  Automotive Workshop in Hindelbank
                </span>
                
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#14171D] tracking-tight leading-[1.08] font-display">
                  Independent auto garage focused on honest mechanical care.
                </h1>

                <p className="text-base sm:text-lg text-[#404654] leading-relaxed max-w-2xl">
                  Kaltseis is a local automotive garage based at Sagi 2 in 3324 Hindelbank, Switzerland. We offer direct vehicle repairs, diagnostic troubleshooting, scheduled vehicle servicing, and preparation for Swiss roadworthiness inspections.
                </p>
              </div>

              {/* Technical quick reference grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono border-y border-[#E5E0D8] py-4 bg-[#F5F2EB]/50">
                <div className="p-2.5 space-y-1 border-l-2 border-[#0052FF]">
                  <span className="text-[#5B6271] block">WORKSHOP LOCATION</span>
                  <span className="font-bold text-[#14171D] text-sm block">
                    {BUSINESS_DATA.address.street}, {BUSINESS_DATA.address.postalCode} {BUSINESS_DATA.address.city}
                  </span>
                  <span className="text-[11px] text-zinc-500">Canton of Bern • Near Burgdorf & Schönbühl</span>
                </div>

                <div className="p-2.5 space-y-1 border-l-2 border-[#84CC16]">
                  <span className="text-[#5B6271] block">WORKSHOP REACHABILITY</span>
                  <a
                    href={BUSINESS_DATA.phoneTel}
                    className="font-bold text-[#0052FF] hover:underline text-sm block"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                  <span className="text-[11px] text-zinc-500">Call directly to coordinate drop-off & inspection</span>
                </div>
              </div>

              {/* Main CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={BUSINESS_DATA.phoneTel}
                  id="hero-call-cta"
                  className="bg-[#0052FF] hover:bg-[#0043D9] text-white px-6 py-4 text-base font-bold tracking-wide flex items-center justify-center gap-2.5 transition-colors shadow-sm group"
                >
                  <Phone className="w-5 h-5 text-[#84CC16]" />
                  <span>Call the Garage</span>
                  <span className="text-xs font-mono font-normal opacity-90">({BUSINESS_DATA.phone})</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('vehicle-intake-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('contact');
                    }
                  }}
                  id="hero-ask-cta"
                  className="bg-[#14171D] hover:bg-[#20252E] text-white px-5 py-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors border border-[#2B313F]"
                >
                  <span>Ask About Your Vehicle</span>
                  <ArrowRight className="w-4 h-4 text-[#84CC16]" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id="hero-contact-cta"
                  className="bg-white hover:bg-[#F3EFE9] text-[#14171D] px-5 py-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors border border-[#DCD6CA]"
                >
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Realistic Automotive Inspection Visual with Technical Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#14171D] bg-[#14171D] p-2 shadow-xl">
                {/* Authentic automotive garage image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                    alt="Automotive inspection on workshop vehicle lift at Kaltseis Auto Garage"
                    className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle technical overlay badge */}
                  <div className="absolute top-3 left-3 bg-[#14171D]/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono text-white border border-[#2A3140] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#84CC16]"></span>
                    <span>GARAGE SPEC // SAGI 2</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#14171D]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-zinc-300 border border-[#2A3140]">
                    CH-3324 HINDELBANK
                  </div>
                </div>

                {/* Structured workshop data strip below image */}
                <div className="mt-2 p-3 bg-[#1B2029] text-xs font-mono text-zinc-300 space-y-1.5">
                  <div className="flex justify-between border-b border-[#2C3445] pb-1">
                    <span className="text-zinc-400">BUSINESS</span>
                    <span className="text-white font-semibold">{BUSINESS_DATA.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#2C3445] pb-1">
                    <span className="text-zinc-400">CATEGORY</span>
                    <span className="text-[#38BDF8]">{BUSINESS_DATA.category}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#2C3445] pb-1">
                    <span className="text-zinc-400">ADDRESS</span>
                    <span className="text-white">{BUSINESS_DATA.address.street}, {BUSINESS_DATA.address.postalCode} Hindelbank</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-zinc-400">LOCAL.CH REVIEWS</span>
                    <span className="text-[#84CC16] font-semibold">{BUSINESS_DATA.localChReviews}</span>
                  </div>
                </div>
              </div>

              {/* Micro technical note */}
              <div className="mt-3 text-[11px] font-mono text-[#5B6271] flex items-center gap-1.5">
                <span className="text-[#0052FF] font-bold">[!]</span>
                <span>Work and vehicle assessments coordinated directly via phone or on-site inquiry.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE GARAGE IN DETAIL - What Kaltseis Does (Content-Rich & Transparent) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="border-b border-[#E5E0D8] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold">
              // 01 Workshop Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14171D] font-display mt-1">
              Automotive Repair & Maintenance Scope
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5B6271] max-w-md font-mono">
            Direct, practical workshop operations for local motorists in Hindelbank and surrounding Bernese communities.
          </p>
        </div>

        {/* Asymmetric Technical Grid (No generic 3-card template!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP_SECTORS.map((sector) => (
            <div
              key={sector.index}
              className="bg-white border border-[#E5E0D8] p-6 hover:border-[#0052FF] transition-colors relative flex flex-col justify-between group"
            >
              {/* Corner crosshair decoration */}
              <div className="absolute top-2 right-2 text-zinc-300 font-mono text-[10px]">
                +{sector.code}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#14171D] text-white">
                    {sector.index}
                  </span>
                  <span className="text-xs font-mono text-[#0052FF] uppercase font-semibold">
                    {sector.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#14171D] group-hover:text-[#0052FF] transition-colors font-display">
                  {sector.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B6271] leading-relaxed">
                  {sector.summary}
                </p>

                <div className="pt-2 border-t border-[#F0ECE1] space-y-1.5">
                  {sector.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#2A2F3A]">
                      <span className="text-[#84CC16] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">
                  Assess at Sagi 2
                </span>
                <button
                  onClick={() => {
                    onPrefillInquiry(sector.title);
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-mono font-semibold text-[#0052FF] hover:underline flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE SECTION - "Ask About Your Vehicle" & Intake Assistant */}
      <section id="vehicle-intake-section" className="max-w-7xl mx-auto px-4 sm:px-8">
        <VehicleInquiryCalculator
          onNavigateToContact={(cat) => {
            if (cat) onPrefillInquiry(cat);
            onNavigate('contact');
          }}
        />
      </section>

      {/* 4. TECHNICAL DETAIL SECTION - Realistic Automotive Precision & Swiss Standards */}
      <section className="bg-[#14171D] text-white py-14 sm:py-20 border-y border-[#252A36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Mechanical Component (Realistic brake/suspension assembly photo) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative border border-[#2B313F] p-2 bg-[#1B202A]">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
                    alt="Precision brake and suspension mechanical assembly inspection"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#14171D] text-[11px] font-mono text-zinc-400 flex items-center justify-between border-t border-[#2B313F]">
                  <span>INSPECTION POINT: BRAKES & RUNNING GEAR</span>
                  <span className="text-[#84CC16]">ROADWORTHY STANDARD</span>
                </div>
              </div>
            </div>

            {/* Content description */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#84CC16] font-semibold">
                  // 02 Workshop Standard & Direct Contact
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  Clear, pragmatic repair solutions without dealership overhead.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  As an independent local auto garage in Hindelbank, Kaltseis focuses on practical, durable automotive workmanship. We assess your vehicle directly on the lift, determine what requires immediate attention versus routine monitoring, and discuss options transparently before starting work.
                </p>
                <p className="text-zinc-400 text-sm">
                  Whether you are preparing your car for the official Swiss motor vehicle inspection (MFK), replacing worn brake components, or resolving an unfamiliar mechanical noise, you speak directly with the garage.
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#252A36] text-xs font-mono">
                <div className="p-3 bg-[#1C212B] border border-[#2A3140]">
                  <span className="text-[#84CC16] block font-bold mb-1">01. DIRECT TALK</span>
                  <span className="text-zinc-300">Speak directly with the workshop about your car.</span>
                </div>
                <div className="p-3 bg-[#1C212B] border border-[#2A3140]">
                  <span className="text-[#38BDF8] block font-bold mb-1">02. TRANSPARENT</span>
                  <span className="text-zinc-300">Assessments discussed before any parts are replaced.</span>
                </div>
                <div className="p-3 bg-[#1C212B] border border-[#2A3140]">
                  <span className="text-white block font-bold mb-1">03. LOCAL ACCESSIBILITY</span>
                  <span className="text-zinc-300">Convenient location at Sagi 2, Hindelbank.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_DATA.phoneTel}
                  className="bg-[#0052FF] hover:bg-[#0043D9] text-white px-5 py-3 font-bold text-sm tracking-wide inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#84CC16]" />
                  <span>Call 034 411 17 16</span>
                </a>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white underline underline-offset-4"
                >
                  Learn About the Workshop →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORKSHOP LOCATION & ACCESS - Sagi 2, 3324 Hindelbank */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="border border-[#E5E0D8] bg-white p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E5E0D8]">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold">
                // 03 Regional Access
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14171D] font-display mt-1">
                Workshop Location & Arrival Guide
              </h2>
            </div>
            <div className="text-xs font-mono text-[#5B6271]">
              <span>SAGI 2 • 3324 HINDELBANK • SWITZERLAND</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Driving Routes */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-[#14171D] font-display">
                Driving Directions to Sagi 2:
              </h3>

              <div className="space-y-3">
                {ACCESS_ROUTES.map((route, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#E5E0D8] text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#14171D]">
                      <span className="text-sm font-display">{route.from}</span>
                      <span className="font-mono text-[#0052FF]">{route.distance} ({route.travelTime})</span>
                    </div>
                    <p className="text-[#5B6271] leading-relaxed pt-1">
                      {route.directions}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#F3EFE9] border border-[#E5E0D8] text-xs font-mono text-[#404654] space-y-1">
                <div className="font-bold text-[#14171D] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0052FF]" />
                  <span>Exact Address for GPS Navigation:</span>
                </div>
                <div>{BUSINESS_DATA.address.street}, {BUSINESS_DATA.address.postalCode} {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.country}</div>
                <div className="text-zinc-500">Coordinates: {BUSINESS_DATA.address.coordinates}</div>
              </div>
            </div>

            {/* Quick Actions & Navigation Link Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#14171D] text-white p-6 space-y-4 border border-[#252A36]">
                <div className="text-xs font-mono text-[#84CC16] uppercase tracking-wider font-semibold">
                  Direct Coordination
                </div>
                
                <h4 className="text-lg font-bold font-display text-white">
                  Planning to bring your car by?
                </h4>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  To ensure a technician is available to assess your vehicle, we recommend calling in advance before dropping off your car.
                </p>

                <div className="pt-2 space-y-2">
                  <a
                    href={BUSINESS_DATA.phoneTel}
                    className="w-full py-3 bg-[#0052FF] hover:bg-[#0043D9] text-white font-bold text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#84CC16]" />
                    <span>CALL 034 411 17 16</span>
                  </a>

                  <a
                    href={BUSINESS_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors border border-zinc-700"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Open in Google Maps</span>
                  </a>

                  <a
                    href={BUSINESS_DATA.appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors border border-zinc-700"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Open in Apple Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALLOUT BANNER - Strong and Direct */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-8">
        <div className="bg-[#0052FF] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#84CC16] font-bold">
              KALTSEIS AUTO GARAGE // HINDELBANK
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">
              Ready to speak with the garage?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Call 034 411 17 16 to discuss your car's symptoms, schedule routine maintenance, or inquire about workshop availability at Sagi 2.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 z-10 w-full sm:w-auto">
            <a
              href={BUSINESS_DATA.phoneTel}
              id="cta-bottom-call"
              className="bg-[#14171D] hover:bg-black text-white px-6 py-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#84CC16]" />
              <span>Call 034 411 17 16</span>
            </a>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="cta-bottom-contact"
              className="bg-white hover:bg-zinc-100 text-[#14171D] px-6 py-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#0052FF]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
