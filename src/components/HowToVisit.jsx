import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation, Clock, Ticket, Hotel, CalendarDays, ArrowRight, CheckCircle2, Shield, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const HowToVisit = () => {
  const { t } = useTranslation();
  const steps = t('howToVisit.steps', { returnObjects: true });
  const { ref, isVisible } = useReveal();
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-step-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, [steps]);

  const journeySteps = steps || [
    { step: '01', title: 'Plan Your Visit', desc: 'Check temple schedule, book darshan tickets online, and plan your itinerary' },
    { step: '02', title: 'Transportation', desc: 'Reach Tirumala by road from Tirupati or take the scenic footpath' },
    { step: '03', title: 'Accommodation', desc: 'Book rooms through TTD online portal or avail free accommodations' },
    { step: '04', title: 'Darshan Guidelines', desc: 'Follow dress code, maintain decorum, and be prepared for queue system' },
  ];

  const quickTips = [
    { icon: Clock, text: 'Best time: 5 AM - 6 AM for early morning darshan', color: 'amber' },
    { icon: Ticket, text: 'Book special entry darshan tickets 10 days in advance', color: 'yellow' },
    { icon: Shield, text: 'Free locker facility available for luggage', color: 'orange' },
    { icon: Users, text: 'Senior citizen & differently-abled special entry', color: 'amber' },
  ];

  const transportOptions = [
    { mode: 'By Air', icon: '✈️', details: 'Tirupati International Airport (TIR) - 15 km from Tirumala', time: '1 hour drive' },
    { mode: 'By Rail', icon: '🚂', details: 'Tirupati Railway Station - Well connected to major cities', time: 'Regular buses available' },
    { mode: 'By Road', icon: '🚌', details: 'APSRTC buses from Tirupati to Tirumala every 15 minutes', time: '45 minutes journey' },
    { mode: 'By Foot', icon: '🚶', details: 'Sacred footpath from Alipiri (9 km) or Srivari Mettu (2.5 km)', time: '3-4 hours trek' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <div className="relative">
                <Navigation className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <Navigation className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('howToVisit.title') || 'How to Visit'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('howToVisit.subtitle') || 'Complete guide for your sacred pilgrimage to Tirupati Balaji'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="how-to-visit" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Quick Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: '24/7', label: 'Temple Hours', icon: Clock, color: 'amber' },
                { number: '365', label: 'Days Open', icon: CalendarDays, color: 'yellow' },
                { number: '50K+', label: 'Daily Visitors', icon: Users, color: 'orange' },
                { number: '₹300', label: 'Special Entry', icon: Ticket, color: 'amber' },
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

            {/* Journey Steps */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display text-gray-800 mb-3">Your Sacred Journey</h2>
                <p className="text-gray-600">Follow these steps for a blessed pilgrimage experience</p>
              </div>
              
              <div className="space-y-8">
                {journeySteps.map((step, i) => (
                  <div
                    key={i}
                    ref={el => stepsRef.current[i] = el}
                    className="group opacity-0"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                        flex items-center justify-center shadow-lg transform 
                                        group-hover:scale-110 transition-all duration-300">
                            <span className="text-white text-2xl font-bold">{step.step}</span>
                          </div>
                          {i < journeySteps.length - 1 && (
                            <div className="hidden md:block absolute left-1/2 top-20 w-0.5 h-16 
                                          bg-gradient-to-b from-amber-400 to-transparent" />
                          )}
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="relative group/card">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                        rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-300 blur" />
                          <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                                        rounded-2xl p-6 border border-amber-200/50 shadow-lg
                                        hover:shadow-xl transition-all duration-300">
                            <h3 className="font-heading text-xl text-gray-800 mb-3 group-hover/card:text-amber-600 
                                         transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm font-body leading-relaxed">
                              {step.desc}
                            </p>
                            
                            {/* Decorative Elements */}
                            <div className="mt-4 flex items-center gap-2">
                              <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                              <ArrowRight size={14} className="text-amber-400 opacity-0 group-hover/card:opacity-100 transition-all duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display text-gray-800 mb-3">Quick Tips</h2>
                <p className="text-gray-600">Essential information for your visit</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickTips.map((tip, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 
                             shadow-lg hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 border border-amber-200/50"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${tip.color}-100 
                                  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <tip.icon className={`w-6 h-6 text-${tip.color}-600`} />
                    </div>
                    <p className="text-gray-700 text-sm font-body leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transport Options */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display text-gray-800 mb-3">Transportation Options</h2>
                <p className="text-gray-600">Choose the best way to reach the sacred temple</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {transportOptions.map((transport, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-gradient-to-br from-white to-amber-50 
                             rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 border border-amber-200/50"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 
                                  rounded-bl-full transition-all duration-300 group-hover:scale-150" />
                    
                    <div className="relative">
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                        {transport.icon}
                      </div>
                      <h3 className="font-heading text-lg text-gray-800 mb-2">{transport.mode}</h3>
                      <p className="text-gray-600 text-xs font-body mb-2">{transport.details}</p>
                      <div className="flex items-center gap-2 text-xs text-amber-600">
                        <Clock size={12} />
                        <span>{transport.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation Section */}
            <div className="bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-900 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Hotel className="text-amber-400" size={24} />
                  <h3 className="text-white text-3xl font-display">Accommodation Guide</h3>
                  <Hotel className="text-amber-400" size={24} />
                </div>
                <p className="text-amber-200">Comfortable stays for pilgrims of all budgets</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { type: 'TTD Rooms', price: '₹50 - ₹500', features: ['Budget-friendly', 'Near Temple', 'Online Booking'] },
                  { type: 'Private Hotels', price: '₹1000 - ₹5000', features: ['AC/Non-AC', '24/7 Service', 'Restaurant'] },
                  { type: 'Free Accommodation', price: 'Free', features: ['Matrushri Complex', 'First-come basis', 'Basic amenities'] },
                ].map((accom, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 
                                          hover:bg-white/20 transition-all duration-300 
                                          transform hover:-translate-y-1">
                    <div className="text-amber-400 text-xl font-bold mb-2">{accom.type}</div>
                    <div className="text-yellow-300 text-sm mb-3">{accom.price}</div>
                    <div className="space-y-2">
                      {accom.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-amber-200/80 text-sm">
                          <CheckCircle2 size={12} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Booking Note */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-amber-300 text-sm">
                  <CalendarDays size={14} />
                  <span>Book accommodation online through TTD website or app</span>
                  <CalendarDays size={14} />
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
        
        @keyframes step-reveal {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        .animate-step-reveal {
          animation: step-reveal 0.6s ease-out forwards;
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

export default HowToVisit;
