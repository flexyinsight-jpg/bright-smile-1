import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, Calendar, GraduationCap, Heart } from 'lucide-react';
import { DENTISTS } from '../data/dentalData';

interface TeamSectionProps {
  onBookClick: (serviceId?: string, dentistId?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onBookClick }) => {
  return (
    <section id="team" className="py-24 px-4 md:px-8 bg-stone-50/70 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Compassionate Dental Specialists
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Meet the Doctors Who Care For You
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Gentle hands, warm listening ears, and top academic credentials from Harvard, UCSF, and NYU.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DENTISTS.map((doctor) => (
            <motion.div
              key={doctor.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 bg-white/95 border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    {doctor.rating} ({doctor.reviewCount})
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900 bg-teal-100/90 px-2.5 py-1 rounded border border-teal-200 shadow-2xs">
                      {doctor.experience}
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mt-0.5">{doctor.role}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{doctor.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Trigger Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookClick(undefined, doctor.id)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800 border border-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Visit with {doctor.name.split(',')[0]}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

