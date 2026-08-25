import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export const EducationTimeline: React.FC = () => {
  const { education, coursework } = siteData;

  return (
    <section id="education" className="py-24 bg-[#08080A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#FF3B30] uppercase tracking-widest block mb-1">
              05 — ACADEMIC FOUNDATION & DEGREES
            </span>
            <h2 className="font-display-editorial font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              EDUCATION
            </h2>
          </div>
          <div className="font-mono-editorial text-xs text-white/60 max-w-sm">
            VJTI Mumbai engineering journey spanning B.Tech degree, State Rank 9 Diploma, and secondary education.
          </div>
        </div>

        {/* Editorial Timeline Layout */}
        <div className="space-y-12 relative border-l-2 border-white/15 pl-6 md:pl-12 ml-3 md:ml-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-[#121217] border border-white/15 p-8 group hover:border-[#FF3B30] transition-colors"
              data-cursor="DEGREE"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] md:-left-[55px] top-8 w-4 h-4 bg-[#08080A] border-2 border-[#FF3B30] rounded-full group-hover:scale-125 transition-transform" />

              {/* Institution & Grade Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono-editorial text-xs border-b border-white/10 pb-4 mb-4">
                <span className="text-[#FF3B30] font-bold uppercase">{item.timeline}</span>
                <span className="bg-[#FF3B30] text-white font-bold px-3 py-0.5 tracking-wider">
                  {item.grade}
                </span>
              </div>

              {/* Degree Title & Institution */}
              <div className="space-y-2 mb-4">
                <h3 className="font-display-editorial font-bold text-2xl sm:text-3xl text-white group-hover:text-[#FF3B30] transition-colors">
                  {item.degree}
                </h3>
                <p className="font-mono-editorial text-sm text-white/80 font-bold uppercase">
                  {item.institution} — <span className="text-white/50">{item.location}</span>
                </p>
              </div>

              {/* Details */}
              <p className="font-sans-editorial text-xs sm:text-sm text-white/75 leading-relaxed">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Relevant Coursework Spread */}
        <div className="mt-16 bg-[#121217] border border-white/15 p-8 space-y-4">
          <span className="font-mono-editorial text-xs text-[#FF3B30] uppercase tracking-widest block font-bold">
            RELEVANT ENGINEERING COURSEWORK
          </span>
          <div className="flex flex-wrap gap-3 font-mono-editorial text-xs text-white">
            {coursework.map((course) => (
              <span key={course} className="bg-[#08080A] border border-white/20 px-4 py-2 hover:border-[#FF3B30] transition-colors">
                ★ {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
