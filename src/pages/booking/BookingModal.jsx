import { useState, useEffect } from 'react';
import { C, FONTS } from '../../styles/theme';
import { Stepper } from '../../components/UI';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default function BookingModal({ show, onClose }) {
  const [step, setStep] = useState(0);
  const [booking, setBooking] = useState(null);
  const [guest, setGuest] = useState(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [show]);

  if (!show) return null;

  const reset = () => {
    setStep(0);
    setBooking(null);
    setGuest(null);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="modal-box">
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            width: 32,
            height: 32,
            cursor: 'pointer',
            fontSize: '1.1rem',
            color: C.muted,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = C.bg; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          ×
        </button>

        {/* Modal header branding */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              fontFamily: FONTS.serif,
              fontSize: '1.6rem',
              fontWeight: 700,
              color: C.dark,
              letterSpacing: 1,
            }}
          >
            ÉLITE TABLE
          </div>
          <div
            style={{
              fontSize: '0.7rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: C.muted,
            }}
          >
            Table Reservation
          </div>
        </div>

        {/* Progress stepper */}
        <Stepper current={step} />

        {/* Step content */}
        {step === 0 && (
          <Step1
            onNext={(b) => { setBooking(b); setStep(1); }}
          />
        )}
        {step === 1 && (
          <Step2
            booking={booking}
            onNext={(g) => { setGuest(g); setStep(2); }}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && (
          <Step3
            booking={booking}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step4
            booking={booking}
            guest={guest}
            onRestart={() => { reset(); onClose(); }}
          />
        )}
      </div>
    </div>
  );
}
