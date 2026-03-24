import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Building2, Droplets, Flower2, Landmark, Compass, Gem, Waves } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const PLACE_ICONS = ['🕌', '🌊', '🏞️', '🌺', '💦', '🏛️', '⛰️', '🕉️'];
const PLACE_COLORS = [
  'from-amber-500/10 to-yellow-500/10',
  'from-blue-500/10 to-cyan-500/10',
  'from-emerald-500/10 to-teal-500/10',
  'from-pink-500/10 to-rose-500/10',
  'from-indigo-500/10 to-purple-500/10',
  'from-orange-500/10 to-amber-500/10',
  'from-green-500/10 to-emerald-500/10',
  'from-red-500/10 to-orange-500/10',
];

const HolyPlaces = () => {
  const { t } = useTranslation();
  const places = t('holyPlaces.places', { returnObjects: true });
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
  }, [places]);

  const holyPlaces = places || [
    { name: 'Sri Venkateswara Temple', desc: 'Main temple complex atop Tirumala hills', location: 'Tirumala' },
    { name: 'Pushkarini Theertham', desc: 'Sacred temple tank with divine waters', location: 'Inside Temple' },
    { name: 'Akasa Ganga', desc: 'Holy waterfall where sacred rituals are performed', location: 'Tirumala Hills' },
    { name: 'Papavinasanam Dam', desc: 'Sacred reservoir for ritual purification', location: 'Tirumala' },
    { name: 'Srivari Padalu', desc: 'Holy footprints of Lord Venkateswara', location: 'Narayanagiri' },
    { name: 'Vaikuntam Queue Complex', desc: 'Divine pathway for darshan', location: 'Tirumala' },
    { name: 'Silathoranam', desc: 'Natural rock arch formation', location: 'Tirumala' },
    { name: 'Chakrateertham', desc: 'Sacred pond with lotus flowers', location: 'Tirumala' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <div className="relative">
                <MapPin className="text-amber-500 animate-bounce" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <MapPin className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('holyPlaces.title') || 'Sacred Pilgrimage Sites'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('holyPlaces.subtitle') || 'Explore the divine locations around Tirupati Balaji Temple'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Holy Places Section */}
      <section id="holy-places" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Key Features Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[
                { icon: Building2, label: 'Ancient Temples', value: '8+', color: 'amber' },
                { icon: Waves, label: 'Sacred Water Bodies', value: '5', color: 'blue' },
                { icon: Flower2, label: 'Holy Groves', value: '7', color: 'pink' },
                { icon: Landmark, label: 'Historical Sites', value: '12+', color: 'orange' },
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
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Sacred Places Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {holyPlaces.map((place, i) => (
                <div
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  className="group opacity-0"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white to-amber-50 
                                rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                                transition-all duration-300 transform hover:-translate-y-3
                                border border-amber-200/50">
                    
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                         style={{ padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }} />
                    
                    <div className="relative p-6">
                      {/* Icon with Background */}
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 bg-gradient-to-br ${PLACE_COLORS[i % PLACE_COLORS.length]} 
                                      rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                        <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                      flex items-center justify-center transform group-hover:scale-110 
                                      transition-all duration-300 shadow-lg">
                          <span className="text-3xl">{PLACE_ICONS[i % PLACE_ICONS.length]}</span>
                        </div>
                        
                        {/* Floating Decoration */}
                        <div className="absolute -top-2 -right-2">
                          <div className="w-6 h-6 rounded-full bg-amber-400/20 animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Place Name */}
                      <h3 className="font-heading text-lg text-gray-800 mb-2 group-hover:text-amber-600 
                                   transition-colors duration-300">
                        {place.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm font-body leading-relaxed mb-3">
                        {place.desc}
                      </p>
                      
                      {/* Location Badge */}
                      {place.location && (
                        <div className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 
                                      px-2 py-1 rounded-full">
                          <MapPin size={10} />
                          <span>{place.location}</span>
                        </div>
                      )}
                      
                      {/* Decorative Line */}
                      <div className="mt-4 w-10 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 
                                    group-hover:w-full transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Sacred Journey Section */}
            <div className="mt-20 bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-900 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Compass className="text-amber-400" size={24} />
                  <h3 className="text-white text-3xl font-display">Sacred Journey Map</h3>
                  <Compass className="text-amber-400" size={24} />
                </div>
                <p className="text-amber-200">Plan your pilgrimage through these holy destinations</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    day: 'Day 1', 
                    title: 'Arrival & Purification', 
                    places: ['Pushkarini Theertham', 'Akasa Ganga'],
                    icon: Droplets 
                  },
                  { 
                    day: 'Day 2', 
                    title: 'Main Temple Darshan', 
                    places: ['Sri Venkateswara Temple', 'Vaikuntam Complex'],
                    icon: Building2 
                  },
                  { 
                    day: 'Day 3', 
                    title: 'Sacred Exploration', 
                    places: ['Srivari Padalu', 'Silathoranam', 'Papavinasanam'],
                    icon: Gem 
                  },
                ].map((journey, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 
                                          hover:bg-white/20 transition-all duration-300 
                                          transform hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                        <journey.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-amber-400 text-sm font-bold">{journey.day}</div>
                        <h4 className="text-white font-semibold">{journey.title}</h4>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {journey.places.map((place, i) => (
                        <div key={i} className="flex items-center gap-2 text-amber-200/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span>{place}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Spiritual Note */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-amber-300 text-sm">
                  <Droplets size={14} />
                  <span>Each site holds divine significance in the sacred texts</span>
                  <Droplets size={14} />
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
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
        
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
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

export default HolyPlaces;
