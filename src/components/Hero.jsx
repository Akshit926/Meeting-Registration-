import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Flame } from 'lucide-react';

const Hero = () => {
  const targetDate = new Date('2026-06-06T16:45:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const timerItem = (value, label) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <div className="relative bg-white rounded-xl px-4 py-5 sm:px-6 sm:py-7 border border-slate-200 min-w-[70px] sm:min-w-[95px] flex items-center justify-center shadow-lg overflow-hidden group">
        {/* Soft grid behind numbers */}
        <div className="absolute inset-0 bg-slate-50/50"></div>
        {/* Horizontal scoreboard slit */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 z-10"></div>
        <span className="font-display font-black text-3xl sm:text-5xl text-brand-navy tracking-tight drop-shadow-[0_1px_2px_rgba(0,65,101,0.1)]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-slate-500 mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50">
      {/* Background Stadium Glow Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full stadium-light-navy z-0"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] rounded-full stadium-light-burgundy z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full stadium-light-gold z-0"></div>
      
      {/* Stadium Pitch Lines Overlay (Subtle Cricket Theme) */}
      <div className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none">
        <svg width="100%" height="100%">
          <rect x="10%" y="10%" width="80%" height="80%" fill="none" stroke="rgba(15,23,42,0.04)" strokeWidth="2"/>
          <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="rgba(15,23,42,0.04)" strokeWidth="2"/>
          <circle cx="50%" cy="50%" r="100" fill="none" stroke="rgba(15,23,42,0.04)" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center">
        
        {/* Milestone Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 bg-brand-burgundy/5 border border-brand-burgundy/15 px-4 py-1.5 rounded-full mb-6"
        >
          <Flame className="w-4 h-4 text-brand-burgundy animate-bounce" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-burgundy">
            400th Celebration Milestone
          </span>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 max-w-4xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-brand-navy tracking-tight uppercase leading-none"
          >
            400<span className="text-brand-burgundy font-normal">th</span> Wakad <br/>
            <span className="text-gradient-gold">Toastmasters</span> Meeting
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-display font-bold text-slate-600 tracking-wide uppercase"
          >
            Impromptu Premier League (IPL)
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-slate-500 font-bold tracking-[0.2em] uppercase max-w-xl mx-auto py-2 border-y border-slate-200"
          >
            “Think Fast. Speak Smart. Lead Boldly.”
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#register"
              className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-brand-burgundy text-white font-black text-sm uppercase tracking-widest rounded-full shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Nominate / Register Now</span>
              <Award className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 border border-slate-200 hover:border-brand-navy text-slate-700 hover:text-brand-navy bg-white rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center"
            >
              Explore Rules
            </a>
          </motion.div>

          {/* Countdown Scoreboard */}
          <motion.div
            variants={itemVariants}
            className="pt-8 pb-4 flex flex-row justify-center items-center select-none"
          >
            {timeLeft.isCompleted ? (
              <div className="bg-white px-8 py-4 rounded-xl border border-brand-gold/30 shadow-md">
                <span className="font-display font-bold text-2xl text-brand-burgundy tracking-widest uppercase animate-pulse">
                  Match Is Live! 🏏
                </span>
              </div>
            ) : (
              <div className="flex flex-row justify-center">
                {timerItem(timeLeft.days, 'Days')}
                {timerItem(timeLeft.hours, 'Hrs')}
                {timerItem(timeLeft.minutes, 'Mins')}
                {timerItem(timeLeft.seconds, 'Secs')}
              </div>
            )}
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            variants={itemVariants}
            className="pt-6 pb-8 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto text-left text-xs sm:text-sm font-bold text-slate-700"
          >
            <div className="flex items-center space-x-2.5 bg-white border border-slate-200/80 rounded-xl px-4 py-3 shadow-sm">
              <Calendar className="w-5 h-5 text-brand-navy flex-shrink-0" />
              <span>Saturday, June 6, 2026</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-white border border-slate-200/80 rounded-xl px-4 py-3 shadow-sm">
              <Flame className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
              <span>Starts at 4:45 PM IST</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center space-x-2.5 bg-white border border-slate-200/80 rounded-xl px-4 py-3 shadow-sm">
              <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>Mount Litera Zee School, Wakad</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
