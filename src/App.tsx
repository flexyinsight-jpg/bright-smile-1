import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { ServicesSection } from './components/ServicesSection';
import { SmileVisualizer } from './components/SmileVisualizer';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EmergencyAndFAQ } from './components/EmergencyAndFAQ';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { BookingConfirmation } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [accentColor, setAccentColor] = useState<string>('teal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedDentistId, setSelectedDentistId] = useState<string | undefined>(undefined);
  const [toast, setToast] = useState<string | null>(null);

  const handleOpenBooking = (serviceId?: string, dentistId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedDentistId(dentistId);
    setIsModalOpen(true);
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleBookingComplete = (confirmation: BookingConfirmation) => {
    showToast(`Appointment confirmed! Booking Ref: ${confirmation.bookingRef}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-700 selection:text-white">
      
      {/* Sticky Navigation */}
      <Navbar
        onBookClick={handleOpenBooking}
        activeSection="hero"
      />

      {/* Gentle Patient Care Hero Section */}
      <main>
        <Hero3D
          onBookClick={handleOpenBooking}
          accentColor={accentColor}
          setAccentColor={setAccentColor}
        />

        {/* Dental Services Section */}
        <ServicesSection
          onBookClick={handleOpenBooking}
        />

        {/* Interactive Smile Simulator */}
        <SmileVisualizer
          onBookClick={handleOpenBooking}
        />

        {/* Doctors & Team Section */}
        <TeamSection
          onBookClick={handleOpenBooking}
        />

        {/* Verified Patient Reviews */}
        <TestimonialsSection />

        {/* Emergency Banner, FAQ & Contact Form */}
        <EmergencyAndFAQ
          onBookClick={() => handleOpenBooking()}
          onToastMessage={showToast}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedServiceId={selectedServiceId}
        preselectedDentistId={selectedDentistId}
        onBookingComplete={handleBookingComplete}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-teal-500/50 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
          <span className="text-xs font-bold text-slate-100">{toast}</span>
          <button
            onClick={() => setToast(null)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
