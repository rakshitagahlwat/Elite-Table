import { useState, useEffect } from 'react';
import { C, FONTS } from '../styles/theme';

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkColor = scrolled ? C.dark : 'rgba(255,255,255,0.82)';

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        background: scrolled ? 'rgba(249,245,236,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'all 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: FONTS.serif,
            fontSize: '1.35rem',
            fontWeight: 700,
            color: scrolled ? C.dark : '#fff',
            letterSpacing: 1,
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
        >
          ÉLITE TABLE
        </a>

        {/* Desktop nav links */}
        <div className="hide-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Home', 'Menu', 'Experience', 'Gallery'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              style={{ color: linkColor }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          className="btn-primary"
          onClick={onBook}
          style={{
            background: scrolled ? C.green : C.gold,
            fontSize: '0.85rem',
            padding: '0.6rem 1.4rem',
          }}
        >
          Reserve a Table
        </button>
      </div>
    </nav>
  );
}
