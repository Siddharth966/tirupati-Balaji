import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Contact = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', address: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', address: '', email: '', phone: '', subject: '', message: '' });
  };

  const inputClass = `w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-gray-800/20 
                       text-gray-700 placeholder-yellow-700/50 font-body text-sm
                       focus:outline-none focus:border-gray-800/60 focus:bg-stone-900 
                       transition-all duration-200`;

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Mail className="text-gray-800" size={18} />
                <span className="text-gray-800/70 text-xs tracking-widest uppercase font-body">Get in Touch</span>
                <Mail className="text-gray-800" size={18} />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-black mb-3">{t('contact.title')}</h2>
              <div className="gold-divider w-32 mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gray-200/10 border border-gray-800/20">
                    <MapPin className="text-gray-800" size={20} />
                  </div>
                  <div>
                    <div className="text-black font-heading text-sm mb-1">Location</div>
                    <div className="text-gray-700/60 text-sm font-body">{t('contact.location')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gray-200/10 border border-gray-800/20">
                    <Mail className="text-gray-800" size={20} />
                  </div>
                  <div>
                    <div className="text-black font-heading text-sm mb-1">Email</div>
                    <div className="text-gray-700/60 text-sm font-body">palwerm@mmpolytechnic.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gray-200/10 border border-gray-800/20">
                    <Phone className="text-gray-800" size={20} />
                  </div>
                  <div>
                    <div className="text-black font-heading text-sm mb-1">Phone</div>
                    <div className="text-gray-700/60 text-sm font-body">9860716289</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <CheckCircle className="text-black mb-4" size={48} />
                    <p className="font-heading text-black text-xl">{t('contact.success')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-800/70 text-xs tracking-wider uppercase font-body mb-1">{t('contact.name')} *</label>
                        <input required type="text" className={inputClass} placeholder={t('contact.namePlaceholder')}
                               value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-gray-800/70 text-xs tracking-wider uppercase font-body mb-1">{t('contact.email')} *</label>
                        <input required type="email" className={inputClass} placeholder={t('contact.emailPlaceholder')}
                               value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-800/70 text-xs tracking-wider uppercase font-body mb-1">{t('contact.phone')}</label>
                        <input type="tel" className={inputClass} placeholder={t('contact.phonePlaceholder')}
                               value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-gray-800/70 text-xs tracking-wider uppercase font-body mb-1">{t('contact.subject')}</label>
                        <input type="text" className={inputClass} placeholder={t('contact.subjectPlaceholder')}
                               value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-800/70 text-xs tracking-wider uppercase font-body mb-1">{t('contact.address')}</label>
                      <input type="text" className={inputClass} placeholder={t('contact.addressPlaceholder')}
                             value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-gray-800/70 text-xs tracking-wider uppercase font-body mb-1">{t('contact.message')}</label>
                      <textarea rows={4} className={inputClass} placeholder={t('contact.messagePlaceholder')}
                                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                    </div>
                    <button type="submit"
                      className="w-full py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-stone-900
                                 font-heading font-bold tracking-wider uppercase text-sm rounded-xl
                                 hover:from-yellow-500 hover:to-orange-500 transition-all duration-300
                                 flex items-center justify-center gap-3 hover:scale-[1.02] shadow-lg shadow-yellow-600/20">
                      <Send size={18} />
                      {t('contact.submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
