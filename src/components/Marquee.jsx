import { C, FONTS } from '../styles/theme';

const ITEMS = [
  'Romantic Dining',
  'Family Celebrations',
  'Business Lunches',
  'Birthday Bashes',
  'Friends Nights',
  'Solo Retreats',
  'Private Events',
  'Anniversary Dinners',
];

export default function Marquee() {
  // Quadruple for seamless loop
  const all = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        background: C.dark,
        overflow: 'hidden',
        padding: '1rem 0',
        borderTop: `3px solid ${C.gold}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          animation: 'marquee 28s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {all.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              padding: '0 2rem',
              fontFamily: FONTS.serif,
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,.5)',
              flexShrink: 0,
            }}
          >
            {item}
            <span style={{ color: C.gold, fontSize: '0.7rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
