import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import CTABanner from '../components/CTABanner';
import { CheckIcon, SparklesIcon, BarChartIcon } from '../components/Icons';

const products = [
  {
    id: 'los',
    to: '/los',
    badge: 'Core Platform',
    title: 'Loan Origination System (LOS)',
    tagline: 'End-to-end loan lifecycle management from application intake to core disbursement.',
    description:
      'The Evnorix LOS engine eliminates paperwork, fragmented emails, and manual spreadsheet routing. Configure automated credit decisioning rules, verify documents in real time, and disburse loans cleanly.',
    features: [
      'Self-service borrower application portal',
      'Configurable credit decisioning rules engine',
      'Integrated e-signatures & instant KYC parsing',
      'Automated core banking disbursal handoff',
    ],
    metrics: [
      { label: 'Avg. Decision Time', val: '4.2 mins' },
      { label: 'Intake Automation', val: '94%' },
      { label: 'Cycle Time Reduction', val: '65%' },
    ],
    accentColor: '#0E704C',
  },
  {
    id: 'credit-memo',
    to: '/credit-memo',
    badge: 'Reporting & Analysis',
    title: 'Credit Memo & Reporting',
    tagline: 'Turn underwriting data into a committee-ready credit memo automatically.',
    description:
      'Eliminate manual drafting and spreadsheet formula risk. Credit Memo ingests verified data straight from LOS underwriting files, generates financial spreads, and formats board-ready packets in one click.',
    features: [
      'Automated financial spreads & ratio matrices (DSCR, Leverage, LTV)',
      'Policy-tailored configurable committee memo templates',
      'Executive recommendation generation & dual sign-off routing',
      'One-click institutional PDF & Word export with audit trails',
    ],
    metrics: [
      { label: 'Draft Time Saved', val: '80%' },
      { label: 'Spread Precision', val: '100%' },
      { label: 'Audit Lineage', val: 'Immutable' },
    ],
    accentColor: '#1B9A66',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-8 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-20 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#0E704C]/12 via-[#1B9A66]/10 to-[#52C480]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-96 left-8 w-80 h-80 rounded-full bg-[#0E704C]/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center max-w-4xl">
          <SectionReveal variant="badge">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-gradient-to-r from-[#E6F7F0] via-[#D1F4E4] to-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C] animate-pulse" />
              Evnorix Product Suite
            </span>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <h1 className="display-serif text-4xl sm:text-6xl lg:text-7xl text-ink font-bold leading-tight mb-6">
              Connected Software for Modern Lenders
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Two purpose-built products designed to originate loans faster, automate credit memos, and eliminate spreadsheet rework.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          2. TWO CORE PRODUCTS SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 lg:space-y-20">
            {products.map((p, idx) => (
              <SectionReveal key={p.id} delay={idx * 0.1}>
                <div className="bg-card border border-hairline rounded-xl p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-card-hover transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left: Product Info & Feature List */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 text-xs font-semibold text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md">
                          {p.badge}
                        </span>
                        <span className="text-xs font-mono text-muted">0{idx + 1} &bull; SOFTWARE PRODUCT</span>
                      </div>

                      <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-3">
                        {p.title}
                      </h2>

                      <p className="text-ink-soft text-base font-medium leading-relaxed mb-4">
                        {p.tagline}
                      </p>

                      <p className="text-muted text-sm leading-relaxed mb-8">
                        {p.description}
                      </p>

                      {/* Key Capabilities List */}
                      <div className="space-y-3 mb-8">
                        {p.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-3 text-xs font-semibold text-ink">
                            <div className="w-5 h-5 rounded-md bg-[#E6F7F0] text-[#0E704C] flex items-center justify-center mt-0.5 flex-shrink-0">
                              <CheckIcon className="w-3 h-3 text-[#0E704C]" />
                            </div>
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Primary Link Button */}
                      <div className="flex items-center gap-4">
                        <Link
                          to={p.to}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gradient-btn text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                        >
                          <span>Explore {p.id === 'los' ? 'LOS Platform' : 'Credit Memo'}</span>
                          <span>→</span>
                        </Link>

                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-hairline hover:border-[#A7F3D0] text-ink text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200"
                        >
                          <span>Request a Demo</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Metrics & Interactive Preview Card */}
                    <div className="lg:col-span-5 bg-[#FAF9F6] rounded-lg p-6 sm:p-8 border border-hairline shadow-xs flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline">
                          <span className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Operational Impact
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#0E704C] animate-pulse" />
                        </div>

                        {/* Metric Tiles */}
                        <div className="space-y-4 mb-8">
                          {p.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="p-4 bg-card border border-hairline rounded-md flex items-center justify-between shadow-2xs"
                            >
                              <span className="text-xs text-muted font-medium">{m.label}</span>
                              <span className="font-display font-bold text-lg text-ink">{m.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-hairline flex items-center justify-between text-xs text-muted">
                        <span>Status: Production Ready</span>
                        <span className="text-[#0E704C] font-semibold">100% Cloud Native</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          3. HOW THEY WORK TOGETHER (Bi-Directional Continuity)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mb-14 text-center mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4 shadow-xs">
                Unified Ecosystem
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-4">
                Origination and Credit Memos In Lockstep
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                No CSV downloads, no manual re-keying, and zero synchronization delay.
              </p>
            </div>
          </SectionReveal>

          {/* 3 Step Connected Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Capture in LOS',
                desc: 'Borrowers submit documents and financials through the self-service portal. Underwriting decision rules evaluate the file.',
              },
              {
                step: '02',
                title: 'Auto-Generate Memo',
                desc: 'Credit Memo extracts ratios, spreads DSCR and Leverage matrices, and prepares the committee recommendation packet.',
              },
              {
                step: '03',
                title: 'Disburse & Audit Lock',
                desc: 'Once approved, the file transitions into automated wire initiation with a cryptographic immutable audit trail.',
              },
            ].map((step, idx) => (
              <SectionReveal key={step.step} delay={idx * 0.1}>
                <div className="p-8 rounded-lg bg-[#FAF9F6] border border-hairline hover:border-[#A7F3D0] transition-all duration-200 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0E704C] mb-3 block">
                      PHASE {step.step}
                    </span>
                    <h3 className="font-display font-bold text-xl text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CTA BANNER
         ───────────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
