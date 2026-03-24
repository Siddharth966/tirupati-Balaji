import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Train, CircleDollarSign, CalendarDays, Hotel, ShoppingBag, Bus, Compass, Clock, CheckCircle2, TrendingUp, Sun } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const TripPlanning = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const itinerary = t('tripPlanning.itinerary', { returnObjects: true });
  const budget = t('tripPlanning.budget', { returnObjects: true });
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-timeline-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [itinerary]);

  const tips = [
    { icon: Clock, text: 'Start early morning to avoid crowds', color: 'amber' },
    { icon: Sun, text: 'Best season: September to March', color: 'yellow' },
    { icon: Hotel, text: 'Book accommodation 2-3 months in advance', color: 'orange' },
    { icon: ShoppingBag, text: 'Carry essentials: water, snacks, umbrella', color: 'amber' },
  ];

  const travelEssentials = [
    'ID Proof (Aadhar/PAN/Passport)',
    'Comfortable walking shoes',
    'Light cotton clothing',
    'Water bottle',
    'Umbrella/raincoat',
    'Medications if any',
  ];

  if (!Array.isArray(itinerary)) return null;

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
                <Train className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <Train className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('tripPlanning.title') || 'Plan Your Sacred Journey'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('tripPlanning.subtitle') || 'Complete itinerary and budget planning for your pilgrimage'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="trip-planning" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Quick Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: '2-3', label: 'Recommended Days', icon: CalendarDays, color: 'amber' },
                { number: '₹3000-5000', label: 'Average Budget', icon: CircleDollarSign, color: 'yellow' },
                { number: '24/7', label: 'Temple Hours', icon: Clock, color: 'orange' },
                { number: '45 mins', label: 'Travel Time', icon: Bus, color: 'amber' },
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
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-amber-700 to-yellow-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Itinerary Timeline */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-2xl font-display text-gray-800 mb-2 flex items-center gap-2">
                    <Compass className="text-amber-500" size={24} />
                    Suggested Itinerary
                  </h2>
                  <p className="text-gray-600 text-sm">A well-planned journey for a blessed experience</p>
                </div>
                
                <div className="space-y-6">
                  {itinerary.map((item, i) => (
                    <div
                      key={i}
                      ref={el => timelineRef.current[i] = el}
                      className="group opacity-0 relative"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="relative pl-12 pb-6 last:pb-0">
                        {/* Timeline Connector */}
                        {i < itinerary.length - 1 && (
                          <div className="absolute left-[19px] top-10 bottom-0 w-0.5 
                                        bg-gradient-to-b from-amber-400 to-transparent" />
                        )}
                        
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-1">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 
                                          flex items-center justify-center shadow-lg transform 
                                          group-hover:scale-110 transition-all duration-300">
                              <span className="text-white text-xs font-bold">{i + 1}</span>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-20" />
                          </div>
                        </div>
                        
                        {/* Content Card */}
                        <div className="relative group/card">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                        rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-300 blur" />
                          <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                                        rounded-2xl p-6 border border-amber-200/50 shadow-lg
                                        hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <CalendarDays size={14} className="text-amber-500" />
                                <span className="text-amber-600 text-xs font-semibold uppercase tracking-wider">
                                  {item.day}
                                </span>
                              </div>
                              {i === 0 && (
                                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                                  Recommended
                                </span>
                              )}
                            </div>
                            <p className="text-gray-700 text-base devanagari leading-relaxed">
                              {item.event}
                            </p>
                            
                            {/* Decorative Line */}
                            <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent 
                                          group-hover/card:w-24 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget Section */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 space-y-8">
                  {/* Budget Breakdown */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                  rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                    <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                                  rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                      
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                      flex items-center justify-center shadow-lg">
                          <CircleDollarSign className="text-white" size={20} />
                        </div>
                        <h3 className="text-gray-800 font-heading text-2xl">
                          {t('tripPlanning.budgetTitle') || 'Budget Estimate'}
                        </h3>
                      </div>
                      
                      <div className="space-y-4">
                        {budget.map((item, i) => (
                          <div 
                            key={i} 
                            className="flex justify-between items-center py-3 border-b border-amber-200/30 
                                     hover:bg-amber-50/30 px-3 -mx-3 rounded-lg transition-all duration-300"
                          >
                            <span className="text-gray-700 text-sm devanagari font-medium">{item.item}</span>
                            <span className="text-amber-700 font-display font-bold text-lg">{item.cost}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Total Calculation */}
                      <div className="mt-6 pt-4 border-t-2 border-amber-300/50">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 font-semibold">Estimated Total</span>
                          <span className="text-amber-700 font-display font-bold text-xl">
                            ₹{budget.reduce((total, item) => {
                              const cost = parseInt(item.cost.replace(/[^0-9]/g, ''));
                              return total + (isNaN(cost) ? 0 : cost);
                            }, 0).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-100 to-yellow-100 
                                    border border-amber-200 text-gray-700 text-xs italic font-body text-center">
                        <TrendingUp size={12} className="inline mr-1 text-amber-600" />
                        {t('tripPlanning.budgetNote') || 'Prices are approximate and may vary based on season and availability'}
                      </div>
                    </div>
                  </div>

                  {/* Quick Tips */}
                  <div className="bg-gradient-to-br from-amber-900 to-yellow-900 rounded-2xl p-6 shadow-xl">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-amber-400" />
                      Quick Tips
                    </h4>
                    <div className="space-y-3">
                      {tips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <tip.icon size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-amber-200 text-xs">{tip.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Essentials Checklist */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
                    <h4 className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
                      <ShoppingBag size={18} className="text-amber-500" />
                      Travel Essentials
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {travelEssentials.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="text-gray-600 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Time to Visit Section */}
            <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 border border-amber-200/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display text-gray-800 mb-2">Best Time to Visit</h3>
                <p className="text-gray-600 text-sm">Plan your pilgrimage during these ideal periods</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { season: 'Winter (Oct-Feb)', weather: 'Pleasant & Cool', advantage: 'Peak season, ideal for travel', temp: '15-25°C' },
                  { season: 'Summer (Mar-Jun)', weather: 'Warm', advantage: 'Less crowd, cheaper rates', temp: '25-35°C' },
                  { season: 'Monsoon (Jul-Sep)', weather: 'Rainy & Humid', advantage: 'Green landscapes, peaceful', temp: '20-30°C' },
                ].map((period, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-white/50 hover:bg-white transition-all duration-300">
                    <div className="text-amber-600 font-bold mb-2">{period.season}</div>
                    <div className="text-gray-700 text-sm mb-1">{period.weather}</div>
                    <div className="text-gray-600 text-xs">{period.temp}</div>
                    <div className="mt-2 text-xs text-amber-600">{period.advantage}</div>
                  </div>
                ))}
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
        
        @keyframes timeline-reveal {
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
        
        .animate-timeline-reveal {
          animation: timeline-reveal 0.6s ease-out forwards;
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

export default TripPlanning;
