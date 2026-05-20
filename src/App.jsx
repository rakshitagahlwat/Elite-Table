import { useState } from 'react';

// Components
import Navbar           from './components/Navbar';
import Hero             from './components/Hero';
import Marquee          from './components/Marquee';
import Experience       from './components/Experience';
import Menu             from './components/Menu';
import TableExperiences from './components/TableExperiences';
import Gallery          from './components/Gallery';
import Testimonials     from './components/Testimonials';
import { CTAStrip, Footer } from './components/Footer';

// Booking modal
import BookingModal from './pages/booking/BookingModal';

export default function App() {
  const [showBooking, setShowBooking] = useState(false);

  const openBooking = () => setShowBooking(true);
  const closeBooking = () => setShowBooking(false);

  return (
    <>
      <Navbar       onBook={openBooking} />
      <Hero         onBook={openBooking} />
      <Marquee />
      <Experience />
      <Menu />
      <TableExperiences onBook={openBooking} />
      <Gallery />
      <Testimonials />
      <CTAStrip     onBook={openBooking} />
      <Footer />

      <BookingModal show={showBooking} onClose={closeBooking} />
    </>
  );
}
