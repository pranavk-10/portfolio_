import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export const ExperienceSection: React.FC = () => {
  const exp = siteData.experience;

  const stats = [
    { value: '4.6 kW', label: 'BESS POWER RATING' },
    { value: '16S', label: 'LIFEPO4 CONFIG' },
    { value: '2 MO', label: 'INTERNSHIP DURATION' },
    { value: '6+', label: 'TI BUS ENGAGED' },
  ];

  const techSubsystems = [
    { label: 'Power Conversion', hot: true },
    { label: 'Battery Management (BMS)', hot: false },
    { label: 'Galvanic Isolation', hot: false },
    { label: 'C2000 Microcontrollers', hot: true },
    { label: 'TINA-TI Simulations', hot: false },
    { label: 'Bidirectional DC-DC', hot: false },
    { label: 'Heric Inverter Topology', hot: true },
    { label: 'Isolated Gate Drivers', hot: false },
  ];

  return (
    <section id="experience" className="py-24 bg-[#09090B] border-b border-[#F4F0EA]/10 relative overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute -top-12 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.035]">
        <span className="font-display-editorial font-black text-[8vw] sm:text-[10vw] md:text-[12vw] lg:text-[14vw] tracking-tighter uppercase text-[#F4F0EA] break-words">
          TEXAS INSTRUMENTS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#F4F0EA]/20 pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#C83E3D] uppercase tracking-widest block mb-1 font-bold">
              03 — INDUSTRY FEATURE & FIELD ENGINEERING
            </span>
            <h2 className="font-display-editorial font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F4F0EA] tracking-tight uppercase">
              EXPERIENCE
            </h2>
          </div>
          <div className="font-mono-editorial text-[11px] sm:text-xs text-[#F4F0EA]/50 text-right">
            <div className="font-bold text-[#F4F0EA]/80">BANGALORE, KARNATAKA</div>
            <div>MAY 2026 – JUL 2026</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Company Badge & Title */}
            <div>
              <span className="bg-[#C83E3D] text-white px-3 py-1 font-mono-editorial text-xs font-bold uppercase tracking-widest inline-block mb-3">
                SOLE EXPERIENCE FEATURE
              </span>
              <h3 className="font-display-editorial font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F4F0EA] leading-tight uppercase">
                {exp.company}
              </h3>
              <p className="font-mono-editorial text-sm text-[#F4F0EA]/70 font-bold uppercase mt-2 tracking-wide">
                {exp.role}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#121215] border border-[#F4F0EA]/15 p-4 hover:border-[#C83E3D]/60 transition-colors group">
                  <div className="font-display-editorial font-extrabold text-2xl text-[#C83E3D] group-hover:scale-105 transition-transform inline-block">{s.value}</div>
                  <div className="font-mono-editorial text-[10px] text-[#F4F0EA]/60 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Authentic TI Photo Frame */}
            <div className="relative border border-[#F4F0EA]/20 bg-[#121215] p-2 shadow-2xl group" data-cursor="TI LOGO">
              <div className="relative w-full overflow-hidden bg-[#09090B]">
                <img
                  src="/images/pranav-ti.jpg"
                  alt="Pranav Kamble — Texas Instruments Headquarters Sign"
                  className="w-full h-auto block grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent" />
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

            {/* BESS Spotlight Banner */}
            <div className="bg-[#121215] border-l-4 border-[#C83E3D] p-5 space-y-2 flex-1">
              <span className="font-mono-editorial text-[10px] text-[#C83E3D] uppercase tracking-widest block font-bold">
                SYSTEM ARCHITECTURE SPOTLIGHT
              </span>
              <h4 className="font-display-editorial font-bold text-lg text-[#F4F0EA] leading-snug">
                {exp.spotlight}
              </h4>
              <p className="font-sans-editorial text-xs text-[#F4F0EA]/70 leading-relaxed">
                High-efficiency residential power system integrating a 16S LiFePO4 pack, bidirectional DC-DC converter, and Heric inverter topology with C2000 digital control.
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Engineering Deliverables Card */}
            <div className="bg-[#121215] border border-[#F4F0EA]/10 p-8">
              <div className="border-b border-[#F4F0EA]/10 pb-4 mb-6 flex items-center justify-between font-mono-editorial text-xs text-[#F4F0EA]/50">
                <span className="font-bold text-[#F4F0EA]/80 uppercase">FAE DELIVERABLES</span>
                <span>CONFIDENTIAL // PUBLIC SUMMARY</span>
              </div>

              <div className="space-y-0">
                {exp.bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start space-x-4 group py-4 border-b border-[#F4F0EA]/8 last:border-0"
                  >
                    <span className="font-mono-editorial text-xs text-[#C83E3D] font-bold pt-0.5 shrink-0">
                      0{i + 1}.
                    </span>
                    <p className="font-sans-editorial text-sm text-[#F4F0EA]/85 leading-relaxed group-hover:text-white transition-colors">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pull Quote */}
            <div className="bg-[#C83E3D] p-8 relative overflow-hidden">
              <div className="absolute -top-4 -right-2 font-display-editorial font-black text-[7rem] text-white/10 leading-none select-none">"</div>
              <p className="font-serif-editorial italic text-white text-xl sm:text-2xl leading-snug relative z-10">
                "It's easy to feel hopeful on a beautiful day like today, but there will be dark days ahead of us too."
              </p>
              <span className="font-mono-editorial text-white/70 text-[10px] uppercase tracking-widest block mt-4">
                — GWEN STACY, THE AMAZING SPIDER-MAN 2 (2014)
              </span>
            </div>

            {/* Technical Subsystem Tags */}
            <div className="bg-[#121215] border border-[#F4F0EA]/10 p-6 space-y-4">
              <div className="font-mono-editorial text-[10px] text-[#C83E3D] uppercase tracking-widest font-bold">
                TECHNICAL SUBSYSTEMS ENGAGED
              </div>
              <div className="flex flex-wrap gap-2">
                {techSubsystems.map((tag) => (
                  <span
                    key={tag.label}
                    className={`border px-3 py-1.5 font-mono-editorial text-[11px] transition-colors cursor-default ${
                      tag.hot
                        ? 'border-[#C83E3D] text-[#F4F0EA] bg-[#C83E3D]/10'
                        : 'border-[#F4F0EA]/20 text-[#F4F0EA]/60 bg-[#09090B] hover:border-[#F4F0EA]/50 hover:text-[#F4F0EA]'
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Learnings */}
            <div className="bg-[#121215] border border-[#F4F0EA]/10 p-6 space-y-4">
              <div className="font-mono-editorial text-[10px] text-[#F4F0EA]/50 uppercase tracking-widest font-bold border-b border-[#F4F0EA]/10 pb-3">
                KEY LEARNINGS // FIELD ENGINEERING PERSPECTIVES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { num: '01', label: 'Power Topology', desc: 'Practical hands-on exposure to bidirectional DC-DC and inverter topologies for residential energy systems.' },
                  { num: '02', label: 'BMS & Safety', desc: 'Battery management system design, isolation requirements, and protection circuits for high-voltage packs.' },
                  { num: '03', label: 'Customer Eng.', desc: 'Direct collaboration with customer design teams to bridge application requirements and silicon solutions.' },
                ].map((item) => (
                  <div key={item.label} className="space-y-2 group">
                    <div className="font-mono-editorial text-2xl font-black text-[#F4F0EA]/10 select-none">{item.num}</div>
                    <div className="font-mono-editorial text-[10px] text-[#C83E3D] font-bold uppercase tracking-wide">{item.label}</div>
                    <p className="font-sans-editorial text-xs text-[#F4F0EA]/60 leading-relaxed group-hover:text-[#F4F0EA]/90 transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
