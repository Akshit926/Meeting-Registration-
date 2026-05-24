import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { User, Phone, Mail, Home, Shield, Award, Users, FileText, CheckCircle, ArrowRight, ArrowLeft, Trophy } from 'lucide-react';
import toastmastersLogo from '../assets/toastmasters_logo.png';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    club: '',
    area: '',
    role: 'audience', // default role
    experience: '',
    wins: '',
    sellingPoint: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Local Database using Browser's localStorage
  const [registrations, setRegistrations] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('wtm_ipl_registrations') || '[]');
    } catch (e) {
      return [];
    }
  });

  const saveRegistration = (tid) => {
    const newRecord = {
      id: tid,
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      club: formData.club,
      area: formData.area,
      role: formData.role,
      experience: formData.role === 'participant' ? formData.experience : '',
      wins: formData.role === 'participant' ? formData.wins : '',
      sellingPoint: formData.role === 'participant' ? formData.sellingPoint : '',
      timestamp: new Date().toLocaleString(),
    };
    const updated = [...registrations, newRecord];
    setRegistrations(updated);
    localStorage.setItem('wtm_ipl_registrations', JSON.stringify(updated));
  };

  const handleExportCSV = () => {
    if (registrations.length === 0) {
      alert("No registrations available to export yet!");
      return;
    }
    
    const headers = ['Ticket ID', 'Name', 'Contact No', 'Email ID', 'Club Name', 'Area', 'Role', 'Experience (Years)', 'Wins / Accomplishments', 'Shortlist Pitch', 'Registration Date'];
    const rows = registrations.map(r => [
      r.id,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.contact.replace(/"/g, '""')}"`,
      `"${r.email.replace(/"/g, '""')}"`,
      `"${r.club.replace(/"/g, '""')}"`,
      `"${r.area.replace(/"/g, '""')}"`,
      r.role,
      `"${(r.experience || '').replace(/"/g, '""')}"`,
      `"${(r.wins || '').replace(/"/g, '""')}"`,
      `"${(r.sellingPoint || '').replace(/"/g, '""')}"`,
      `"${r.timestamp}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `WTM_IPL_Registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
    else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.contact)) newErrors.contact = 'Invalid phone number';
    if (!formData.email.trim()) newErrors.email = 'Email ID is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.club.trim()) newErrors.club = 'Club name is required';
    if (!formData.area.trim()) newErrors.area = 'Area code (A1, B1 etc) is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.wins.trim()) newErrors.wins = 'Wins info is required (state "None" if none)';
    if (!formData.sellingPoint.trim()) newErrors.sellingPoint = 'Special selling point is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const generateTicketId = () => {
    const prefix = formData.role === 'participant' ? 'PLYR' : 'AUD';
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${rand}`;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (formData.role === 'audience') {
      if (validateStep1()) {
        const tid = generateTicketId();
        setTicketId(tid);
        saveRegistration(tid);
        setIsSubmitted(true);
        triggerConfetti();
      }
    } else {
      if (validateStep2()) {
        const tid = generateTicketId();
        setTicketId(tid);
        saveRegistration(tid);
        setIsSubmitted(true);
        triggerConfetti();
      }
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const getBasePrice = () => {
    const winsLower = formData.wins.toLowerCase();
    if (winsLower.includes('district')) return '₹ 15.0 Lakhs (Platinum Tier)';
    if (winsLower.includes('division')) return '₹ 10.0 Lakhs (Gold Tier)';
    if (winsLower.includes('area')) return '₹ 5.0 Lakhs (Silver Tier)';
    if (winsLower.includes('club')) return '₹ 2.0 Lakhs (Bronze Tier)';
    return '₹ 50,000 (Rookie Base)';
  };

  return (
    <section id="register" className="relative py-24 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      {/* Light glow behind the form */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[50%] h-[50%] rounded-full stadium-light-burgundy opacity-10 z-0"></div>
      <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] rounded-full stadium-light-gold opacity-10 z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-black text-brand-burgundy uppercase tracking-[0.25em] mb-3">
            Secure Your Crease
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight">
            Register for the <span className="text-gradient-gold">Landmark Match</span>
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-lg mx-auto">
            Choose your role and submit your details. Player entries are shortlisted for the draft team auctions!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Form Container */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative"
            >
              <div className="absolute inset-0 cricket-grid opacity-[0.4] pointer-events-none rounded-3xl"></div>

              {/* Toastmasters Brand Header */}
              <div className="flex flex-col items-center border-b border-slate-100 pb-6 mb-8 relative z-10">
                <img 
                  src={toastmastersLogo} 
                  alt="Toastmasters International Logo" 
                  className="h-16 w-16 object-contain mb-3"
                />
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Official Registration Portal</span>
                <span className="text-sm text-brand-navy font-black tracking-wide mt-1 uppercase">Toastmasters International</span>
              </div>

              {/* Progress Indicator for Participant Flow */}
              {formData.role === 'participant' && (
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100 relative z-10">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      step === 1 ? 'bg-brand-navy text-white shadow' : 'bg-slate-100 text-slate-500'
                    }`}>
                      1
                    </div>
                    <span className="text-xs uppercase tracking-wider text-slate-700 font-bold hidden sm:inline">General Info</span>
                  </div>
                  <div className="flex-1 h-[2px] bg-slate-100 mx-4">
                    <div className={`h-full bg-brand-navy transition-all duration-300 ${step === 2 ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      step === 2 ? 'bg-brand-navy text-white shadow' : 'bg-slate-100 text-slate-500'
                    }`}>
                      2
                    </div>
                    <span className="text-xs uppercase tracking-wider text-slate-700 font-bold hidden sm:inline">Contest Nomination</span>
                  </div>
                </div>
              )}

              <form className="space-y-6 relative z-10">
                {step === 1 ? (
                  /* STEP 1: GENERAL INFO */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <User className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Name <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="E.g. Akash Sharma"
                        className={`bg-slate-50/50 border ${
                          errors.name ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 text-sm`}
                      />
                      {errors.name && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.name}</span>}
                    </div>

                    {/* Contact Number */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <Phone className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Contact No <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="E.g. +91 98765 43210"
                        className={`bg-slate-50/50 border ${
                          errors.contact ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 text-sm`}
                      />
                      {errors.contact && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.contact}</span>}
                    </div>

                    {/* Email ID */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <Mail className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Email ID <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E.g. akash@gmail.com"
                        className={`bg-slate-50/50 border ${
                          errors.email ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 text-sm`}
                      />
                      {errors.email && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.email}</span>}
                    </div>

                    {/* Toastmasters Club Name */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <Home className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Toastmasters Club Name <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="club"
                        value={formData.club}
                        onChange={handleInputChange}
                        placeholder="E.g. Wakad Toastmasters Club"
                        className={`bg-slate-50/50 border ${
                          errors.club ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 text-sm`}
                      />
                      {errors.club && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.club}</span>}
                    </div>

                    {/* Area Code */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <Shield className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Area (A1, B1 etc) <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder="E.g. A3"
                        className={`bg-slate-50/50 border ${
                          errors.area ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 text-sm`}
                      />
                      {errors.area && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.area}</span>}
                    </div>

                    {/* Role Selection */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Are you a Player or Audience? <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, role: 'audience' }))}
                          className={`py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            formData.role === 'audience'
                              ? 'bg-brand-navy border-brand-navy text-white shadow-md'
                              : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                          }`}
                        >
                          Audience
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, role: 'participant' }))}
                          className={`py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            formData.role === 'participant'
                              ? 'bg-brand-burgundy border-brand-gold text-white shadow-md'
                              : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                          }`}
                        >
                          Player
                        </button>
                      </div>
                    </div>

                    {/* Step 1 Control Buttons */}
                    <div className="md:col-span-2 pt-4 border-t border-slate-100 flex justify-end">
                      {formData.role === 'audience' ? (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="px-8 py-3.5 bg-brand-navy hover:bg-brand-burgundy text-white font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                        >
                          <span>Submit Registration</span>
                          <CheckCircle className="w-4.5 h-4.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-8 py-3.5 bg-brand-navy hover:bg-brand-burgundy text-white font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                        >
                          <span>Next: Nomination</span>
                          <ArrowRight className="w-4.5 h-4.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* STEP 2: PARTICIPANT NOMINATION (PLAYER PROFILE) */
                  <div className="space-y-6">
                    {/* Experience level */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <Award className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Experience as a Toastmaster (Approx in Years) <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="E.g. 2.5 Years"
                        className={`bg-slate-50/50 border ${
                          errors.experience ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-200 outline-none transition-all duration-300 placeholder-slate-400 text-sm`}
                      />
                      {errors.experience && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.experience}</span>}
                    </div>

                    {/* Any wins at Club, Area, Division, District Level */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <Trophy className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Any wins at Club, Area, Division, District Level (Please Mention the contest in which you have won and the number of times you have won as that will decide your minimum price in the contest) (Only mention the highest Levels) <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <textarea
                        name="wins"
                        value={formData.wins}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Please mention the contest in which you have won and how many times (Only highest levels, e.g. Club Table Topics winner twice, Area Evaluation 1st runner up)"
                        className={`bg-slate-50/50 border ${
                          errors.wins ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 text-sm resize-none`}
                      />
                      <span className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">
                        Note: This will decide your minimum draft price in the speech auction contest!
                      </span>
                      {errors.wins && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.wins}</span>}
                    </div>

                    {/* Special Selling Point */}
                    <div className="flex flex-col">
                      <label className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                        <FileText className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Special selling point to convince captains to shortlist you <span className="text-brand-burgundy">*</span></span>
                      </label>
                      <textarea
                        name="sellingPoint"
                        value={formData.sellingPoint}
                        onChange={handleInputChange}
                        rows="2"
                        placeholder="Mention in a couple of lines why you should be in the playing XI"
                        className={`bg-slate-50/50 border ${
                          errors.sellingPoint ? 'border-brand-burgundy' : 'border-slate-300 focus:border-brand-navy/60'
                        } rounded-xl px-4 py-3 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 text-sm resize-none`}
                      />
                      {errors.sellingPoint && <span className="text-[10px] text-brand-burgundy font-semibold mt-1">{errors.sellingPoint}</span>}
                    </div>

                    {/* Step 2 Control Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3.5 border border-slate-200 bg-white hover:border-brand-navy text-slate-500 hover:text-brand-navy font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-8 py-3.5 bg-brand-navy hover:bg-brand-burgundy text-white font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                      >
                        <span>Submit Nomination</span>
                        <CheckCircle className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          ) : (
            /* REGISTRATION SUCCESS: TICKET PASS GENERATED (LIGHT THEME) */
            <motion.div
              key="ticket"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', damping: 15 }}
              className="flex flex-col items-center"
            >
              {/* Ticket Card Wrapper */}
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-brand-gold to-slate-200 shadow-xl max-w-md w-full overflow-hidden mb-6 border border-slate-200/80">
                
                {/* Visual Tickets cuts on left and right */}
                <div className="absolute top-[48%] -left-4 w-8 h-8 rounded-full bg-slate-50 border-r border-slate-200 z-20"></div>
                <div className="absolute top-[48%] -right-4 w-8 h-8 rounded-full bg-slate-50 border-l border-slate-200 z-20"></div>

                {/* Inner Pass Box */}
                <div className="bg-white rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                  <div className="absolute inset-0 cricket-grid opacity-[0.4]"></div>
                  
                  {/* Glowing light bars in card background */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-burgundy/5 rounded-full blur-2xl"></div>

                  {/* Header / Ticket Issuer */}
                  <div className="text-center relative z-10 border-b border-dashed border-slate-200 pb-4">
                    <img 
                      src={toastmastersLogo} 
                      alt="Toastmasters International" 
                      className="h-10 w-10 object-contain mx-auto mb-2"
                    />
                    <h3 className="font-display font-black text-brand-navy text-base tracking-wide uppercase">
                      Wakad <span className="text-brand-burgundy">Toastmasters</span>
                    </h3>
                    <span className="text-[9px] text-brand-gold tracking-[0.2em] font-black uppercase mt-0.5 block">
                      400th Celebration Meeting
                    </span>
                    <div className="mt-2.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[9px] inline-block font-black text-slate-700 uppercase tracking-wider">
                      🎟️ {formData.role === 'participant' ? 'Player nomination pass' : 'Audience admission pass'}
                    </div>
                  </div>

                  {/* Ticket Details Body */}
                  <div className="my-6 space-y-5 relative z-10">
                    <div className="text-center">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Attendee Name</span>
                      <h4 className="text-lg font-black text-brand-navy uppercase tracking-wide mt-0.5">{formData.name}</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center border-y border-slate-100 py-4">
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">CLUB</span>
                        <div className="text-xs font-black text-slate-800 truncate px-1 mt-0.5">{formData.club}</div>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">AREA</span>
                        <div className="text-xs font-black text-brand-burgundy mt-0.5">{formData.area}</div>
                      </div>
                    </div>

                    {/* Role specific display block */}
                    {formData.role === 'participant' ? (
                      /* Player Stats for Participants */
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-bold">Draft Experience:</span>
                          <span className="font-black text-slate-800">{formData.experience}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-t border-slate-100 pt-2">
                          <span className="text-slate-500 font-bold">Contest Base Price:</span>
                          <span className="font-black text-brand-burgundy">{getBasePrice()}</span>
                        </div>
                        <div className="text-center border-t border-slate-100 pt-2">
                          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold block mb-1">CAPTAIN PITCH</span>
                          <p className="text-[11px] text-slate-600 italic leading-relaxed">"{formData.sellingPoint}"</p>
                        </div>
                      </div>
                    ) : (
                      /* Guest message for Audience */
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                        <span className="text-[9px] text-slate-400 uppercase tracking-wider block mb-1">Match Access Ticket</span>
                        <p className="text-xs font-bold text-slate-700 leading-relaxed">
                          Confirming your audience seat for 4:45 PM IST on Saturday, June 6, 2026.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Ticket barcode footer section */}
                  <div className="relative z-10 border-t border-dashed border-slate-200 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold block">TICKET ID</span>
                      <span className="font-mono text-sm font-black text-brand-navy tracking-wide">{ticketId}</span>
                    </div>
                    {/* Simulated barcode */}
                    <div className="flex flex-col items-end">
                      <div className="flex space-x-[2px] h-6 bg-slate-800 p-0.5 rounded">
                        <div className="w-1 bg-black h-full"></div>
                        <div className="w-0.5 bg-black h-full"></div>
                        <div className="w-1.5 bg-black h-full"></div>
                        <div className="w-0.5 bg-black h-full"></div>
                        <div className="w-1 bg-black h-full"></div>
                        <div className="w-[1px] bg-black h-full"></div>
                        <div className="w-2 bg-black h-full"></div>
                        <div className="w-0.5 bg-black h-full"></div>
                        <div className="w-1 bg-black h-full"></div>
                      </div>
                      <span className="text-[7px] font-bold text-slate-400 mt-1 uppercase">CELEBRATING 400 MEETINGS</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action utilities */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData({
                      name: '',
                      contact: '',
                      email: '',
                      club: '',
                      area: '',
                      role: 'audience',
                      experience: '',
                      wins: '',
                      sellingPoint: '',
                    });
                  }}
                  className="px-6 py-2.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-600 hover:text-brand-navy font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 shadow-sm"
                >
                  Register Another Guest
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-6 py-2.5 bg-brand-navy hover:bg-brand-burgundy text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 shadow-sm"
                >
                  Print Ticket Pass
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Organizer Database Exporter Panel */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 relative z-10">
          <div className="flex items-center space-x-1.5 mb-4 sm:mb-0">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
            <span>Database Status: <strong className="text-slate-700">Browser local storage active ({registrations.length} registered)</strong></span>
          </div>
          <button
            type="button"
            onClick={handleExportCSV}
            className="px-4 py-2 border border-slate-200 hover:border-brand-navy hover:text-brand-navy bg-white text-slate-600 font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-sm flex items-center space-x-2 cursor-pointer"
          >
            <span>📊 Export Registrations (CSV Sheet)</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default RegistrationForm;
