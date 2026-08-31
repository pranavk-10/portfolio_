import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = (e: React.MouseEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.1 },
      colors: ['#C83E3D', '#F4F0EA', '#FFFFFF']
    });
  };

  const navLinks = [
    { label: '01 COVER', href: '#cover' },
    { label: '02 PROFICIENCY', href: '#proficiency' },
    { label: '03 EXPERIENCE', href: '#experience' },
    { label: '04 PROJECTS', href: '#projects' },
    { label: '05 EDUCATION', href: '#education' },
    { label: '06 YOUTUBE', href: '#youtube' },
    { label: '07 HOBBIES', href: '#hobbies' },
    { label: '08 ACHIEVEMENTS', href: '#achievements' },
    { label: '09 CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-[#F4F0EA]/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#09090B]/95 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram / Name Logo with Interactive Confetti Trigger */}
        <a
          href="#cover"
          onClick={triggerConfetti}
          className="group flex items-center space-x-2 sm:space-x-3 font-display-editorial font-bold tracking-tighter text-sm sm:text-base md:text-lg text-[#F4F0EA]"
          data-cursor="CELEBRATE"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-none border border-[#F4F0EA]/40 flex items-center justify-center font-mono-editorial text-[10px] sm:text-xs group-hover:bg-[#C83E3D] group-hover:border-[#C83E3D] group-hover:text-white transition-all shadow-md">
            PK
          </span>
          <span className="inline sm:hidden uppercase tracking-widest text-[10px] font-mono-editorial text-[#F4F0EA]/80 group-hover:text-[#F4F0EA] transition-colors">
            {siteData.personalInfo.name.substring(0, 6)}
          </span>
          <span className="hidden sm:inline uppercase tracking-widest text-[10px] sm:text-xs font-mono-editorial text-[#F4F0EA]/80 group-hover:text-[#F4F0EA] transition-colors">
            {siteData.personalInfo.name}
          </span>
        </a>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-[11px] font-mono-editorial tracking-wider text-[#F4F0EA]/70">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#C83E3D] transition-colors relative py-1 group"
              data-cursor="GO"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C83E3D] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F4F0EA] hover:text-[#C83E3D] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
          data-cursor="MENU"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Editorial Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-[60px] bg-[#09090B]/98 backdrop-blur-xl border-t border-[#F4F0EA]/10 p-8 flex flex-col justify-between z-40"
          >
            <div className="space-y-6">
              <p className="font-mono-editorial text-xs text-[#C83E3D] tracking-widest uppercase border-b border-[#F4F0EA]/10 pb-2 font-bold">
                INDEX / TABLE OF CONTENTS
              </p>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display-editorial text-xl font-bold tracking-tight text-[#F4F0EA] hover:text-[#C83E3D] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono-editorial text-xs text-[#F4F0EA]/40">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-[#F4F0EA]/10 pt-6 flex items-center justify-between text-xs font-mono-editorial text-[#F4F0EA]/50">
              <span>VOL. 01 — 2026</span>
              <span>MUMBAI, INDIA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
