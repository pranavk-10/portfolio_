import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteData } from '../data/siteData';

const heroImages = [
  ...Array.from({ length: 12 }, (_, index) => `/images/pranav-hero-${index + 1}.jpg`)
];

export const MagazineHero: React.FC = () => {
  const { title, quote, metadata } = siteData.personalInfo;
  const [activeImage, setActiveImage] = useState('/images/pranav-hero-11.jpg');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const slideInterval = window.setInterval(() => {
      setActiveImage((currentImage) => {
        const currentIndex = heroImages.indexOf(currentImage);
        return heroImages[(currentIndex + 1) % heroImages.length];
      });
    }, 5000);

    return () => window.clearInterval(slideInterval);
  }, [isPaused]);

  return (
    <section id="cover" className="relative min-h-screen pt-20 pb-16 flex flex-col justify-between overflow-hidden bg-[#09090B] border-b border-[#F4F0EA]/15">
      {/* Background Grid & Vignette */}
      <div className="absolute inset-0 bg-magazine-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C83E3D]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Editorial Metadata Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 flex flex-wrap items-center justify-between border-b border-[#F4F0EA]/20 pb-4 text-xs font-mono-editorial text-[#F4F0EA]/70 tracking-widest gap-4">
        <div className="flex items-center space-x-6">
          <span className="text-[#C83E3D] font-bold">{metadata.volume}</span>
          <span className="text-[#F4F0EA]/90">{metadata.issueTag}</span>
          <span className="hidden md:inline text-[#F4F0EA]/50">ISSUE N° 01 / {metadata.year}</span>
        </div>

        <div className="flex items-center space-x-6">
          <span className="uppercase text-[#F4F0EA]/90 font-bold">{metadata.city}, INDIA</span>
          <div className="hidden sm:flex items-center space-x-1 font-mono-editorial text-[10px] text-[#F4F0EA]/40">
            <span>||| || ||| |||| |</span>
            <span className="ml-1">{metadata.barcode}</span>
          </div>
        </div>
      </div>

      {/* Main Full-Width Editorial Masthead Title */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 pt-8 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Stacked Masthead Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col space-y-1"
          >
            <h1 className="font-display-editorial font-extrabold text-7xl sm:text-9xl lg:text-[11rem] tracking-tighter leading-[0.82] text-[#F4F0EA] uppercase select-none">
              PRANAV
            </h1>
            <h1 className="font-serif-editorial italic font-normal text-6xl sm:text-8xl lg:text-[9.5rem] tracking-tight leading-[0.82] text-[#C83E3D] select-none pl-2 sm:pl-6">
              KAMBLE
            </h1>
          </motion.div>

          {/* Right Subtitle Tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 font-mono-editorial text-xs md:text-sm text-[#F4F0EA]/80 border-l-2 border-[#C83E3D] pl-4 py-2 space-y-2"
          >
            <span className="font-bold uppercase tracking-wider text-[#F4F0EA] text-sm block">
              {title}
            </span>
            <span className="text-[#F4F0EA]/60 text-xs block leading-relaxed">
              VJTI Electronics & Telecommunication Engineering • Texas Instruments Field Applications Engineering Intern
            </span>
          </motion.div>
        </div>
      </div>

      {/* FULL LANDSCAPE CINEMATIC EDITORIAL HERO IMAGE */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 my-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full aspect-[21/9] min-h-[340px] md:min-h-[520px] bg-[#121215] border border-[#F4F0EA]/20 overflow-hidden shadow-2xl group"
          data-cursor="PORTRAIT"
          onClick={() => setIsPaused((paused) => !paused)}
          role="button"
          tabIndex={0}
          aria-label={isPaused ? 'Resume photo reel' : 'Pause photo reel'}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setIsPaused((paused) => !paused);
            }
          }}
        >
          {/* Corner Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C83E3D] z-20 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C83E3D] z-20 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C83E3D] z-20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C83E3D] z-20 pointer-events-none" />

          {/* Authentic Full Landscape Photo */}
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={activeImage}
              src={activeImage}
              alt="Pranav Kamble — Personal Diary Photo Reel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover object-[center_38%] grayscale contrast-110"
            />
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/95 via-transparent to-[#09090B]/40" />

          {/* Overlaid Editorial Metadata Badges */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 font-mono-editorial text-xs z-20">
            <div className="bg-[#09090B]/90 backdrop-blur-md border border-[#F4F0EA]/20 px-4 py-2 text-[#F4F0EA]">
              <span className="text-[#C83E3D] font-bold">FIG 01.</span> FULL LANDSCAPE CANDID SPREAD // MUMBAI '26
            </div>

            <div className="bg-[#C83E3D] text-white px-4 py-2 font-bold uppercase tracking-widest shadow-lg">
              COVER FEATURE ARTICLE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote Banner & Editorial Callout Pills */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 flex flex-col md:flex-row items-stretch gap-6 pt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-[#121215] border border-[#F4F0EA]/15 p-6 relative group hover:border-[#C83E3D]/50 transition-colors shadow-md"
        >
          <span className="absolute -top-3 left-4 bg-[#09090B] px-2 font-mono-editorial text-[10px] text-[#C83E3D] uppercase tracking-widest font-bold">
            COVER QUOTE
          </span>
          <blockquote className="font-serif-editorial italic text-lg sm:text-2xl text-[#F4F0EA] leading-snug">
            {quote}
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3 font-mono-editorial text-xs text-[#F4F0EA]/80"
        >
          <span className="bg-[#121215] border border-[#F4F0EA]/20 px-4 py-3 uppercase font-bold text-[#F4F0EA] hover:border-[#C83E3D] transition-colors">
            ★ VJTI CGPA: 9.34
          </span>
          <span className="bg-[#121215] border border-[#F4F0EA]/20 px-4 py-3 uppercase font-bold text-[#F4F0EA] hover:border-[#C83E3D] transition-colors">
            ★ TI FAE INTERN
          </span>
          <span className="bg-[#121215] border border-[#F4F0EA]/20 px-4 py-3 uppercase font-bold text-[#F4F0EA] hover:border-[#C83E3D] transition-colors">
            ★ @PANNU_CORE
          </span>
        </motion.div>
      </div>
    </section>
  );
};
