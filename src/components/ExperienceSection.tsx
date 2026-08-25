import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export const ExperienceSection: React.FC = () => {
  const exp = siteData.experience;

  return (
    <section id="experience" className="py-24 bg-[#09090B] border-b border-[#F4F0EA]/10 relative overflow-hidden">
      {/* Huge Background Typography Motif */}
      <div className="absolute -top-12 left-0 w-full overflow-hidden pointer-events-none select-none opacity-5">
        <span className="font-display-editorial font-black text-[14vw] tracking-tighter uppercase whitespace-nowrap text-[#F4F0EA]">
          TEXAS INSTRUMENTS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#F4F0EA]/20 pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#C83E3D] uppercase tracking-widest block mb-1">
              03 — INDUSTRY FEATURE & FIELD ENGINEERING
            </span>
            <h2 className="font-display-editorial font-extrabold text-4xl sm:text-6xl text-[#F4F0EA] tracking-tight uppercase">
              EXPERIENCE
            </h2>
          </div>
          <div className="font-mono-editorial text-xs text-[#F4F0EA]/50">
            BANGALORE, KARNATAKA // MAY 2026 – JUL 2026
          </div>
        </div>

        {/* Main Editorial Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Huge Headline & Authentic TI Photo Frame */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="bg-[#C83E3D] text-white px-3 py-1 font-mono-editorial text-xs font-bold uppercase tracking-widest inline-block mb-3">
                SOLE EXPERIENCE FEATURE
              </span>
              <h3 className="font-display-editorial font-extrabold text-3xl sm:text-5xl text-[#F4F0EA] leading-none uppercase">
                {exp.company}
              </h3>
              <p className="font-mono-editorial text-base text-[#F4F0EA]/80 font-bold uppercase mt-2">
                {exp.role}
              </p>
            </div>

            {/* Authentic TI Photo Frame (Pranav in front of Texas Instruments sign) */}
            <div className="relative border border-[#F4F0EA]/20 bg-[#121215] p-3 shadow-2xl group" data-cursor="TI LOGO">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#09090B]">
                <img
                  src="/images/pranav-ti.jpg"
                  alt="Pranav Kamble — Texas Instruments Headquarters Sign"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono-editorial text-[10px] text-[#F4F0EA] z-10">
                  <span className="bg-[#09090B]/90 px-2 py-1 uppercase tracking-widest border border-[#F4F0EA]/20">
                    TI HEADQUARTERS SIGN
                  </span>
                  <span className="bg-[#C83E3D] text-white px-2 py-1 uppercase font-bold tracking-widest">
                    BANGALORE
                  </span>
                </div>
              </div>
            </div>

            {/* 4.6 kW BESS Highlight Banner */}
            <div className="bg-[#121215] border-l-4 border-[#C83E3D] p-6 space-y-3 relative group">
              <span className="font-mono-editorial text-[10px] text-[#C83E3D] uppercase tracking-widest block">
                SYSTEM ARCHITECTURE SPOTLIGHT
              </span>
              <h4 className="font-display-editorial font-bold text-xl text-[#F4F0EA]">
                {exp.spotlight}
              </h4>
              <p className="font-sans-editorial text-xs text-[#F4F0EA]/70 leading-relaxed">
                A complete residential power architecture integrating high-efficiency transformerless inverter topologies, isolated gate drivers, and digital power controllers.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Engineering Contributions */}
          <div className="lg:col-span-7 space-y-6 bg-[#121215] border border-[#F4F0EA]/10 p-8">
            <div className="border-b border-[#F4F0EA]/10 pb-4 flex items-center justify-between font-mono-editorial text-xs text-[#F4F0EA]/50">
              <span>FIELD APPLICATIONS ENGINEERING DELIVERABLES</span>
              <span>CONFIDENTIAL // PUBLIC SUMMARY</span>
            </div>

            <div className="space-y-6">
              {exp.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start space-x-4 group"
                >
                  <span className="font-mono-editorial text-xs text-[#C83E3D] font-bold pt-1">
                    0{i + 1}.
                  </span>
                  <p className="font-sans-editorial text-sm md:text-base text-[#F4F0EA]/90 leading-relaxed group-hover:text-white transition-colors">
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technical Subsystems Grid Tags */}
            <div className="pt-6 border-t border-[#F4F0EA]/10 flex flex-wrap gap-2 font-mono-editorial text-[11px] text-[#F4F0EA]/60">
              <span className="bg-[#09090B] border border-[#F4F0EA]/20 px-3 py-1">Power Conversion</span>
              <span className="bg-[#09090B] border border-[#F4F0EA]/20 px-3 py-1">Battery Management (BMS)</span>
              <span className="bg-[#09090B] border border-[#F4F0EA]/20 px-3 py-1">Galvanic Isolation</span>
              <span className="bg-[#09090B] border border-[#F4F0EA]/20 px-3 py-1">C2000 Microcontrollers</span>
              <span className="bg-[#09090B] border border-[#F4F0EA]/20 px-3 py-1">TINA-TI Simulations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
