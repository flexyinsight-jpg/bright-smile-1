import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Verified Patient Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Trusted By Thousands Across San Francisco
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Read real feedback from patients who found gentle, stress-free care with Dr. Chen and our team.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-stone-50 border border-slate-200/90 rounded-3xl p-8 md:p-12 shadow-sm relative">
            <Quote className="w-16 h-16 text-teal-200/60 absolute top-6 right-8 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                  ))}
                  <span className="text-xs text-slate-500 font-semibold ml-2">
                    Treatment: <span className="text-teal-800 font-bold">{TESTIMONIALS[currentIndex].treatment}</span>
                  </span>
                </div>

                {/* Comment */}
                <p className="text-lg md:text-2xl text-slate-800 font-medium leading-relaxed italic">
                  "{TESTIMONIALS[currentIndex].comment}"
                </p>

                {/* Patient Profile */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-4">
                    <img
                      src={TESTIMONIALS[currentIndex].avatar}
                      alt={TESTIMONIALS[currentIndex].author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-600/30"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                        {TESTIMONIALS[currentIndex].author}
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </h4>
                      <p className="text-xs text-slate-500">{TESTIMONIALS[currentIndex].role} • {TESTIMONIALS[currentIndex].date}</p>
                    </div>
                  </div>

                  <span className="text-xs bg-emerald-100 text-emerald-900 border border-emerald-200 px-3 py-1 rounded-full font-bold hidden sm:inline-block">
                    Verified Patient Visit
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-200">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-teal-700' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-all shadow-2xs"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-all shadow-2xs"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

