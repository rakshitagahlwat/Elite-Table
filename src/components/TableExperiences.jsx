import { C, FONTS } from '../styles/theme';
import { TABLES } from '../data';

export default function TableExperiences({ onBook }) {
  return (
    <section style={{ background: C.dark, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <span className="section-label">Six Experiences</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Find Your Perfect Table
            </h2>
          </div>
          <button className="btn-primary" onClick={onBook} style={{ background: C.gold }}>
            Reserve Now ↗
          </button>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {TABLES.map((t) => (
            <TableCard key={t.id} table={t} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TableCard({ table: t, onBook }) {
  const handleEnter = (e) => {
    e.currentTarget.style.background = 'rgba(255,255,255,.08)';
    e.currentTarget.style.borderColor = t.accent;
    e.currentTarget.style.transform = 'translateY(-4px)';
  };
  const handleLeave = (e) => {
    e.currentTarget.style.background = 'rgba(255,255,255,.04)';
    e.currentTarget.style.borderColor = 'rgba(255,255,255,.09)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <div
      onClick={onBook}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.09)',
        borderRadius: 6,
        padding: '1.8rem',
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
    >
      <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{t.icon}</div>
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: '1.15rem',
          fontWeight: 600,
          color: '#fff',
          marginBottom: '0.4rem',
        }}
      >
        {t.genre}
      </div>
      <div
        style={{
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,.45)',
          lineHeight: 1.6,
          marginBottom: '1.2rem',
        }}
      >
        {t.desc}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontSize: '0.72rem',
            background: 'rgba(255,255,255,.08)',
            borderRadius: 20,
            padding: '3px 10px',
            color: 'rgba(255,255,255,.5)',
          }}
        >
          Up to {t.cap} guests
        </span>
        <span
          style={{
            fontFamily: FONTS.serif,
            color: C.gold,
            fontWeight: 700,
            fontSize: '1rem',
          }}
        >
          ₹{t.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
