import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Calendar, ShieldCheck, Star, ArrowRight, 
  Award, PhoneCall, CheckCircle2, Heart, Smile, Check
} from 'lucide-react';

interface Hero3DProps {
  onBookClick: (serviceId?: string) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onBookClick }) => {
  const [selectedQuickCare, setSelectedQuickCare] = useState<string>('cleaning');

  const quickCareOptions = [
    {
      id: 'cleaning',
      title: 'Routine Cleaning & Checkup',
      desc: 'Gentle ultrasonic plaque removal, enamel polish, & oral exam.',
      serviceId: 'clean-checkup',
      badge: 'Most Popular',
      time: '45 mins'
    },
    {
      id: 'whitening',
      title: 'Laser Teeth Whitening',
      desc: 'Brighten your natural teeth up to 8 shades in a comfortable 60-min session.',
      serviceId: 'teeth-whitening',
      badge: 'Instant Results',
      time: '60 mins'
    },
    {
      id: 'aligners',
      title: 'Invisalign® Clear Aligners',
      desc: 'Removable, comfortable clear aligners without metal braces.',
      serviceId: 'invisalign',
      badge: 'Discreet',
      time: 'Custom Plan'
    },
    {
      id: 'emergency',
      title: 'Tooth Pain or Emergency',
      desc: 'Same-day urgent triage and immediate pain relief slots reserved daily.',
      serviceId: 'root-canal',
      badge: 'Urgent Care',
      time: 'Same-Day'
    }
  ];

  const currentCare = quickCareOptions.find(o => o.id === selectedQuickCare) || quickCareOptions[0];

  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-stone-50 via-teal-50/30 to-white text-slate-800 overflow-hidden border-b border-slate-200/80">
      
      {/* Soft background ambient shapes */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Trust Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100/80 text-teal-900 border border-teal-200">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              Compassionate Family & Cosmetic Dentistry
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-white border border-slate-200 shadow-2xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              4.9/5 Rating (1,200+ Reviews)
            </span>
          </div>

          {/* Warm, Welcoming Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Gentle Dental Care <br />
              <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2">Designed Around You</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-normal max-w-2xl leading-relaxed">
              From comfortable routine cleanings to complete smile revamps, experience painless modern technology and a compassionate team that treats you like family.
            </p>
          </div>

          {/* Interactive Care Selector ("How can we help your smile today?") */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-teal-600" />
                How can we help your smile today?
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Select a service to explore</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {quickCareOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedQuickCare(opt.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    selectedQuickCare === opt.id
                      ? 'border-teal-600 bg-teal-50 text-slate-900 shadow-2xs font-bold'
                      : 'border-slate-200/80 bg-slate-50/50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-[10px] font-bold text-teal-700 block uppercase tracking-wider">{opt.badge}</span>
                  <span className="text-xs font-semibold block mt-0.5 line-clamp-1">{opt.title.split('&')[0]}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentCare.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 bg-stone-50 p-3.5 rounded-xl border border-stone-200/70"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{currentCare.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{currentCare.desc}</p>
                </div>
                <button
                  onClick={() => onBookClick(currentCare.serviceId)}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-2xs transition-colors shrink-0 flex items-center gap-1.5"
                >
                  Book Visit
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              id="hero-book-cta-btn"
              onClick={() => onBookClick()}
              className="px-8 py-4 rounded-xl font-bold text-base bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-all flex items-center justify-center gap-2.5 group"
            >
              <Calendar className="w-5 h-5" />
              Schedule Appointment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:5550192831"
              className="px-6 py-4 rounded-xl font-semibold text-base bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 shadow-2xs transition-all flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              Emergency 24/7 Line
            </a>
          </div>

          {/* Human Proof Bar */}
          <div className="flex items-center gap-4 pt-2 border-t border-slate-200">
            <div className="flex -space-x-2">
              <img className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient" />
              <img className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Patient" />
              <img className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Patient" />
            </div>
            <div className="text-xs text-slate-600">
              <p className="font-bold text-slate-800">Welcoming new patients of all ages</p>
              <p>Most dental insurance plans accepted & filed on your behalf</p>
            </div>
          </div>

        </div>

        {/* Right Column: Clean Patient Visual & Key Practice Highlights */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          <div className="relative w-full max-w-md">
            
            {/* Background Soft Accent */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-200 to-amber-200 rounded-3xl opacity-40 blur-xl -z-10" />

            {/* Main Patient Photo Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Happy patient with radiant healthy smile"
                className="w-full h-80 sm:h-96 object-cover"
              />
              
              {/* Bottom Gradient Overlay with Quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">Verified Patient Experience</span>
                <p className="text-sm font-medium mt-1 leading-snug italic">
                  "Dr. Chen and the staff made my visit so gentle and stress-free. Best dental experience I've ever had!"
                </p>
                <div className="flex items-center gap-1 mt-2 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1.5">— Elena R., San Francisco</span>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Gentle & Pain-Free
              </div>
            </div>

            {/* Bottom Practice Feature Bar */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-2xs text-center">
                <span className="text-lg font-black text-teal-800 block">100%</span>
                <span className="text-[10px] text-slate-600 font-semibold block uppercase">Painless Tech</span>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-2xs text-center">
                <span className="text-lg font-black text-teal-800 block">Same-Day</span>
                <span className="text-[10px] text-slate-600 font-semibold block uppercase">Urgent Slots</span>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-2xs text-center">
                <span className="text-lg font-black text-teal-800 block">0% APY</span>
                <span className="text-[10px] text-slate-600 font-semibold block uppercase">Financing</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


