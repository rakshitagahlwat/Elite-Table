import { C, FONTS } from '../styles/theme';
import { BOOKING_STEPS } from '../data';

// ─── DIVIDER ──────────────────────────────
export function Divider({ my = '2rem' }) {
  return (
    <div
      style={{
        width: 60,
        height: 2,
        background: `linear-gradient(90deg, ${C.gold}, transparent)`,
        margin: `${my} 0`,
      }}
    />
  );
}

// ─── STAR RATING ──────────────────────────
export function Stars({ n = 5 }) {
  return (
    <div>
      {[...Array(n)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

// ─── BOOKING STEPPER ──────────────────────
export function Stepper({ current }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        marginBottom: '2.5rem',
      }}
    >
      {BOOKING_STEPS.map((s, i) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            {/* Circle */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: i <= current ? C.green : 'transparent',
                border: `2px solid ${i <= current ? C.green : C.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: i <= current ? '#fff' : C.muted,
                fontWeight: 600,
                fontSize: '0.82rem',
                boxShadow: i === current ? `0 0 0 4px ${C.greenL}` : 'none',
                transition: 'all 0.35s',
              }}
            >
              {i < current ? '✓' : i + 1}
            </div>
            {/* Label */}
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.5px',
                color: i <= current ? C.green : C.muted,
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
                fontFamily: FONTS.sans,
              }}
            >
              {s}
            </span>
          </div>

          {/* Connector line */}
          {i < BOOKING_STEPS.length - 1 && (
            <div
              style={{
                width: 56,
                height: 2,
                background: i < current ? C.green : C.border,
                margin: '0 6px',
                marginBottom: 22,
                transition: 'background 0.4s',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── SECTION HEADER ───────────────────────
export function SectionHeader({ label, title, sub, center = false }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '3rem' }}>
      <span className="section-label">{label}</span>
      <h2 className="section-title" style={{ margin: center ? '0 auto 0.5rem' : undefined }}>
        {title}
      </h2>
      {sub && (
        <p
          className="section-sub"
          style={{ margin: center ? '0 auto' : undefined, textAlign: center ? 'center' : 'left' }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
