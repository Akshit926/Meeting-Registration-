import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import toastmastersLogo from '../assets/toastmasters_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Event', href: '#about' },
    { name: 'Details', href: '#details' },
    { name: 'Hall of Fame', href: '#hall-of-fame' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Branding */}
          <a href="#" className="flex items-center space-x-3 group">
            <img 
              src={toastmastersLogo} 
              alt="Toastmasters International Logo" 
              className="h-10 w-10 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-brand-navy tracking-wide leading-none text-base">
                WAKAD <span className="text-brand-burgundy font-black">TOASTMASTERS</span>
              </span>
              <span className="text-[10px] text-brand-gold font-bold tracking-[0.15em] mt-0.5 uppercase">
                400th Landmark Meeting
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-600 hover:text-brand-navy transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-navy hover:bg-brand-burgundy text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 backdrop-blur-lg transition-all duration-300 ease-in-out origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-sm font-bold text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors duration-200 uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="inline-block w-11/12 py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-brand-navy hover:bg-brand-burgundy rounded-full shadow-md transition-all duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
