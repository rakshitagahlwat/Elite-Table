import { C, FONTS } from '../styles/theme';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: C.white, padding: '5rem 0' }}>
      {/* Header */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', marginBottom: '2rem' }}>
        <span className="section-label">Gallery</span>
        <h2 className="section-title">A Feast for the Eyes</h2>
        <p className="section-sub">Crafted with passion, plated with precision.</p>
      </div>

      {/* Horizontal scroll strip */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          padding: '0 2rem 1rem',
          scrollbarWidth: 'thin',
          scrollbarColor: `${C.green} ${C.bg}`,
        }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: 220,
              height: 220,
              borderRadius: 6,
              background: `linear-gradient(135deg, ${C.greenL}, ${C.bg})`,
              border: `1px solid ${C.border}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              cursor: 'default',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 12px 32px rgba(45,90,61,0.12)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '3.5rem' }}>{item.emoji}</div>
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: '0.95rem',
                fontWeight: 600,
                color: C.muted,
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
