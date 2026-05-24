import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'TM Nitin Saxena',
      role: 'District 98 Table Topics Finalist',
      avatar: 'NS',
      quote: "Wakad Toastmasters' IPL format is a complete game-changer! Speaking under a ticking 2-minute clock forces you to cut filler words and hit straight boundaries. The crowd energy is like an actual stadium!",
      rating: 5,
      gradient: 'from-amber-400 to-yellow-600',
    },
    {
      name: 'TM Sneha Iyer',
      role: 'Wakad TM Member (3 Years)',
      avatar: 'SI',
      quote: "I was terrified of impromptu public speaking before joining this club. The team draft format and supportive captains helped me build confidence. I've gone from avoiding the stage to loving the speaking crease!",
      rating: 5,
      gradient: 'from-brand-burgundy to-red-600',
    },
    {
      name: 'TM Rahul Sen',
      role: 'Division Public Relations Lead',
      avatar: 'RS',
      quote: "Celebrating 400 meetings of excellence with an IPL contest is classic Wakad style—premium, energetic, and extremely educational. It's the perfect environment to learn to think on your feet and lead boldly.",
      rating: 5,
      gradient: 'from-brand-navy to-indigo-600',
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] rounded-full stadium-light-navy opacity-5 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-brand-burgundy uppercase tracking-[0.25em] mb-3">
            Scout Reports
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight">
            Member <span className="text-gradient-gold">Testimonials</span>
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-brand-navy/20 transition-all duration-300 relative group flex flex-col justify-between shadow-md"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-6 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-300">
                <Quote className="w-12 h-12 text-brand-gold" />
              </div>

              {/* Quote Text */}
              <div className="mb-6">
                {/* Rating stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center space-x-3.5 border-t border-slate-100 pt-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} p-0.5 flex-shrink-0 shadow-sm`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-display font-black text-brand-navy text-[10px]">
                    {t.avatar}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">{t.name}</h4>
                  <span className="text-[9px] text-slate-400 font-bold tracking-wide uppercase">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
