import React, { useState } from 'react';
import { Wrench, Phone, FileText, CheckCircle2, Copy, ArrowRight, Info } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { NavigationPage } from '../types';

interface Props {
  onNavigateToContact: (prefilledService?: string) => void;
}

export const VehicleInquiryCalculator: React.FC<Props> = ({ onNavigateToContact }) => {
  const [vehicleType, setVehicleType] = useState('Passenger Car');
  const [inquiryType, setInquiryType] = useState('Routine Maintenance');
  const [symptom, setSymptom] = useState('');
  const [copied, setCopied] = useState(false);

  const vehicleTypes = [
    'Passenger Car',
    'Station Wagon / Kombi',
    'SUV / 4x4',
    'Van / Light Utility',
  ];

  const inquiryTypes = [
    { id: 'Routine Maintenance', label: 'Routine Service / Oil & Fluids', code: 'SRV-01' },
    { id: 'Mechanical Concern', label: 'Mechanical Issue / Abnormal Sound', code: 'MEC-02' },
    { id: 'Warning Indicator', label: 'Dashboard Warning Light / Diagnosis', code: 'DIAG-03' },
    { id: 'Brakes & Running Gear', label: 'Brakes, Suspension or Steering', code: 'BRK-04' },
    { id: 'Tire & Wheel Check', label: 'Tire Mounting or Wheel Change', code: 'TIR-05' },
    { id: 'MFK Inspection Prep', label: 'Pre-Inspection Check (MFK)', code: 'MFK-06' },
    { id: 'General Inquiry', label: 'General Workshop Question', code: 'GEN-07' },
  ];

  const generatedScript = `Inquiry for Kaltseis Auto Garage (Hindelbank)
Vehicle: ${vehicleType}
Inquiry Category: ${inquiryType}
Notes/Symptoms: ${symptom.trim() || 'General assessment requested'}
Address of Garage: Sagi 2, 3324 Hindelbank
Direct Phone: 034 411 17 16`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleProceed = () => {
    onNavigateToContact(inquiryType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF8F5] border border-[#E2DDD3] shadow-sm">
      {/* Header bar */}
      <div className="bg-[#14171D] text-white p-5 sm:p-6 border-b border-[#242A38] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#84CC16]"></span>
            Interactive Workshop Intake Assistant
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display mt-1 text-white">
            Ask About Your Vehicle
          </h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-xl font-mono">
            Structure your vehicle inquiry before calling or messaging the garage at Sagi 2, Hindelbank.
          </p>
        </div>

        <div className="text-right hidden sm:block font-mono text-xs text-zinc-400">
          <div>GARAGE: KALTSEIS</div>
          <div className="text-[#84CC16]">TEL: 034 411 17 16</div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Step 1: Vehicle Category */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-[#5B6271] block mb-2 font-semibold">
            1. Select Vehicle Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {vehicleTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setVehicleType(type)}
                className={`p-3 text-left border text-xs sm:text-sm font-semibold transition-all ${
                  vehicleType === type
                    ? 'border-[#0052FF] bg-[#0052FF]/10 text-[#0052FF]'
                    : 'border-[#E2DDD3] bg-white text-[#14171D] hover:border-zinc-400'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Service / Issue Category */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-[#5B6271] block mb-2 font-semibold">
            2. Primary Inquiry Subject
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {inquiryTypes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setInquiryType(item.id)}
                className={`p-3 text-left border transition-all flex flex-col justify-between ${
                  inquiryType === item.id
                    ? 'border-[#0052FF] bg-[#0052FF]/10 text-[#0052FF]'
                    : 'border-[#E2DDD3] bg-white text-[#14171D] hover:border-zinc-400'
                }`}
              >
                <span className="text-xs font-mono text-zinc-500 mb-1">{item.code}</span>
                <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Brief Symptom or Details */}
        <div>
          <label htmlFor="symptom-input" className="text-xs font-mono uppercase tracking-wider text-[#5B6271] block mb-2 font-semibold">
            3. Specific Notes or Symptoms (Optional)
          </label>
          <input
            id="symptom-input"
            type="text"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            placeholder="e.g. Squeaking noise while turning, inspection due date, or tire size"
            className="w-full bg-white border border-[#E2DDD3] p-3 text-sm text-[#14171D] placeholder-zinc-400 focus:outline-none focus:border-[#0052FF]"
          />
        </div>

        {/* Real Guidance Box (No fake prices) */}
        <div className="bg-[#F3EFE9] border border-[#E2DDD3] p-4 text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#14171D]">
            <Info className="w-4 h-4 text-[#0052FF]" />
            <span>Honest Workshop Procedure at Kaltseis:</span>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            As a local independent auto garage, assessments and quotes are provided individually based on your specific vehicle make, model, and required work. Please have your Swiss vehicle registration certificate (<span className="font-semibold text-zinc-800">Fahrzeugausweis</span>) ready when contacting the garage.
          </p>
        </div>

        {/* Action Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2.5 bg-white border border-[#E2DDD3] hover:border-zinc-400 text-xs font-mono font-semibold text-[#14171D] flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                  <span>Summary Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-500" />
                  <span>Copy Inquiry Summary</span>
                </>
              )}
            </button>

            <a
              href={BUSINESS_DATA.phoneTel}
              className="px-4 py-2.5 bg-[#14171D] hover:bg-black text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Call: 034 411 17 16</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleProceed}
            className="px-5 py-2.5 bg-[#0052FF] hover:bg-[#0043D9] text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>Proceed to Contact Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
