import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, BarChartIcon } from './Icons';

const productItems = [
  {
    title: 'LOS',
    subtitle: 'Loan Origination System',
    to: '/los',
    icon: SparklesIcon,
  },
  {
    title: 'Credit Memo',
    subtitle: 'Credit Memo & Reporting',
    to: '/credit-memo',
    icon: BarChartIcon,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isContact = location.pathname === '/contact';

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ── Single Unified Floating Gradient Navbar (With Opposite Contrast Theme on /contact) ── */}
        <nav
          className={`relative flex items-center justify-between h-16 md:h-18 px-5 sm:px-7 rounded-xl transition-all duration-300 ${
            isContact
              ? 'bg-white/95 text-[#0A1C16] border border-white/80 shadow-2xl backdrop-blur-md ring-1 ring-black/10'
              : 'bg-gradient-to-r from-[#0A1C16] via-[#0D2A1F] to-[#12382B] text-white border border-[#193E30] shadow-xl shadow-black/30'
          } ${scrolled ? 'ring-1 ring-white/10' : ''}`}
        >
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#0E704C] to-[#22A06B] flex items-center justify-center shadow-md ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-display font-bold text-base">E</span>
            </div>
            <span
              className={`font-body font-bold text-lg sm:text-xl tracking-tight lowercase transition-colors ${
                isContact ? 'text-[#0A1C16] group-hover:text-[#0E704C]' : 'text-white group-hover:text-[#52C480]'
              }`}
            >
              evnorix
            </span>
          </Link>

          {/* Desktop Nav Links & Opposite Contrast Button */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {/* Home */}
            <Link
              to="/"
              className={`relative font-body text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                location.pathname === '/'
                  ? isContact ? 'text-[#0E704C]' : 'text-[#52C480]'
                  : isContact ? 'text-[#0A1C16]/80 hover:text-[#0A1C16]' : 'text-white/80 hover:text-white'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E704C] to-[#52C480] rounded-full" />
              )}
            </Link>

            {/* Products Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  productsOpen
                    ? isContact ? 'text-[#0E704C]' : 'text-[#52C480]'
                    : isContact ? 'text-[#0A1C16]/80 hover:text-[#0A1C16]' : 'text-white/80 hover:text-white'
                }`}
                aria-expanded={productsOpen}
              >
                <span>Products</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsOpen ? 'rotate-180 text-[#0E704C]' : isContact ? 'text-[#0A1C16]/50' : 'text-white/50'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 100% Solid Opaque Dropdown Card with isolated high z-index */}
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-3 w-80 bg-[#0A1C16] rounded-2xl shadow-2xl border border-[#193E30] p-3.5 z-[150] ring-1 ring-black/40"
                    style={{ backgroundColor: '#0A1C16' }}
                  >
                    <div className="space-y-1">
                      {productItems.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={item.title}
                            to={item.to}
                            className="flex items-center gap-3 p-3 rounded-xl bg-[#0A1C16] hover:bg-[#122E25] transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#12382B] text-[#52C480] flex items-center justify-center group-hover:bg-[#0E704C] group-hover:text-white transition-colors">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-white font-semibold text-xs group-hover:text-[#52C480] transition-colors">
                                {item.title}
                              </p>
                              <p className="text-[#94A3B8] text-[11px] mt-0.5 leading-relaxed">
                                {item.subtitle}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-2 pt-2.5 border-t border-[#193E30] px-3 pb-1">
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-1.5 text-[#52C480] hover:text-[#86EFAC] text-xs font-semibold transition-colors group"
                      >
                        View all products
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`relative font-body text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                location.pathname === '/about'
                  ? isContact ? 'text-[#0E704C]' : 'text-[#52C480]'
                  : isContact ? 'text-[#0A1C16]/80 hover:text-[#0A1C16]' : 'text-white/80 hover:text-white'
              }`}
            >
              About
              {location.pathname === '/about' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E704C] to-[#52C480] rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`relative font-body text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                location.pathname === '/contact'
                  ? isContact ? 'text-[#0E704C] font-bold' : 'text-[#52C480]'
                  : isContact ? 'text-[#0A1C16]/80 hover:text-[#0A1C16]' : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
              {location.pathname === '/contact' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E704C] to-[#52C480] rounded-full" />
              )}
            </Link>

            {/* Opposite Contrast Button */}
            <Link
              to="/contact"
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${
                isContact
                  ? 'bg-[#0A1C16] hover:bg-[#0E704C] text-white'
                  : 'bg-white hover:bg-[#FAF9F6] text-[#0A1C16]'
              }`}
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
              isContact ? 'bg-black/5 border-black/10 hover:bg-black/10' : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-0.5 rounded transition-all duration-300 ${isContact ? 'bg-[#0A1C16]' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 rounded transition-all duration-300 ${isContact ? 'bg-[#0A1C16]' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 rounded transition-all duration-300 ${isContact ? 'bg-[#0A1C16]' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="md:hidden mt-2 bg-[#0A1C16] border border-[#193E30] rounded-xl p-5 shadow-2xl overflow-hidden z-[150]"
            >
              <div className="space-y-3">
                <Link
                  to="/"
                  onClick={() => {
                    setMobileOpen(false);
                    setProductsOpen(false);
                  }}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors touch-manipulation ${
                    location.pathname === '/' ? 'text-[#52C480] bg-white/5' : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Home
                </Link>

                {/* Mobile Products Section (Directly Clickable & Always Visible) */}
                <div className="rounded-xl bg-black/25 p-3 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between px-1 pb-1 border-b border-white/10">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A7F3D0] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52C480] animate-pulse" />
                      Products
                    </span>
                    <Link
                      to="/products"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="text-[11px] font-semibold text-[#52C480] hover:text-[#86EFAC] transition-colors"
                    >
                      View All Suite →
                    </Link>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {productItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.to}
                        onClick={() => {
                          setMobileOpen(false);
                        }}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 touch-manipulation ${
                          location.pathname === item.to
                            ? 'bg-[#0E704C]/40 border border-[#52C480]/40 text-white'
                            : 'bg-white/[0.03] border border-white/5 hover:bg-white/10 text-white/90'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-white tracking-wide">{item.title}</p>
                          <span className="block text-[11px] text-emerald-100/70 mt-0.5">{item.subtitle}</span>
                        </div>
                        <span className="text-[#52C480] text-sm">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/about"
                  onClick={() => {
                    setMobileOpen(false);
                    setProductsOpen(false);
                  }}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors touch-manipulation ${
                    location.pathname === '/about' ? 'text-[#52C480] bg-white/5' : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={() => {
                    setMobileOpen(false);
                    setProductsOpen(false);
                  }}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors touch-manipulation ${
                    location.pathname === '/contact' ? 'text-[#52C480] bg-white/5' : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Contact
                </Link>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => {
                      setMobileOpen(false);
                      setProductsOpen(false);
                    }}
                    className="block w-full text-center px-5 py-3 bg-white hover:bg-[#E6F7F0] text-[#0A1C16] text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all duration-200 touch-manipulation"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
