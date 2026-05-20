import { C, FONTS } from '../styles/theme';

export default function Hero({ onBook }) {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #1a2218 0%, #2d5a3d 60%, #1a3329 100%)',
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Large italic watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '-3rem',
          right: '-2rem',
          fontFamily: FONTS.serif,
          fontSize: '22vw',
          fontWeight: 700,
          fontStyle: 'italic',
          color: 'rgba(255,255,255,.03)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        Élite
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '8rem 2rem 5rem',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: 680 }}>
          {/* Pill label */}
          <span
            className="fadeUp"
            style={{
              display: 'inline-block',
              border: '1px solid rgba(196,154,58,.4)',
              borderRadius: 2,
              padding: '5px 14px',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: C.gold,
              marginBottom: '1.5rem',
            }}
          >
            Reserve · Dine · Remember
          </span>

          <h1
            className="fadeUp d1"
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(3rem, 6vw, 5.2rem)',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
            }}
          >
            A Table Worthy
            <br />
            <em style={{ fontWeight: 600, fontStyle: 'italic', color: C.gold }}>
              of the Moment.
            </em>
          </h1>

          <p
            className="fadeUp d2"
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,.6)',
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: '2.5rem',
            }}
          >
            Book your table before you arrive — any occasion, any mood, any size.
            Secure your seat with 50% advance and walk in like royalty.
          </p>

          <div className="fadeUp d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={onBook}
              style={{ background: C.gold, fontSize: '1rem', padding: '0.9rem 2.2rem' }}
            >
              Reserve a Table ↗
            </button>
            <a
              href="#menu"
              className="btn-outline"
              style={{ color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.25)' }}
            >
              Explore Menu
            </a>
          </div>

          {/* Stats row */}
          <div
            className="fadeUp d4"
            style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,.1)',
              flexWrap: 'wrap',
            }}
          >
            {[
              ['12+', 'Years of Excellence'],
              ['4.9', 'Guest Rating'],
              ['6', 'Curated Experiences'],
              ['50K+', 'Memories Made'],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: C.gold,
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,.45)', letterSpacing: '0.5px', marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating 50% badge */}
      <div
        style={{
          position: 'absolute',
          right: '6%',
          top: '30%',
          animation: 'float 4s ease-in-out infinite',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'rgba(196,154,58,.15)',
            border: '1px solid rgba(196,154,58,.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ fontFamily: FONTS.serif, fontSize: '1.6rem', fontWeight: 700, color: C.gold }}>
            50%
          </div>
          <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,.5)', letterSpacing: 1, textTransform: 'uppercase' }}>
            Advance
          </div>
        </div>
      </div>
    </section>
  );
}
