import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export const HobbyEditorial: React.FC = () => {
  const { hobbies } = siteData;

  return (
    <section id="hobbies" className="py-24 bg-[#F4F0EA] text-[#09090B] border-b border-[#09090B]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#09090B]/20 pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#C83E3D] uppercase tracking-widest block mb-1 font-bold">
              07 — PERSONALITY, CULTURE & CURATION
            </span>
            <h2 className="font-display-editorial font-extrabold text-4xl sm:text-6xl text-[#09090B] tracking-tight uppercase">
              HOBBIES & PERSPECTIVES
            </h2>
          </div>
          <div className="font-mono-editorial text-xs text-[#09090B]/70 max-w-sm">
            What powers the brain when the RTL logic synthesis finishes and the lab oscilloscopes turn off.
          </div>
        </div>

        {/* Editorial Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`bg-[#EAE6DF] border border-[#09090B]/15 p-8 flex flex-col justify-between hover:border-[#C83E3D] transition-all duration-300 group ${
                index === 0 || index === 8 ? 'md:col-span-2' : ''
              }`}
              data-cursor="VIBE"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono-editorial text-xs">
                  <span className="text-[#C83E3D] font-bold uppercase">
                    [{hobby.tag}]
                  </span>
                  <span className="text-[#09090B]/40">№ 0{index + 1}</span>
                </div>

                <h3 className="font-display-editorial font-bold text-2xl sm:text-3xl text-[#09090B] group-hover:text-[#C83E3D] transition-colors uppercase">
                  {hobby.title}
                </h3>

                <p className="font-sans-editorial text-xs sm:text-sm text-[#09090B]/80 leading-relaxed">
                  {hobby.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#09090B]/10 font-mono-editorial text-[10px] text-[#09090B]/50 uppercase tracking-widest flex items-center justify-between mt-6">
                <span>EDITORIAL PROFILE</span>
                <span>★ ESSENTIAL</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
