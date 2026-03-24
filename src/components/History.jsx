import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Scroll, Clock, Mountain, Landmark, Award, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const History = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();
  
  const statsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-count-up');
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const historicalFacts = [
    { 
      icon: Clock, 
      title: 'Ancient Origins', 
      desc: 'Dating back to ancient scriptures and Puranas',
      color: 'from-amber-500/20 to-yellow-500/20'
    },
    { 
      icon: Mountain, 
      title: 'Saptagiri Hills', 
      desc: 'Seven sacred peaks of spiritual significance',
      color: 'from-orange-500/20 to-amber-500/20'
    },
    { 
      icon: Landmark, 
      title: 'Continuous Worship', 
      desc: 'Unbroken tradition for over 2,000 years',
      color: 'from-yellow-500/20 to-amber-500/20'
    },
    { 
      icon: Award, 
      title: 'Rich Heritage', 
      desc: 'Patronage from numerous dynasties',
      color: 'from-amber-500/20 to-orange-500/20'
    }
  ];

  const timelineEvents = [
    { year: 'Ancient', event: 'Mention in Puranas and Epics', icon: Scroll },
    { year: '9th Century', event: 'Alvar Saints & Tamil Hymns', icon: Sparkles },
    { year: '12th Century', event: 'Ramanujacharya\'s Contributions', icon: Landmark },
    { year: '16th Century', event: 'Golden Age under Vijayanagara', icon: Award },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-yellow-900/10" />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <Scroll className="text-amber-600 animate-pulse" size={24} />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 mb-6 animate-slide-up">
              Sacred History
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              Journey through millennia of divine tradition and spiritual legacy
            </p>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-3xl animate-float animation-delay-1000" />
      </section>

      {/* Main Content */}
      <section id="history" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: '2000+', label: 'Years of History', icon: Clock },
                { number: '7', label: 'Sacred Hills', icon: Mountain },
                { number: '365', label: 'Days of Worship', icon: Sparkles },
                { number: 'Millions', label: 'Devotees Yearly', icon: Landmark },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 
                           shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
                           border border-amber-200/30"
                >
                  <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div 
                    ref={statsRef}
                    className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                             bg-gradient-to-r from-amber-700 to-yellow-600 mb-2"
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Main Content */}
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl opacity-0 
                                group-hover:opacity-100 transition-all duration-300 blur-xl" />
                  <div className="relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 
                                  border border-amber-200 shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 
                                    flex items-center justify-center shadow-lg">
                        <Scroll className="text-white" size={20} />
                      </div>
                      <h3 className="text-2xl font-display text-gray-800">The Eternal Legacy</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-body text-base md:text-lg mb-6">
                      {t('history.content')}
                    </p>
                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border-l-4 border-amber-500">
                      <p className="text-gray-700 italic font-body">
                        "The temple of Lord Venkateswara stands as a testament to unwavering faith and devotion through ages."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Historical Facts Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {historicalFacts.map((fact, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-5 border border-amber-200 shadow-md
                               hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                               hover:border-amber-300"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${fact.color} 
                                    flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <fact.icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">{fact.title}</h4>
                      <p className="text-gray-600 text-sm font-body">{fact.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline & Features */}
              <div className="space-y-8">
                {/* Timeline */}
                <div className="bg-gradient-to-br from-gray-900 to-amber-900 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-white text-2xl font-display mb-8 flex items-center gap-3">
                    <Clock className="text-amber-400" />
                    Historical Timeline
                  </h3>
                  <div className="space-y-6">
                    {timelineEvents.map((event, index) => (
                      <div key={index} className="relative pl-8 group">
                        <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-amber-400 
                                      group-hover:scale-150 transition-transform duration-300" />
                        {index < timelineEvents.length - 1 && (
                          <div className="absolute left-[7px] top-4 w-0.5 h-full bg-amber-400/30" />
                        )}
                        <div className="flex items-center gap-3 mb-2">
                          <event.icon className="w-4 h-4 text-amber-400" />
                          <span className="text-amber-400 font-bold text-sm">{event.year}</span>
                        </div>
                        <p className="text-white/80 text-sm font-body">{event.event}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sacred Location */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl 
                                opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                  <div className="relative bg-gradient-to-br from-amber-900 to-yellow-900 rounded-2xl p-8 
                                  text-center shadow-xl">
                    <div className="text-7xl mb-6 animate-float">🏛️</div>
                    <div className="font-heading text-white text-2xl mb-2">Tirumala</div>
                    <div className="text-amber-300 text-sm font-body mb-6">Sacred Abode of Lord Venkateswara</div>
                    <div className="space-y-3">
                      {[
                        { name: 'Saptagiri — Seven Holy Peaks', desc: 'Symbolizing spiritual ascent' },
                        { name: 'Kali Yuga Avatar of Vishnu', desc: 'The Preserver in modern age' },
                        { name: 'Oldest Living Temple Tradition', desc: 'Continuous worship for millennia' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 text-white/80 text-sm">
                          <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                          <div className="text-left">
                            <span className="font-semibold text-white">{item.name}</span>
                            <p className="text-amber-200/70 text-xs mt-1">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="mt-8 pt-6 border-t border-amber-500/30">
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" 
                               style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
