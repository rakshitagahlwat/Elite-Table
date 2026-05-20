import { useState } from 'react';
import { C, FONTS } from '../../styles/theme';

export default function Step3({ booking, onNext, onBack }) {
  const [method, setMethod] = useState('card');
  const [card, setCard] = useState({ name: '', num: '', exp: '', cvv: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const setC = (key) => (e) => setCard((prev) => ({ ...prev, [key]: e.target.value }));
  const advance = Math.round(booking.table.price * 0.5);

  const canPay =
    method === 'upi' ||
    (card.name && card.num.length >= 16 && card.exp && card.cvv.length >= 3);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(onNext, 900);
    }, 2400);
  };

  return (
    <div style={{ animation: 'fadeUp 0.5s both', maxWidth: 520, margin: '0 auto' }}>
      <h3 style={{ fontFamily: FONTS.serif, fontSize: '1.5rem', fontWeight: 600, color: C.dark, marginBottom: '0.4rem' }}>
        Secure Payment
      </h3>
      <p style={{ color: C.muted, fontSize: '0.88rem', marginBottom: '1.8rem' }}>
        50% advance to confirm your reservation. Balance paid at the restaurant.
      </p>

      {/* Order summary */}
      <div
        style={{
          background: C.bg,
          border: `1px solid ${C.border}`,
          borderRadius: 6,
          padding: '1.2rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        {[
          [`${booking.table.icon} ${booking.table.genre}`, `₹${booking.table.price.toLocaleString()}`],
          ['Guests', booking.guests],
          ['Date & Time', `${booking.date} · ${booking.time}`],
        ].map(([k, v]) => (
          <div
            key={k}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.35rem 0',
              borderBottom: `1px solid ${C.border}`,
              fontSize: '0.85rem',
            }}
          >
            <span style={{ color: C.muted }}>{k}</span>
            <span style={{ color: C.dark, fontWeight: 500 }}>{v}</span>
          </div>
        ))}
        {/* Totals */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0 0.1rem', fontSize: '1rem' }}>
          <span style={{ fontWeight: 600, color: C.green }}>Advance Due Now (50%)</span>
          <span style={{ fontWeight: 700, color: C.green, fontFamily: FONTS.serif, fontSize: '1.2rem' }}>
            ₹{advance.toLocaleString()}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: C.muted, marginTop: 4 }}>
          <span>Remaining (pay on arrival)</span>
          <span>₹{advance.toLocaleString()}</span>
        </div>
      </div>

      {/* Payment method toggle */}
      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem' }}>
        {['card', 'upi'].map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            style={{
              flex: 1,
              padding: '0.7rem',
              borderRadius: 4,
              border: `1.5px solid ${method === m ? C.green : C.border}`,
              background: method === m ? C.greenL : 'transparent',
              color: method === m ? C.green : C.muted,
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '0.85rem',
              transition: 'all 0.2s',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {m === 'card' ? '💳  Credit / Debit Card' : '📱  UPI'}
          </button>
        ))}
      </div>

      {/* Card form */}
      {method === 'card' ? (
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="form-label">Name on Card</label>
            <input placeholder="As it appears on your card" value={card.name} onChange={setC('name')} className="form-input" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="form-label">Card Number</label>
            <input placeholder="1234 5678 9012 3456" maxLength={16} value={card.num} onChange={setC('num')} className="form-input" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label className="form-label">Expiry</label>
              <input placeholder="MM / YY" value={card.exp} onChange={setC('exp')} className="form-input" />
            </div>
            <div>
              <label className="form-label">CVV</label>
              <input placeholder="•••" maxLength={3} value={card.cvv} onChange={setC('cvv')} className="form-input" />
            </div>
          </div>
        </div>
      ) : (
        /* UPI panel */
        <div
          style={{
            textAlign: 'center',
            padding: '1.8rem',
            background: C.greenL,
            borderRadius: 6,
            marginBottom: '1.5rem',
            border: `1px dashed ${C.green}`,
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📲</div>
          <div style={{ fontFamily: FONTS.serif, fontSize: '1.15rem', fontWeight: 600, color: C.green }}>
            elitetable@okaxis
          </div>
          <div style={{ fontSize: '0.8rem', color: C.muted, marginTop: 6 }}>
            Pay ₹{advance.toLocaleString()} and click confirm below
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn-outline" onClick={onBack} style={{ flex: 1, justifyContent: 'center' }}>
          ← Back
        </button>
        <button
          className="btn-primary"
          disabled={!canPay || loading || done}
          onClick={handlePay}
          style={{ flex: 2, justifyContent: 'center' }}
        >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="spinner" />
              Processing…
            </span>
          ) : done ? (
            '✓ Confirmed!'
          ) : (
            `Pay ₹${advance.toLocaleString()} →`
          )}
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          marginTop: '1rem',
          color: C.muted,
          fontSize: '0.72rem',
        }}
      >
        🔒 256-bit SSL Encrypted · Secured by RazorPay
      </div>
    </div>
  );
}
