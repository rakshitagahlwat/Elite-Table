import { C, FONTS } from '../../styles/theme';

export default function Step4({ booking, guest, onRestart }) {
  const advance = Math.round(booking.table.price * 0.5);
  const ref = Math.random().toString(36).substring(2, 9).toUpperCase();

  const rows = [
    ['Guest', guest.name],
    ['Date', booking.date],
    ['Time', booking.time],
    ['Party Size', `${booking.guests} guest${booking.guests > 1 ? 's' : ''}`],
    ['Advance Paid', `₹${advance.toLocaleString()}`],
    ['Balance (on arrival)', `₹${advance.toLocaleString()}`],
  ];

  return (
    <div style={{ animation: 'fadeUp 0.6s both', maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
      {/* Success icon */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: C.greenL,
          border: `2px solid ${C.green}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          fontSize: '1.8rem',
        }}
      >
        ✓
      </div>

      <h3
        style={{
          fontFamily: FONTS.serif,
          fontSize: '2rem',
          fontWeight: 600,
          color: C.green,
          marginBottom: '0.4rem',
        }}
      >
        You're Confirmed!
      </h3>
      <p style={{ color: C.muted, fontSize: '0.9rem', marginBottom: '2rem' }}>
        Your table is reserved. We look forward to hosting you.
      </p>

      {/* Booking card */}
      <div
        style={{
          background: C.bg,
          border: `1px solid ${C.border}`,
          borderRadius: 6,
          padding: '1.5rem',
          marginBottom: '1.5rem',
          textAlign: 'left',
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingBottom: '1rem',
            marginBottom: '1rem',
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <span style={{ fontSize: '2rem' }}>{booking.table.icon}</span>
          <div>
            <div style={{ fontFamily: FONTS.serif, fontWeight: 600, color: C.dark }}>
              {booking.table.genre}
            </div>
            <div style={{ fontSize: '0.78rem', color: C.muted }}>
              Booking Ref:{' '}
              <strong style={{ color: C.green }}>#{ref}</strong>
            </div>
          </div>
        </div>

        {/* Details rows */}
        {rows.map(([k, v]) => (
          <div
            key={k}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.4rem 0',
              borderBottom: `1px solid ${C.border}`,
              fontSize: '0.85rem',
            }}
          >
            <span style={{ color: C.muted }}>{k}</span>
            <span style={{ color: C.dark, fontWeight: 500 }}>{v}</span>
          </div>
        ))}
      </div>

      {/* Email notice */}
      <div
        style={{
          background: '#eaf5ee',
          border: '1px solid #b2dbbf',
          borderRadius: 6,
          padding: '1rem 1.2rem',
          marginBottom: '1.5rem',
          display: 'flex',
          gap: '0.7rem',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}
      >
        <span>📩</span>
        <div>
          <div style={{ color: '#2d6a3f', fontWeight: 500, fontSize: '0.85rem' }}>
            Confirmation sent to {guest.email}
          </div>
          <div style={{ color: C.muted, fontSize: '0.75rem', marginTop: 3 }}>
            Please arrive 10 minutes early. Cancellations accepted up to 24h before your reservation.
          </div>
        </div>
      </div>

      <button
        className="btn-primary"
        onClick={onRestart}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        Make Another Reservation
      </button>
    </div>
  );
}
