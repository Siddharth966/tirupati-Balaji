import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Scissors, Clock, Compass, Calendar, Gift, Heart, Sparkles, CheckCircle2, MapPin, Info } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Mundan = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const locations = t('mundan.locations', { returnObjects: true });
  const process = t('mundan.process', { returnObjects: true });
  const storage = t('mundan.storage', { returnObjects: true });
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-card-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Heart, text: 'Spiritual Purification', color: 'amber' },
    { icon: Calendar, text: 'Auspicious Occasion', color: 'yellow' },
    { icon: Gift, text: 'Divine Blessings', color: 'orange' },
    { icon: Sparkles, text: 'Renewed Energy', color: 'amber' },
  ];

  const preparationTips = [
    'Book appointment 2-3 days in advance',
    'Carry necessary documents (ID proof)',
    'Wear comfortable traditional attire',
    'Arrive 30 minutes before scheduled time',
  ];

  if (!Array.isArray(locations)) return null;

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl animate-pulse" />
          
          {/* Decorative Mandala Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-500" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-amber-400" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-amber-300" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <div className="relative">
                <Scissors className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <Scissors className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('mundan.title') || 'Sacred Mundan Ceremony'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('mundan.subtitle') || 'Traditional first hair offering ceremony at Tirupati Balaji Temple'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="mundan" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Quick Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: 'Daily', label: 'Ceremonies', icon: Calendar, color: 'amber' },
                { number: '5+', label: 'Locations', icon: MapPin, color: 'yellow' },
                { number: 'Free', label: 'Registration', icon: Gift, color: 'orange' },
                { number: 'Sacred', label: 'Tradition', icon: Sparkles, color: 'amber' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative text-center p-6 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 
                           shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                           border border-amber-200/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 
                                group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-300" />
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600 mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-amber-700 to-yellow-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Locations Section */}
              <div
                ref={el => cardsRef.current[0] = el}
                className="group opacity-0"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                  <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                                rounded-2xl p-8 border border-amber-200/50 shadow-lg
                                hover:shadow-xl transition-all duration-300 h-full">
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                    flex items-center justify-center shadow-lg">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <h3 className="text-gray-800 font-heading text-2xl">
                        {t('mundan.locationsTitle') || 'Ceremony Locations'}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 devanagari leading-relaxed">
                      {t('mundan.description') || 'Choose from multiple sacred locations for the ceremony'}
                    </p>
                    
                    <div className="space-y-4">
                      {locations.map((loc, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-3 group/item hover:translate-x-2 transition-all duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                          <div className="flex-1">
                            <span className="text-gray-700 font-body devanagari">{loc}</span>
                            {i === 0 && (
                              <span className="ml-2 text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                                Most Popular
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Element */}
                    <div className="mt-8 pt-6 border-t border-amber-200/30">
                      <div className="flex items-center gap-2 text-xs text-amber-600">
                        <Info size={12} />
                        <span>Advance booking recommended</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="space-y-8">
                {/* Process Steps */}
                <div
                  ref={el => cardsRef.current[1] = el}
                  className="group opacity-0"
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                  rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                    <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                                  rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                      
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                      flex items-center justify-center shadow-lg">
                          <Compass className="text-white" size={20} />
                        </div>
                        <h3 className="text-gray-800 font-heading text-2xl">
                          {t('mundan.processTitle') || 'Ceremony Process'}
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        {process.map((step, i) => (
                          <div key={i} className="flex gap-4 group/step">
                            <div className="relative">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 
                                            flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-white text-xs font-bold">{i + 1}</span>
                              </div>
                              {i < process.length - 1 && (
                                <div className="absolute left-1/2 top-8 w-0.5 h-12 bg-gradient-to-b from-amber-400 to-transparent" />
                              )}
                            </div>
                            <div className="flex-1 pt-1">
                              <p className="text-gray-700 text-sm devanagari leading-relaxed">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Storage Options */}
                <div
                  ref={el => cardsRef.current[2] = el}
                  className="group opacity-0"
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                  rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                    <div className="relative bg-gradient-to-br from-amber-900 to-yellow-900 
                                  rounded-2xl p-6 shadow-xl">
                      
                      <h3 className="text-amber-300 font-heading text-sm uppercase tracking-widest mb-4">
                        {t('mundan.storageTitle') || 'Hair Offering Storage'}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3">
                        {storage.map((item, i) => (
                          <div 
                            key={i} 
                            className="px-4 py-2 rounded-full bg-white/10 border border-amber-500/30 
                                     text-amber-200 text-xs devanagari hover:bg-white/20 
                                     transition-all duration-300 transform hover:scale-105 cursor-pointer"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-amber-500/30">
                        <div className="flex items-center gap-2 text-xs text-amber-300/80">
                          <Heart size={12} />
                          <span>All offerings are treated with utmost respect and sanctity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display text-gray-800 mb-3">Spiritual Benefits</h2>
                <p className="text-gray-600">Blessings received through this sacred ceremony</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 
                             shadow-lg hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 border border-amber-200/50 text-center"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-${benefit.color}-100 
                                  flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <benefit.icon className={`w-7 h-7 text-${benefit.color}-600`} />
                    </div>
                    <p className="text-gray-700 font-body font-medium">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 border border-amber-200/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display text-gray-800 mb-2">Preparation Tips</h3>
                <p className="text-gray-600 text-sm">Important guidelines for a smooth ceremony</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {preparationTips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 text-center">
                <div className="inline-flex items-center gap-2 text-xs text-amber-600 bg-amber-100 px-4 py-2 rounded-full">
                  <Clock size={12} />
                  <span>Ceremony typically takes 30-45 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes card-reveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-card-reveal {
          animation: card-reveal 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .gold-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #d97706, #f59e0b, #d97706, transparent);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Mundan;
