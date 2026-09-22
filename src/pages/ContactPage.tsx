import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Compass, CheckCircle2, AlertCircle, Copy, ArrowRight, Clock, ShieldCheck, Car } from 'lucide-react';
import { BUSINESS_DATA, ACCESS_ROUTES } from '../data/business';

interface ContactPageProps {
  initialServiceCategory?: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  mileage: string;
  serviceCategory: string;
  message: string;
  preferredContact: 'phone' | 'email';
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceCategory = '' }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    mileage: '',
    serviceCategory: initialServiceCategory || 'General Inquiry',
    message: '',
    preferredContact: 'phone',
  });

  useEffect(() => {
    if (initialServiceCategory) {
      setFormData((prev) => ({ ...prev, serviceCategory: initialServiceCategory }));
    }
  }, [initialServiceCategory]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    details: FormState;
  } | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please provide a valid name (at least 2 characters).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required so the garage can contact you.';
    } else if (!/^[+0-9\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 079 123 45 67 or +41 34 411 17 16).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your vehicle issue or inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters describing the issue.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validate();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
    });

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic front-end transmission and reference generation
    setTimeout(() => {
      const refCode = `KALT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        referenceId: refCode,
        details: { ...formData },
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.address.full);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <section className="border-b border-[#E5E0D8] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold mb-3">
          <span className="w-2 h-2 bg-[#84CC16]"></span>
          <span>// 04 Contact & Workshop Location</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14171D] font-display tracking-tight">
              Get in touch with Kaltseis Auto Garage.
            </h1>
            <p className="text-base sm:text-lg text-[#404654] leading-relaxed max-w-2xl">
              Reach the workshop directly by telephone at <span className="font-bold text-[#14171D]">034 411 17 16</span> or submit your vehicle specifications using the intake form below.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#14171D] text-white p-6 space-y-3 font-mono text-xs border border-[#252A36]">
            <div className="text-[#84CC16] uppercase font-bold tracking-wider">
              Direct Phone Line
            </div>
            <a
              href={BUSINESS_DATA.phoneTel}
              className="text-2xl font-bold text-white hover:text-[#38BDF8] flex items-center gap-2 transition-colors"
              id="contact-header-call"
            >
              <Phone className="w-6 h-6 text-[#84CC16]" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
            <div className="text-zinc-400 text-[11px] pt-1 border-t border-[#252A36]">
              Appointments & vehicle drop-offs coordinated directly.
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout: Direct Details on Left, Interactive Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (5 cols): Address, Phone, Routes, Transparency */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card: Location details */}
          <div className="bg-white border border-[#E5E0D8] p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0052FF] font-bold">
              Workshop Address
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-bold text-[#14171D] font-display">
                {BUSINESS_DATA.name}
              </h2>
              <p className="text-sm text-[#404654]">
                {BUSINESS_DATA.category}
              </p>
              <p className="text-base font-semibold text-[#14171D] pt-1">
                {BUSINESS_DATA.address.street}
                <br />
                {BUSINESS_DATA.address.postalCode} {BUSINESS_DATA.address.city}
                <br />
                {BUSINESS_DATA.address.country}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="px-3 py-1.5 bg-[#FAF8F5] border border-[#E5E0D8] hover:border-zinc-400 text-[#14171D] flex items-center gap-1.5 transition-colors"
              >
                {copiedAddress ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>

              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#FAF8F5] border border-[#E5E0D8] hover:border-zinc-400 text-[#0052FF] flex items-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>

              <a
                href={BUSINESS_DATA.appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#FAF8F5] border border-[#E5E0D8] hover:border-zinc-400 text-[#0052FF] flex items-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Apple Maps</span>
              </a>
            </div>
          </div>

          {/* Regional Driving Distance Reference */}
          <div className="bg-[#FAF8F5] border border-[#E5E0D8] p-6 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#5B6271] font-bold">
              Access from Regional Centers
            </h3>

            <div className="space-y-2 text-xs font-mono">
              {ACCESS_ROUTES.map((route, i) => (
                <div key={i} className="flex justify-between items-center py-1.5 border-b border-[#E5E0D8] last:border-0">
                  <span className="text-[#14171D] font-medium">{route.from}</span>
                  <span className="text-[#0052FF] font-semibold">{route.distance} (~{route.travelTime})</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#5B6271] pt-1">
              Convenient parking and vehicle reception area available directly at Sagi 2.
            </p>
          </div>

          {/* Directory Transparency Notice */}
          <div className="p-4 bg-[#F5F2EB] border border-[#E5E0D8] text-xs text-[#5B6271] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#14171D]">
              <ShieldCheck className="w-4 h-4 text-[#84CC16]" />
              <span>Local.ch Listing Status:</span>
            </div>
            <p>
              0 listed reviews on Local.ch. We encourage direct communication for all inquiries and service arrangements.
            </p>
          </div>
        </div>

        {/* Right Column (7 cols): Validated Contact & Vehicle Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-[#E5E0D8] p-6 sm:p-10 shadow-sm relative">
          <div className="border-b border-[#E5E0D8] pb-6 mb-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold">
              // Vehicle Intake & Inquiry Form
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#14171D] font-display mt-1">
              Ask About Your Vehicle
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6271] mt-1">
              Fill in your contact and car information. Our workshop will review your message and reply promptly.
            </p>
          </div>

          {/* Success Confirmation Modal / Banner if Submitted */}
          {submittedData ? (
            <div className="p-6 bg-[#FAF8F5] border-2 border-[#84CC16] space-y-5 animate-fadeIn">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 text-[#84CC16] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-[#14171D] font-display">
                    Inquiry Prepared Successfully
                  </h3>
                  <p className="text-xs text-[#5B6271] font-mono mt-0.5">
                    Reference ID: <span className="font-bold text-[#14171D]">{submittedData.referenceId}</span>
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E5E0D8] text-xs font-mono space-y-2 text-[#404654]">
                <div className="font-bold text-[#14171D] border-b border-[#E5E0D8] pb-1">
                  Submitted Specifications:
                </div>
                <div>Name: {submittedData.details.name}</div>
                <div>Phone: {submittedData.details.phone}</div>
                <div>Email: {submittedData.details.email}</div>
                <div>
                  Vehicle: {submittedData.details.vehicleMake || 'Not specified'} {submittedData.details.vehicleModel} {submittedData.details.vehicleYear ? `(${submittedData.details.vehicleYear})` : ''}
                </div>
                <div>Subject: {submittedData.details.serviceCategory}</div>
                <div className="pt-1 text-[#14171D]">
                  Message: "{submittedData.details.message}"
                </div>
              </div>

              <div className="p-3 bg-[#EBF7DC] border border-[#C5E89B] text-xs text-[#2A4413] space-y-1">
                <span className="font-bold block">Need an immediate answer or same-day drop-off?</span>
                <span>You can follow up directly by phone. Mention reference code <strong className="font-mono">{submittedData.referenceId}</strong>.</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={BUSINESS_DATA.phoneTel}
                  className="bg-[#0052FF] hover:bg-[#0043D9] text-white px-5 py-3 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#84CC16]" />
                  <span>Call 034 411 17 16 Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      vehicleMake: '',
                      vehicleModel: '',
                      vehicleYear: '',
                      mileage: '',
                      serviceCategory: 'General Inquiry',
                      message: '',
                      preferredContact: 'phone',
                    });
                  }}
                  className="bg-white border border-[#E5E0D8] hover:border-zinc-400 text-xs font-mono font-semibold px-4 py-3 text-[#14171D]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase font-semibold text-[#14171D] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Thomas Müller"
                    className={`w-full p-3 text-sm bg-[#FAF8F5] border ${
                      touched.name && errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D8]'
                    } focus:outline-none focus:border-[#0052FF] text-[#14171D]`}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-mono uppercase font-semibold text-[#14171D] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    placeholder="e.g. 079 000 00 00"
                    className={`w-full p-3 text-sm bg-[#FAF8F5] border ${
                      touched.phone && errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D8]'
                    } focus:outline-none focus:border-[#0052FF] text-[#14171D]`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Preferred Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase font-semibold text-[#14171D] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="e.g. t.mueller@bluewin.ch"
                    className={`w-full p-3 text-sm bg-[#FAF8F5] border ${
                      touched.email && errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D8]'
                    } focus:outline-none focus:border-[#0052FF] text-[#14171D]`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-[#14171D] mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-2 h-[46px]">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, preferredContact: 'phone' }))}
                      className={`text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors ${
                        formData.preferredContact === 'phone'
                          ? 'border-[#0052FF] bg-[#0052FF]/10 text-[#0052FF]'
                          : 'border-[#E5E0D8] bg-[#FAF8F5] text-[#5B6271]'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Phone Call</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, preferredContact: 'email' }))}
                      className={`text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors ${
                        formData.preferredContact === 'email'
                          ? 'border-[#0052FF] bg-[#0052FF]/10 text-[#0052FF]'
                          : 'border-[#E5E0D8] bg-[#FAF8F5] text-[#5B6271]'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Section: Vehicle Information (Optional but recommended) */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E5E0D8] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#14171D] font-bold uppercase tracking-wider">
                  <Car className="w-4 h-4 text-[#0052FF]" />
                  <span>Vehicle Information (Optional)</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="col-span-1">
                    <label htmlFor="vehicle-make" className="block text-[11px] font-mono text-[#5B6271] mb-1">
                      Make
                    </label>
                    <input
                      id="vehicle-make"
                      name="vehicleMake"
                      type="text"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      placeholder="e.g. VW"
                      className="w-full p-2 text-xs bg-white border border-[#E5E0D8] focus:border-[#0052FF] focus:outline-none"
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="vehicle-model" className="block text-[11px] font-mono text-[#5B6271] mb-1">
                      Model
                    </label>
                    <input
                      id="vehicle-model"
                      name="vehicleModel"
                      type="text"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="e.g. Golf 7"
                      className="w-full p-2 text-xs bg-white border border-[#E5E0D8] focus:border-[#0052FF] focus:outline-none"
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="vehicle-year" className="block text-[11px] font-mono text-[#5B6271] mb-1">
                      Year
                    </label>
                    <input
                      id="vehicle-year"
                      name="vehicleYear"
                      type="text"
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      placeholder="e.g. 2018"
                      className="w-full p-2 text-xs bg-white border border-[#E5E0D8] focus:border-[#0052FF] focus:outline-none"
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="vehicle-mileage" className="block text-[11px] font-mono text-[#5B6271] mb-1">
                      Mileage (km)
                    </label>
                    <input
                      id="vehicle-mileage"
                      name="mileage"
                      type="text"
                      value={formData.mileage}
                      onChange={handleChange}
                      placeholder="e.g. 85'000"
                      className="w-full p-2 text-xs bg-white border border-[#E5E0D8] focus:border-[#0052FF] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Inquiry Category */}
              <div>
                <label htmlFor="service-category" className="block text-xs font-mono uppercase font-semibold text-[#14171D] mb-1">
                  Inquiry Topic
                </label>
                <select
                  id="service-category"
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  className="w-full p-3 text-sm bg-[#FAF8F5] border border-[#E5E0D8] focus:border-[#0052FF] focus:outline-none text-[#14171D]"
                >
                  <option value="General Inquiry">General Workshop Inquiry</option>
                  <option value="Mechanical Concern">Mechanical Repair / Abnormal Noise</option>
                  <option value="Routine Maintenance">Routine Maintenance & Oil Service</option>
                  <option value="Warning Indicator">Dashboard Warning Indicator / Diagnostics</option>
                  <option value="Brakes & Running Gear">Brakes, Suspension & Steering</option>
                  <option value="Tire & Wheel Check">Tire Change / Mounting / Balancing</option>
                  <option value="Pre-Inspection Preparation (MFK)">MFK Roadworthiness Check</option>
                  <option value="Battery & Electrical">Battery / Starter / Electrical</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase font-semibold text-[#14171D]">
                    Details / Issue Description <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {formData.message.length} chars
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Describe your car's symptoms, any error warning messages, when the issue occurs, or questions for the garage..."
                  className={`w-full p-3 text-sm bg-[#FAF8F5] border ${
                    touched.message && errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D8]'
                  } focus:outline-none focus:border-[#0052FF] text-[#14171D]`}
                />
                {touched.message && errors.message && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-inquiry-btn"
                  className="w-full py-4 bg-[#0052FF] hover:bg-[#0043D9] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Transmitting Vehicle Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Vehicle Inquiry to Kaltseis</span>
                      <ArrowRight className="w-4 h-4 text-[#84CC16]" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-zinc-500 text-center font-mono mt-2">
                  Prefer direct voice communication? Call 034 411 17 16 directly.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
