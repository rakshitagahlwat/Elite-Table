import { C, FONTS } from '../styles/theme';

// ─── CTA STRIP ────────────────────────────
export function CTAStrip({ onBook }) {
  return (
    <section style={{ background: C.green, padding: '5rem 2rem', textAlign: 'center' }}>
      <span
        style={{
          display: 'block',
          fontFamily: FONTS.serif,
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,.9)',
          lineHeight: 1.2,
          marginBottom: '1rem',
        }}
      >
        Your perfect table is waiting.
        <br />
        <em style={{ fontWeight: 600 }}>Reserve it today.</em>
      </span>
      <p style={{ color: 'rgba(255,255,255,.55)', marginBottom: '2rem', fontSize: '0.95rem' }}>
        50% advance. Full flexibility. Unforgettable dining.
      </p>
      <button
        className="btn-primary"
        onClick={onBook}
        style={{ background: C.gold, fontSize: '1.05rem', padding: '1rem 2.5rem' }}
      >
        Book Your Table ↗
      </button>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────
export function Footer() {
  const cols = [
    {
      title: 'Navigate',
      links: ['Home', 'Menu', 'Experience', 'Gallery'],
    },
    {
      title: 'Experiences',
      links: ['Romantic Date', 'Family Feast', 'Friends Hangout', 'Business Lunch'],
    },
    {
      title: 'Contact',
      links: ['12 Connaught Place, Delhi', 'info@elitetable.in', '+91 98765 00000', 'Mon–Sun 12PM–11PM'],
    },
  ];

  return (
    <footer style={{ background: C.dark, padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: 1,
                marginBottom: '0.5rem',
              }}
            >
              ÉLITE TABLE
            </div>
            <p
              style={{
                fontSize: '0.83rem',
                lineHeight: 1.7,
                maxWidth: 260,
                color: 'rgba(255,255,255,.4)',
              }}
            >
              Fine dining redefined for every occasion. Book online, dine with intention.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: C.gold,
                  marginBottom: '1rem',
                }}
              >
                {col.title}
              </div>
              {col.links.map((link) => (
                <div
                  key={link}
                  style={{
                    fontSize: '0.83rem',
                    color: 'rgba(255,255,255,.4)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.5,
                  }}
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,.3)' }}>
            © 2026 Élite Table Restaurant · All rights reserved
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,.3)' }}>
            Advance payments are fully refundable up to 24 hours before your reservation
          </div>
        </div>
      </div>
    </footer>
  );
}
