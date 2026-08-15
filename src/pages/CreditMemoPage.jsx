import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import CountUp from '../components/CountUp';
import CTABanner from '../components/CTABanner';
import {
  SparklesIcon,
  GearIcon,
  BarChartIcon,
  ShieldCheckIcon,
  BoltIcon,
  LinkIcon,
} from '../components/Icons';

const memoTemplates = [
  {
    id: 'apex',
    borrower: 'Apex Commercial Logistics LLC',
    facility: '$2,450,000 Term Facility',
    riskTier: 'Tier-1 Low Risk',
    dscrVal: 1.58,
    leverageVal: 2.4,
    ebitdaVal: 1840000,
    ltvVal: 58,
    summary:
      'Premier regional fleet logistics provider seeking equipment expansion financing. Demonstrates strong 4-year trailing profitability and consistent contract backlogs.',
    recommendation:
      'Recommend approval of $2.45M 7-year term note at SOFR + 2.85% secured by primary collateral lien and corporate guaranty.',
    bars: [62, 78, 92, 85, 98, 88],
  },
  {
    id: 'meridian',
    borrower: 'Meridian Surgical & Health Group',
    facility: '$4,800,000 Expansion Line',
    riskTier: 'Tier-1 Preferred',
    dscrVal: 1.92,
    leverageVal: 1.8,
    ebitdaVal: 3420000,
    ltvVal: 52,
    summary:
      'Multi-site outpatient healthcare operator expanding surgical suites. Strong private insurer reimbursement rates and zero historical payment delinquencies.',
    recommendation:
      'Recommend unconditional approval of $4.8M senior secured revolver. Strong cash generation supports rapid principal amortization.',
    bars: [70, 85, 94, 98, 92, 100],
  },
];

const memoFeatures = [
  {
    icon: SparklesIcon,
    title: 'Data-driven memo templates',
    description:
      'Applicant, financial, and collateral data captured during underwriting flows straight into a consistent, committee-ready memo format.',
    tag: 'Automated Ingestion',
  },
  {
    icon: GearIcon,
    title: 'Configurable memo structure',
    description:
      'Match your credit policy and committee requirements with customizable templates for covenants, risk scoring tables, and executive summaries.',
    tag: 'Policy Tailored',
  },
  {
    icon: BarChartIcon,
    title: 'Automatic financial spreads',
    description:
      'Key ratios (DSCR, Leverage, Interest Coverage, LTV) are calculated dynamically from underlying financials and inserted into the memo automatically.',
    tag: 'Dynamic Ratios',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Version history & audit trail',
    description:
      'Every edit, override, and comment is timestamped and tracked, so credit committee members see exactly who changed what and when.',
    tag: 'Audit Ready',
  },
  {
    icon: BoltIcon,
    title: 'One-click committee export',
    description:
      'Export a pristine, institutional-grade memo to PDF, Word, or direct board packet formats in a single click.',
    tag: 'Instant Package',
  },
  {
    icon: LinkIcon,
    title: 'Direct LOS handoff',
    description:
      'Memos are generated straight from LOS underwriting files with zero copy-pasting, manual re-keying, or spreadsheet formula risk.',
    tag: 'Zero Re-Keying',
  },
];

const pillars = [
  {
    num: '01',
    title: 'Faster memo turnaround',
    description:
      'Go from completed underwriting file to a polished, committee-ready credit memo in minutes rather than hours.',
  },
  {
    num: '02',
    title: 'Consistent formatting',
    description:
      'Every memo follows your standardized institution structure, no matter which analyst or underwriter compiles it.',
  },
  {
    num: '03',
    title: 'Fewer manual errors',
    description:
      'Numbers and financial spreads are pulled directly from verified source data instead of being retyped by hand.',
  },
  {
    num: '04',
    title: 'Audit-ready documentation',
    description:
      'A complete revision history and data lineage keeps every credit decision fully prepared for internal audit and examiners.',
  },
];

export default function CreditMemoPage() {
  const [activeMemo, setActiveMemo] = useState(memoTemplates[0]);
  const heroRef = useRef(null);

  // Parallax transforms based on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION WITH PARALLAX & LIVE MEMO GENERATOR PREVIEW
         ───────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-6 lg:px-8 overflow-hidden"
      >
        {/* Parallax ambient background glows */}
        <motion.div
          style={{ y: bgGlowY }}
          className="absolute top-20 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#0E704C]/12 via-[#1B9A66]/10 to-[#52C480]/15 blur-3xl pointer-events-none"
        />
        <div className="absolute top-96 left-8 w-80 h-80 rounded-full bg-[#0E704C]/8 blur-3xl pointer-events-none" />

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
            <div className="lg:col-span-6">
              <SectionReveal delay={0.05}>
                <h1 className="display-serif text-4xl sm:text-6xl lg:text-7xl text-ink font-bold leading-tight mb-6">
                  Credit Memo
                </h1>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
                  Turn underwriting data into a committee-ready credit memo automatically, with zero manual drafting or re-keying numbers from spreadsheets.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-4 mb-8">
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
                    Explore Sample Memo
                  </Link>
                </div>

                {/* Quick Switcher Trigger */}
                <div className="flex items-center gap-2 pt-4 border-t border-hairline text-xs text-muted">
                  <span className="font-semibold text-ink">Simulate Applicant:</span>
                  <div className="flex items-center gap-2">
                    {memoTemplates.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveMemo(item)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                          activeMemo.id === item.id
                            ? 'bg-[#0E704C] text-white shadow-xs'
                            : 'bg-[#FAF9F6] text-muted hover:text-ink border border-hairline'
                        }`}
                      >
                        {item.id === 'apex' ? 'Apex Commercial' : 'Meridian Health'}
                      </button>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right: Parallax Floating Interactive Credit Memo Preview Document */}
            <div className="lg:col-span-6">
              <SectionReveal delay={0.2}>
                <motion.div
                  style={{ y: cardY }}
                  className="bg-card border border-hairline rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Subtle technical background grid */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(14, 112, 76, 0.25) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(14, 112, 76, 0.25) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Document Header */}
                  <div className="relative z-10 flex items-start justify-between pb-5 mb-5 border-b border-hairline">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0E704C] animate-pulse" />
                        <h3 className="text-ink font-display font-bold text-lg">
                          Credit Memo
                        </h3>
                      </div>
                      <p className="text-muted text-xs font-body font-medium mt-0.5">
                        {activeMemo.borrower} &bull; {activeMemo.facility}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-bold font-body text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md tracking-wider">
                        READY
                      </span>
                    </div>
                  </div>

                  {/* Section 1: Borrower Summary with Spring Animation */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMemo.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="relative z-10 space-y-4 mb-6"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-body uppercase tracking-widest text-[#0E704C] font-semibold">
                            Borrower Summary
                          </span>
                          <span className="text-[10px] font-body font-semibold text-muted bg-[#FAF9F6] px-2 py-0.5 rounded-md border border-hairline">
                            {activeMemo.riskTier}
                          </span>
                        </div>
                        <p className="text-ink text-xs leading-relaxed bg-[#FAFDFB] p-3 rounded-md border border-[#A7F3D0]/60 font-body">
                          {activeMemo.summary}
                        </p>
                      </div>

                      {/* Section 2: Financial Spread & Ratio Matrix */}
                      <div>
                        <span className="text-[10px] font-body uppercase tracking-widest text-[#0E704C] font-semibold block mb-2">
                          Financial Spread &amp; Trailing Performance
                        </span>

                        {/* Ratio Chips with Animated Numbers */}
                        <div className="grid grid-cols-4 gap-2 mb-3">
                          <div className="bg-[#FAF9F6] p-2 rounded-md border border-hairline text-center">
                            <span className="text-[10px] text-muted block font-medium">DSCR</span>
                            <span className="text-ink font-bold text-xs">
                              <CountUp
                                key={`${activeMemo.id}-dscr`}
                                to={activeMemo.dscrVal}
                                decimals={2}
                                suffix="x"
                                duration={1.2}
                              />
                            </span>
                          </div>
                          <div className="bg-[#FAF9F6] p-2 rounded-md border border-hairline text-center">
                            <span className="text-[10px] text-muted block font-medium">Leverage</span>
                            <span className="text-ink font-bold text-xs">
                              <CountUp
                                key={`${activeMemo.id}-leverage`}
                                to={activeMemo.leverageVal}
                                decimals={1}
                                suffix="x"
                                duration={1.2}
                              />
                            </span>
                          </div>
                          <div className="bg-[#FAF9F6] p-2 rounded-md border border-hairline text-center">
                            <span className="text-[10px] text-muted block font-medium">EBITDA</span>
                            <span className="text-ink font-bold text-xs">
                              <CountUp
                                key={`${activeMemo.id}-ebitda`}
                                to={activeMemo.ebitdaVal}
                                decimals={0}
                                prefix="$"
                                duration={1.4}
                              />
                            </span>
                          </div>
                          <div className="bg-[#FAF9F6] p-2 rounded-md border border-hairline text-center">
                            <span className="text-[10px] text-muted block font-medium">LTV</span>
                            <span className="text-ink font-bold text-xs">
                              <CountUp
                                key={`${activeMemo.id}-ltv`}
                                to={activeMemo.ltvVal}
                                decimals={0}
                                suffix="%"
                                duration={1.1}
                              />
                            </span>
                          </div>
                        </div>

                        {/* Animated Green Bar Chart with Rounded Top & Smooth Slow Gradient Growth */}
                        <div className="bg-[#FAF9F6] p-3.5 rounded-md border border-hairline flex items-end justify-between gap-2.5 h-24 pt-2 overflow-hidden">
                          {activeMemo.bars.map((bar, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end">
                              <motion.div
                                key={`${activeMemo.id}-bar-${idx}`}
                                initial={{ height: '0%', opacity: 0.2 }}
                                animate={{ height: `${bar}%`, opacity: 1 }}
                                transition={{
                                  duration: 1.8,
                                  delay: 0.2 + idx * 0.15,
                                  ease: [0.25, 1, 0.5, 1], // gentle, slow, and silky smooth growth
                                }}
                                className="w-full bg-gradient-to-t from-[#0A1C16] via-[#0E704C] to-[#52C480] rounded-t-lg shadow-sm"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section 3: Recommendation Narrative */}
                      <div>
                        <span className="text-[10px] font-body uppercase tracking-widest text-[#0E704C] font-semibold block mb-1">
                          Committee Recommendation
                        </span>
                        <div className="p-3 bg-[#F4FAF7] border border-[#A7F3D0] rounded-md">
                          <p className="text-ink text-xs leading-relaxed font-medium font-body">
                            {activeMemo.recommendation}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Document Footer Controls */}
                  <div className="relative z-10 pt-3 border-t border-hairline flex items-center justify-between text-xs text-muted font-body">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C]" />
                      Audit-Locked Hash: #8F2B-9A10
                    </span>
                    <span className="text-[#0E704C] font-semibold hover:underline cursor-pointer">
                      Export Memo PDF ↓
                    </span>
                  </div>
                </motion.div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          2. WHAT'S IN THE MEMO (6 Modular Cards with Hover Parallax Tilt)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4 shadow-xs">
                Memo Architecture
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-4">
                What's in the memo
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed font-body">
                Everything a credit committee expects, assembled directly from the underwriting data your team already captured in LOS.
              </p>
            </div>
          </SectionReveal>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memoFeatures.map((feat, i) => {
              const IconComp = feat.icon;
              return (
                <SectionReveal key={feat.title} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-card border border-hairline rounded-lg p-7 hover:border-[#A7F3D0] hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-md bg-[#E6F7F0] text-[#0E704C] flex items-center justify-center shadow-xs">
                          <IconComp className="w-4 h-4 text-[#0E704C]" />
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-muted px-2 py-0.5 bg-[#FAF9F6] border border-hairline rounded-md font-body">
                          {feat.tag}
                        </span>
                      </div>

                    <h3 className="font-display font-bold text-lg text-ink leading-snug mb-3 group-hover:text-[#0E704C] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed font-body">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline/60 flex items-center text-xs font-semibold text-[#0E704C] font-body">
                    <span>Explore capability</span>
                    <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          3. WHY LENDERS USE CREDIT MEMO (4 Value Pillars)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4 shadow-xs">
                Value &amp; Speed
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
                Why lenders use Credit Memo
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.08}>
                <div className="p-6 rounded-lg bg-[#FAF9F6] border border-hairline hover:border-[#A7F3D0] transition-all duration-200 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-body font-bold text-[#0E704C] mb-3 block">
                      {p.num}
                    </span>
                    <h3 className="font-display font-bold text-lg text-ink mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PAIRS WITH LOS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="bg-card border border-hairline rounded-lg p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E704C] block mb-1">
                  Pairs with
                </span>
                <h3 className="font-display font-bold text-2xl text-ink mb-2">
                  Loan Origination System (LOS)
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Credit Memo is engineered to work directly with data captured during underwriting in LOS, eliminating separate spreadsheets, fragmented emails, or disparate tools to maintain.
                </p>
              </div>

              <Link
                to="/los"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-[#0E704C] hover:text-[#0A563A] text-xs font-bold uppercase tracking-wider transition-colors group"
              >
                <span>Explore LOS Platform</span>
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
