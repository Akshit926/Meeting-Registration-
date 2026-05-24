import React from 'react';
import { Mail, Phone, MapPin, Trophy, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft red light */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-burgundy/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Celebration Milestone Marquee Ribbon */}
      <div className="bg-brand-burgundy/10 border-y border-brand-burgundy/25 py-3 mb-12 overflow-hidden select-none">
        <div className="flex whitespace-nowrap justify-center animate-pulse">
          <span className="text-[10px] sm:text-xs font-black uppercase text-brand-burgundy tracking-[0.2em] flex items-center space-x-2">
            <Trophy className="w-3.5 h-3.5 inline mr-1 text-brand-burgundy animate-spin-slow" />
            <span>Celebrating 400 Meetings of Excellence</span>
            <span className="mx-4 text-brand-navy">•</span>
            <Award className="w-3.5 h-3.5 inline mr-1 text-brand-burgundy" />
            <span>Wakad Toastmasters Club</span>
            <span className="mx-4 text-brand-navy">•</span>
            <span>Think Fast • Speak Smart • Lead Boldly</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-200 pb-12">
          
          {/* Column 1: Branding & Intro */}
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/fr/b/bd/Toastmasters_2011.png" 
                alt="Toastmasters International Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-display font-black text-brand-navy text-base tracking-wider uppercase leading-none">
                WAKAD <span className="text-brand-burgundy font-black">TOASTMASTERS</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Wakad Toastmasters is a premier club under District 98, Toastmasters International, dedicated to helping individuals master public speaking and leadership skills in Pune, India.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-navy mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-xs text-slate-500">
              <a href="#details" className="hover:text-brand-navy transition-colors duration-200">Event Details</a>
              <a href="#register" className="hover:text-brand-navy transition-colors duration-200">Register / Nominate</a>
            </div>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-4 text-xs text-slate-500">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-navy">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-navy flex-shrink-0" />
                <span>Mount Litera Zee School, Wakad, Pune</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-navy flex-shrink-0" />
                <span>+91 99999 88888 (VP Membership)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-navy flex-shrink-0" />
                <span>info@wakadtm.org</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://youtube.com/@wakadtoastmasters"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 border border-slate-200 hover:border-red-500 hover:bg-red-500/5 p-2.5 rounded-full text-slate-500 hover:text-red-600 transition-all duration-300 flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.027 0 12 0 12s0 3.973.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.863.508 9.388.508 9.388.508s7.525 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.973 24 12 24 12s0-3.973-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/wakadtoastmasters"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 border border-slate-200 hover:border-blue-500 hover:bg-blue-500/5 p-2.5 rounded-full text-slate-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/wakadtoastmasters"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 border border-slate-200 hover:border-pink-500 hover:bg-pink-500/5 p-2.5 rounded-full text-slate-500 hover:text-pink-600 transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] text-slate-400">
          <p>© {currentYear} Wakad Toastmasters Club. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0 font-bold">
            <span>District 98 • Division B • Area A3</span>
            <span>Club ID: 05781294</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
