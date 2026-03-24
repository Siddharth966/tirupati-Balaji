import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी' },
];

const NAV_ITEMS = [
  { key: 'home', to: '/' },
  { key: 'history', to: '/history' },
  { key: 'wonders', to: '/wonders' },
  { key: 'holyPlaces', to: '/holy-places' },
  { key: 'howToVisit', to: '/how-to-visit' },
  { key: 'mundan', to: '/mundan' },
  { key: 'tripPlanning', to: '/trip-planning' },
  { key: 'precautions', to: '/precautions' },
  { key: 'prasadam', to: '/prasadam' },
  { key: 'booking', to: '/booking' },
  { key: 'about', to: '/about' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const navLinkClass = ({ isActive }) =>
    `px-2 sm:px-3 py-2 text-[10px] sm:text-xs font-body tracking-wide transition-all duration-200 rounded relative group
     ${isActive ? 'text-amber-300 bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-gray-900 via-amber-950 to-gray-900 shadow-2xl shadow-black/50 border-b border-amber-500/30' 
        : 'bg-gradient-to-r from-gray-900/95 via-amber-950/95 to-gray-900/95 backdrop-blur-sm border-b border-amber-500/20'
    }`}>
      <div className="h-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 
                            flex items-center justify-center shadow-lg shadow-amber-500/30
                            group-hover:shadow-amber-500/50 transition-all duration-300">
              <span className="text-gray-900 text-lg font-bold" style={{ fontFamily: 'serif' }}>ॐ</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase 
                              bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Tirupati Balaji
              </div>
              <div className="text-amber-200/70 text-[9px] sm:text-xs tracking-wider">Tirumala · Andhra Pradesh</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <NavLink key={item.key} to={item.to} className={navLinkClass}>
                {t(`nav.${item.key}`)}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 
                                 group-hover:w-3/4 transition-all duration-300" />
              </NavLink>
            ))}

            {/* More Dropdown */}
            <div className="relative group/more">
              <button className="px-3 py-2 text-white/80 hover:text-white text-xs font-body tracking-wide
                                 flex items-center gap-1 transition-all duration-200 hover:bg-white/10 rounded">
                {t('nav.more') || 'More'}
                <ChevronDown size={12} className="text-amber-400" />
              </button>
              <div className="absolute right-0 mt-1 w-48 bg-gradient-to-b from-gray-900 to-amber-950 
                              border border-amber-500/30 rounded-xl shadow-2xl shadow-black/50 
                              opacity-0 invisible group-hover/more:opacity-100 group-hover/more:visible
                              transition-all duration-300 z-50 overflow-hidden">
                {NAV_ITEMS.slice(6).map((item) => (
                  <NavLink
                    key={item.key}
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-xs font-body transition-all border-b border-amber-500/20 last:border-0
                       ${isActive ? 'text-amber-300 bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`
                    }
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 border border-amber-500/40 rounded-full
                           text-white/80 hover:text-white hover:border-amber-400 hover:bg-white/10 
                           transition-all text-[10px] sm:text-sm"
              >
                <Globe size={14} className="sm:w-4 sm:h-4 text-amber-400" />
                <span className="hidden sm:block font-body text-xs text-white/80">{currentLang.native}</span>
                <ChevronDown size={12} className={`transition-transform text-amber-400 sm:w-3 sm:h-3 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-gradient-to-b from-gray-900 to-amber-950 
                                border border-amber-500/30 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all
                                  ${i18n.language === lang.code 
                                    ? 'text-amber-300 bg-white/10' 
                                    : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                    >
                      <span className="font-body">{lang.label}</span>
                      <span className="text-amber-400/60 devanagari text-xs">{lang.native}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden transition-all duration-200 overflow-hidden ${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gradient-to-b from-gray-900 to-amber-950 border-t border-amber-500/30 px-3 sm:px-4 py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs font-body tracking-wider uppercase rounded-xl border transition-all text-center
                   ${isActive 
                     ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-500 text-amber-300' 
                     : 'bg-gray-800/30 border-amber-500/20 text-white/60 hover:text-white hover:bg-white/10'}`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {langOpen && <div className="fixed inset-0 z-[-1]" onClick={() => setLangOpen(false)} />}
    </nav>
  );
}
