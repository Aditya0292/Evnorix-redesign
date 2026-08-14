import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import CTABanner from '../components/CTABanner';
import {
  SparklesIcon,
  BoltIcon,
  DocumentIcon,
  GearIcon,
  ShieldCheckIcon,
  LayersIcon,
  BarChartIcon,
  CheckIcon,
} from '../components/Icons';

const modules = [
  {
    icon: SparklesIcon,
    title: 'Application intake & borrower portal',
    description:
      'A branded, self-service portal where borrowers submit applications and documents, with status visible at every step.',
    highlight: 'Self-Service Intake',
  },
  {
    icon: BoltIcon,
    title: 'Automated credit decisioning',
    description:
      'Configurable rules engine evaluates applications against your credit policy and routes them automatically.',
    highlight: 'Instant Decision Engine',
  },
  {
    icon: DocumentIcon,
    title: 'Document management & e-signatures',
    description:
      'Collect, verify, and store borrower documents with e-signature support built in, no third-party handoffs required.',
    highlight: 'Built-in Verification',
  },
  {
    icon: GearIcon,
    title: 'Underwriting workflow engine',
    description:
      'Give underwriters a single unified queue with full application context, financial notes, and team collaboration tools.',
    highlight: 'Single Queue Collaboration',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Compliance & audit trails',
    description:
      'Every decision, edit, and communication is logged automatically, keeping you 100% audit-ready at all times.',
    highlight: 'Immutable Audit Logs',
  },
  {
    icon: LayersIcon,
    title: 'Disbursement & servicing handoff',
    description:
      'Approved loans move cleanly into disbursement and downstream servicing systems with no manual re-keying.',
    highlight: 'Zero Re-Keying',
  },
  {
    icon: BarChartIcon,
    title: 'Reporting & analytics',
    description:
      'Track pipeline volume, approval rates, and turnaround times with dashboards engineered specifically for lending operations.',
    highlight: 'Real-Time Telemetry',
  },
];

const benefits = [
  {
    num: '01',
    title: 'Faster time-to-close',
    description:
      'Cut days out of the loan cycle with automated routing, instant validation checks, and fewer manual handoffs.',
  },
  {
    num: '02',
    title: 'Fewer manual errors',
    description:
      'Structured workflows and strict rule validations eliminate the costly rework that comes with spreadsheets and fragmented emails.',
  },
  {
    num: '03',
    title: 'Regulatory-ready',
    description:
      'Built-in immutable audit trails keep every loan file and decision checkpoint prepared for internal and external regulatory review.',
  },
  {
    num: '04',
    title: 'Scales with your team',
    description:
      'From a focused originations desk to a high-volume institutional lending operation, the workflow scales effortlessly with zero friction.',
  },
];

export default function LOSPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    { label: 'Application received', meta: 'Identity & KYC confirmed', time: '10:14 AM' },
    { label: 'Documents verified', meta: 'Bank statements & tax returns parsed', time: '10:16 AM' },
    { label: 'Underwriting complete', meta: 'Auto-score 742 / DTI 28%', time: '10:18 AM' },
    { label: 'Approved', meta: '$248,000 Facility Generated', time: '10:20 AM' },
  ];

  // Auto-progressing living pipeline loop
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          return 0; // loop back seamlessly
        }
        return prev + 1;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const progressPercent = Math.round(((activeStep + 1) / steps.length) * 100);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Product Header + Live Autonomous Application LN-58210 Card)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-8 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-20 right-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#0E704C]/10 via-[#1B9A66]/8 to-[#52C480]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb back link */}
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink transition-colors"
              >
                <span>←</span>
                <span>All products</span>
              </Link>
              <span className="text-muted-light text-xs">/</span>
              <span className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-semibold text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md">
                Product
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Headline & Core Narrative */}
            <div className="lg:col-span-7">
              <SectionReveal delay={0.05}>
                <h1 className="display-serif text-4xl sm:text-6xl lg:text-7xl text-ink font-bold leading-tight mb-6">
                  LOS
                </h1>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
                  A complete Loan Origination System for modern lenders, covering the entire loan lifecycle from application intake to underwriting and disbursement, in one connected platform.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-brand-gradient-btn text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                  >
                    Request a Demo
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-card border border-hairline hover:border-[#A7F3D0] text-ink text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-all duration-200"
                  >
                    Talk to an engineer
                  </Link>
                </div>
              </SectionReveal>
            </div>

            {/* Right: Living Autonomous Application LN-58210 Card */}
            <div className="lg:col-span-5">
              <SectionReveal delay={0.2}>
                <div
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="bg-card border border-hairline rounded-xl p-6 sm:p-7 shadow-xl relative overflow-hidden group"
                >
                  {/* Subtle technical background grid */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-15"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(14, 112, 76, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(14, 112, 76, 0.2) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between pb-4 mb-5 border-b border-hairline">
                    <div>
                      <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">File Reference</span>
                      <p className="text-ink font-bold text-sm sm:text-base flex items-center gap-2">
                        Application LN-58210
                        <span className="w-2 h-2 rounded-full bg-[#0E704C] animate-pulse" />
                      </p>
                    </div>
                    
                    <motion.span
                      key={activeStep === 3 ? 'approved' : 'processing'}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`px-2.5 py-1 text-xs font-bold rounded-md border transition-colors ${
                        activeStep === 3
                          ? 'text-[#0E704C] bg-[#E6F7F0] border-[#A7F3D0] shadow-xs'
                          : 'text-[#1B9A66] bg-[#F4FAF7] border-[#A7F3D0]/60'
                      }`}
                    >
                      {activeStep === 3 ? 'Approved' : 'Auto-Decisioning...'}
                    </motion.span>
                  </div>

                  {/* Connected Autonomous Stages with Travelling Signal */}
                  <div className="relative z-10 space-y-3 mb-6">
                    {steps.map((step, idx) => {
                      const isComplete = idx <= activeStep;
                      const isCurrent = idx === activeStep;

                      return (
                        <div key={step.label} className="relative">
                          {/* Connector line between steps */}
                          {idx > 0 && (
                            <div className="absolute -top-3 left-5 -translate-x-1/2 w-0.5 h-3 bg-hairline">
                              {idx <= activeStep && (
                                <motion.div
                                  layoutId="cardSignalDot"
                                  className="w-full h-full bg-[#0E704C]"
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                            </div>
                          )}

                          <motion.div
                            onClick={() => {
                              setActiveStep(idx);
                              setIsAutoPlaying(false);
                            }}
                            animate={{
                              borderColor: isCurrent ? '#0E704C' : isComplete ? '#A7F3D0' : '#E5E5E5',
                              backgroundColor: isCurrent ? '#FAFDFB' : isComplete ? '#FFFFFF' : '#FAF9F6',
                            }}
                            className={`p-3.5 rounded-lg border transition-all duration-300 cursor-pointer flex items-start gap-3 relative ${
                              isCurrent
                                ? 'shadow-sm ring-1 ring-[#0E704C]/20'
                                : isComplete
                                ? 'shadow-2xs'
                                : 'opacity-65'
                            }`}
                          >
                            {/* Checkmark / Spinner Indicator */}
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0 transition-all duration-300 ${
                                isComplete
                                  ? 'bg-[#0E704C] text-white shadow-xs'
                                  : 'bg-hairline text-muted'
                              }`}
                            >
                              {isComplete ? (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                                >
                                  ✓
                                </motion.span>
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-muted-light" />
                              )}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className={`text-xs font-semibold ${isCurrent ? 'text-[#0E704C]' : 'text-ink'}`}>
                                  {step.label}
                                </p>
                                <span className="text-[10px] text-muted font-mono">{step.time}</span>
                              </div>
                              <p className="text-muted text-[11px] mt-0.5 leading-snug">{step.meta}</p>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Progress Indicator Bar */}
                  <div className="relative z-10 pt-2 border-t border-hairline/80">
                    <div className="flex items-center justify-between text-xs text-muted font-medium mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C] animate-ping" />
                        Pipeline Progress
                      </span>
                      <span className="text-[#0E704C] font-bold font-mono">
                        {progressPercent}% {progressPercent === 100 ? 'Verified' : 'Processing'}
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-[#E6F7F0] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0E704C] to-[#22A06B] rounded-full"
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          2. CORE MODULES SECTION (7 Feature Grid Cards)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4 shadow-xs">
                Platform Capabilities
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-4">
                Core modules
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Everything a lending team needs to originate loans efficiently, without stitching together separate tools.
              </p>
            </div>
          </SectionReveal>

          {/* 7 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => {
              const IconComp = mod.icon;
              return (
                <SectionReveal key={mod.title} delay={i * 0.06}>
                  <div className="group bg-card border border-hairline rounded-lg p-7 hover:border-[#A7F3D0] hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-md bg-[#E6F7F0] text-[#0E704C] flex items-center justify-center shadow-xs">
                          <IconComp className="w-4 h-4 text-[#0E704C]" />
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-muted px-2 py-0.5 bg-[#FAF9F6] border border-hairline rounded-md">
                          {mod.highlight}
                        </span>
                      </div>

                    <h3 className="font-display font-bold text-lg text-ink leading-snug mb-3 group-hover:text-[#0E704C] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline/60 flex items-center text-xs font-semibold text-[#0E704C]">
                    <span>Module details</span>
                    <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          3. WHY LENDERS CHOOSE LOS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4 shadow-xs">
                Key Value
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
                Why lenders choose LOS
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <SectionReveal key={b.title} delay={i * 0.08}>
                <div className="p-6 rounded-lg bg-[#FAF9F6] border border-hairline hover:border-[#A7F3D0] transition-all duration-200 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0E704C] mb-3 block">
                      {b.num}
                    </span>
                    <h3 className="font-display font-bold text-lg text-ink mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PAIRS WITH SECTION (Credit Memo)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="bg-card border border-hairline rounded-lg p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E704C] block mb-1">
                  Pairs with
                </span>
                <h3 className="font-display font-bold text-2xl text-ink mb-2">
                  Credit Memo
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Once underwriting wraps up in LOS, Credit Memo turns that data into a committee-ready memo automatically, with zero manual spreadsheet drafting or re-keying.
                </p>
              </div>

              <Link
                to="/credit-memo"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-[#0E704C] hover:text-[#0A563A] text-xs font-bold uppercase tracking-wider transition-colors group"
              >
                <span>Explore Credit Memo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CTA BANNER
         ───────────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
