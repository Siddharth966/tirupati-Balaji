import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Ticket, Clock, Users, Smartphone, CreditCard, Globe, CheckCircle2, Shield, ExternalLink, Info } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Booking = () => {
  const { t } = useTranslation();
  const info = t('booking.info', { returnObjects: true });
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
  }, [info]);

  const bookingSteps = [
    { icon: Globe, title: 'Visit Official Website', desc: 'Go to TTD official booking portal', color: 'amber' },
    { icon: Calendar, title: 'Select Date & Time', desc: 'Choose preferred darshan slot', color: 'yellow' },
    { icon: Users, title: 'Enter Devotee Details', desc: 'Provide ID proof information', color: 'orange' },
    { icon: CreditCard, title: 'Make Payment', desc: 'Secure online payment', color: 'amber' },
    { icon: Ticket, title: 'Download E-Ticket', desc: 'Save ticket for darshan', color: 'yellow' },
  ];

  const ticketTypes = [
    { name: 'Special Entry Darshan', price: '₹300', duration: 'Quick Darshan', badge: 'Most Popular' },
    { name: 'Rs. 300 Special Entry', price: '₹300', duration: '2-3 Hours', badge: 'Recommended' },
    { name: 'Free Darshan', price: 'Free', duration: '4-6 Hours', badge: 'Regular' },
    { name: 'Senior Citizen Darshan', price: 'Free', duration: 'Priority Queue', badge: 'Special' },
  ];

  const importantInfo = [
    { icon: Clock, text: 'Book tickets 10-30 days in advance', color: 'amber' },
    { icon: Smartphone, text: 'E-tickets accepted on mobile', color: 'yellow' },
    { icon: Shield, text: 'Carry original ID proof', color: 'orange' },
    { icon: CheckCircle2, text: 'Cancel up to 24 hours before', color: 'amber' },
  ];

  const bookingInfo = info || [
    { label: 'Booking Window', value: '10-30 days in advance' },
    { label: 'Special Entry Cost', value: '₹300 per person' },
    { label: 'Free Darshan', value: 'Available daily' },
    { label: 'Max Tickets', value: '5 per ID proof' },
    { label: 'Refund Policy', value: '24 hours cancellation' },
    { label: 'Official Website', value: 'tirupatibalaji.ap.gov.in' },
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
                <Calendar className="text-amber-500 animate-pulse" size={24} />
                <div className="absolute inset-0 animate-ping-slow">
                  <Calendar className="text-amber-400" size={24} />
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 
                           mb-6 animate-slide-up">
              {t('booking.title') || 'Book Your Darshan'}
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
              {t('booking.subtitle') || 'Reserve your slot for a divine experience at Tirupati Balaji Temple'}
            </p>
            
            <div className="flex justify-center mt-8 animate-slide-up animation-delay-400">
              <div className="gold-divider w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="booking" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Quick Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: '10-30', label: 'Days Advance Booking', icon: Calendar, color: 'amber' },
                { number: '₹300', label: 'Special Entry Ticket', icon: Ticket, color: 'yellow' },
                { number: '5', label: 'Tickets per ID', icon: Users, color: 'orange' },
                { number: '24/7', label: 'Online Booking', icon: Smartphone, color: 'amber' },
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

            {/* Booking Information Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {bookingInfo.map((item, i) => (
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
                                  rounded-2xl p-6 border border-amber-200/50 shadow-lg
                                  hover:shadow-xl transition-all duration-300 h-full">
                      <div className="text-amber-600 text-xs tracking-widest uppercase font-body mb-2">
                        {item.label}
                      </div>
                      <div className="text-gray-800 font-heading text-lg devanagari font-semibold">
                        {item.value}
                      </div>
                      
                      {/* Decorative Line */}
                      <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent 
                                    group-hover:w-24 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ticket Types Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display text-gray-800 mb-3">Ticket Options</h2>
                <p className="text-gray-600">Choose the best option for your visit</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ticketTypes.map((ticket, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-6 
                             shadow-lg hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 border border-amber-200/50 text-center relative"
                  >
                    {ticket.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                          {ticket.badge}
                        </span>
                      </div>
                    )}
                    <div className="text-3xl font-bold text-transparent bg-clip-text 
                                  bg-gradient-to-r from-amber-700 to-yellow-600 mb-2">
                      {ticket.price}
                    </div>
                    <h3 className="text-gray-800 font-semibold mb-2">{ticket.name}</h3>
                    <p className="text-gray-600 text-sm">{ticket.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {/* Booking Steps */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-white to-amber-50/50 
                              rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 
                                  flex items-center justify-center shadow-lg">
                      <Ticket className="text-white" size={20} />
                    </div>
                    <h3 className="text-gray-800 font-heading text-2xl">Booking Steps</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {bookingSteps.map((step, index) => (
                      <div key={index} className="flex gap-4 group/step">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 
                                        flex items-center justify-center shadow-md">
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                          {index < bookingSteps.length - 1 && (
                            <div className="absolute left-1/2 top-10 w-0.5 h-12 bg-gradient-to-b from-amber-400 to-transparent" />
                          )}
                        </div>
                        <div className="flex-1 pt-1">
                          <h4 className="text-gray-800 font-semibold mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-gradient-to-br from-amber-900 to-yellow-900 
                              rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Info className="text-amber-400" size={20} />
                    </div>
                    <h3 className="text-white font-heading text-2xl">Important Information</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {importantInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl 
                                                  bg-white/5 hover:bg-white/10 transition-all duration-300">
                        <info.icon className={`w-5 h-5 text-${info.color}-400`} />
                        <span className="text-amber-200 text-sm">{info.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-amber-500/30">
                    <div className="flex items-center gap-2 text-amber-300 text-xs">
                      <Shield size={12} />
                      <span>Only book through official TTD website</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://tirupatibalaji.ap.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600
                           text-white font-heading font-bold tracking-wider uppercase text-sm rounded-full
                           hover:from-amber-500 hover:to-yellow-500 transition-all duration-300
                           shadow-lg shadow-amber-600/30 hover:shadow-2xl hover:scale-105"
              >
                <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                Book Official TTD Darshan
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="mt-4 text-gray-500 text-xs flex items-center justify-center gap-2">
                <Shield size={12} className="text-amber-500" />
                Official Government of Andhra Pradesh Portal
              </p>
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
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Booking;
