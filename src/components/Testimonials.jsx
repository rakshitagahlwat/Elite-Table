import { C, FONTS } from '../styles/theme';
import { TESTIMONIALS } from '../data';
import { Stars, SectionHeader } from './UI';

export default function Testimonials() {
  return (
    <section style={{ background: C.greenL, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="Guest Stories" title="What Our Guests Say" center />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                borderRadius: 6,
                padding: '2rem',
                border: `1px solid ${C.border}`,
              }}
            >
              <Stars n={t.stars} />
              <p
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: C.dark,
                  lineHeight: 1.65,
                  margin: '1rem 0 1.5rem',
                }}
              >
                "{t.text}"
              </p>
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.9rem', color: C.dark }}>{t.name}</div>
                <div style={{ fontSize: '0.78rem', color: C.muted, marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
