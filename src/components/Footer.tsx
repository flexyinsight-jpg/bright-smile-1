import React from 'react';
import { Smile, ShieldCheck, Heart, MapPin, PhoneCall, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        
        {/* Brand Col */}
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-700 flex items-center justify-center text-white">
              <Smile className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white">
              Bright Smile <span className="text-teal-400 font-normal text-xs">Dental Clinic</span>
            </span>
          </a>
          <p className="text-slate-400 leading-relaxed">
            Delivering gentle, stress-free dental care for families across San Francisco. Thoughtful listening, warm comfort amenities, and top specialist care.
          </p>
          <div className="flex items-center gap-2 text-teal-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Licensed & Board Certified Dental Practice</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Treatments</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-teal-300">Gentle Teeth Cleaning</a></li>
            <li><a href="#services" className="hover:text-teal-300">Laser Teeth Whitening</a></li>
            <li><a href="#services" className="hover:text-teal-300">Invisalign® Clear Aligners</a></li>
            <li><a href="#services" className="hover:text-teal-300">Gentle Dental Implants</a></li>
            <li><a href="#services" className="hover:text-teal-300">Porcelain Veneers</a></li>
            <li><a href="#services" className="hover:text-teal-300">Pediatric Friendly Visits</a></li>
          </ul>
        </div>

        {/* Hours & Emergency */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Clinic Hours</h4>
          <ul className="space-y-1.5">
            <li className="flex justify-between"><span className="text-slate-400">Mon - Fri:</span> <span className="text-slate-200">8:00 AM – 6:00 PM</span></li>
            <li className="flex justify-between"><span className="text-slate-400">Saturday:</span> <span className="text-slate-200">9:00 AM – 3:00 PM</span></li>
            <li className="flex justify-between"><span className="text-slate-400">Sunday:</span> <span className="text-rose-400">Emergency On-Call</span></li>
          </ul>
          <div className="pt-2">
            <span className="text-teal-400 font-bold block">24/7 Emergency Care Line:</span>
            <a href="tel:5550192831" className="text-white font-bold hover:text-teal-300">(555) 019-2831</a>
          </div>
        </div>

        {/* Location Info */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Location</h4>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span>450 Medical Plaza Way, Suite 300<br />San Francisco, CA 94103</span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-teal-400 shrink-0" />
            <span>care@brightsmiledental.com</span>
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
        <p>© {new Date().getFullYear()} Bright Smile Dental Clinic. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
          <a href="#" className="hover:text-slate-400">HIPAA Compliance</a>
        </div>
      </div>
    </footer>
  );
};

