import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export const ProficiencySection: React.FC = () => {
  const { proficiency } = siteData;

  return (
    <section id="proficiency" className="py-24 bg-[#F4F0EA] text-[#09090B] border-b border-[#09090B]/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#09090B]/20 pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#C83E3D] uppercase tracking-widest block mb-1 font-bold">
              02 — TECHNICAL & CREATIVE ASSESSMENT
            </span>
            <h2 className="font-display-editorial font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09090B] tracking-tight uppercase">
              PROFICIENCY
            </h2>
          </div>
          <div className="font-mono-editorial text-[11px] sm:text-xs text-[#09090B]/70 max-w-sm">
            Relative strength spectrum derived from academic engineering records, Verilog digital logic projects, and leadership roles.
          </div>
        </div>

        {/* 6 Editorial Proficiency Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proficiency.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#EAE6DF] border border-[#09090B]/15 p-6 relative hover:border-[#09090B]/40 transition-all duration-300 group shadow-sm"
              data-cursor="METRIC"
            >
              {/* Category Tag & Index */}
              <div className="flex items-center justify-between font-mono-editorial text-xs mb-3">
                <span className="text-[#C83E3D] uppercase tracking-wider font-bold">
                  [{item.category}]
                </span>
                <span className="text-[#09090B]/50">0{index + 1} // 06</span>
              </div>

              {/* Title & Display Value */}
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display-editorial font-bold text-xl text-[#09090B] group-hover:text-[#C83E3D] transition-colors">
                  {item.name}
                </h3>
                <span className="font-mono-editorial text-lg md:text-xl font-extrabold text-[#09090B] tracking-wider pl-4">
                  {item.displayValue}
                </span>
              </div>

              {/* Animated Editorial Progress Bar */}
              <div className="w-full bg-[#F4F0EA] h-2.5 mb-4 overflow-hidden border border-[#09090B]/15 p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.barPercent}%` }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#09090B]/60 to-[#C83E3D]"
                />
              </div>

              {/* Brief Description */}
              <p className="font-sans-editorial text-xs text-[#09090B]/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Evidence Footnote */}
        <div className="mt-8 pt-4 border-t border-[#09090B]/10 flex flex-wrap items-center justify-between text-[11px] font-mono-editorial text-[#09090B]/50 gap-4">
          <span>SOURCE: VJTI ACADEMIC TRANSCRIPTS & TEXAS INSTRUMENTS FIELD APPLICATIONS ENGINEERING INTERNSHIP</span>
          <span>DISCLAIMER: RELATIVE COMPETENCY EVALUATION</span>
        </div>
      </div>
    </section>
  );
};
