import { useState } from 'react';
import { C, FONTS } from '../styles/theme';
import { MENU_ITEMS } from '../data';
import { SectionHeader } from './UI';

export default function Menu() {
  const categories = [...new Set(MENU_ITEMS.map((m) => m.cat))];
  const [active, setActive] = useState('Starters');

  return (
    <section id="menu" style={{ background: C.bg, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader
          label="Culinary Journey"
          title="A Taste of Our Menu"
          sub="Seasonal. Refined. Unforgettable."
          center
        />

        {/* Category tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '0.55rem 1.4rem',
                borderRadius: 2,
                border: `1.5px solid ${active === cat ? C.green : C.border}`,
                background: active === cat ? C.green : 'transparent',
                color: active === cat ? '#fff' : C.muted,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.2rem',
          }}
        >
          {MENU_ITEMS.filter((m) => m.cat === active).map((item, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 6,
                padding: '1.6rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.4rem' }}>
                  <span
                    style={{
                      fontFamily: FONTS.serif,
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      color: C.dark,
                    }}
                  >
                    {item.name}
                  </span>
                  {item.tag && <span className="tag tag-gold">{item.tag}</span>}
                </div>
                <p style={{ fontSize: '0.82rem', color: C.muted, lineHeight: 1.55 }}>{item.desc}</p>
              </div>
              <div
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: C.green,
                  whiteSpace: 'nowrap',
                  marginTop: 2,
                }}
              >
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="#book" className="btn-outline" style={{ display: 'inline-flex' }}>
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
