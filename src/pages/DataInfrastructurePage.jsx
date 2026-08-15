import { Link } from 'react-router-dom';
import SectionReveal from '../components/SectionReveal';
import CTABanner from '../components/CTABanner';

export default function DataInfrastructurePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Database Repositories & Data Mirroring
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#0E704C]/10 via-[#1B9A66]/8 to-[#52C480]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb back link */}
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink transition-colors"
              >
                <span>←</span>
                <span>All services</span>
              </Link>
              <span className="text-muted-light text-xs">/</span>
              <span className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-semibold text-[#0E704C] bg-[#E6F7F0] border border-[#A7F3D0] rounded-md">
                Technology Service
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Headline & Core Narrative */}
            <div className="lg:col-span-7">
              <SectionReveal delay={0.05}>
                <h1 className="display-serif text-4xl sm:text-6xl lg:text-7xl text-ink font-bold leading-tight mb-6">
                  Database Repositories &amp; Data Mirroring
                </h1>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
                  Reliable data infrastructure services for repository management, real-time controlled synchronization, replication/mirroring, and high-availability operational continuity.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-brand-gradient-btn text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                  >
                    Discuss your data infrastructure
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

            {/* Right: Live Data Mirroring Node Telemetry */}
            <div className="lg:col-span-5">
              <SectionReveal delay={0.2}>
                <div className="relative rounded-2xl bg-gradient-to-b from-[#0A1C16] to-[#06140F] border border-[#193E30] p-6 text-white shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#52C480] animate-pulse" />
                      Replication &amp; Sync Matrix
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-white/10 rounded text-white/80">
                      Illustrative Telemetry
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { node: 'Primary Core Banking Ledger', status: 'Live & Replicating', latency: '12ms', sync: '100% Synced' },
                      { node: 'Analytical Data Warehouse Replica', status: 'Mirror Active', latency: '45ms', sync: 'Continuous CDC' },
                      { node: 'Disaster Recovery Vault (Hot Standby)', status: 'Standby Ready', latency: '28ms', sync: 'Encrypted' },
                    ].map((item) => (
                      <div key={item.node} className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                        <div>
                          <p className="font-semibold text-white">{item.node}</p>
                          <p className="text-[11px] text-white/70">{item.status} &bull; {item.latency}</p>
                        </div>
                        <div className="text-right">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#0E704C]/50 text-[#A7F3D0] border border-[#52C480]/30">
                            {item.sync}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                    <span>Zero Data Loss Policy</span>
                    <span className="text-[#52C480] font-semibold">Continuous Replication</span>
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
          2. CAPABILITIES (Section 3 of Brief)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#0E704C] block mb-2">
                DATA INFRASTRUCTURE SERVICES
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
                Architected for Enterprise Continuity &amp; Auditability
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Data Replication',
                desc: 'Continuous change-data-capture (CDC) pipelines mirroring critical transactional tables with sub-second replication latency.',
              },
              {
                title: 'Controlled Multi-Node Sync',
                desc: 'Deterministic bi-directional synchronization algorithms preventing split-brain conflicts across distributed branches.',
              },
              {
                title: 'Operational Continuity & Disaster Recovery',
                desc: 'Hot-standby replicas with automated failover mechanisms ensuring lending and collections operations never halt during outages.',
              },
              {
                title: 'Secure & Encrypted Data Handling',
                desc: 'End-to-end TLS 1.3 in-transit and AES-256 at-rest encryption protocols adhering strictly to financial compliance mandates.',
              },
              {
                title: 'Proactive Health Monitoring & Alerts',
                desc: 'Real-time telemetry tracking replication lag, queue backpressure, and heartbeat anomalies before they impact end-users.',
              },
              {
                title: 'Complete Auditability & Provenance',
                desc: 'Immutable append-only ledger logging all table mutations, schema migrations, and sync checkpoints for regulatory review.',
              },
            ].map((cap, idx) => (
              <SectionReveal key={cap.title} delay={idx * 0.08}>
                <div className="p-8 rounded-2xl bg-card border border-hairline shadow-sm hover:border-[#A7F3D0] hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0E704C] mb-4" />
                    <h3 className="font-display font-bold text-lg text-ink mb-2">{cap.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{cap.desc}</p>
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
