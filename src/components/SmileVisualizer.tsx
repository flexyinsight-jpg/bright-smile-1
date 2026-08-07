import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sliders, Check, ArrowRight, ShieldCheck, Smile } from 'lucide-react';

interface SmileVisualizerProps {
  onBookClick: (serviceId?: string) => void;
}

export const SmileVisualizer: React.FC<SmileVisualizerProps> = ({ onBookClick }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<'whitening' | 'aligners' | 'veneers'>('whitening');
  const [selectedShade, setSelectedShade] = useState('B1 Natural Pearl');

  const makeoverOptions = {
    whitening: {
      title: 'Laser Teeth Whitening Preview',
      desc: 'Brighten coffee, tea, or red wine stains up to 8 shades lighter in a single 60-minute in-office treatment.',
      serviceId: 'teeth-whitening',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    },
    aligners: {
      title: 'Invisalign® Clear Aligners Preview',
      desc: 'Preview gap closure, overcrowding alignment, and bite symmetry achieved discreetly with clear removable trays.',
      serviceId: 'invisalign',
      beforeImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    veneers: {
      title: 'Porcelain Veneer Transformation',
      desc: 'Handcrafted ultra-thin ceramic shells customized for ideal length, shape, symmetry, and brilliant natural polish.',
      serviceId: 'porcelain-veneers',
      beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    }
  };

  const current = makeoverOptions[activeTab];

  return (
    <section id="simulator" className="py-24 px-4 md:px-8 bg-white border-y border-slate-200 text-slate-800 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Interactive Smile Preview
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Visualize Your New Smile
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Drag the comparison slider left and right to preview real treatment outcomes before your visit.
          </p>
        </div>

        {/* Simulator Controls & Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mode Select Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Select Treatment Simulation
              </label>
              <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => setActiveTab('whitening')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'whitening'
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Whitening
                </button>
                <button
                  onClick={() => setActiveTab('aligners')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'aligners'
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Aligners
                </button>
                <button
                  onClick={() => setActiveTab('veneers')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'veneers'
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Veneers
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-stone-50 border border-slate-200/90 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                {current.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {current.desc}
              </p>

              {/* Shade Selector */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">Target Shade Luster</span>
                <div className="flex flex-wrap gap-2">
                  {['OM1 Hollywood Bleach', 'B1 Natural Pearl', 'A1 Soft Warm'].map((shade) => (
                    <button
                      key={shade}
                      onClick={() => setSelectedShade(shade)}
                      className={`text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
                        selectedShade === shade
                          ? 'border-teal-600 bg-teal-100 text-teal-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-white'
                      }`}
                    >
                      {shade}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Simulations calibrated by 3D intraoral digital scanners</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onBookClick(current.serviceId)}
              className="w-full py-4 rounded-xl font-bold text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-all flex items-center justify-center gap-2"
            >
              Book Consultation For This Result
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Right Interactive Before/After Split Slider */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-2xl h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-slate-300 shadow-md select-none group">
              
              {/* After Image (Full Background) */}
              <img
                src={current.afterImg}
                alt="After treatment smile"
                className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-105"
              />
              <span className="absolute bottom-4 right-4 bg-teal-700 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                AFTER TREATMENT
              </span>

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-xl"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.beforeImg}
                  alt="Before treatment smile"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-90 saturate-75 max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute bottom-4 left-4 bg-slate-900/80 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                  BEFORE TREATMENT
                </span>
              </div>

              {/* Interactive Split Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-lg border-2 border-teal-600 flex items-center justify-center transform -translate-x-1/2">
                  <Sliders className="w-4 h-4 rotate-90 text-teal-800" />
                </div>
              </div>

              {/* Invisible HTML Range Input overlay for easy drag/touch */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

            </div>

            <p className="text-xs text-slate-500 mt-3 text-center">
              Drag slider left or right to compare before & after smile makeover
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

