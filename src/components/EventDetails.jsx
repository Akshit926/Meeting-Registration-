import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Ticket, Phone, Mail, Award } from 'lucide-react';

const EventDetails = () => {
  const details = [
    {
      title: 'Match Date',
      value: 'Saturday, June 6, 2026',
      sub: 'Save the date on your calendar',
      icon: Calendar,
      borderColor: 'hover:border-blue-500/40',
    },
    {
      title: 'Match Timings',
      value: '4:45 PM IST',
      sub: 'Gates open / Reporting at 4:30 PM',
      icon: Clock,
      borderColor: 'hover:border-red-500/40',
    },
    {
      title: 'Stadium Venue',
      value: 'Club house, Edenn Tower Society, Wakad',
      sub: 'Wakad, Pune - 411057',
      icon: MapPin,
      borderColor: 'hover:border-yellow-500/40',
      action: {
        text: 'Get Directions',
        url: 'https://maps.google.com/?q=Club+house+Edenn+Tower+Society+Wakad+Pune',
      }
    },
    {
      title: 'Entry Ticket',
      value: 'Free of Cost',
      sub: 'Prior registration mandatory',
      icon: Ticket,
      borderColor: 'hover:border-emerald-500/40',
    },
  ];

  const organizers = [
    {
      name: 'TM Akshit Agarwal',
      role: 'VP Public Relations',
      phone: '+91 98262 11779',
      email: 'pr@wakadtm.org',
      initials: 'AA',
    },
    {
      name: 'TM Punit Hadani',
      role: 'Sergeant At Arms (Guest Coordinator)',
      phone: '+91 90333 70701',
      email: 'saa@wakadtm.org',
      initials: 'PH',
    },
  ];

  return (
    <section id="details" className="relative py-24 bg-slate-50 border-b border-slate-200/80">
      {/* Abstract light beam background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-navy/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-brand-burgundy uppercase tracking-[0.25em] mb-3">
            Match Operations
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight">
            Event <span className="text-gradient-gold">Schedule & Venue</span>
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 4 Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {details.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group glass-panel rounded-2xl p-6 border border-slate-200 transition-all duration-300 ${detail.borderColor} hover:bg-white`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-slate-100 p-3 rounded-xl border border-slate-200 group-hover:border-brand-navy/30 transition-colors duration-300">
                  <detail.icon className="h-6 w-6 text-brand-navy" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  {detail.title}
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-800 tracking-wide">
                  {detail.value}
                </h4>
                <p className="text-xs text-slate-500">
                  {detail.sub}
                </p>
              </div>
              
              {detail.action && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a
                    href={detail.action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-burgundy transition-colors duration-200"
                  >
                    <span>{detail.action.text}</span>
                    <span className="ml-1">➔</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Venue Location / Map Section & Organizers Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map / Venue Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-panel rounded-3xl p-6 border border-slate-200 flex flex-col justify-between overflow-hidden relative shadow-md"
          >
            <div className="absolute inset-0 cricket-grid opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-brand-navy font-bold text-[10px] rounded-full uppercase tracking-wider">
                Official Stadium
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-navy uppercase mt-4 mb-2 tracking-tight">
                Club house, Edenn Tower Society, Wakad
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mb-6">
                Located in the heart of Wakad, Pune, the school provides an excellent, state-of-the-art auditorium with professional sound, stadium lighting, and seating, making it the perfect pitch for our impromptu speeches.
              </p>
            </div>
            {/* Map styling */}
            <div className="relative h-48 sm:h-64 w-full bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/lonlat/73.75,18.59,12/800x400?access_token=mock')" }}>
                {/* Fallback pattern representing coordinates map */}
                <div className="w-full h-full flex items-center justify-center relative bg-slate-100">
                  <div className="absolute inset-0 cricket-grid opacity-25"></div>
                  {/* Styled concentric rings representing location */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-24 h-24 rounded-full border border-brand-navy/30 animate-ping"></div>
                    <div className="absolute w-12 h-12 rounded-full bg-brand-navy/10 border border-brand-navy/20"></div>
                    <div className="w-4 h-4 rounded-full bg-brand-navy shadow-md shadow-brand-navy/55 z-10 flex items-center justify-center">
                      <Award className="w-2.5 h-2.5 text-white font-black" />
                    </div>
                  </div>
                </div>
              </div>
              <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 rounded border border-slate-200 shadow-sm">
                Pune, Maharashtra, India
              </span>
            </div>
          </motion.div>

          {/* Organizers List Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-6 border border-slate-200 flex flex-col justify-between shadow-md"
          >
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand-burgundy font-black">
                  Pitch Curators
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy uppercase mt-1 mb-4 tracking-tight">
                  Organizing Committee
                </h3>
              </div>

              <div className="space-y-4">
                {organizers.map((org, idx) => (
                  <div key={idx} className="flex items-center space-x-3.5 bg-slate-50/50 p-3 rounded-xl border border-slate-200 hover:border-brand-navy/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-navy to-brand-burgundy flex items-center justify-center font-display font-black text-white text-sm border border-white/15">
                      {org.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate leading-tight">{org.name}</h4>
                      <span className="text-[9px] text-slate-500 font-semibold tracking-wide uppercase">{org.role}</span>
                      <div className="flex items-center space-x-3 mt-1 text-[9px] text-slate-500">
                        <a href={`tel:${org.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-1 hover:text-brand-navy transition-colors duration-200">
                          <Phone className="w-2.5 h-2.5" />
                          <span>Call</span>
                        </a>
                        <a href={`mailto:${org.email}`} className="flex items-center space-x-1 hover:text-brand-navy transition-colors duration-200">
                          <Mail className="w-2.5 h-2.5" />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-xs text-slate-500 font-bold">
              Need assistance? Call Guest Coord at <br/>
              <strong className="text-slate-800 font-black">+91 90333 70701</strong>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;
