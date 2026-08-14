import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import CTABanner from '../components/CTABanner';
import { SparklesIcon, ShieldCheckIcon, CheckIcon } from '../components/Icons';

export default function ContactPage() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState('default');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    product: 'los',
    message: '',
    consent: true,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = 'First name is required.';
    if (!formData.lastName.trim()) e.lastName = 'Last name is required.';
    if (!formData.email.trim()) e.email = 'Work email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email address.';
    if (!formData.message.trim()) e.message = 'Please enter your message.';
    return e;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = { ...errors };
      if (field === 'firstName' && value.trim()) delete newErrors.firstName;
      if (field === 'lastName' && value.trim()) delete newErrors.lastName;
      if (field === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) delete newErrors.email;
      if (field === 'message' && value.trim()) delete newErrors.message;
      setErrors(newErrors);
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const v = validate();
    if (v[field]) setErrors((prev) => ({ ...prev, [field]: v[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setTouched({ firstName: true, lastName: true, email: true, message: true });
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1800);
  };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. MONUMENTAL HERO & REACH US CARD (Concept Reference)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-[#040D09] text-white overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Subtle Ambient Cosmic Orbit Rings & Halo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-white/[0.02] pointer-events-none" />
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] rounded-full bg-radial from-[#0E704C]/25 via-[#0A1C16]/15 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full z-10">
          
          {/* Monumental Giant Background Typography: CONTACT (Soft Green Gradient Border & Deep Spread Drop Shadow) */}
          <SectionReveal>
            <div className="w-full max-w-7xl mx-auto overflow-visible select-none pointer-events-none px-2">
              <svg
                viewBox="0 0 1400 360"
                className="w-full h-auto max-h-[390px] overflow-visible"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Rich Dark Green Gradient for Letter Perimeter */}
                  <linearGradient id="letterBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E825B" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#0E704C" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#053321" stopOpacity="0.95" />
                  </linearGradient>

                  {/* Clean White Core Fill */}
                  <linearGradient id="letterCoreFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="70%" stopColor="#F8FAFC" />
                    <stop offset="100%" stopColor="#F0FDF4" />
                  </linearGradient>

                  {/* Directional Deep Dark Green Shadow Cast to the Right Side */}
                  <filter id="deepSpreadShadow" x="-30%" y="-30%" width="170%" height="170%">
                    <feDropShadow dx="22" dy="12" stdDeviation="18" floodColor="#021E14" floodOpacity="0.95" />
                    <feDropShadow dx="10" dy="6" stdDeviation="8" floodColor="#063825" floodOpacity="0.85" />
                  </filter>
                </defs>

                <text
                  x="50%"
                  y="300"
                  textAnchor="middle"
                  fill="url(#letterCoreFill)"
                  stroke="url(#letterBorderGradient)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  filter="url(#deepSpreadShadow)"
                  fontFamily="'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
                  fontWeight="800"
                  fontSize="330"
                  letterSpacing="0.04em"
                >
                  CONTACT
                </text>
              </svg>
            </div>
          </SectionReveal>

          {/* Floating Foreground Primary Emerald Green Form Card (Overlapping 'CONTACT') */}
          <SectionReveal delay={0.1}>
            <div className="relative -mt-14 sm:-mt-24 lg:-mt-36 z-20 max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-[#0E704C] via-[#0B5A3C] to-[#073D29] border border-[#52C480]/40 shadow-[0_25px_90px_rgba(4,13,9,0.95),0_0_60px_rgba(14,112,76,0.35)] p-6 sm:p-10 lg:p-14 text-white overflow-hidden">
              
              {/* Technical Blueprint Coordinate Grid Overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(167, 243, 208, 0.4) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(167, 243, 208, 0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Form Card Top Header */}
              <div className="relative z-10 flex items-center justify-between mb-8 pb-4 border-b border-[#166B4A]">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A7F3D0]">
                  REACH US
                </span>
              </div>

              {/* Form State Container */}
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-[#0E704C] flex items-center justify-center shadow-xl mb-6">
                      <CheckIcon className="w-8 h-8 text-[#0E704C]" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-white mb-3">
                      Message Dispatched
                    </h2>
                    <p className="text-emerald-100/90 text-sm max-w-md leading-relaxed">
                      Thank you. An Evnorix institutional platform engineer will reach out to your team within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormState('default');
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          company: '',
                          product: 'los',
                          message: '',
                          consent: true,
                        });
                        setTouched({});
                        setErrors({});
                      }}
                      className="mt-8 px-6 py-2.5 rounded-full bg-white text-[#0E704C] hover:bg-[#E6F7F0] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
                      
                      {/* Left Column: Underline Inputs */}
                      <div className="space-y-6">
                        {/* First Name */}
                        <div>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            onBlur={() => handleBlur('firstName')}
                            className="w-full bg-transparent border-b border-white/30 focus:border-white text-white placeholder-white/60 text-sm sm:text-base py-3 px-1 transition-colors outline-none"
                          />
                          {errors.firstName && (
                            <p className="text-rose-300 text-xs mt-1.5">{errors.firstName}</p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div>
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            onBlur={() => handleBlur('lastName')}
                            className="w-full bg-transparent border-b border-white/30 focus:border-white text-white placeholder-white/60 text-sm sm:text-base py-3 px-1 transition-colors outline-none"
                          />
                          {errors.lastName && (
                            <p className="text-rose-300 text-xs mt-1.5">{errors.lastName}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            className="w-full bg-transparent border-b border-white/30 focus:border-white text-white placeholder-white/60 text-sm sm:text-base py-3 px-1 transition-colors outline-none"
                          />
                          {errors.email && (
                            <p className="text-rose-300 text-xs mt-1.5">{errors.email}</p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <input
                            type="text"
                            placeholder="Company / Lending Institution"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            className="w-full bg-transparent border-b border-white/30 focus:border-white text-white placeholder-white/60 text-sm sm:text-base py-3 px-1 transition-colors outline-none"
                          />
                        </div>

                        {/* Product Area Interest Pill Selectors */}
                        <div className="pt-2">
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#A7F3D0] mb-2">
                            Product Interest
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {[
                              { id: 'los', label: 'LOS Engine' },
                              { id: 'credit-memo', label: 'Credit Memo' },
                              { id: 'both', label: 'Complete Suite' },
                            ].map((prod) => (
                              <button
                                key={prod.id}
                                type="button"
                                onClick={() => handleChange('product', prod.id)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                  formData.product === prod.id
                                    ? 'bg-white text-[#0E704C] shadow-sm'
                                    : 'bg-[#0A4832] text-white/80 hover:bg-[#0E543A]'
                                }`}
                              >
                                {prod.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Consent Checkbox */}
                        <div className="pt-3">
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.consent}
                              onChange={(e) => handleChange('consent', e.target.checked)}
                              className="w-4 h-4 mt-0.5 rounded border-white/40 bg-white/10 text-[#0E704C] focus:ring-0 cursor-pointer"
                            />
                            <span className="text-xs text-emerald-100/85 leading-relaxed select-none group-hover:text-white transition-colors">
                              I give Evnorix permission to contact me at this work email address.
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Right Column: Message Textarea & Submit */}
                      <div className="flex flex-col justify-between space-y-6">
                        {/* Message Box */}
                        <div>
                          <textarea
                            rows={6}
                            placeholder="Type your message here..."
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            onBlur={() => handleBlur('message')}
                            className="w-full bg-transparent border-b border-white/30 focus:border-white text-white placeholder-white/60 text-sm sm:text-base py-3 px-1 transition-colors outline-none resize-none min-h-[160px]"
                          />
                          {errors.message && (
                            <p className="text-rose-300 text-xs mt-1.5">{errors.message}</p>
                          )}
                        </div>

                        {/* Security Disclaimer & Send Button */}
                        <div className="space-y-6 pt-4">
                          <p className="text-[11px] text-emerald-100/70 leading-relaxed">
                            This communication is protected by TLS 1.3 encryption and institutional data isolation standards. For details on how we safeguard financial records, please review our privacy policy.
                          </p>

                          <div className="flex items-center justify-end">
                            <button
                              type="submit"
                              disabled={formState === 'loading'}
                              className={`group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-[#0E704C] font-bold text-sm shadow-xl hover:bg-[#E6F7F0] hover:scale-105 transition-all duration-200 ${
                                formState === 'loading' ? 'opacity-80 cursor-wait' : ''
                              }`}
                            >
                              <span>{formState === 'loading' ? 'Transmitting…' : 'Send'}</span>
                              <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>

        </div>
      </section>
    </>
  );
}
