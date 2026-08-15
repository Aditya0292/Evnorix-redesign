import { Link } from 'react-router-dom';
import SectionReveal from '../components/SectionReveal';
import CTABanner from '../components/CTABanner';
import { CheckIcon } from '../components/Icons';

const services = [
  {
    id: 'los',
    to: '/los',
    badge: 'Core Workflow Service',
    title: 'Loan Origination System (LOS) Services',
    tagline: 'Technology services to design, digitize, integrate, and improve loan-origination workflows.',
    description:
      'We build and integrate custom LOS workflows that eliminate manual paperwork, fragmented emails, and spreadsheet routing. Configure automated underwriting rules, real-time KYC verification, and direct core banking handoffs.',
    features: [
      'Custom borrower intake & application portal integration',
      'Configurable credit decisioning & policy rules engine',
      'Instant KYC parsing & automated identity verification',
      'Direct core banking disbursal & webhook handoff',
    ],
    ctaText: 'Discuss your LOS requirement →',
  },
  {
    id: 'collections',
    to: '/collections',
    badge: 'Operations Service',
    title: 'Collections Services',
    tagline: 'Technology and workflow services that help teams manage collections operations and field activity.',
    description:
      'Improve recovery visibility with automated delinquency escalation trees, agent follow-up queues, field officer coordination, and secure borrower payment links with real-time settlement reconciliation.',
    features: [
      'Configurable delinquency bucket workflows & triggers',
      'Centralized agent task queues & promise-to-pay tracking',
      'Field activity verification & mobile receipt logging',
      'Instant self-service borrower payment links',
    ],
    ctaText: 'Improve collection operations →',
  },
  {
    id: 'data-infrastructure',
    to: '/data-infrastructure',
    badge: 'Data Infrastructure Service',
    title: 'Database Repositories & Data Mirroring',
    tagline: 'Reliable data infrastructure services for repository management and operational continuity.',
    description:
      'High-availability data infrastructure with sub-second replication, controlled multi-node synchronization, hot-standby disaster recovery vaults, and immutable audit logs designed to eliminate data loss.',
    features: [
      'Sub-second change-data-capture (CDC) replication',
      'Deterministic multi-node synchronization algorithms',
      'Hot-standby disaster recovery & automated failover',
      'End-to-end TLS 1.3 & AES-256 financial compliance encryption',
    ],
    ctaText: 'Discuss your data infrastructure →',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-8 overflow-hidden text-center">
        <div className="absolute top-20 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#0E704C]/12 via-[#1B9A66]/10 to-[#52C480]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <SectionReveal variant="badge">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-gradient-to-r from-[#E6F7F0] via-[#D1F4E4] to-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C] animate-pulse" />
              Technology Services
            </span>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <h1 className="display-serif text-4xl sm:text-6xl lg:text-7xl text-ink font-bold leading-tight mb-6">
              Engineering Services for Modern Lending Teams
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Three core technology service specializations engineered to accelerate originations, modernize collections, and safeguard mission-critical data.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          2. THREE CORE SERVICES SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 lg:space-y-20">
            {services.map((s, idx) => (
              <SectionReveal key={s.id} delay={idx * 0.1}>
                <div className="bg-card border border-hairline rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-card-hover hover:border-[#A7F3D0] transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left: Service Info & Capabilities */}
                    <div className="lg:col-span-7">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-4">
                        {s.badge}
                      </span>
                      
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-3">
                        {s.title}
                      </h2>
                      
                      <p className="text-muted text-base leading-relaxed mb-6 font-medium">
                        {s.tagline}
                      </p>
                      
                      <p className="text-muted text-sm leading-relaxed mb-8">
                        {s.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {s.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-[#E6F7F0] text-[#0E704C] flex items-center justify-center flex-shrink-0">
                              <CheckIcon className="w-3 h-3 text-[#0E704C]" />
                            </div>
                            <span className="text-xs text-ink font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={s.to}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E704C] hover:text-[#22A06B] transition-colors"
                      >
                        <span>{s.ctaText}</span>
                      </Link>
                    </div>

                    {/* Right: Technical Highlights Card */}
                    <div className="lg:col-span-5">
                      <div className="rounded-xl bg-[#0A1C16] border border-[#193E30] p-6 text-white shadow-xl">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                          <span className="text-xs font-mono font-bold text-[#A7F3D0]">
                            Evnorix Delivery Scope
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#52C480]" />
                        </div>
                        <p className="text-xs text-white/80 leading-relaxed mb-4">
                          Hands-on discovery, custom API connector builds, legacy core integration, and ongoing long-term technical operations support.
                        </p>
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A7F3D0]">
                          <span>Dedicated Engineering Partner</span>
                          <span>✓ 100% Tailored</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CTA BANNER
         ───────────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
