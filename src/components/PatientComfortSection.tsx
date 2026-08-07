import React from 'react';
import { motion } from 'motion/react';
import { Heart, Tv, Headphones, Shield, Sparkles, Smile, Coffee, CheckCircle2 } from 'lucide-react';

interface PatientComfortSectionProps {
  onBookClick: () => void;
}

export const PatientComfortSection: React.FC<PatientComfortSectionProps> = ({ onBookClick }) => {
  const comfortItems = [
    {
      icon: <Headphones className="w-6 h-6 text-teal-600" />,
      title: 'Noise-Canceling Headphones',
      description: 'Listen to your favorite music or podcasts during your visit to completely block out clinic sounds.'
    },
    {
      icon: <Tv className="w-6 h-6 text-teal-600" />,
      title: 'Ceiling TV Screens',
      description: 'Stream your favorite movies, Netflix, or YouTube shows on overhead monitors with wireless audio.'
    },
    {
      icon: <Coffee className="w-6 h-6 text-teal-600" />,
      title: 'Warm Blankets & Towels',
      description: 'Cozy plush blankets during procedures and warm scented face towels after your cleaning.'
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      title: 'Gentle Painless Numbing',
      description: 'Topical anesthetic gel applied before any procedure so you never feel a sharp pinch.'
    },
    {
      icon: <Heart className="w-6 h-6 text-teal-600" />,
      title: 'Zero-Judgment Care',
      description: 'Haven’t been to a dentist in years? We welcome you back with open arms and zero scolding.'
    },
    {
      icon: <Smile className="w-6 h-6 text-teal-600" />,
      title: 'Mild Sedation Options',
      description: 'Nitrous oxide (laughing gas) or gentle oral relaxation for patients needing extra calm.'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-teal-50/60 border-y border-teal-100 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Designed For Nervous & Anxious Patients
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Dentistry That Respects Your Comfort
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We understand that visiting the dentist can feel overwhelming. That’s why we’ve built our entire clinic experience around your peace of mind.
          </p>
        </div>

        {/* Comfort Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comfortItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-teal-100/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Complimentary for all patients
              </div>
            </motion.div>
          ))}
        </div>

        {/* Human Guarantee Banner */}
        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-teal-600" />
              Ready to experience gentle, stress-free dental care?
            </h3>
            <p className="text-sm text-slate-600">
              Book a low-pressure initial consultation. Tell us your preferences and we’ll customize your visit.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-all whitespace-nowrap"
          >
            Request Anxiety-Free Visit
          </button>
        </div>

      </div>
    </section>
  );
};
