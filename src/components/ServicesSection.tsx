import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Zap, Smile, ShieldCheck, Award, Activity, Heart, 
  Clock, CheckCircle, ArrowRight, X, Info, ChevronRight, Check
} from 'lucide-react';
import { DENTAL_SERVICES } from '../data/dentalData';
import { DentalService } from '../types';

interface ServicesSectionProps {
  onBookClick: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'preventative', label: 'Preventative' },
    { id: 'cosmetic', label: 'Cosmetic' },
    { id: 'orthodontics', label: 'Clear Aligners' },
    { id: 'surgical', label: 'Implants & Surgery' },
    { id: 'restorative', label: 'Restorative' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? DENTAL_SERVICES
    : DENTAL_SERVICES.filter(s => s.category === selectedCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'Zap': return <Zap className="w-5 h-5 text-teal-700" />;
      case 'Smile': return <Smile className="w-5 h-5 text-teal-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-700" />;
      case 'Award': return <Award className="w-5 h-5 text-teal-700" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-700" />;
      case 'Heart': return <Heart className="w-5 h-5 text-teal-700" />;
      default: return <Sparkles className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-stone-50/60 text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-900 border border-teal-200">
            Comprehensive Family & Cosmetic Care
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Gentle Treatments Designed for Healthy Smiles
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            We use gentle micro-lasers, 3D intraoral scanners, and soothing numbing techniques for pain-free visits.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-teal-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:border-teal-300 hover:shadow-md group relative"
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600 fill-amber-600" /> Most Requested
                </div>
              )}

              <div className="space-y-4">
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 block font-medium">Estimated Investment</span>
                    <span className="text-base font-bold text-teal-800">{service.price}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Appointment Time: {service.duration}
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Service Features Bullets */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-teal-700" />
                  Full Details
                </button>

                <button
                  onClick={() => onBookClick(service.id)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white transition-all shadow-2xs flex items-center justify-center gap-1.5 group/btn"
                >
                  Book Visit
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 md:p-8 space-y-6 shadow-xl relative text-slate-800"
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                  {renderIcon(activeModalService.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-teal-800 tracking-wider">
                    {activeModalService.category} Care
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{activeModalService.title}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              <div className="grid grid-cols-2 gap-4 bg-teal-50/60 p-4 rounded-xl border border-teal-100 text-xs">
                <div>
                  <span className="text-slate-500 block">Transparent Cost</span>
                  <span className="text-base font-bold text-teal-800">{activeModalService.price}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Expected Duration</span>
                  <span className="text-base font-bold text-slate-800">{activeModalService.duration}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Included In Your Procedure</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const sid = activeModalService.id;
                    setActiveModalService(null);
                    onBookClick(sid);
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-sm"
                >
                  Schedule This Service
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

