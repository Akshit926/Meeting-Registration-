import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap } from 'lucide-react';

const HallOfFame = () => {
  const champions = [
    {
      name: 'TM Punit Hadani',
      role: 'IPL Season 3 Champion',
      tagline: 'The Speech Blaster',
      points: '12 Ribbons',
      speciality: 'Humorous Storytelling & Quick-fire Hook',
      stats: {
        matches: 28,
        strikeRate: '194.2',
        sixes: 15,
        avg: '89.5'
      },
      gradient: 'from-amber-500 via-yellow-400 to-yellow-600',
      initials: 'PH'
    },
    {
      name: 'TM Ritu Sinha',
      role: 'The Table Topics Queen',
      tagline: 'The Anchor Maestro',
      points: '9 Ribbons',
      speciality: 'Emotional Hooks & Elegant Rhetoric',
      stats: {
        matches: 22,
        strikeRate: '182.1',
        sixes: 11,
        avg: '85.2'
      },
      gradient: 'from-brand-burgundy via-red-500 to-brand-gold',
      initials: 'RS'
    },
    {
      name: 'TM Akash Deep',
      role: 'Golden Gavel All-Rounder',
      tagline: 'The Pitch Curator',
      points: '15 Ribbons',
      speciality: 'Vocal Variety & Structured Rhetoric',
      stats: {
        matches: 34,
        strikeRate: '176.8',
        sixes: 18,
        avg: '92.4'
      },
      gradient: 'from-brand-navy via-indigo-500 to-brand-gold',
      initials: 'AD'
    }
  ];

  return (
    <section id="hall-of-fame" className="relative py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Stadium Spotlight Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] stadium-light-gold opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-brand-burgundy uppercase tracking-[0.25em] mb-3">
            Landmark Legends
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight">
            Hall of <span className="text-gradient-gold">Fame & Champions</span>
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {champions.map((champ, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-200 to-transparent hover:from-brand-gold/60 transition-all duration-500 group shadow-lg hover:shadow-xl"
            >
              {/* Inner Card */}
              <div className="bg-white rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[460px] border border-slate-100">
                {/* Visual grid behind cards */}
                <div className="absolute inset-0 cricket-grid opacity-20 pointer-events-none"></div>

                {/* Card Top Branding */}
                <div className="flex justify-between items-center relative z-10 border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-1.5">
                    <Trophy className="w-4 h-4 text-brand-gold" />
                    <span className="text-[10px] font-black uppercase text-brand-navy tracking-widest">WTM CHAMPION</span>
                  </div>
                  <div className="px-2.5 py-0.5 bg-slate-50 text-slate-600 text-[10px] font-black rounded border border-slate-200">
                    {champ.points}
                  </div>
                </div>

                {/* Player Card Face */}
                <div className="my-6 text-center flex flex-col items-center relative z-10">
                  {/* Photo Avatar/Initials */}
                  <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${champ.gradient} p-0.5 flex items-center justify-center shadow-md`}>
                      <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center font-display font-black text-brand-navy text-3xl">
                        {champ.initials}
                      </div>
                    </div>
                    {/* Tiny Ribbon Star */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-brand-gold border-2 border-white flex items-center justify-center text-brand-darker">
                      <Star className="w-4.5 h-4.5 fill-brand-navy stroke-brand-navy" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-800 uppercase tracking-wide group-hover:text-brand-navy transition-colors duration-200">
                    {champ.name}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                    {champ.role}
                  </span>
                  <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-brand-navy text-[10px] uppercase font-bold tracking-wider rounded-full mt-3">
                    🏏 {champ.tagline}
                  </span>
                </div>

                {/* Statistics Box */}
                <div className="relative z-10 bg-slate-50 border border-slate-200 rounded-2xl p-4 grid grid-cols-4 gap-2 text-center mb-6">
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">SPEECHES</div>
                    <div className="text-sm font-black text-slate-800 mt-1">{champ.stats.matches}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">IMPACT</div>
                    <div className="text-sm font-black text-brand-navy mt-1">{champ.stats.strikeRate}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">BEST TM</div>
                    <div className="text-sm font-black text-slate-800 mt-1">{champ.stats.sixes}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">AVG SCORE</div>
                    <div className="text-sm font-black text-slate-800 mt-1">{champ.stats.avg}</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="relative z-10 border-t border-slate-100 pt-4 text-center">
                  <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">
                    <Zap className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Special Delivery</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    "{champ.speciality}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HallOfFame;
