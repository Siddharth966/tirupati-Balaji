import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('footer.quickLinks'),
      links: [
        { label: t('nav.home'), to: '/' },
        { label: t('nav.about'), to: '/about' },
        { label: t('footer.contact'), to: '/contact' },
        { label: t('nav.booking'), to: '/booking' }
      ]
    },
    {
      title: t('footer.pilgrimage'),
      links: [
        { label: t('nav.history'), to: '/history' },
        { label: t('nav.holyPlaces'), to: '/holy-places' },
        { label: t('nav.howToVisit'), to: '/how-to-visit' },
        { label: t('nav.wonders'), to: '/wonders' }
      ]
    },
    {
      title: t('footer.information'),
      links: [
        { label: t('nav.precautions'), to: '/precautions' },
        { label: t('nav.prasadam'), to: '/prasadam' },
        { label: t('nav.mundan'), to: '/mundan' },
        { label: t('nav.tripPlanning'), to: '/trip-planning' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://www.twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-amber-950/30 to-gray-900 border-t border-amber-500/20 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Section - Branding */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-amber-400 text-4xl sm:text-5xl devanagari mb-2 sm:mb-3 animate-float inline-block drop-shadow-lg">
            ॐ
          </div>
          <p className="font-display text-amber-100 text-xl sm:text-2xl text-glow mb-1 sm:mb-2">
            {t('nav.home')} | {t('footer.blessed')}
          </p>
          <p className="text-amber-200/60 text-xs sm:text-sm">{t('hero.tagline')}</p>
        </div>

        {/* Gold Divider */}
        <div className="gold-divider w-32 sm:w-48 mx-auto mb-8 sm:mb-12" />

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-amber-300 font-display text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2 justify-center sm:justify-start">
              <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
              {t('footer.aboutSite')}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 text-center sm:text-left">
              {t('footer.description')}
            </p>
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start">
                <MapPin size={14} className="text-amber-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <p className="text-gray-400">Tirupati, Andhra Pradesh, India</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start">
                <Phone size={14} className="text-amber-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <a href="tel:+919860716289" className="text-amber-300 hover:text-amber-100 transition">
                  +91 9860716289
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start">
                <Mail size={14} className="text-amber-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <a href="mailto:info@tirupatibalaji.com" className="text-amber-300 hover:text-amber-100 transition break-all">
                  info@tirupatibalaji.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <h3 className="text-amber-300 font-display text-base sm:text-lg mb-3 sm:mb-4">{section.title}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-xs sm:text-sm hover:translate-x-1 inline-block"
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-6 sm:mb-8" />

        {/* Bottom Section - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Social Links */}
          <div className="text-center">
            <p className="text-amber-300 font-display text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wide">
              {t('footer.followUs')}
            </p>
            <div className="flex justify-center gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 group"
                    title={social.name}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Important Info */}
          <div className="text-center">
            <p className="text-amber-300 font-display text-xs sm:text-sm mb-2 sm:mb-4 uppercase tracking-wide">
              {t('footer.officialWebsite')}
            </p>
            <a
              href="https://tirupatibalaji.ap.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-100 transition text-xs sm:text-sm break-all block mb-2 sm:mb-3"
            >
              tirupatibalaji.ap.gov.in
            </a>
            <p className="text-gray-500 text-xs">{t('footer.helpline')}</p>
            <p className="text-amber-400 text-xs sm:text-sm font-semibold">1800-425-1333</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-xs mb-2 sm:mb-3">
              {t('footer.copyright')}
            </p>
            <p className="text-amber-200/40 text-xs leading-relaxed">
              {t('footer.disclaimerText')}
            </p>
          </div>
        </div>

        {/* Final Divider and Message */}
        <div className="pt-6 sm:pt-8 border-t border-amber-500/20 text-center">
          <p className="text-amber-100/50 text-xs devanagari tracking-wider">
            ॐ नमो वेंकटेशाय नमः
          </p>
          <p className="text-gray-600 text-xs mt-2">
            {t('footer.blessings')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
