import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, AlertTriangle, ChevronDown, HelpCircle, ShieldCheck, 
  MapPin, Clock, Mail, Send, CheckCircle2, CreditCard
} from 'lucide-react';
import { FAQS, SUPPORTED_INSURANCE } from '../data/dentalData';

interface EmergencyAndFAQProps {
  onBookClick: () => void;
  onToastMessage: (msg: string) => void;
}

export const EmergencyAndFAQ: React.FC<EmergencyAndFAQProps> = ({ onBookClick, onToastMessage }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      onToastMessage('Please enter your name and phone number');
      return;
    }
    setSubmitted(true);
    onToastMessage('Thank you! Our patient coordinator will contact you shortly.');
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-16">
      
      {/* Emergency Dental Banner */}
      <section className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-amber-500/10 border border-amber-300 rounded-3xl p-8 md:p-10 shadow-xs relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              24/7 Urgent Dental Care
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Severe Toothache, Broken Crown, or Sudden Dental Trauma?
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              We hold reserved daily emergency slots for immediate same-day pain relief. Don’t wait in discomfort.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
            <a
              href="tel:5550192831"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-rose-600 hover:bg-rose-700 text-white shadow-sm transition-all flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-5 h-5" />
              Call (555) 019-2831
            </a>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-2xs transition-all"
            >
              Book Urgent Visit
            </button>
          </div>

        </div>
      </section>

      {/* FAQ & Insurance Section */}
      <section id="faq" className="py-16 px-4 md:px-8 bg-stone-50/60 text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Clear Answers</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:text-teal-800"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-teal-700 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === faq.id ? 'rotate-180 text-teal-700' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance & Financing Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Insurance & Payment Options</h3>
                  <p className="text-xs text-slate-500">Hassle-free direct claims processing</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                We accept most major PPO dental plans and offer 0% interest financing through CareCredit so your family can access care comfortably.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Supported PPO Providers:</span>
                <div className="flex flex-wrap gap-2">
                  {SUPPORTED_INSURANCE.map((ins, idx) => (
                    <span key={idx} className="text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1 rounded-lg">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-600">
                Don't see your plan listed? Call our friendly front office team at <strong className="text-teal-800">(555) 019-2831</strong> to verify benefits instantly.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Clinic Location & Hours Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Visit Our Clinic</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Convenient San Francisco Location</h2>
              <p className="text-slate-600 text-sm mt-2">Free patient parking garage & step-free accessible entrance.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-xl border border-slate-200/80">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Clinic Address</h4>
                  <p className="text-xs text-slate-600">450 Medical Plaza Way, Suite 300<br />San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-xl border border-slate-200/80">
                <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Opening Hours</h4>
                  <p className="text-xs text-slate-600">Mon - Fri: 8:00 AM – 6:00 PM</p>
                  <p className="text-xs text-slate-600">Saturday: 9:00 AM – 3:00 PM</p>
                  <p className="text-xs text-teal-800 font-bold mt-1">Emergency Service: 24/7 On-Call Line</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-xl border border-slate-200/80">
                <Mail className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Contact</h4>
                  <p className="text-xs text-slate-600">Front Desk: (555) 019-2831</p>
                  <p className="text-xs text-slate-600">Email: care@brightsmiledental.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-stone-50 border border-slate-200/90 p-8 rounded-3xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Send Our Team a Message</h3>
              <p className="text-xs text-slate-600">Have a question about a treatment plan or pricing? We reply quickly.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Received</h4>
                <p className="text-xs text-slate-600">Our patient coordinator will reach out to you promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">How can we help you?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your dental goals or questions..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs bg-teal-700 hover:bg-teal-800 text-white transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};

