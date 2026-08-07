import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, 
  Sparkles, ShieldCheck, Download, AlertCircle, FileText, Heart
} from 'lucide-react';
import { DENTAL_SERVICES, DENTISTS, TIME_SLOTS, SUPPORTED_INSURANCE } from '../data/dentalData';
import { AppointmentFormData, BookingConfirmation } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedDentistId?: string;
  onBookingComplete: (confirmation: BookingConfirmation) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedDentistId,
  onBookingComplete
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState<AppointmentFormData>({
    serviceId: preselectedServiceId || DENTAL_SERVICES[0].id,
    dentistId: preselectedDentistId || DENTISTS[0].id,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    timeSlot: TIME_SLOTS[1],
    patientName: '',
    email: '',
    phone: '',
    notes: '',
    isFirstVisit: true,
    insuranceProvider: 'Self-Pay / Cash',
  });

  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const selectedService = DENTAL_SERVICES.find(s => s.id === formData.serviceId) || DENTAL_SERVICES[0];
  const selectedDentist = DENTISTS.find(d => d.id === formData.dentistId) || DENTISTS[0];

  const handleNextStep = () => {
    setErrorMsg('');
    if (step === 3) {
      if (!formData.patientName.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!formData.phone.trim() || formData.phone.length < 7) {
        setErrorMsg('Please enter a valid phone number for SMS appointment reminders.');
        return;
      }

      // Generate confirmation
      const bookingRef = `BSD-${Math.floor(100000 + Math.random() * 900000)}`;
      const result: BookingConfirmation = {
        ...formData,
        bookingRef,
        createdAt: new Date().toLocaleDateString(),
        serviceTitle: selectedService.title,
        dentistName: selectedDentist.name,
      };

      setConfirmation(result);
      onBookingComplete(result);
      setStep(4);
      return;
    }

    setStep((prev) => (prev + 1) as any);
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    setStep((prev) => (prev - 1) as any);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-white border border-slate-200/90 rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-xl relative text-slate-800 my-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Gentle & Personal Patient Care
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">Book Your Gentle Dental Visit</h2>
        </div>

        {/* Step Progress Bar */}
        {step < 4 && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-500">
              <span className={step >= 1 ? 'text-teal-800 font-bold' : ''}>1. Service</span>
              <span className={step >= 2 ? 'text-teal-800 font-bold' : ''}>2. Doctor & Time</span>
              <span className={step >= 3 ? 'text-teal-800 font-bold' : ''}>3. Patient Info</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-700 transition-all duration-300 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800">Select Treatment or Cleaning</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
              {DENTAL_SERVICES.map((s) => (
                <div
                  key={s.id}
                  onClick={() => setFormData({ ...formData, serviceId: s.id })}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    formData.serviceId === s.id
                      ? 'border-teal-700 bg-teal-50 text-slate-900 font-medium shadow-2xs'
                      : 'border-slate-200 bg-stone-50/50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-bold text-slate-900">{s.title}</h4>
                    <span className="text-[10px] font-bold text-teal-900 bg-teal-100 px-2 py-0.5 rounded border border-teal-200">
                      {s.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">{s.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Doctor, Date & Time */}
        {step === 2 && (
          <div className="space-y-5">
            {/* Choose Doctor */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Select Doctor / Specialist</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {DENTISTS.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setFormData({ ...formData, dentistId: doc.id })}
                    className={`p-3 rounded-xl border cursor-pointer transition-all text-left flex items-center gap-3 ${
                      formData.dentistId === doc.id
                        ? 'border-teal-700 bg-teal-50 text-slate-900 font-medium'
                        : 'border-slate-200 bg-stone-50/50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{doc.name.split(',')[0]}</h4>
                      <p className="text-[10px] text-teal-800 font-semibold">{doc.specialty.split('&')[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Preferred Date</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                />
              </div>

              {/* Time Slots */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Preferred Time Slot</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                >
                  {TIME_SLOTS.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Patient Info */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Full Patient Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Phone Number (SMS Confirmation) *</label>
                <input
                  type="tel"
                  placeholder="(555) 012-3456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Email Address</label>
                <input
                  type="email"
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Insurance Provider</label>
                <select
                  value={formData.insuranceProvider}
                  onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                >
                  <option value="Self-Pay / Cash">Self-Pay / Cash</option>
                  {SUPPORTED_INSURANCE.map((ins) => (
                    <option key={ins} value={ins}>{ins}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="firstVisit"
                checked={formData.isFirstVisit}
                onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                className="w-4 h-4 accent-teal-700 rounded"
              />
              <label htmlFor="firstVisit" className="text-xs text-slate-700 font-medium cursor-pointer">
                This is my first visit to Bright Smile Dental Clinic
              </label>
            </div>

            {errorMsg && (
              <p className="text-xs font-semibold text-rose-700 flex items-center gap-1.5 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                {errorMsg}
              </p>
            )}
          </div>
        )}

        {/* STEP 4: Success Ticket Confirmation */}
        {step === 4 && confirmation && (
          <div className="space-y-6 text-center py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900">Appointment Confirmed!</h3>
              <p className="text-xs text-slate-600">
                Reference Code: <strong className="text-teal-800">{confirmation.bookingRef}</strong>
              </p>
            </div>

            {/* Ticket Box */}
            <div className="bg-stone-50 border border-slate-200/90 p-5 rounded-2xl text-left space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Patient:</span>
                <span className="font-bold text-slate-900">{confirmation.patientName}</span>
              </div>

              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Treatment:</span>
                <span className="font-bold text-teal-800">{confirmation.serviceTitle}</span>
              </div>

              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-bold text-slate-900">{confirmation.dentistName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-bold text-slate-900">{confirmation.date} at {confirmation.timeSlot}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl text-xs font-bold bg-teal-700 text-white hover:bg-teal-800 shadow-xs"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

        {/* Modal Nav Buttons */}
        {step < 4 && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            {step > 1 ? (
              <button
                onClick={handlePrevStep}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : <div />}

            <button
              onClick={handleNextStep}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-700 text-white hover:bg-teal-800 shadow-xs flex items-center gap-1.5"
            >
              {step === 3 ? 'Confirm & Book Visit' : 'Continue'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
};

