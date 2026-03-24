import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Star, Feather, Heart, Sun, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Mountain, Clock, Users } from 'lucide-react';

const WONDER_ICONS = ['🚩', '🪔', '🌸', '✨', '🌀', '❄️', '🌊', '🕉️', '🔱'];

const Wonders = () => {
  const { t } = useTranslation();
  const wonderList = t('wonders.list', { returnObjects: true });
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
  }, [wonderList]);

  const wonders = wonderList || [
    { title: 'Sacred Laddu Prasadam', desc: 'Divine offering blessed by Lord Venkateswara' },
    { title: 'Venkateswara Suprabhatam', desc: 'Sacred awakening hymn at dawn' },
    { title: 'Tirumala Laddu', desc: 'World-famous prasadam with unique taste' },
    { title: 'Srivari Padalu', desc: 'Holy footprints atop Tirumala hills' },
    { title: 'Golden Temple', desc: 'Majestic gopuram covered in gold' },
    { title: 'Pushkarini Theertham', desc: 'Sacred temple tank with holy waters' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl animate-float animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <div className="relative">
                <Sparkles className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <Sparkles className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('wonders.title') || 'Divine Wonders'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('wonders.subtitle') || 'Experience the miraculous phenomena of Tirupati Balaji Temple'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Wonders Section */}
      <section id="wonders" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            {/* Stats/Highlights Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: '7', label: 'Sacred Hills', icon: Mountain, color: 'amber' },
                { number: '1000+', label: 'Years Old', icon: Clock, color: 'yellow' },
                { number: '24/7', label: 'Divine Worship', icon: Sun, color: 'orange' },
                { number: '50K+', label: 'Daily Visitors', icon: Users, color: 'amber' },
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

            {/* Wonders Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {wonders.map((wonder, i) => (
                <div
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  className="group opacity-0"
                  style={{ animationDelay: `${i * 0.1}s` }}
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
                    
                    <div className="relative p-8">
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 
                                      rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                      flex items-center justify-center transform group-hover:scale-110 
                                      transition-all duration-300 shadow-lg">
                          <span className="text-4xl">{WONDER_ICONS[i % WONDER_ICONS.length]}</span>
                        </div>
                        
                        {/* Floating Particles */}
                        <div className="absolute -top-2 -right-2">
                          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-heading text-xl text-gray-800 mb-3 group-hover:text-amber-600 
                                   transition-colors duration-300">
                        {wonder.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm font-body leading-relaxed">
                        {wonder.desc}
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 
                                    group-hover:w-full transition-all duration-300" />
                      
                      {/* Hidden Detail - Appears on Hover */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 text-xs text-amber-600">
                          <Eye size={12} />
                          <span>Discover more about this divine wonder</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="text-8xl transform translate-x-4 translate-y-4">
                        {WONDER_ICONS[i % WONDER_ICONS.length]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Divine Features */}
            <div className="mt-20 bg-gradient-to-r from-amber-900 to-yellow-900 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-white text-3xl font-display mb-4">Sacred Experiences</h3>
                <p className="text-amber-200">Discover the miraculous phenomena that make this temple unique</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Star, title: 'Miraculous Laddu', desc: 'Divine prasadam with eternal blessings' },
                  { icon: Feather, title: 'Suprabhatam', desc: 'Sacred awakening ritual at dawn' },
                  { icon: Heart, title: 'Divine Darshan', desc: 'Vision of Lord Venkateswara' },
                ].map((feature, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 
                                  flex items-center justify-center group-hover:bg-white/20 
                                  transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-amber-200/70 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add styles to your global CSS */}
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
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
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
      `}</style>
    </div>
  );
};

// Import missing icons


export default Wonders;
