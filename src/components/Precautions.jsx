import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, AlertCircle, Footprints, CloudRain, Sun, Users, Thermometer, Umbrella, Droplets, Heart, Clock, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Precautions = () => {
  const { t } = useTranslation();
  const list = t('precautions.list', { returnObjects: true });
  const { ref, isVisible } = useReveal();
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
  }, [list]);

  const categories = [
    { icon: Footprints, title: 'Physical Health', color: 'amber', description: 'Stay hydrated and wear comfortable footwear' },
    { icon: Sun, title: 'Weather Safety', color: 'yellow', description: 'Protect yourself from sun and rain' },
    { icon: Users, title: 'Crowd Management', color: 'orange', description: 'Follow queue systems and stay with group' },
    { icon: Heart, title: 'Medical Care', color: 'amber', description: 'Keep medications and emergency contacts handy' },
  ];

  const emergencyContacts = [
    { name: 'Medical Emergency', number: '108', icon: AlertCircle },
    { name: 'Temple Control Room', number: '0877-2277777', icon: MapPin },
    { name: 'Police Assistance', number: '100', icon: ShieldCheck },
    { name: 'Ambulance Service', number: '102', icon: Thermometer },
  ];

  const weatherTips = [
    { icon: Sun, text: 'Carry umbrella/cap for sun protection', color: 'yellow' },
    { icon: CloudRain, text: 'Raincoat during monsoon season', color: 'blue' },
    { icon: Droplets, text: 'Drink plenty of water to stay hydrated', color: 'cyan' },
    { icon: Clock, text: 'Avoid peak hours (10 AM - 2 PM) for darshan', color: 'amber' },
  ];

  const precautionsList = list || [
    'Wear comfortable cotton clothing and footwear',
    'Carry drinking water and stay hydrated',
    'Avoid carrying large bags and valuables',
    'Follow queue system and maintain discipline',
    'Keep elderly and children close in crowds',
    'Use designated restrooms and facilities',
    'Follow temple dress code and decorum',
    'Keep mobile phones switched off inside temple',
    'Avoid photography inside sanctum sanctorum',
    'Carry necessary medications if required',
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
                <ShieldCheck className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <ShieldCheck className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('precautions.title') || 'Safety Guidelines'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('precautions.subtitle') || 'Important precautions for a safe and blessed pilgrimage'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="precautions" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Quick Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: '24/7', label: 'Medical Support', icon: AlertCircle, color: 'amber' },
                { number: '100+', label: 'Security Cameras', icon: ShieldCheck, color: 'yellow' },
                { number: '50+', label: 'First Aid Centers', icon: Thermometer, color: 'orange' },
                { number: '10K+', label: 'Staff Members', icon: Users, color: 'amber' },
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

            {/* Categories Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-6 
                           shadow-lg hover:shadow-2xl transition-all duration-300 
                           transform hover:-translate-y-2 border border-amber-200/50 text-center"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${category.color}-100 
                                flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-7 h-7 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-gray-800 font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>

            {/* Precautions Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {precautionsList.map((item, i) => (
                <div
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  className="group opacity-0"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                                  rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                    <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                                  rounded-2xl p-5 border border-amber-200/50 shadow-lg
                                  hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 
                                        flex items-center justify-center shadow-md">
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm font-body leading-relaxed flex-1">
                          {item}
                        </p>
                      </div>
                      
                      {/* Decorative Line */}
                      <div className="mt-3 ml-12 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent 
                                    group-hover:w-16 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Weather Tips Section */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                              rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                  flex items-center justify-center shadow-lg">
                      <Umbrella className="text-white" size={20} />
                    </div>
                    <h3 className="text-gray-800 font-heading text-2xl">Weather Advisory</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {weatherTips.map((tip, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50">
                        <tip.icon className={`w-5 h-5 text-${tip.color}-500 flex-shrink-0`} />
                        <span className="text-gray-700 text-xs">{tip.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-amber-900 to-yellow-900 
                              rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <AlertCircle className="text-amber-400" size={20} />
                    </div>
                    <h3 className="text-white font-heading text-2xl">Emergency Contacts</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {emergencyContacts.map((contact, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl 
                                                  bg-white/5 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <contact.icon className="w-4 h-4 text-amber-400" />
                          <span className="text-amber-200 text-sm">{contact.name}</span>
                        </div>
                        <span className="text-white font-mono text-sm font-bold">{contact.number}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-amber-500/30 text-center">
                    <p className="text-amber-300 text-xs">
                      For emergencies, contact the nearest help desk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-amber-800 font-semibold mb-1">Important Reminder</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Your safety is our priority. Please cooperate with temple staff and security personnel. 
                    Follow all guidelines for a peaceful and blessed darshan experience.
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

export default Precautions;
