import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { UtensilsCrossed, Heart, Award, Clock, Users, Gift, Sparkles, Coffee, Soup, Flower2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Prasadam = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-counter');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat);
    });

    return () => observer.disconnect();
  }, []);

  const prasadamItems = [
    { name: 'Laddu Prasadam', description: 'World-famous sweet offering', icon: Award, special: 'Most Sacred' },
    { name: 'Vada', description: 'Savory lentil donut', icon: Coffee, special: 'Daily Offering' },
    { name: 'Pulihora', description: 'Tamarind rice', icon: Soup, special: 'Traditional' },
    { name: 'Daddojanam', description: 'Curd rice', icon: Heart, special: 'Cooling Prasadam' },
    { name: 'Chakkera Pongali', description: 'Sweet rice pudding', icon: Gift, special: 'Festive Special' },
  ];

  const timings = [
    { time: '4:00 AM - 5:00 AM', meal: 'Morning Prasadam', icon: Sparkles },
    { time: '11:00 AM - 2:00 PM', meal: 'Lunch Prasadam', icon: UtensilsCrossed },
    { time: '6:00 PM - 8:00 PM', meal: 'Evening Prasadam', icon: Coffee },
  ];

  const stats = [
    { number: '50,000+', label: 'Devotees Served Daily', icon: Users },
    { number: '24/7', label: 'Prasadam Availability', icon: Clock },
    { number: '100+', label: 'Years of Tradition', icon: Award },
    { number: 'Free', label: 'For All Devotees', icon: Heart },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl animate-pulse" />
          
          {/* Decorative Food Elements */}
          <div className="absolute top-40 right-20 text-6xl opacity-5 animate-float">🍛</div>
          <div className="absolute bottom-40 left-20 text-6xl opacity-5 animate-float animation-delay-1000">🍚</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <div className="relative">
                <UtensilsCrossed className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <UtensilsCrossed className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('prasadam.title') || 'Divine Prasadam'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('prasadam.subtitle') || 'Sacred offerings blessed by Lord Venkateswara'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="prasadam" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative text-center p-6 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 
                           shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                           border border-amber-200/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 
                                group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-300" />
                  <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div 
                    ref={el => statsRef.current[index] = el}
                    className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
                              bg-gradient-to-r from-amber-700 to-yellow-600 mb-2"
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
              <div className="lg:col-span-3">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                  <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                                rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                    flex items-center justify-center shadow-lg">
                        <UtensilsCrossed className="text-white" size={20} />
                      </div>
                      <h3 className="text-gray-800 font-heading text-2xl">The Sacred Meal</h3>
                    </div>
                    
                    <p className="text-gray-700 text-base md:text-lg font-body leading-relaxed mb-6">
                      {t('prasadam.text') || 'The sacred prasadam offered at Tirupati Balaji Temple is considered highly auspicious and blessed by Lord Venkateswara. It is prepared with utmost devotion and purity, following ancient traditions.'}
                    </p>
                    
                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-4 border-l-4 border-amber-500">
                      <p className="text-gray-700 italic text-sm">
                        "The prasadam is not just food, but a divine blessing that carries the grace of Lord Venkateswara"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                  <div className="relative bg-gradient-to-br from-amber-900 to-yellow-900 
                                rounded-2xl p-8 text-center shadow-xl">
                    <div className="text-8xl mb-6 animate-float">🍛</div>
                    <div className="text-white text-2xl font-display mb-2">Free for All</div>
                    <p className="text-amber-300 text-sm mb-6">Lakhs of devotees served daily</p>
                    
                    <div className="space-y-3">
                      {prasadamItems.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white/10 rounded-lg p-3 
                                                  hover:bg-white/20 transition-all duration-300">
                          <div className="flex items-center gap-2">
                            <item.icon className="w-4 h-4 text-amber-400" />
                            <span className="text-white text-sm">{item.name}</span>
                          </div>
                          <span className="text-amber-400 text-xs">{item.special}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-amber-500/30">
                      <div className="flex items-center justify-center gap-2 text-amber-300 text-xs">
                        <Sparkles size={12} />
                        <span>Divinely blessed offerings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prasadam Items Grid */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display text-gray-800 mb-3">Sacred Offerings</h2>
                <p className="text-gray-600">Varieties of prasadam available at the temple</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {prasadamItems.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-6 
                             shadow-lg hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 border border-amber-200/50 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                  flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-gray-800 font-semibold mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-xs mb-2">{item.description}</p>
                    <span className="inline-block text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                      {item.special}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                              rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                  flex items-center justify-center shadow-lg">
                      <Clock className="text-white" size={20} />
                    </div>
                    <h3 className="text-gray-800 font-heading text-2xl">Prasadam Timings</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {timings.map((timing, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl 
                                                  bg-amber-50/50 hover:bg-amber-100/50 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <timing.icon className="w-5 h-5 text-amber-600" />
                          <span className="text-gray-700 font-medium">{timing.meal}</span>
                        </div>
                        <span className="text-amber-700 text-sm font-mono">{timing.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-amber-900 to-yellow-900 
                              rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Heart className="text-amber-400" size={20} />
                    </div>
                    <h3 className="text-white font-heading text-2xl">Significance</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                      <p className="text-amber-200 text-sm">Partaking prasadam is considered equivalent to a sacred ritual</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                      <p className="text-amber-200 text-sm">Believed to bring prosperity and remove obstacles</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                      <p className="text-amber-200 text-sm">Prepared with pure ghee and natural ingredients</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                      <p className="text-amber-200 text-sm">Blessed by Lord Venkateswara before distribution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50">
              <div className="flex items-start gap-3">
                <Flower2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h4 className="text-amber-800 font-semibold mb-2">Did You Know?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The Tirupati Laddu is the world's most famous prasadam and has been awarded the 
                    Geographical Indication (GI) tag, recognizing its unique origin and traditional preparation method.
                  </p>
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
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes counter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-counter {
          animation: counter 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
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

export default Prasadam;
