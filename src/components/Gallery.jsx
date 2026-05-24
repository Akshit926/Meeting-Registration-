import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

import meetingOne from '../assets/meeting_one.png';
import meetingTwo from '../assets/meeting_two.png';
import meetingThree from '../assets/meeting_three.png';

const Gallery = () => {
  const photos = [
    {
      src: meetingOne,
      title: 'Speech Crease Face-Off',
      category: 'Contest Rounds',
      description: 'Speakers delivering fast-paced table topics responses under stadium-lit spotlight conditions.',
    },
    {
      src: meetingTwo,
      title: 'Championship Celebration',
      category: 'Milestones',
      description: 'Wakad Toastmasters executive members celebrating speaking excellence with the gold trophy.',
    },
    {
      src: meetingThree,
      title: 'Pitch Evaluation & Audience',
      category: 'Match Atmosphere',
      description: 'Engaged audience members and draft scouts scoring speaker performances in real-time.',
    },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background Navy Lights */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-brand-burgundy uppercase tracking-[0.25em] mb-3">
            Match Highlights
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight">
            Wakad TM <span className="text-gradient-gold">Gallery</span>
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-md mx-auto">
            A visual recap of public speaking battles, championship trophies, and learning moments from previous meetings.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group glass-panel rounded-3xl overflow-hidden border border-slate-200 relative shadow-md"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-95"
                />
                
                {/* Image Overlay Grid Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300"></div>

                {/* Hover Quick view badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur border border-slate-200 px-2.5 py-1 rounded-lg text-[10px] text-brand-navy font-bold uppercase tracking-widest flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <ImageIcon className="w-3 h-3 text-brand-navy" />
                  <span>Highlight</span>
                </div>
              </div>

              {/* Text Card Footer */}
              <div className="p-6 relative z-10 bg-white border-t border-slate-100">
                <span className="text-[10px] uppercase tracking-widest text-brand-burgundy font-black">
                  {photo.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-800 uppercase tracking-wide mt-1.5 mb-2 group-hover:text-brand-navy transition-colors duration-200">
                  {photo.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-200">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
