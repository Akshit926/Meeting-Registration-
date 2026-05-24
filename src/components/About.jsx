import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Shield, Zap, Sparkles } from 'lucide-react';

const About = () => {
  const cards = [
    {
      title: 'High-Octane Fun',
      description: 'Experience Table Topics styled like cricket commentary. Loud cheering, tactical runs, and instant pitch analysis!',
      icon: Smile,
      color: 'from-amber-500 to-yellow-600',
    },
    {
      title: 'Unshakable Confidence',
      description: 'Face the stadium crowd. Bat under high-pressure scenarios, knock curveball topics, and conquer public speaking anxiety.',
      icon: Shield,
      color: 'from-brand-gold to-amber-600',
    },
    {
      title: 'Quick Thinking',
      description: 'Formulate structured, impactful, and coherent thoughts in split seconds. Learn to build stories on the fly.',
      icon: Zap,
      color: 'from-red-600 to-brand-burgundy',
    },
    {
      title: 'Public Speaking Elite',
      description: 'Perfect your stance, eye contact, and vocal delivery. Speak with the poise of a professional player under the spotlight.',
      icon: Sparkles,
      color: 'from-blue-600 to-brand-navy',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="relative py-24 bg-white border-y border-slate-200/80 overflow-hidden">
      {/* Background visual element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-brand-burgundy/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-brand-burgundy uppercase tracking-[0.25em] mb-3">
            What is Toastmasters IPL?
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight">
            The Pitch is Ready. <br/>
            Are <span className="text-gradient-gold">You?</span>
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Format Explanation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-slate-600"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-navy uppercase flex items-center space-x-3">
              <span className="text-brand-gold">🏏</span> 
              <span>THE PLAYBOOK</span>
            </h3>
            
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              The <strong className="text-brand-navy">Impromptu Premier League (IPL)</strong> is Wakad Toastmasters' flagship athletic speaking contest designed to mimic the high-stakes, fast-paced nature of a cricket match!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-navy/10 border border-brand-navy/20 flex items-center justify-center font-bold text-brand-navy mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wide">The Squad Selection</h4>
                  <p className="text-sm text-slate-500">Captains draft speaking squads. Everyone gets their batting order to speak on impromptu topics.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-burgundy/10 border border-brand-burgundy/20 flex items-center justify-center font-bold text-brand-burgundy mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wide">Knocking off the Topic</h4>
                  <p className="text-sm text-slate-500">Speakers step up to the crease, receive a secret topic, and have 2 minutes to score speaking boundaries (points)!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center font-bold text-brand-gold-light mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wide">Super Over</h4>
                  <p className="text-sm text-slate-500">In case of a speech tie, a rapid-fire, 60-second speech showdown determines the ultimate Match Winner!</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Card Board mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-panel rounded-3xl p-6 border border-slate-200 overflow-hidden shadow-lg"
          >
            {/* Visual sports board overlay */}
            <div className="absolute inset-0 cricket-grid opacity-30"></div>
            
            <div className="relative z-10 border border-brand-gold/20 rounded-2xl p-6 bg-slate-50/90 flex flex-col space-y-4 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">MATCH FIXTURE</span>
                <span className="px-2.5 py-0.5 bg-brand-gold text-brand-darker font-black text-[10px] rounded uppercase">Live Auction</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="text-center w-1/3">
                  <div className="text-lg sm:text-xl font-black text-brand-navy">Burgundy Blasters</div>
                  <div className="text-[10px] uppercase text-brand-gold font-bold mt-1">Captain: TM Akash</div>
                </div>
                <div className="w-1/3 text-center">
                  <span className="font-display font-black text-brand-burgundy text-lg sm:text-xl px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">VS</span>
                </div>
                <div className="text-center w-1/3">
                  <div className="text-lg sm:text-xl font-black text-brand-navy">Navy Knights</div>
                  <div className="text-[10px] uppercase text-brand-gold font-bold mt-1">Captain: TM Ritu</div>
                </div>
              </div>
              <div className="text-center border-t border-slate-200 pt-4 mt-2">
                <p className="text-xs text-slate-500 italic">"Shortlisting based on experience & wins nomination! Register to get drafted."</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative glass-panel rounded-2xl p-6 border border-slate-200 transition-all duration-300 hover:border-brand-navy/30 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Dynamic top gradient bar on hover */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="mt-4 mb-3 inline-block bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-brand-navy/5 group-hover:border-brand-navy/15 transition-all duration-300">
                <card.icon className="h-6 w-6 text-brand-navy" />
              </div>
              
              <h4 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-2 group-hover:text-brand-navy transition-colors duration-200">
                {card.title}
              </h4>
              
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-200">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
