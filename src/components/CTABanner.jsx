import { Link } from 'react-router-dom';
import SectionReveal from './SectionReveal';

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="relative rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden shadow-2xl border border-[#193E30] bg-gradient-to-br from-[#0A1C16] via-[#0D2E22] to-[#124232]">
            {/* Ambient luminous glow circles */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-light/10 blur-3xl pointer-events-none" />
            
            {/* Subtle textured vertical gradient line */}
            <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-[#0A1C16] via-[#0E704C] to-[#52C480] opacity-70" />

            <div className="relative z-10 max-w-lg">
              <span className="inline-block px-3 py-1 text-xs font-body font-medium uppercase tracking-widest text-[#52C480] bg-[#122E25] border border-[#194D3B] rounded-md mb-4">
                Get Started
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ondark leading-snug mb-3">
                Ready to streamline your operations?
              </h2>
              <p className="text-ondark-muted text-sm leading-relaxed">
                Tell us about your team and which systems need attention, and we will
                scope out how Evnorix can help.
              </p>
            </div>

            <Link
              to="/contact"
              className="relative z-10 flex-shrink-0 px-7 py-3.5 bg-gradient-to-r from-[#0E704C] via-[#168E5E] to-[#22A06B] hover:from-[#0B5A3D] hover:via-[#12774F] hover:to-[#1B8A5A] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-300 shadow-lg hover:shadow-teal/30 hover:scale-[1.02]"
            >
              Talk to Evnorix
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
