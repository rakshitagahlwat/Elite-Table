import { useState } from 'react';
import { C, FONTS } from '../../styles/theme';
import { TABLES, TIME_SLOTS } from '../../data';

export default function Step1({ onNext }) {
  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);

  const today = new Date().toISOString().split('T')[0];
  const canContinue = selected && date && time;

  return (
    <div style={{ animation: 'fadeUp 0.5s both' }}>
      <h3 style={{ fontFamily: FONTS.serif, fontSize: '1.5rem', fontWeight: 600, color: C.dark, marginBottom: '0.4rem' }}>
        Choose Your Experience
      </h3>
      <p style={{ color: C.muted, fontSize: '0.88rem', marginBottom: '2rem' }}>
        Select the ambiance that matches your occasion.
      </p>

      {/* Table cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        {TABLES.map((t) => (
          <div
            key={t.id}
            className={`table-card${selected?.id === t.id ? ' selected' : ''}`}
            onClick={() => setSelected(t)}
          >
            {selected?.id === t.id && (
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: C.green,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                }}
              >
                ✓
              </div>
            )}
            <div style={{ fontSize: '2rem', marginBottom: '0.7rem' }}>{t.icon}</div>
            <div style={{ fontFamily: FONTS.serif, fontSize: '1.05rem', fontWeight: 600, color: C.dark, marginBottom: '0.3rem' }}>
              {t.genre}
            </div>
            <div style={{ fontSize: '0.78rem', color: C.muted, lineHeight: 1.5, marginBottom: '1rem' }}>
              {t.desc}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  background: C.bg,
                  borderRadius: 20,
                  padding: '2px 10px',
                  color: C.muted,
                  border: `1px solid ${C.border}`,
                }}
              >
                👥 Up to {t.cap}
              </span>
              <span style={{ fontFamily: FONTS.serif, fontWeight: 700, color: C.green, fontSize: '0.95rem' }}>
                ₹{t.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Date / Time / Guests */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <label className="form-label">Date</label>
          <input
            type="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Time Slot</label>
          <select value={time} onChange={(e) => setTime(e.target.value)} className="form-input">
            <option value="">Select time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label">Guests</label>
          <input
            type="number"
            min={1}
            max={selected?.cap || 10}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="form-input"
          />
        </div>
      </div>

      <button
        className="btn-primary"
        disabled={!canContinue}
        onClick={() => onNext({ table: selected, date, time, guests })}
        style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}
      >
        Continue to Details →
      </button>
    </div>
  );
}
