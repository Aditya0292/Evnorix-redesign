import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import CTABanner from '../components/CTABanner';

const architectureViews = [
  {
    id: 'streaming',
    label: 'Data Streaming & Kafka Pipeline',
    tag: 'Real-Time Ingestion',
    image: '/assets/data/data_infrastructure_illustration.png',
    title: 'Distributed Event Streaming Architecture',
    desc: 'High-throughput event streaming connecting core banking ledgers, analytics engines, and compliance pipelines with sub-second replication latency.',
  },
  {
    id: 'topology',
    label: 'Distributed Node Topology',
    tag: 'Multi-Branch Sync',
    image: '/assets/data/data_pipeline_nodes.png',
    title: 'Controlled Multi-Node Synchronization',
    desc: 'Bi-directional replication meshes ensuring zero data drift between primary banking cores, reporting databases, and localized branches.',
  },
  {
    id: 'processing',
    label: 'Hardware & Processing Engine',
    tag: 'Data Vault',
    image: '/assets/data/data_processing_unit.png',
    title: 'High-Availability Repository Vault',
    desc: 'Hot-standby disaster recovery clusters with automated failover mechanisms and continuous end-to-end AES-256 encryption.',
  },
];

export default function DataInfrastructurePage() {
  const [activeView, setActiveView] = useState(0);
  const currentView = architectureViews[activeView];

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Database Repositories & Data Mirroring
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#0E704C]/12 via-[#1B9A66]/10 to-[#52C480]/15 blur-3xl pointer-events-none" />

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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Headline & Core Narrative */}
            <div className="lg:col-span-6">
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
                <div className="flex flex-wrap items-center gap-4 mb-10">
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

              {/* Service Capabilities Pills */}
              <SectionReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-hairline max-w-lg">
                  <div>
                    <p className="font-mono text-xs font-bold text-ink flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C]" />
                      Continuous CDC
                    </p>
                    <p className="text-[11px] text-muted mt-0.5">Real-time change capture</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold text-ink flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C]" />
                      Zero Data Loss
                    </p>
                    <p className="text-[11px] text-muted mt-0.5">Hot-standby replicas</p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right: Rich Isometric Architecture Illustration Card */}
            <div className="lg:col-span-6">
              <SectionReveal delay={0.2}>
                <div className="relative rounded-2xl bg-gradient-to-b from-[#0A1C16] via-[#081813] to-[#040D09] border border-[#193E30] p-6 text-white shadow-2xl overflow-hidden ring-1 ring-white/10">
                  
                  {/* Top Bar with Switcher */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#52C480] animate-pulse" />
                      Infrastructure Architecture
                    </span>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono bg-white/10 text-white/90 rounded-md border border-white/10">
                      {currentView.tag}
                    </span>
                  </div>

                  {/* Architecture Diagram Viewport */}
                  <div className="relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 p-4 mb-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentView.id}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="relative flex flex-col items-center justify-center min-h-[260px]"
                      >
                        <img
                          src={currentView.image}
                          alt={currentView.title}
                          className="max-h-[240px] w-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Diagram Description */}
                  <div className="mb-4">
                    <h4 className="font-display font-bold text-sm text-white mb-1">
                      {currentView.title}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {currentView.desc}
                    </p>
                  </div>

                  {/* Interactive Architecture View Switcher Pills */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                    {architectureViews.map((view, idx) => (
                      <button
                        key={view.id}
                        type="button"
                        onClick={() => setActiveView(idx)}
                        className={`py-2 px-2 rounded-lg text-[10px] font-mono font-semibold transition-all duration-200 text-center ${
                          activeView === idx
                            ? 'bg-[#0E704C] text-white shadow-md border border-[#52C480]/50'
                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                        }`}
                      >
                        {view.tag}
                      </button>
                    ))}
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
