import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Products',
    links: [
      { label: 'Loan Origination System (LOS)', to: '/los' },
      { label: 'Credit Memo & Committee Reporting', to: '/credit-memo' },
      { label: 'All Products Overview', to: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact & Demo', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1C16] to-[#06120E] border-t border-[#142A22]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#0E704C] to-[#22A06B] flex items-center justify-center shadow-md ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-display font-bold text-lg">E</span>
              </div>
              <span className="font-body font-bold text-xl text-ondark tracking-tight lowercase">
                evnorix
              </span>
            </Link>
            <p className="text-ondark-muted text-sm leading-relaxed max-w-sm">
              Enterprise technology platforms engineered for commercial banks, credit unions, and institutional lenders. Fast, compliant, and connected.
            </p>
            <a
              href="mailto:hello@evnorix.com"
              className="inline-block mt-4 text-[#52C480] hover:text-[#86EFAC] text-sm font-medium transition-colors"
            >
              hello@evnorix.com
            </a>
          </div>

          {/* Nav Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-body font-semibold text-sm text-ondark mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-ondark-muted hover:text-ondark text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-hairline-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ondark-muted text-xs">
            &copy; {new Date().getFullYear()} Evnorix. All rights reserved.
          </p>
          <p className="text-ondark-muted text-xs">
            Built for modern lending teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
