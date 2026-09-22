import React from 'react';
import { Phone, MapPin, Wrench, Shield, CheckCircle2, ArrowRight, CornerDownRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { NavigationPage } from '../types';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Editorial Header */}
      <section className="border-b border-[#E5E0D8] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold mb-3">
          <span className="w-2 h-2 bg-[#84CC16]"></span>
          <span>// 02 About Kaltseis Auto Garage</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14171D] font-display tracking-tight">
              An independent, neighborhood workshop serving Hindelbank motorists.
            </h1>
            <p className="text-base sm:text-lg text-[#404654] leading-relaxed max-w-2xl">
              Operating at Sagi 2 in 3324 Hindelbank, Kaltseis is a dedicated local automotive garage providing honest mechanical inspections, preventative vehicle servicing, and direct customer communication.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#F5F2EB] border border-[#E5E0D8] p-5 font-mono text-xs space-y-2">
            <div className="text-[#5B6271] uppercase tracking-wider pb-1 border-b border-[#E5E0D8] font-bold">
              Business Registry Overview
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[#5B6271]">NAME:</span>
              <span className="font-bold text-[#14171D]">{BUSINESS_DATA.name}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[#5B6271]">CATEGORY:</span>
              <span className="font-semibold text-[#0052FF]">{BUSINESS_DATA.category}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[#5B6271]">ADDRESS:</span>
              <span className="text-[#14171D]">{BUSINESS_DATA.address.street}, Hindelbank</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[#5B6271]">CANTON:</span>
              <span className="text-[#14171D]">{BUSINESS_DATA.address.canton}</span>
            </div>
            <div className="flex justify-between py-0.5 border-t border-[#E5E0D8] pt-1">
              <span className="text-[#5B6271]">LOCAL.CH REVIEWS:</span>
              <span className="font-bold text-[#84CC16]">{BUSINESS_DATA.localChReviews}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Workshop Approach */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14171D] font-display">
            Direct Mechanic Interaction. No Unnecessary Layers.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#404654] leading-relaxed">
            <p>
              In large dealership complexes, vehicle owners often interact only with service receptionists or corporate advisors rather than the technicians performing the work. At Kaltseis in Hindelbank, communication is direct.
            </p>
            <p>
              When your vehicle produces an unusual vibration, an alert lamp appears on the instrument cluster, or regular service is due, you discuss the symptoms directly with the garage. We explain what was inspected, what is functioning normally, and what requires attention.
            </p>
            <p>
              We believe in practical automotive maintenance that ensures road safety and vehicle reliability across all Swiss driving seasons — from icy winter mornings on regional secondary roads to high-speed motorway travel on the nearby A1.
            </p>
          </div>

          {/* Key Principles Checklist */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-[#E5E0D8] space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-[#14171D]">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span>Transparent Diagnostics</span>
              </div>
              <p className="text-xs text-[#5B6271]">
                Clear explanations of faults and recommended repair avenues before beginning workshop labor.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E5E0D8] space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-[#14171D]">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                <span>Pragmatic Recommendations</span>
              </div>
              <p className="text-xs text-[#5B6271]">
                Prioritizing essential safety and mechanical components over unnecessary parts replacement.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E5E0D8] space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-[#14171D]">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span>Swiss Road Standards</span>
              </div>
              <p className="text-xs text-[#5B6271]">
                Attentive inspection focused on passing official Swiss roadworthiness (MFK) standards.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E5E0D8] space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-[#14171D]">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                <span>Direct Reachability</span>
              </div>
              <p className="text-xs text-[#5B6271]">
                Convenient direct phone contact at 034 411 17 16 without complex automated switchboards.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Workshop context & Transparency card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Honest transparency about Local.ch 0 reviews */}
          <div className="bg-[#14171D] text-white p-6 sm:p-8 space-y-4 border border-[#2B313F]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#84CC16] font-semibold">
              // Honest Directory Transparency
            </div>

            <h3 className="text-xl font-bold font-display text-white">
              0 Listed Reviews on Local.ch
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Kaltseis currently has 0 public reviews listed on the Swiss Local.ch business directory. Rather than fabricating fictitious customer quotes or internet testimonials, we maintain complete honesty with our visitors.
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed">
              We invite drivers across Hindelbank, Burgdorf, and neighboring localities to judge our garage through direct conversation and actual workshop craftsmanship.
            </p>

            <div className="pt-2 border-t border-[#2B313F] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Speak directly:</span>
              <a
                href={BUSINESS_DATA.phoneTel}
                className="text-xs font-mono font-bold text-[#38BDF8] hover:underline"
              >
                034 411 17 16
              </a>
            </div>
          </div>

          {/* Regional location spotlight */}
          <div className="bg-white border border-[#E5E0D8] p-6 space-y-3">
            <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">
              Local Community Connection
            </div>

            <h4 className="text-base font-bold text-[#14171D] font-display">
              Convenient Location at Sagi 2
            </h4>

            <p className="text-xs text-[#5B6271] leading-relaxed">
              The workshop is positioned conveniently in Hindelbank, providing an accessible service destination for vehicle owners in:
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1 text-xs font-mono text-[#14171D]">
              {['Hindelbank', 'Burgdorf', 'Kirchberg', 'Schönbühl', 'Mattstetten', 'Bäriswil', 'Krauchthal', 'Lyssach'].map((town) => (
                <span key={town} className="px-2 py-1 bg-[#FAF8F5] border border-[#E5E0D8]">
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Visual Section: Realistic Automotive Tools / Bay */}
      <section className="border border-[#E5E0D8] bg-white p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative">
            <div className="border border-[#14171D] bg-[#14171D] p-1.5">
              <div className="aspect-[16/10] overflow-hidden bg-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
                  alt="Automotive workshop bay and precision mechanical workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-2 text-[10px] font-mono text-zinc-500 flex justify-between">
              <span>WORKSHOP DETAIL: MECHANICAL SERVICE AREA</span>
              <span>SAGI 2 • HINDELBANK</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold">
              // Practical Inspection Methodology
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-[#14171D] font-display">
              What to Expect When Visiting Kaltseis
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#404654]">
              <div className="flex gap-3">
                <span className="font-mono text-xs font-bold text-[#0052FF] bg-[#0052FF]/10 px-2 py-0.5 h-fit">01</span>
                <div>
                  <strong className="text-[#14171D] block">Initial Assessment:</strong>
                  <span>We examine the issue, check diagnostic trouble codes, and inspect the affected mechanical components.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="font-mono text-xs font-bold text-[#0052FF] bg-[#0052FF]/10 px-2 py-0.5 h-fit">02</span>
                <div>
                  <strong className="text-[#14171D] block">Direct Consultation:</strong>
                  <span>We discuss the necessary work with you clearly before installing parts or starting extensive labor.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="font-mono text-xs font-bold text-[#0052FF] bg-[#0052FF]/10 px-2 py-0.5 h-fit">03</span>
                <div>
                  <strong className="text-[#14171D] block">Reliable Handover:</strong>
                  <span>Your car is tested, verified for road safety, and ready for pickup at Sagi 2.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_DATA.phoneTel}
                className="bg-[#0052FF] hover:bg-[#0043D9] text-white px-5 py-3 text-xs font-bold font-mono tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>Call 034 411 17 16 to Coordinate</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <section className="bg-[#14171D] text-white p-8 sm:p-12 border border-[#252A36] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Have a question about your car?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-lg">
            Call Kaltseis directly at 034 411 17 16 or visit us at Sagi 2 in Hindelbank.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={BUSINESS_DATA.phoneTel}
            className="bg-[#0052FF] hover:bg-[#0043D9] text-white px-5 py-3 text-sm font-bold flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#84CC16]" />
            <span>034 411 17 16</span>
          </a>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white hover:bg-zinc-100 text-[#14171D] px-5 py-3 text-sm font-bold transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};
