import { C, FONTS } from '../styles/theme';
import { EXPERIENCE_CARDS } from '../data';
import { Divider, SectionHeader } from './UI';

export default function Experience() {
  return (
    <section id="experience" style={{ background: C.white, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <div>
            <SectionHeader
              label="Our Philosophy"
              title={
                <>
                  More than a meal —<br />
                  <em>an experience.</em>
                </>
              }
            />
            <p className="section-sub" style={{ marginBottom: '1.5rem' }}>
              Élite Table was born from the belief that great dining is theatre. Every element —
              light, scent, sound, taste — is choreographed to create a memory you carry home.
            </p>
            <Divider my="1.5rem" />
            <p className="section-sub">
              We offer six curated table experiences, each designed for a different chapter of
              life. Book in advance, arrive in style.
            </p>
          </div>

          {/* Right: cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.2rem',
            }}
          >
            {EXPERIENCE_CARDS.map((card, i) => (
              <div
                key={i}
                style={{
                  background: C.bg,
                  borderRadius: 6,
                  padding: '1.5rem',
                  border: `1px solid ${C.border}`,
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{card.icon}</div>
                <div
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: C.dark,
                    marginBottom: '0.4rem',
                  }}
                >
                  {card.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: C.muted, lineHeight: 1.6 }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
