import React, { useState, useEffect } from 'react';
import { 
  Smile, Calendar, PhoneCall, Menu, X, Clock, MapPin, ChevronRight, ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onBookClick: (serviceId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Patient Comfort', href: '#comfort' },
    { label: 'Smile Simulator', href: '#simulator' },
    { label: 'Meet Doctors', href: '#team' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'FAQ & Insurance', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Mini Info Bar */}
      <div className={`bg-slate-900 text-slate-200 text-xs py-2 px-4 transition-all ${isScrolled ? 'hidden md:block opacity-95' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              450 Medical Plaza Way, Suite 300, San Francisco
            </span>
            <span className="hidden sm:flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              Mon - Sat: 8:00 AM - 6:00 PM | Emergency 24/7
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Open Today
            </span>
            <a href="tel:5550192831" className="hover:text-teal-300 font-bold flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              (555) 019-2831
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200' : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/80'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white shadow-sm group-hover:bg-teal-800 transition-colors">
              <Smile className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                Bright Smile
                <span className="text-teal-700 font-normal text-xs uppercase px-1.5 py-0.5 rounded bg-teal-50 border border-teal-200">Dental</span>
              </span>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Gentle Family & Cosmetic Care</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-white transition-all duration-200 shadow-none hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-book-appointment-btn"
              onClick={() => onBookClick()}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-sm transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-700 flex items-center justify-between"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-teal-700 text-white flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              
              <a
                href="tel:5550192831"
                className="w-full py-3 rounded-xl font-semibold text-xs bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
                Call (555) 019-2831
              </a>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};

