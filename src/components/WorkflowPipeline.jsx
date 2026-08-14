import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from './Icons';

export default function WorkflowPipeline({
  title = 'Lending Workflow Architecture',
  badge = 'End-to-End Pipeline',
  subtitle = 'How information moves across verified stages from intake to disbursement.',
  nodes = [],
  className = '',
}) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-progress travelling signal
  useEffect(() => {
    if (isPaused || nodes.length === 0) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, nodes.length]);

  return (
    <div
      className={`relative rounded-xl border border-[#193E30] bg-[#0A1C16] text-white p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ─── Low-Contrast Technical Background Grid ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(82, 196, 128, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(82, 196, 128, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glowing radial center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#0E704C]/15 blur-3xl pointer-events-none" />

      {/* ─── Header ─── */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#193E30]/80">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-widest text-[#52C480] bg-[#122E25] border border-[#194D3B] rounded-md mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52C480] animate-pulse" />
            {badge}
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            {title}
          </h3>
          <p className="text-[#94A3B8] text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#94A3B8] font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#52C480] animate-ping" />
            LIVE SIGNAL
          </span>
          <span className="text-[#194D3B]">|</span>
          <span>STEP {activeNodeIndex + 1} OF {nodes.length}</span>
        </div>
      </div>

      {/* ─── Pipeline Nodes Flow (Vertical on Mobile, Structured Vertical Flow with Technical Connectors) ─── */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {nodes.map((node, index) => {
          const isActive = activeNodeIndex === index;
          const isPassed = index < activeNodeIndex;
          const isSelected = hoveredNode === index || (hoveredNode === null && isActive);

          return (
            <div key={node.id || node.title} className="w-full flex flex-col items-center">
              {/* Connector Segment with Travelling Signal */}
              {index > 0 && (
                <div className="relative w-0.5 h-10 sm:h-12 bg-[#193E30] flex items-center justify-center my-0.5">
                  {/* Subtle travelling signal packet */}
                  {activeNodeIndex === index && (
                    <motion.div
                      layoutId="signalPacket"
                      className="absolute w-2.5 h-2.5 rounded-full bg-[#52C480] shadow-[0_0_8px_#52C480]"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 20, opacity: 1 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                  )}

                  {/* Lit connector line if passed */}
                  {isPassed && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0E704C] to-[#52C480] opacity-80" />
                  )}
                </div>
              )}

              {/* Node Card */}
              <motion.div
                onClick={() => {
                  setActiveNodeIndex(index);
                  setHoveredNode(index);
                }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                className={`relative w-full rounded-lg p-4 sm:p-5 border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0E2C22] border-[#52C480] shadow-[0_0_18px_rgba(82,196,128,0.18)] ring-1 ring-[#52C480]/30'
                    : isPassed
                    ? 'bg-[#0D241C] border-[#194D3B] opacity-90'
                    : 'bg-[#0C2018] border-[#143327] hover:border-[#1F5441] opacity-75'
                }`}
              >
                {/* Node Active Anchor Dot */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    {/* Node Number/Indicator */}
                    <div
                      className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#52C480] text-[#0A1C16] shadow-sm'
                          : isPassed
                          ? 'bg-[#0E704C] text-white'
                          : 'bg-[#143327] text-[#94A3B8]'
                      }`}
                    >
                      {isPassed ? <CheckIcon className="w-3.5 h-3.5" /> : node.step || `0${index + 1}`}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#52C480] font-semibold">
                          {node.tag || `STAGE ${index + 1}`}
                        </span>
                        {node.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-[#122E25] text-[#94A3B8] border border-[#194D3B]">
                            {node.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-white font-semibold text-sm sm:text-base leading-snug">
                        {node.title}
                      </h4>

                      <p className="text-[#94A3B8] text-xs leading-relaxed mt-1">
                        {node.description}
                      </p>
                    </div>
                  </div>

                  {/* Status / Metric chip */}
                  {node.metric && (
                    <div className="text-right flex-shrink-0">
                      <span
                        className={`inline-block px-2 py-0.5 text-[10px] font-mono rounded-md font-semibold ${
                          isActive
                            ? 'bg-[#52C480]/20 text-[#52C480] border border-[#52C480]/40'
                            : 'bg-[#122E25] text-[#94A3B8] border border-[#194D3B]'
                        }`}
                      >
                        {node.metric}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ─── Footer Controls ─── */}
      <div className="relative z-10 mt-10 pt-6 border-t border-[#193E30]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#52C480]" />
          <span>Click any stage to simulate custom checkpoint inspection</span>
        </div>

        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#122E25] hover:bg-[#194D3B] text-white border border-[#194D3B] transition-colors font-mono text-[11px]"
        >
          {isPaused ? '▶ Resume Flow' : '⏸ Pause Flow'}
        </button>
      </div>
    </div>
  );
}
