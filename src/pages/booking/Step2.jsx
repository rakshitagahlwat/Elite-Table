import { useState } from 'react';
import { C, FONTS } from '../../styles/theme';

const FIELDS = [
  { label: 'Full Name',     key: 'name',  type: 'text',  ph: 'e.g. Arjun Sharma' },
  { label: 'Email Address', key: 'email', type: 'email', ph: 'you@example.com' },
  { label: 'Phone Number',  key: 'phone', type: 'tel',   ph: '+91 98765 43210' },
];

export default function Step2({ booking, onNext, onBack }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', special: '' });
  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  const canContinue = form.name && form.email && form.phone;

  return (
    <div style={{ animation: 'fadeUp 0.5s both', maxWidth: 540, margin: '0 auto' }}>
      <h3 style={{ fontFamily: FONTS.serif, fontSize: '1.5rem', fontWeight: 600, color: C.dark, marginBottom: '0.4rem' }}>
        Your Details
      </h3>
      <p style={{ color: C.muted, fontSize: '0.88rem', marginBottom: '1.8rem' }}>
        Who shall we prepare the table for?
      </p>

      {/* Booking summary chip */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: C.greenL,
          border: `1px solid ${C.border}`,
          borderRadius: 6,
          padding: '1rem 1.2rem',
          marginBottom: '1.8rem',
        }}
      >
        <span style={{ fontSize: '1.8rem' }}>{booking.table.icon}</span>
        <div>
          <div style={{ fontWeight: 500, color: C.dark, fontSize: '0.9rem' }}>{booking.table.genre}</div>
          <div style={{ color: C.muted, fontSize: '0.78rem' }}>
            {booking.date} · {booking.time} · {booking.guests} guest{booking.guests > 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Input fields */}
      {FIELDS.map(({ label, key, type, ph }) => (
        <div key={key} style={{ marginBottom: '1rem' }}>
          <label className="form-label">{label}</label>
          <input
            type={type}
            placeholder={ph}
            value={form[key]}
            onChange={set(key)}
            className="form-input"
          />
        </div>
      ))}

      {/* Special requests */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label className="form-label">
          Special Requests{' '}
          <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
        </label>
        <textarea
          placeholder="Dietary requirements, decoration preferences, seating needs..."
          value={form.special}
          onChange={set('special')}
          rows={3}
          className="form-input"
          style={{ resize: 'vertical' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn-outline" onClick={onBack} style={{ flex: 1, justifyContent: 'center' }}>
          ← Back
        </button>
        <button
          className="btn-primary"
          disabled={!canContinue}
          onClick={() => onNext(form)}
          style={{ flex: 2, justifyContent: 'center' }}
        >
          Proceed to Payment →
        </button>
      </div>
    </div>
  );
}
