import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, Users, Mountain, Clock, Gem, Heart, Sparkles, Landmark, Scroll } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const About = () => {
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

  const features = [
    { icon: Mountain, title: 'Ancient Temple', desc: 'One of the oldest and richest temples in the world', color: 'amber' },
    { icon: Users, title: 'Global Pilgrimage', desc: 'Millions of devotees visit annually from across the world', color: 'yellow' },
    { icon: Clock, title: 'Continuous Worship', desc: 'Unbroken tradition of worship for over 2,000 years', color: 'orange' },
    { icon: Gem, title: 'Sacred Architecture', desc: 'Magnificent Dravidian architecture with golden gopuram', color: 'amber' },
  ];

  const milestones = [
    { year: '9th Century', event: 'Alvar Saints & Divya Prabandham', icon: Scroll },
    { year: '12th Century', event: 'Ramanujacharya\'s Reforms', icon: Heart },
    { year: '15th Century', event: 'Golden Age under Vijayanagara', icon: Sparkles },
    { year: 'Present Day', event: 'World\'s Richest Temple', icon: Award },
  ];

  const statistics = [
    { number: '2000+', label: 'Years of History', icon: Clock },
    { number: '50K+', label: 'Daily Devotees', icon: Users },
    { number: '7', label: 'Sacred Peaks', icon: Mountain },
    { number: '₹50K Cr+', label: 'Temple Wealth', icon: Gem },
  ];

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
                <BookOpen className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <BookOpen className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('about.title') || 'Sacred Legacy of Tirupati'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('about.subtitle') || 'The Eternal Abode of Lord Venkateswara'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="about" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {statistics.map((stat, index) => (
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

            {/* Main Description */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                              rounded-2xl p-8 md:p-12 border border-amber-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                  flex items-center justify-center shadow-lg">
                      <Landmark className="text-white" size={20} />
                    </div>
                    <h3 className="text-gray-800 font-heading text-2xl">The Sacred Legacy</h3>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-body leading-relaxed">
                    {t('about.text') || 'The Sri Venkateswara Temple, also known as Tirupati Balaji Temple, is a renowned Vaishnavite temple situated in the hill town of Tirumala. Dedicated to Lord Venkateswara, an incarnation of Vishnu, this temple is considered one of the holiest pilgrimage sites in India. The temple has a rich history dating back to ancient times and is known for its unique traditions and rituals that have been preserved for centuries.'}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-6 pt-4 border-t border-amber-200/30">
                    <div className="flex items-center gap-2 text-xs text-amber-600">
                      <Sparkles size={12} />
                      <span>One of the 108 Divya Desams</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-6 
                             shadow-lg hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 border border-amber-200/50"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${feature.color}-100 
                                  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-gray-800 font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Timeline */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display text-gray-800 mb-3">Historical Timeline</h2>
                <p className="text-gray-600">Milestones in the temple's glorious history</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-amber-900 to-yellow-900 
                             rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 text-center"
                  >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 
                                    flex items-center justify-center shadow-lg">
                        <milestone.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="text-amber-400 text-2xl font-bold mb-2">{milestone.year}</div>
                    <p className="text-amber-200 text-sm">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Geography */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                              rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                  flex items-center justify-center shadow-lg">
                      <Mountain className="text-white" size={20} />
                    </div>
                    <h3 className="text-gray-800 font-heading text-2xl">The Seven Hills</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The temple is situated on the Seshachalam Hills, one of the seven peaks of Tirumala. 
                    These seven hills represent the seven hoods of Adishesha, the serpent on which Lord Vishnu rests.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Seshadri', 'Neeladri', 'Garudadri', 'Anjanadri', 'Vrushabhadri', 'Narayanadri', 'Venkatadri'].map((hill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{hill}</span>
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
                    <h3 className="text-white font-heading text-2xl">Spiritual Significance</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                      <p className="text-amber-200 text-sm">Believed to be the Kali Yuga Varada (the boon-giver of Kali Yuga)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                      <p className="text-amber-200 text-sm">One of the 108 Divya Desams (sacred Vishnu temples)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                      <p className="text-amber-200 text-sm">Mentioned in ancient scriptures including Puranas</p>
                    </div>
                  </div>
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
          animation: float 6s ease-in-out infinite;
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

export default About;
