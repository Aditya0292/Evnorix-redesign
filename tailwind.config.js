/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Light base ── */
        linen: '#F7F6F2',
        card: '#FFFFFF',
        'card-warm': '#FAF9F6',

        /* ── Dark inversion (Forest Midnight from gradient top) ── */
        midnight: '#0A1C16',
        'midnight-up': '#122E25',

        /* ── Text ── */
        ink: '#111215',
        'ink-soft': '#374151',
        muted: '#64748B',
        'muted-light': '#94A3B8',

        /* ── On-dark text ── */
        'ondark': '#FFFFFF',
        'ondark-muted': '#94A3B8',

        /* ── Brand Emerald / Gradient Colors from Reference ── */
        teal: '#0E704C', // primary brand emerald
        'teal-hover': '#0A563A',
        'teal-light': '#E6F7F0',
        'teal-glow': 'rgba(14,112,76,0.18)',
        'brand-dark': '#0A1C16',
        'brand-mid': '#198059',
        'brand-light': '#52C480',
        'brand-mint': '#E6F7F0',

        /* ── Borders ── */
        hairline: '#E5E5E5',
        'hairline-strong': '#D4D4D4',
        'hairline-dark': '#193B30',

        /* ── Error ── */
        danger: '#DC2626',
        'danger-light': '#FEF2F2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
        btn: '6px',
        input: '6px',
        pill: '6px',
        badge: '4px',
      },
      boxShadow: {
        nav: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'nav-pill': '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)',
        card: '0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.08)',
        glow: '0 0 0 3px rgba(14,112,76,0.18)',
      },
    },
  },
  plugins: [],
};
