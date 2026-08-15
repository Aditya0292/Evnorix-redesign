import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import CTABanner from '../components/CTABanner';
import { CheckIcon, SparklesIcon, ShieldCheckIcon, BoltIcon, LayersIcon } from '../components/Icons';

export default function AboutPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Unveiling Our Vision & Mission)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-8 overflow-hidden text-center bg-surface">
        {/* Soft Ambient Radial Background Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-gradient-to-b from-[#0E704C]/10 via-[#52C480]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10">
          <SectionReveal variant="badge">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] bg-gradient-to-r from-[#E6F7F0] via-[#D1F4E4] to-[#E6F7F0] border border-[#A7F3D0] rounded-md mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E704C] animate-pulse" />
              About Evnorix
            </span>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.15] tracking-tight mb-6">
              Unveiling Our Vision and Mission
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our vision and mission, as we aim to revolutionize institutional lending operations by providing automated, connected, and high-precision software solutions.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE BENTO GRID SHOWCASE (Inspired by Reference Layout)
         ───────────────────────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* ── COLUMN 1: Team Photo + Social / Ecosystem + 2 Offices ── */}
              <div className="flex flex-col gap-5 h-full">
                {/* Team Studio Photo (Top Left) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden shadow-card border border-hairline relative flex-1 min-h-[255px] group"
                >
                  <img
                    src="/assets/about/team_culture.jpg"
                    alt="Evnorix Team Culture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold tracking-tight">Engineering &amp; Operations</p>
                    <p className="text-[11px] text-white/80">Evnorix HQ</p>
                  </div>
                </motion.div>

                {/* Bottom Combo: Socials 2x2 Grid + 2 Hubs Card */}
                <div className="flex-1 min-h-[255px] p-6 rounded-2xl bg-card border border-hairline shadow-card flex flex-col justify-between hover:border-[#A7F3D0] transition-colors">
                  {/* 4 Social Media Quick Buttons (2x2 Grid matching reference) */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {/* Twitter / X */}
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center shadow-xs transition-all hover:scale-105"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center shadow-xs transition-all hover:scale-105"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-[#24292F] hover:bg-[#1B1F23] text-white flex items-center justify-center shadow-xs transition-all hover:scale-105"
                      aria-label="GitHub"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white flex items-center justify-center shadow-xs transition-all hover:scale-105"
                      aria-label="YouTube"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>

                  {/* 2 Global Hubs Content */}
                  <div>
                    <p className="font-display font-black text-4xl text-ink leading-none mb-2">2</p>
                    <h3 className="font-bold text-sm text-ink mb-1">Global Engineering Hubs</h3>
                    <p className="text-muted text-xs leading-relaxed">
                      Deployment and solution architecture centers in New York and London.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── COLUMN 2: Tall Lime/Emerald 50+ Team Members Card ── */}
              <div className="flex flex-col h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl p-8 bg-gradient-to-b from-[#BEF264] via-[#A3E635] to-[#84CC16] text-[#143805] flex flex-col justify-between h-full min-h-[530px] shadow-lg border border-[#84CC16]/30 relative overflow-hidden"
                >
                  {/* Subtle Grid Accent */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(0, 0, 0, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  <div className="relative z-10">
                    <p className="font-display font-black text-6xl lg:text-7xl tracking-tight text-[#143805]">
                      50+
                    </p>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-xl text-[#143805] mb-2">
                      Team Members
                    </h3>
                    <p className="text-[#204E08] text-xs leading-relaxed font-medium">
                      Meet our dedicated team of 50+ lending operations engineers, quantitative analysts, and fintech architects driving innovation at Evnorix.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* ── COLUMN 3: Solid Dark 100% Dedication Card + Team Collaboration Photo ── */}
              <div className="flex flex-col gap-5 h-full">
                {/* 100% Dedication Dark Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="p-7 rounded-2xl bg-gradient-to-b from-[#0A1C16] via-[#0D2A1F] to-[#12382B] text-white shadow-xl border border-[#193E30] flex flex-col justify-between flex-1 min-h-[255px]"
                >
                  <p className="font-display font-black text-4xl text-white">100%</p>
                  <div>
                    <h3 className="font-bold text-sm text-[#52C480] mb-1.5">Operational Dedication</h3>
                    <p className="text-[#94A3B8] text-xs leading-relaxed">
                      We are committed to providing lending institutions with 99.99% operational uptime and zero data loss.
                    </p>
                  </div>
                </motion.div>

                {/* Team Collaboration Photo (Bottom Image) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden shadow-card border border-hairline relative flex-1 min-h-[255px] group"
                >
                  <img
                    src="/assets/about/team_collaboration.jpg"
                    alt="Evnorix Team Collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold tracking-tight">Quantitative Systems</p>
                    <p className="text-[11px] text-white/80">Collaborative Review</p>
                  </div>
                </motion.div>
              </div>

              {/* ── COLUMN 4: 1 Mission Card + 100% Precision Card ── */}
              <div className="flex flex-col gap-5 h-full">
                {/* 1 Mission Card */}
                <div className="p-7 rounded-2xl bg-card border border-hairline shadow-card flex flex-col justify-between flex-1 min-h-[255px] hover:border-[#A7F3D0] transition-colors">
                  <p className="font-display font-black text-4xl text-ink">1</p>
                  <div>
                    <h3 className="font-bold text-sm text-ink mb-1.5">Unified Mission</h3>
                    <p className="text-muted text-xs leading-relaxed">
                      We are united by one mission: eliminate spreadsheet friction and manual delay across commercial lending.
                    </p>
                  </div>
                </div>

                {/* 100% Precision Card */}
                <div className="p-7 rounded-2xl bg-card border border-hairline shadow-card flex flex-col justify-between flex-1 min-h-[255px] hover:border-[#A7F3D0] transition-colors">
                  <p className="font-display font-black text-4xl text-ink">100%</p>
                  <div>
                    <h3 className="font-bold text-sm text-ink mb-1.5">Spread Precision</h3>
                    <p className="text-muted text-xs leading-relaxed">
                      Policy-tailored financial spreads and automated ratio validations on every credit memo packet.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8"><div className="divider" /></div>

      {/* ─────────────────────────────────────────────────────────────
          3. EDITORIAL NARRATIVE VALUES & MISSION ROWS (Matching Bottom Reference)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto space-y-20 lg:space-y-28">
          
          {/* Row 1: Curiosity & Rigorous Engineering */}
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Title Column */}
              <div className="lg:col-span-5">
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] block mb-3">
                  OUR VALUES
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
                  Reliability &amp; Engineering Rigor
                </h2>
              </div>

              {/* Right Narrative Column */}
              <div className="lg:col-span-7 space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  We believe that financial infrastructure should be as dependable as the electricity grid. Our engineering philosophy is anchored in deterministic execution: eliminating manual re-keying, spreadsheet formula fragility, and opaque decision routing.
                </p>
                <p>
                  Every line of code, automated credit rule, and financial spread algorithm is rigorously verified against institutional risk policies. We build systems designed for continuous operation, immutable auditability, and effortless scalability.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="border-t border-hairline/70" />

          {/* Row 2: Leading the Way in Institutional Lending */}
          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Title Column */}
              <div className="lg:col-span-5">
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#0E704C] block mb-3">
                  OUR MISSION
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
                  Leading the Way in Lending Technology
                </h2>
              </div>

              {/* Right Narrative Column */}
              <div className="lg:col-span-7 space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Commercial lending institutions lose thousands of operational hours every month to disconnected software tools, fragmented email threads, and duplicate data entry. We exist to unite origination, underwriting, and committee memo generation into one seamless platform.
                </p>
                <p>
                  By empowering underwriters, loan officers, and risk committees with real-time telemetry and policy-enforced automation, we enable institutions to accelerate loan turnaround from days to minutes while maintaining absolute compliance and governance.
                </p>
              </div>
            </div>
          </SectionReveal>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CTA BANNER
         ───────────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
