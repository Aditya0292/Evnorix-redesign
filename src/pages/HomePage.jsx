import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import CountUp from '../components/CountUp';
import CTABanner from '../components/CTABanner';
import WorkflowPipeline from '../components/WorkflowPipeline';
import {
  SparklesIcon,
  BarChartIcon,
  ShieldCheckIcon,
  BoltIcon,
  LayersIcon,
  GearIcon,
  CheckIcon,
} from '../components/Icons';

// Services data for interactive switcher (Frames 2 & 3) with dedicated pipeline nodes
const servicesData = {
  los: {
    id: 'los',
    tabLabel: 'LOS Platform',
    icon: SparklesIcon,
    badge: 'Core Origination',
    title: 'Loan Origination System (LOS)',
    tagline: 'From borrower application to underwriting & disbursement in minutes.',
    description:
      'The Evnorix LOS engine eliminates paperwork and manual spreadsheet routing. Configure decision rules, automate document intake, and track loan files in real time.',
    to: '/los',
    metrics: [
      { label: 'Avg. Decision Time', num: 4.2, suffix: ' mins', decimals: 1 },
      { label: 'Intake Automation', num: 94, suffix: '%', decimals: 0 },
    ],
    features: [
      'Self-service borrower application portal',
      'Configurable credit decisioning engine',
      'Integrated e-signatures & instant KYC parsing',
      'Automated core disbursement handoff',
    ],
    mockUi: {
      headerTitle: 'Active Origination Pipeline',
      stat1Label: 'Approved Today',
      stat1Val: 428500,
      stat1Prefix: '$',
      stat1Badge: '+14.2%',
      chartBars: [45, 68, 32, 88, 72, 95, 60],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      recentItems: [
        { name: 'Apex Commercial Loan', amount: '$140,000', status: 'Approved', time: '2m ago' },
        { name: 'Meridian Capital Facility', amount: '$210,000', status: 'Underwriting', time: '14m ago' },
        { name: 'Summit Ridge Expansion', amount: '$78,500', status: 'Intake Verified', time: '32m ago' },
      ],
    },
  },
  creditMemo: {
    id: 'creditMemo',
    tabLabel: 'Credit Memo',
    icon: BarChartIcon,
    badge: 'Automated Reporting',
    title: 'Credit Memo & Reporting',
    tagline: 'Turn underwriting data into a committee-ready credit memo automatically.',
    description:
      'Eliminate manual drafting and spreadsheet formula risk. Credit Memo ingests verified data straight from LOS files, calculates dynamic financial spreads, and generates committee-ready packages.',
    to: '/credit-memo',
    metrics: [
      { label: 'Draft Time Saved', num: 80, suffix: '%', decimals: 0 },
      { label: 'Spread Precision', num: 100, suffix: '%', decimals: 0 },
    ],
    features: [
      'Automated financial spreads & ratio matrices (DSCR, Leverage, LTV)',
      'Policy-tailored configurable committee memo templates',
      'Executive recommendation generation & approval routing',
      'One-click institutional PDF & Word export with audit trail',
    ],
    mockUi: {
      headerTitle: 'Committee Memo Generator',
      stat1Label: 'Memos Generated This Week',
      stat1Val: 64,
      stat1Prefix: '',
      stat1Suffix: ' Memos',
      stat1Badge: '100% Ready',
      chartBars: [55, 70, 85, 90, 95, 88, 100],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      recentItems: [
        { name: 'Apex Logistics $2.45M Note', amount: 'DSCR 1.58x', status: 'Board Ready', time: '5m ago' },
        { name: 'Meridian Health $4.8M Line', amount: 'DSCR 1.92x', status: 'Approved', time: '18m ago' },
        { name: 'Highland Ridge Term Note', amount: 'DSCR 1.65x', status: 'In Review', time: '40m ago' },
      ],
    },
  },
};

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Head of Lending Operations',
    company: 'Pacific Credit Union',
    image: '/assets/testimonials/sarah.jpg',
    badge: 'LOS Origination Engine',
    metric: '45-Min Underwriting',
    impactLabel: 'Underwriting Cycle Time',
    statVal: '-65% Time to Close',
    pillar: 'Automated KYC & Decision Rules',
    story:
      'Evnorix transformed our entire lending workflow. We cut our commercial underwriting cycle from 3 business days down to 45 minutes without compromising risk policy or compliance.',
  },
  {
    name: 'James Williams',
    role: 'Chief Technology Officer',
    company: 'Meridian Capital Partners',
    image: '/assets/testimonials/james.jpg',
    badge: 'Real-Time Data Mirroring',
    metric: '0.08s Sync Latency',
    impactLabel: 'Core Ledger Replication',
    statVal: '99.99% Zero Downtime',
    pillar: 'TLS 1.3 In-Flight Encryption',
    story:
      'The real-time data replication provides absolute visibility across all our core ledgers and analytical stores with zero downtime, instant failover, and verified encryption.',
  },
  {
    name: 'Emily Chen',
    role: 'Director of Portfolio Risk',
    company: 'Summit Vantage Bank',
    image: '/assets/testimonials/emily.jpg',
    badge: 'Portfolio Risk & Recovery',
    metric: '$1.8M Recovered Q1',
    impactLabel: 'Delinquency Resolution',
    statVal: '+38% Net Recovery Lift',
    pillar: 'Predictive Delinquency Tiers',
    story:
      'Automating our borrower communication and settlement workflows recovered over $1.8M in overdue balances in Q1 alone, while improving borrower retention satisfaction scores.',
  },
  {
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Apex Commercial Lending',
    image: '/assets/testimonials/marcus.jpg',
    badge: 'Credit Memo & Committee',
    metric: '80% Drafting Saved',
    impactLabel: 'Financial Spreads & PDF Packets',
    statVal: '100% Audit Ready',
    pillar: 'Direct LOS Ingestion Pipeline',
    story:
      'Credit Memo generates institutional-grade committee packages straight from live underwriting files. Our analysts no longer waste hours copy-pasting spreadsheet formulas.',
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('los');
  const [activePipelineItem, setActivePipelineItem] = useState(0);
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(null);
  const [hoveredLeaderIndex, setHoveredLeaderIndex] = useState(null);
  const currentService = servicesData[activeTab];

  const handleCardHover = (idx) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setHoveredLeaderIndex(idx);
    }
  };

  const handleCardLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setHoveredLeaderIndex(null);
    }
  };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION & INTERACTIVE BENTO (Floating Choreography)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-6 lg:px-8 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-24 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#0E704C]/12 via-[#1B9A66]/10 to-[#52C480]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-96 left-8 w-80 h-80 rounded-full bg-[#0E704C]/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Main Top Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-3xl">
              <SectionReveal variant="badge">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-gradient-to-r from-[#E6F7F0] via-[#D1F4E4] to-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-6 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C] animate-pulse" />
                  Technology Services Platform
                </span>
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <h1 className="display-serif text-4xl sm:text-6xl lg:text-7xl text-ink leading-[1.1] tracking-tight">
                  Your Ultimate Lending &amp; Operations Solution
                </h1>
              </SectionReveal>
            </div>

            {/* Right Meta Header Card */}
            <SectionReveal delay={0.1}>
              <div className="bg-card border border-hairline rounded-xl p-6 max-w-sm shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-md bg-[#E6F7F0] flex items-center justify-center text-[#0E704C] shadow-xs">
                    <SparklesIcon className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-7 h-7 rounded-md bg-[#E6F7F0] flex items-center justify-center text-[#0E704C] shadow-xs">
                    <BarChartIcon className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-7 h-7 rounded-md bg-[#E6F7F0] flex items-center justify-center text-[#0E704C] shadow-xs">
                    <ShieldCheckIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-ink font-semibold text-sm">
                  Technology services for lending, collections, and data teams.
                </p>
                <p className="text-muted text-xs mt-1">
                  LOS, Collections, and Real-time Data Repositories built for scale.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* ─── Hero Bento Grid with Moving Multi-Directional Glassmorphism Gradient ─── */}
          <SectionReveal delay={0.15}>
            <div className="relative rounded-xl p-4 sm:p-6 lg:p-8 border border-white/80 bg-white/45 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-[#0E704C]/10">
              {/* Moving Soft Ambient Glassmorphism Gradient Orbs (Multi-Directional Fluid Loop) */}
              <motion.div
                animate={{
                  x: [-30, 140, -80, 80, -30],
                  y: [-30, 90, -70, 50, -30],
                  scale: [1, 1.3, 0.85, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: 'easeInOut',
                }}
                className="absolute -top-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-[#52C480]/35 via-[#1B9A66]/30 to-[#0E704C]/25 blur-3xl pointer-events-none"
              />

              <motion.div
                animate={{
                  x: [40, -130, 90, -70, 40],
                  y: [30, -90, 70, -80, 30],
                  scale: [0.9, 1.25, 1.1, 0.95, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tl from-[#0E704C]/30 via-[#22A06B]/35 to-[#86EFAC]/45 blur-3xl pointer-events-none"
              />

              <motion.div
                animate={{
                  x: [-60, 90, -70, 60, -60],
                  y: [50, -70, 50, -40, 50],
                  scale: [1, 0.85, 1.2, 0.95, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/4 left-1/4 w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-[#0E704C]/25 via-[#52C480]/35 to-[#A7F3D0]/40 blur-2xl pointer-events-none"
              />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
                
                {/* Bento Card 1: Loan Approved Realtime Card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="md:col-span-4 bg-white/90 backdrop-blur-md rounded-lg p-6 border border-white/80 shadow-md hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-b from-[#0A1C16] to-[#0E704C] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        M
                      </div>
                      <div>
                        <p className="text-ink text-xs font-semibold">Meridian Trust Bank</p>
                        <p className="text-muted text-[11px]">Commercial Lending Partner</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-semibold text-[#0E704C] bg-[#E6F7F0] rounded-md border border-[#A7F3D0]">
                      Active
                    </span>
                  </div>

                  <div className="my-4">
                    <span className="text-muted text-xs uppercase tracking-wider font-semibold">Loan Approved</span>
                    <p className="font-display font-bold text-3xl text-ink mt-1">$248,000</p>
                    <p className="text-[#0E704C] text-xs font-medium flex items-center gap-1 mt-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Ref LN-48213 &bull; Approved in 6 minutes
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-hairline/80 text-center">
                    <div className="bg-[#FAF9F6] p-2 rounded-md border border-hairline/60">
                      <span className="text-[#0E704C] text-xs font-bold">✓</span>
                      <p className="text-ink text-[11px] font-medium mt-0.5">Intake</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-2 rounded-md border border-hairline/60">
                      <span className="text-[#0E704C] text-xs font-bold">✓</span>
                      <p className="text-ink text-[11px] font-medium mt-0.5">Underwriting</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-2 rounded-md border border-hairline/60">
                      <span className="text-[#0E704C] text-xs font-bold">✓</span>
                      <p className="text-ink text-[11px] font-medium mt-0.5">Disbursed</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bento Card 2: Interactive Live Loan Pipeline Queue */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.4 }}
                  className="md:col-span-5 bg-white/90 backdrop-blur-md rounded-lg p-6 border border-white/80 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-ink font-semibold text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0E704C] animate-ping" />
                        Live Operations Queue
                      </span>
                      <span className="text-xs text-muted">Click item to inspect</span>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { title: 'Ironclad Fabrications LLC', type: 'LOS Origination', val: '$285,000', step: 'Underwriting' },
                        { title: 'Coastal Logistics Group', type: 'Collections Recovery', val: '$92,400', step: 'Payment Plan' },
                        { title: 'Summit Ridge Data Vault', type: 'Data Mirror Node', val: '12ms Sync', step: 'Active Mirror' },
                      ].map((item, idx) => {
                        const isSelected = activePipelineItem === idx;
                        return (
                          <motion.div
                            key={item.title}
                            onClick={() => setActivePipelineItem(idx)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={`relative p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#F4FAF7] border-[#0E704C] shadow-sm ring-1 ring-[#0E704C]/20'
                                : 'bg-surface border-hairline hover:bg-[#FAF9F6]'
                            }`}
                          >
                            <div>
                              <p className="text-ink text-xs font-semibold">{item.title}</p>
                              <p className="text-muted text-[11px]">{item.type}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-ink font-bold text-xs">{item.val}</p>
                              <span className="text-[10px] text-[#0E704C] font-semibold bg-[#E6F7F0] px-2 py-0.5 rounded-md">
                                {item.step}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between">
                    <span className="text-muted text-xs">Total queue capacity: 100%</span>
                    <span className="text-[#0E704C] font-semibold text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C]" />
                      99.99% Operational Uptime
                    </span>
                  </div>
                </motion.div>

                {/* Bento Card 3: Direct Action */}
                <div className="md:col-span-3 bg-gradient-to-br from-[#0A1C16] to-[#122E25] rounded-lg p-6 text-white border border-[#193B30] shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-md bg-gradient-to-b from-[#0E704C] to-[#22A06B] flex items-center justify-center text-white text-base font-display font-bold mb-4 shadow-sm">
                      E
                    </div>
                    <h3 className="font-display font-bold text-xl text-white leading-snug mb-2">
                      Modernize your workflow today
                    </h3>
                    <p className="text-ondark-muted text-xs leading-relaxed">
                      Custom technology integrations built specifically for your credit policies and infrastructure.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#193B30]/80">
                    <Link
                      to="/contact"
                      className="group w-full inline-flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#0E704C] to-[#22A06B] hover:from-[#0A563A] hover:to-[#199763] text-white text-xs font-semibold rounded-md transition-all duration-200 shadow-md"
                    >
                      <span>Try seamless control</span>
                      <span className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform text-xs">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. IMPACT METRICS / BENEFITS (Clean 8px/6px Curvature)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-y border-hairline bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
              <div>
                <SectionReveal variant="badge">
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4 shadow-xs">
                    Impact &amp; Benefits
                  </span>
                </SectionReveal>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink max-w-2xl leading-tight">
                  Consolidate all of your lending, collections, and data workflows
                </h2>
              </div>
              <p className="text-muted text-base max-w-md leading-relaxed">
                From borrower intake and automated underwriting to field recovery and real-time data replication, get a connected solution engineered for institutional precision.
              </p>
            </div>
          </SectionReveal>

          {/* 3 Metric Columns with Smooth Animated Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: BoltIcon,
                target: 65,
                suffix: '%',
                decimals: 0,
                title: 'Accelerated Cycle Times',
                desc: 'Target cycle time reduction achieved through automated KYC rules, real-time intake parsing, and direct core banking handoffs.',
              },
              {
                icon: ShieldCheckIcon,
                target: 99.9,
                suffix: '%',
                decimals: 1,
                title: 'Operational Precision',
                desc: 'Eliminate duplicate data entry, missed compliance deadlines, and spreadsheet errors across lending and collections.',
              },
              {
                icon: LayersIcon,
                target: 4.8,
                suffix: 'x',
                decimals: 1,
                title: 'Throughput Growth',
                desc: 'Scale commercial loan origination and portfolio management volume effortlessly without expanding manual headcount.',
              },
            ].map((metric, i) => {
              const IconComp = metric.icon;
              return (
                <SectionReveal key={metric.title} delay={i * 0.1}>
                  <div className="p-8 rounded-xl bg-[#FAF9F6] border border-hairline hover:border-[#A7F3D0] hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-b from-[#0E704C] to-[#22A06B] text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4 text-white" />
                      </div>
                      
                      {/* Animated Odometer Number */}
                      <p className="font-display font-bold text-4xl sm:text-5xl text-ink mb-2">
                        <CountUp
                          to={metric.target}
                          decimals={metric.decimals}
                          suffix={metric.suffix}
                          duration={1.5}
                        />
                      </p>

                      <h3 className="text-ink font-semibold text-lg mb-2">{metric.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{metric.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          {/* Factual Prototype Disclaimer to Comply with Section 8 of Brief */}
          <div className="mt-8 text-center">
            <p className="text-[11px] text-muted-light font-mono">
              *Illustrative operational capabilities and workflow benchmarks simulated for prototype evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. INTERACTIVE FEATURES & SERVICE SWITCHER
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          {/* Header + Tabs Switcher Bar */}
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <SectionReveal variant="badge">
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4 shadow-xs">
                    Core Products
                  </span>
                </SectionReveal>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
                  Experience the Evnorix Software Suite
                </h2>
              </div>

              {/* Interactive Segmented Switcher with Crisp 8px/6px Capsule */}
              <div className="relative flex items-center p-1 bg-card border border-hairline rounded-lg shadow-sm">
                {Object.values(servicesData).map((srv) => {
                  const isActive = activeTab === srv.id;
                  const IconComp = srv.icon;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setActiveTab(srv.id)}
                      className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeFeaturePill"
                          className="absolute inset-0 bg-gradient-to-r from-[#0A1C16] to-[#0E4835] rounded-md shadow-sm ring-1 ring-white/10 -z-10"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      )}
                      <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#52C480]' : 'text-muted'}`} />
                      <span>{srv.tabLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </SectionReveal>

          {/* Interactive Feature Display Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="bg-card border border-hairline rounded-xl p-6 sm:p-10 lg:p-12 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Interactive Mock UI Dashboard */}
                <div className="lg:col-span-7">
                  <div className="bg-[#F7F6F2] rounded-lg p-6 border border-hairline shadow-inner">
                    {/* Mock Dashboard Topbar */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-hairline">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0E704C]" />
                        <span className="text-ink font-semibold text-xs uppercase tracking-wider">
                          {currentService.mockUi.headerTitle}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted text-[11px]">Live Feed</span>
                        <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                      </div>
                    </div>

                    {/* Revenue / Pipeline Metrics Box */}
                    <div className="bg-card rounded-md p-4 border border-hairline mb-5 shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-muted text-[11px] font-medium uppercase">{currentService.mockUi.stat1Label}</span>
                        <p className="font-display font-bold text-2xl text-ink mt-0.5">
                          {currentService.mockUi.stat1Prefix}
                          {currentService.mockUi.stat1Val.toLocaleString()}
                          {currentService.mockUi.stat1Suffix || ''}
                        </p>
                      </div>
                      <span className="px-2.5 py-0.5 text-xs font-semibold text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md">
                        {currentService.mockUi.stat1Badge}
                      </span>
                    </div>

                    {/* Mini Bar Chart Activity */}
                    <div className="bg-card rounded-md p-4 border border-hairline mb-5 shadow-sm">
                      <span className="text-muted text-[11px] font-semibold uppercase tracking-wider block mb-3">Weekly Operational Activity</span>
                      <div className="flex items-end justify-between gap-2 h-24 pt-2">
                        {currentService.mockUi.chartBars.map((bar, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${bar}%` }}
                              transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
                              className="w-full rounded-t-sm bg-gradient-to-t from-[#0E704C] to-[#52C480]"
                            />
                            <span className="text-[10px] text-muted-light font-medium">{currentService.mockUi.days[idx]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Queue Stream */}
                    <div className="space-y-2">
                      {currentService.mockUi.recentItems.map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-3 rounded-md bg-card border border-hairline text-xs">
                          <span className="font-semibold text-ink">{item.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-muted">{item.amount}</span>
                            <span className="text-[#0E704C] font-semibold px-2 py-0.5 bg-[#E6F7F0] rounded-md text-[10px]">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Service Description & Capabilities */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0E704C] mb-3">
                    <span className="text-lg">{currentService.icon}</span>
                    <span>{currentService.tabLabel}</span>
                  </div>

                  <h3 className="font-display font-bold text-3xl text-ink leading-tight mb-4">
                    {currentService.title}
                  </h3>

                  <p className="text-ink-soft text-sm font-medium leading-relaxed mb-4">
                    {currentService.tagline}
                  </p>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {currentService.description}
                  </p>

                  {/* Checklist Capabilities */}
                  <div className="space-y-2.5 mb-8">
                    {currentService.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs font-semibold text-ink">
                        <div className="w-4 h-4 rounded-md bg-[#E6F7F0] text-[#0E704C] flex items-center justify-center text-[10px]">
                          ✓
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metric Chips with Animated Counters */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {currentService.metrics.map((m) => (
                      <div key={m.label} className="p-3 bg-[#FAF9F6] border border-hairline rounded-lg">
                        <p className="text-muted text-[11px]">{m.label}</p>
                        <p className="font-display font-bold text-xl text-ink mt-0.5">
                          <CountUp
                            to={m.num}
                            decimals={m.decimals}
                            prefix={m.prefix || ''}
                            suffix={m.suffix}
                            duration={1.2}
                          />
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={currentService.to}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-gradient-btn text-white text-xs font-semibold rounded-md shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                  >
                    <span>Explore {currentService.title}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PARTNERED WITH LEADERS (Inspired by Reference Visual Concept)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#040D09] text-white relative overflow-hidden">
        {/* Concentric Ambient Geometric Orbit Rings (Matching reference) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[980px] h-[980px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1240px] h-[1240px] rounded-full border border-white/[0.02] pointer-events-none" />
        
        {/* Soft emerald central ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-radial from-[#0E704C]/25 via-[#0A1C16]/20 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Main Centered Reference Header */}
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-[#52C480] bg-[#0E2E20] border border-[#164D36] rounded-md mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52C480] animate-pulse" />
                Trusted By Financial Leaders
              </span>
              
              <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Partnered with leaders across{' '}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#A7F3D0] via-[#52C480] to-[#22C55E]">
                  modern lending institutions
                </span>
              </h2>
            </div>
          </SectionReveal>

          {/* Cards Carousel Container with Side Navigation Arrows (Spaced comfortably) */}
          <div className="relative px-2 sm:px-12 lg:px-14">
            {/* Left / Right Arrow Floating Controls (Spaced with generous distance) */}
            <button
              type="button"
              onClick={() => setActiveLeaderIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              aria-label="Previous Leader"
              className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0A1C16]/90 border border-white/15 backdrop-blur-md text-white/80 hover:text-white hover:border-[#52C480] flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setActiveLeaderIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              aria-label="Next Leader"
              className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0A1C16]/90 border border-white/15 backdrop-blur-md text-white/80 hover:text-white hover:border-[#52C480] flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* 4 Portrait Cards Grid (Exact matching concept to reference image) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {testimonials.map((t, idx) => {
                const isHovered = hoveredLeaderIndex === idx;
                const isSelected = activeLeaderIndex === idx;
                const showBlueprint = isHovered || isSelected;

                return (
                  <SectionReveal key={t.name} delay={idx * 0.08}>
                    <motion.div
                      onMouseEnter={() => handleCardHover(idx)}
                      onMouseLeave={() => handleCardLeave()}
                      onClick={() => setActiveLeaderIndex(prev => prev === idx ? null : idx)}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className={`relative rounded-2xl overflow-hidden cursor-pointer h-[440px] transition-all duration-300 touch-manipulation ${
                        showBlueprint
                          ? 'border-2 border-[#52C480] shadow-[0_0_35px_rgba(82,196,128,0.25)] ring-1 ring-[#52C480]/40'
                          : 'border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {showBlueprint ? (
                          /* ─────────────────────────────────────────────────────────────
                             BACK / ACTIVE STATE: VIBRANT PRIMARY GREEN BLUEPRINT CARD
                             ───────────────────────────────────────────────────────────── */
                          <motion.div
                            key="blueprint"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="absolute inset-0 bg-gradient-to-b from-[#0E704C] via-[#0B5A3C] to-[#073D29] p-6 flex flex-col justify-between shadow-2xl"
                          >
                            {/* Blueprint Coordinate Grid Overlay */}
                            <div
                              className="absolute inset-0 opacity-25 pointer-events-none"
                              style={{
                                backgroundImage: `
                                  linear-gradient(to right, rgba(167, 243, 208, 0.35) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(167, 243, 208, 0.35) 1px, transparent 1px)
                                `,
                                backgroundSize: '24px 24px',
                              }}
                            />

                            {/* Top: Name & Role */}
                            <div className="relative z-10">
                              <h3 className="font-display font-bold text-xl text-white leading-tight drop-shadow-sm">
                                {t.name}
                              </h3>
                              <p className="text-[11px] text-[#A7F3D0] font-body font-semibold mt-0.5">
                                {t.role}
                              </p>
                              <p className="text-[11px] text-emerald-100/75 font-body mt-0.5">
                                {t.company}
                              </p>
                            </div>

                            {/* Middle: Structured Operational Impact & Verification Box in Rich Primary Green */}
                            <div className="relative z-10 bg-[#06422C]/90 border border-[#A7F3D0]/40 rounded-xl p-3.5 shadow-md backdrop-blur-sm">
                              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#166B4A]">
                                <span className="text-[10px] font-body font-semibold uppercase tracking-wider text-[#A7F3D0]">
                                  {t.badge}
                                </span>
                                <span className="px-2 py-0.5 text-[10px] font-body font-bold text-[#0E704C] bg-white rounded shadow-xs">
                                  {t.metric}
                                </span>
                              </div>

                              <div className="flex items-center justify-between text-xs mb-1.5">
                                <span className="text-emerald-100/85 text-[10px] font-body font-medium">{t.impactLabel}</span>
                                <span className="text-white font-body font-bold text-xs tracking-tight">{t.statVal}</span>
                              </div>

                              <div className="flex items-center gap-1.5 text-[10px] text-[#A7F3D0] pt-0.5">
                                <CheckIcon className="w-3 h-3 text-[#52C480] flex-shrink-0" />
                                <span className="font-body font-medium leading-snug">{t.pillar}</span>
                              </div>
                            </div>

                            {/* Bottom: Full Narrative Story & Mobile Close Hint */}
                            <div className="relative z-10 pt-2.5 border-t border-[#166B4A]">
                              <p className="text-[11px] text-white/90 leading-relaxed font-body font-normal">
                                "{t.story}"
                              </p>
                              <div className="mt-2 flex items-center justify-between text-[10px] text-[#A7F3D0]/85 font-medium md:hidden">
                                <span>Tap to view portrait</span>
                                <span>↺</span>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          /* ─────────────────────────────────────────────────────────────
                             FRONT STATE: CLEAN FULL PORTRAIT CARD
                             ───────────────────────────────────────────────────────────── */
                          <motion.div
                            key="portrait"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="absolute inset-0 bg-[#050E0A] flex flex-col justify-end p-5"
                          >
                            {/* Clean Portrait Image */}
                            <img
                              src={t.image}
                              alt={t.name}
                              className="absolute inset-0 w-full h-full object-cover object-top"
                            />

                            {/* Soft Gradient Fade on bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040D09] via-[#040D09]/30 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#040D09]/20 via-transparent to-transparent" />

                            {/* Bottom: Name & Role Title + Mobile Tap Indicator */}
                            <div className="relative z-10">
                              <h3 className="font-display font-bold text-xl text-white leading-snug">
                                {t.name}
                              </h3>
                              <p className="text-xs text-white/70 font-medium mt-0.5">
                                {t.role}
                              </p>
                              <p className="text-[11px] text-[#52C480] font-mono mt-0.5">
                                {t.company}
                              </p>

                              {/* Mobile Tap to View Blueprint Indicator */}
                              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-[#A7F3D0] md:hidden">
                                <span>Tap to view blueprint</span>
                                <span>→</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </SectionReveal>
                );
              })}
            </div>

            {/* Bottom Carousel Indicator Bar (Matching reference) */}
            <div className="mt-10 max-w-xs mx-auto flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveLeaderIndex(idx)}
                  className="flex-1 h-1 rounded-full transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      activeLeaderIndex === idx
                        ? 'bg-gradient-to-r from-[#52C480] to-[#22C55E] shadow-[0_0_8px_#52C480]'
                        : 'bg-white/15 hover:bg-white/30'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CTA BANNER
         ───────────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
